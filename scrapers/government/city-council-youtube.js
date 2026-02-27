/**
 * city-council-youtube.js
 * Uses yt-dlp to fetch auto-generated captions from the Fairfield City Council
 * YouTube playlist, then chunks and embeds into Pinecone.
 *
 * Requires: ~/yt-dlp (installed standalone binary)
 */

require('dotenv').config({ path: '.env.local' });
const fs        = require('fs');
const path      = require('path');
const { execSync, spawnSync } = require('child_process');
const https     = require('https');
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI    = require('openai');

const oai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pc    = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

const YTDLP         = path.join(process.env.HOME, 'yt-dlp');
const PLAYLIST_ID   = 'PLA4A63648EFCC4134';
const ORG_ID        = 'fc-council';
const TMP_DIR       = '/tmp/fc-council-vtt';
const FIVE_YEARS_AGO = new Date();
FIVE_YEARS_AGO.setFullYear(FIVE_YEARS_AGO.getFullYear() - 5);

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Get video list from playlist via yt-dlp ───────────────────────────────────
function getPlaylistVideos() {
  console.log('   Fetching playlist metadata via yt-dlp...');
  const result = spawnSync(YTDLP, [
    '--flat-playlist',
    '--print', '%(id)s\t%(title)s\t%(upload_date)s',
    `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`
  ], { encoding: 'utf8', timeout: 60000 });

  if (result.error) throw result.error;

  const videos = [];
  for (const line of (result.stdout || '').split('\n')) {
    const parts = line.trim().split('\t');
    if (parts.length < 2) continue;
    const [videoId, title, uploadDate] = parts;
    if (!videoId || videoId.length !== 11) continue;

    // uploadDate format: YYYYMMDD
    let publishedAt = null;
    if (uploadDate && uploadDate.length === 8) {
      publishedAt = `${uploadDate.slice(0,4)}-${uploadDate.slice(4,6)}-${uploadDate.slice(6,8)}`;
    }

    videos.push({ videoId, title, publishedAt });
  }
  return videos;
}

// ── Download VTT subtitle file for a video ────────────────────────────────────
function downloadVtt(videoId) {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const outPattern = path.join(TMP_DIR, `%(id)s`);

  const result = spawnSync(YTDLP, [
    '--write-auto-sub',
    '--skip-download',
    '--sub-lang', 'en',
    '--sub-format', 'vtt',
    '--no-warnings',
    '-o', outPattern,
    `https://www.youtube.com/watch?v=${videoId}`
  ], { encoding: 'utf8', timeout: 30000 });

  // Find the downloaded file
  const vttFile = path.join(TMP_DIR, `${videoId}.en.vtt`);
  if (fs.existsSync(vttFile)) return vttFile;

  // yt-dlp sometimes adds extra extensions
  const files = fs.readdirSync(TMP_DIR).filter(f => f.startsWith(videoId) && f.endsWith('.vtt'));
  return files.length ? path.join(TMP_DIR, files[0]) : null;
}

// ── Parse VTT → plain text ─────────────────────────────────────────────────────
function parseVtt(vttPath) {
  const raw = fs.readFileSync(vttPath, 'utf8');
  const lines = raw.split('\n');
  const seen = new Set();
  const textLines = [];

  for (const line of lines) {
    const trimmed = line.trim();
    // Skip: empty, WEBVTT header, Kind/Language lines, timestamp lines, lines with <c> inline tags
    if (!trimmed) continue;
    if (trimmed.startsWith('WEBVTT') || trimmed.startsWith('Kind:') || trimmed.startsWith('Language:')) continue;
    if (/^\d{2}:\d{2}:\d{2}/.test(trimmed)) continue;  // timestamp
    if (/<\d{2}:\d{2}/.test(trimmed)) continue;          // has inline <c> timing tags
    if (trimmed === ' ' || trimmed === '\u200b') continue;

    // Clean HTML entities and tags
    const clean = trimmed
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
      .replace(/&amp;/g, '&')
      .replace(/<[^>]+>/g, '')
      .trim();

    if (!clean || clean.length < 2) continue;
    if (seen.has(clean)) continue;  // deduplicate rolling captions
    seen.add(clean);
    textLines.push(clean);
  }

  return textLines.join(' ').replace(/\s+/g, ' ').trim();
}

// ── Chunk text ────────────────────────────────────────────────────────────────
function chunkText(text, maxWords = 400) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const chunks = [];
  let current = [], wordCount = 0;
  const flush = () => {
    if (current.length) {
      const chunk = current.join(' ').trim();
      if (chunk.length > 80) chunks.push(chunk);
      current = []; wordCount = 0;
    }
  };
  for (const sent of sentences) {
    const words = sent.split(/\s+/).length;
    if (wordCount + words > maxWords) flush();
    current.push(sent.trim());
    wordCount += words;
  }
  flush();
  return chunks;
}

// ── Embed ─────────────────────────────────────────────────────────────────────
async function embed(text, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await oai.embeddings.create({ model: 'text-embedding-3-small', input: text.slice(0, 8000) });
      return res.data[0].embedding;
    } catch(e) {
      if (i < retries - 1) await sleep(2000 * (i + 1));
      else throw e;
    }
  }
}

// ── Upsert ────────────────────────────────────────────────────────────────────
async function upsertBatch(vectors) {
  for (let i = 0; i < vectors.length; i += 100) {
    await index.upsert(vectors.slice(i, i + 100));
    await sleep(300);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n' + '═'.repeat(60));
  console.log('🎬  Fairfield City Council — YouTube Transcripts');
  console.log(`    Cutoff: ${FIVE_YEARS_AGO.toISOString().slice(0,10)} → present`);
  console.log('─'.repeat(60) + '\n');

  const allVideos = getPlaylistVideos();
  console.log(`   Found ${allVideos.length} total videos in playlist`);

  // Filter to last 5 years
  const videos = allVideos.filter(v => {
    if (!v.publishedAt) return true; // include if date unknown
    return new Date(v.publishedAt) >= FIVE_YEARS_AGO;
  });
  console.log(`   ${videos.length} videos within last 5 years\n`);

  let totalChunks = 0, skipped = 0, errors = 0, processed = 0;

  for (let v = 0; v < videos.length; v++) {
    const { videoId, title, publishedAt } = videos[v];
    console.log(`[${v+1}/${videos.length}] ${publishedAt || 'unknown'} — ${title.slice(0, 55)}`);

    // Download VTT
    let vttFile;
    try {
      vttFile = downloadVtt(videoId);
    } catch(e) {
      console.log(`    ✗ yt-dlp error: ${e.message}`);
      errors++;
      await sleep(3000);
      continue;
    }

    if (!vttFile) {
      console.log('    ✗ No captions available');
      skipped++;
      await sleep(2000);
      continue;
    }

    // Parse VTT
    const transcript = parseVtt(vttFile);
    fs.unlinkSync(vttFile); // clean up

    if (transcript.length < 200) {
      console.log(`    ✗ Too short (${transcript.length} chars), skipping`);
      skipped++;
      await sleep(2000);
      continue;
    }

    const header = `Fairfield City Council Meeting — ${publishedAt || 'date unknown'}\nTitle: ${title}\n\n`;
    const chunks = chunkText(header + transcript);
    console.log(`    ✓ ${transcript.length} chars → ${chunks.length} chunks`);

    const vectors = [];
    for (let i = 0; i < chunks.length; i++) {
      try {
        const embedding = await embed(chunks[i]);
        vectors.push({
          id: `${ORG_ID}-${videoId}-${i}`,
          values: embedding,
          metadata: {
            text:        chunks[i].slice(0, 1000),
            source:      `https://www.youtube.com/watch?v=${videoId}`,
            org:         'Fairfield City Council',
            category:    'government',
            type:        'council_meeting',
            title,
            publishedAt: publishedAt || '',
            file:        `City Council Meeting — ${publishedAt} — ${title}`
          }
        });
        await sleep(80);
      } catch(e) {
        console.error(`    ❌ Embed error chunk ${i}: ${e.message}`);
        errors++;
      }
    }

    await upsertBatch(vectors);
    totalChunks += vectors.length;
    processed++;

    // Polite delay
    const delay = processed % 10 === 0 ? 8000 : 3000;
    if (v < videos.length - 1) {
      if (delay > 5000) console.log('    ⏸  Pausing 8s...');
      await sleep(delay);
    }
  }

  console.log('\n' + '─'.repeat(60));
  console.log('✅  City Council YouTube complete');
  console.log(`   Processed: ${processed} | No captions: ${skipped} | Errors: ${errors} | Chunks: ${totalChunks}`);
  console.log('═'.repeat(60) + '\n');
}

main().catch(console.error);
