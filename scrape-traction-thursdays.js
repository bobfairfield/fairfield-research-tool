/**
 * scrape-traction-thursdays.js
 * Finds all "Traction Thursday" videos on the Fairfield Media Center
 * YouTube channels, downloads transcripts, and uploads to Pinecone.
 *
 * Source key: traction-thursdays
 * Folder: ~/fairfield-research-tool/traction-thursdays/ (for reference only)
 *
 * Run from: ~/fairfield-research-tool/
 * Usage: node scrape-traction-thursdays.js
 *        node scrape-traction-thursdays.js --test   (first 3 only)
 */

require('dotenv').config({ path: '.env.local' });

const fs        = require('fs');
const path      = require('path');
const { spawnSync, execSync } = require('child_process');
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI    = require('openai');

const oai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pc    = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

const YTDLP   = path.join(process.env.HOME, 'yt-dlp');
const TMP_DIR = '/tmp/traction-thursdays-vtt';
const ORG_ID  = 'traction-thursdays';
const SOURCE_BASE = 'https://www.fairfieldmediacenter.com/copy-of-carnegie-museum-1';
const TEST_MODE = process.argv.includes('--test');

// Both FMC YouTube channels
const FMC_CHANNELS = [
  'https://www.youtube.com/channel/UCM2Yfzag4ItKlasmR7hxZWQ',
  'https://www.youtube.com/channel/UCib5irw5bfb66Hhxts1iRoA',
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── Search a YouTube channel for Traction Thursday videos ─────────────────
function getChannelVideos(channelUrl) {
  console.log(`  Scanning: ${channelUrl}`);
  const result = spawnSync(YTDLP, [
    '--flat-playlist',
    '--print', '%(id)s\t%(title)s\t%(upload_date)s',
    channelUrl
  ], { encoding: 'utf8', timeout: 120000 });

  if (result.error) {
    console.log(`  Warning: ${result.error.message}`);
    return [];
  }

  const videos = [];
  for (const line of (result.stdout || '').split('\n')) {
    const parts = line.trim().split('\t');
    if (parts.length < 2) continue;
    const [videoId, title, uploadDate] = parts;
    if (!videoId || videoId.length !== 11) continue;

    // Only keep Traction Thursday videos
    if (!title.toLowerCase().includes('traction')) continue;

    let publishedAt = null;
    if (uploadDate && uploadDate.length === 8) {
      publishedAt = `${uploadDate.slice(0,4)}-${uploadDate.slice(4,6)}-${uploadDate.slice(6,8)}`;
    }
    videos.push({ videoId, title, publishedAt });
  }
  return videos;
}

// ── Download VTT ──────────────────────────────────────────────────────────
function downloadVtt(videoId) {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const outPattern = path.join(TMP_DIR, '%(id)s');

  spawnSync(YTDLP, [
    '--write-auto-sub',
    '--skip-download',
    '--sub-lang', 'en',
    '--sub-format', 'vtt',
    '--no-warnings',
    '-o', outPattern,
    `https://www.youtube.com/watch?v=${videoId}`
  ], { encoding: 'utf8', timeout: 30000 });

  const vttFile = path.join(TMP_DIR, `${videoId}.en.vtt`);
  if (fs.existsSync(vttFile)) return vttFile;

  const files = fs.readdirSync(TMP_DIR).filter(f => f.startsWith(videoId) && f.endsWith('.vtt'));
  return files.length ? path.join(TMP_DIR, files[0]) : null;
}

// ── Parse VTT → plain text ─────────────────────────────────────────────────
function parseVtt(vttPath) {
  const raw   = fs.readFileSync(vttPath, 'utf8');
  const lines = raw.split('\n');
  const seen  = new Set();
  const textLines = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith('WEBVTT') || trimmed.startsWith('Kind:') || trimmed.startsWith('Language:')) continue;
    if (/^\d{2}:\d{2}:\d{2}/.test(trimmed)) continue;
    if (/<\d{2}:\d{2}/.test(trimmed)) continue;

    const clean = trimmed
      .replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&')
      .replace(/<[^>]+>/g, '').trim();

    if (!clean || clean.length < 2 || seen.has(clean)) continue;
    seen.add(clean);
    textLines.push(clean);
  }
  return textLines.join(' ').replace(/\s+/g, ' ').trim();
}

// ── Chunk text ─────────────────────────────────────────────────────────────
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

// ── Embed ──────────────────────────────────────────────────────────────────
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

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n=== Traction Thursdays — YouTube Transcript Scraper ===\n');

  // Ensure traction-thursdays folder exists
  const folder = path.join(__dirname, 'traction-thursdays');
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`✓ Created folder: traction-thursdays/\n`);
  }

  // Find all Traction Thursday videos across both channels
  console.log('Searching FMC YouTube channels for Traction Thursday videos...');
  const allVideos = [];
  const seenIds = new Set();

  for (const channelUrl of FMC_CHANNELS) {
    const videos = getChannelVideos(channelUrl);
    for (const v of videos) {
      if (!seenIds.has(v.videoId)) {
        seenIds.add(v.videoId);
        allVideos.push(v);
      }
    }
  }

  // Sort by date
  allVideos.sort((a, b) => (a.publishedAt || '').localeCompare(b.publishedAt || ''));

  console.log(`\nFound ${allVideos.length} Traction Thursday videos\n`);

  if (allVideos.length === 0) {
    console.log('No videos found. The channels may have changed. Check channel IDs.');
    process.exit(1);
  }

  const toProcess = TEST_MODE ? allVideos.slice(0, 3) : allVideos;
  if (TEST_MODE) console.log(`TEST MODE — processing first 3 of ${allVideos.length}\n`);

  let totalChunks = 0, processed = 0, skipped = 0, errors = 0;

  for (let i = 0; i < toProcess.length; i++) {
    const { videoId, title, publishedAt } = toProcess[i];
    console.log(`[${i+1}/${toProcess.length}] ${publishedAt || 'unknown'} — ${title.slice(0, 60)}`);

    let vttFile;
    try {
      vttFile = downloadVtt(videoId);
    } catch(e) {
      console.log(`  ✗ yt-dlp error: ${e.message}`);
      errors++;
      await sleep(3000);
      continue;
    }

    if (!vttFile) {
      console.log('  ✗ No captions available');
      skipped++;
      await sleep(2000);
      continue;
    }

    const transcript = parseVtt(vttFile);
    fs.unlinkSync(vttFile);

    if (transcript.length < 100) {
      console.log(`  ✗ Too short (${transcript.length} chars)`);
      skipped++;
      await sleep(2000);
      continue;
    }

    const header = `Traction Thursday — Fairfield, Iowa — ${publishedAt || 'date unknown'}\nTitle: ${title}\n\n`;
    const chunks = chunkText(header + transcript);
    console.log(`  ✓ ${transcript.length} chars → ${chunks.length} chunks`);

    const vectors = [];
    for (let j = 0; j < chunks.length; j++) {
      try {
        const embedding = await embed(chunks[j]);
        vectors.push({
          id: `${ORG_ID}-${videoId}-${j}`,
          values: embedding,
          metadata: {
            text:        chunks[j].slice(0, 1000),
            source:      `https://www.youtube.com/watch?v=${videoId}`,
            orgId:       ORG_ID,
            org:         'Traction Thursdays — Fairfield CoLab',
            category:    'economic',
            type:        'traction_thursday',
            title,
            publishedAt: publishedAt || '',
            file:        `Traction Thursday — ${publishedAt || 'unknown'} — ${title}`
          }
        });
        await sleep(80);
      } catch(e) {
        console.error(`  ✗ Embed error chunk ${j}: ${e.message}`);
        errors++;
      }
    }

    for (let k = 0; k < vectors.length; k += 100) {
      await index.upsert(vectors.slice(k, k + 100));
    }

    totalChunks += vectors.length;
    processed++;
    console.log(`  ✓ Uploaded ${vectors.length} vectors`);

    if (i < toProcess.length - 1) {
      const delay = processed % 10 === 0 ? 8000 : 3000;
      if (delay > 5000) console.log('  ⏸  Pausing 8s...');
      await sleep(delay);
    }
  }

  console.log(`\n=== Done ===`);
  console.log(`  Processed : ${processed}`);
  console.log(`  No caps   : ${skipped}`);
  console.log(`  Errors    : ${errors}`);
  console.log(`  Chunks    : ${totalChunks}`);

  if (TEST_MODE) {
    console.log('\nTest complete. Remove --test to process all videos.');
    return;
  }

  if (processed > 0) {
    console.log('\nRunning deploy...\n');
    execSync(`node deploy.js "Add Traction Thursdays transcripts (${processed} videos)"`, {
      stdio: 'inherit', cwd: __dirname
    });
  }
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
