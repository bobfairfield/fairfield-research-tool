/**
 * add-council-meetings.js
 * Adds specific city council meeting videos to Pinecone by YouTube video ID.
 * Reuses the same VTT download + embed pipeline as city-council-youtube.js.
 *
 * Usage: node add-council-meetings.js
 * To add more meetings in future: add video IDs to the VIDEOS array below.
 *
 * Run from: ~/fairfield-research-tool/
 */

require('dotenv').config({ path: '.env.local' });

const fs      = require('fs');
const path    = require('path');
const { spawnSync } = require('child_process');
const { execSync }  = require('child_process');
const { Pinecone }  = require('@pinecone-database/pinecone');
const OpenAI        = require('openai');

const oai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pc    = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

const YTDLP   = path.join(process.env.HOME, 'yt-dlp');
const TMP_DIR = '/tmp/fc-council-vtt';
const ORG_ID  = 'fc-council';

// ── ADD NEW MEETINGS HERE ─────────────────────────────────────────────────────
// Format: { videoId, title, publishedAt }
// videoId: the 11-char ID from the Wix URL param wix-vod-video-id=XXXXXXXXXXX
// title: descriptive name for the meeting
// publishedAt: YYYY-MM-DD format
const VIDEOS = [
  { videoId: 'EVvKRKPGB1k', title: 'Fairfield City Council Meeting', publishedAt: '2026-02-23' },
  { videoId: 'Eusdl4nerzQ', title: 'Fairfield City Council Meeting', publishedAt: '2026-03-09' },
  { videoId: 'OLjRxJKfbJY', title: 'Fairfield City Council Wrap-Up', publishedAt: '2026-01-28' },
  { videoId: '3SRubyrkcts', title: 'Fairfield City Council Wrap-Up', publishedAt: '2026-03-11' },
  { videoId: 'KYhEgCEkBTo', title: 'Fairfield City Council Wrap-Up', publishedAt: '2026-03-25' },
];
// ─────────────────────────────────────────────────────────────────────────────

const sleep = ms => new Promise(r => setTimeout(r, ms));

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

async function main() {
  console.log('\n=== Fairfield City Council — Add New Meetings ===\n');
  console.log(`Processing ${VIDEOS.length} videos...\n`);

  let totalChunks = 0, processed = 0, skipped = 0, errors = 0;

  for (let i = 0; i < VIDEOS.length; i++) {
    const { videoId, title, publishedAt } = VIDEOS[i];
    console.log(`[${i+1}/${VIDEOS.length}] ${publishedAt} — ${title}`);
    console.log(`         https://www.youtube.com/watch?v=${videoId}`);

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

    if (transcript.length < 200) {
      console.log(`  ✗ Too short (${transcript.length} chars)`);
      skipped++;
      await sleep(2000);
      continue;
    }

    const header = `Fairfield City Council Meeting — ${publishedAt}\nTitle: ${title}\n\n`;
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
            org:         'Fairfield City Council',
            category:    'government',
            type:        'council_meeting',
            title,
            publishedAt,
            file:        `City Council Meeting — ${publishedAt} — ${title}`
          }
        });
        await sleep(80);
      } catch(e) {
        console.error(`  ✗ Embed error chunk ${j}: ${e.message}`);
        errors++;
      }
    }

    // Upsert in batches of 100
    for (let k = 0; k < vectors.length; k += 100) {
      await index.upsert(vectors.slice(k, k + 100));
    }

    totalChunks += vectors.length;
    processed++;
    console.log(`  ✓ Uploaded ${vectors.length} vectors`);

    if (i < VIDEOS.length - 1) await sleep(3000);
  }

  console.log(`\n=== Done ===`);
  console.log(`  Processed : ${processed}`);
  console.log(`  No caps   : ${skipped}`);
  console.log(`  Errors    : ${errors}`);
  console.log(`  Chunks    : ${totalChunks}`);

  if (errors > 0 || skipped > 0) {
    console.log('\n⚠ Some videos had issues — check output above.');
  }

  if (processed > 0) {
    console.log('\nRunning deploy...\n');
    execSync('node deploy.js "Add city council meetings Feb-Mar 2026"', {
      stdio: 'inherit', cwd: __dirname
    });
  }
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
