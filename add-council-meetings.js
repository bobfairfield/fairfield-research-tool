/**
 * add-council-meetings.js
 * Adds specific city council meeting videos to Pinecone by YouTube video ID.
 * Reuses the same VTT-download + chunk + embed pipeline as city-council-youtube.js.
 *
 * Vector IDs are deterministic: `fc-council-{videoId}-{chunkIndex}`.
 * Re-running a video that's already indexed simply OVERWRITES in place —
 * no duplicates, safe to re-run.
 *
 * Usage:   node add-council-meetings.js
 * Run from: ~/fairfield-research-tool/
 *
 * To add future meetings: add one line to the VIDEOS array below.
 *   videoId     = the 11-char ID from the YouTube URL (?v=XXXXXXXXXXX)
 *   title       = descriptive name for the meeting
 *   publishedAt = YYYY-MM-DD
 */

require('dotenv').config({ path: '.env.local' });

const fs   = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { Pinecone }  = require('@pinecone-database/pinecone');
const OpenAI        = require('openai');

const oai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pc    = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

const YTDLP   = path.join(process.env.HOME, 'yt-dlp');
const TMP_DIR = '/tmp/fc-council-vtt';
const ORG_ID  = 'fc-council';

// -- ADD NEW MEETINGS HERE -----------------------------------------------------
const VIDEOS = [
  { videoId: 'vpwTLfdkNEs', title: 'Fairfield City Council Meeting',                              publishedAt: '2026-04-13' },
  { videoId: 'nIz0bQjP8Ag', title: 'Fairfield City Budget Session',                              publishedAt: '2026-04-23' },
  { videoId: 'gGBh8GRbw20', title: 'Fairfield Study Session & City Council Meeting',             publishedAt: '2026-04-27' },
  { videoId: 'wSdr6eEj_cY', title: 'Fairfield Study Session & City Council Meeting',             publishedAt: '2026-05-11' },
  { videoId: '82MsDUTSThU', title: 'City Council & County Supervisors -- Data Center Discussion', publishedAt: '2026-05-18' },
  { videoId: 'IzZld7Cjj1Q', title: 'Fairfield Study Session & City Council 5.26.26',              publishedAt: '2026-05-26' },
];
// ------------------------------------------------------------------------------

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
  ], { encoding: 'utf8', timeout: 60000 });

  const exact = path.join(TMP_DIR, `${videoId}.en.vtt`);
  if (fs.existsSync(exact)) return exact;

  const files = fs.readdirSync(TMP_DIR).filter(f => f.startsWith(videoId) && f.endsWith('.vtt'));
  return files.length ? path.join(TMP_DIR, files[0]) : null;
}

function parseVtt(vttFile) {
  const raw = fs.readFileSync(vttFile, 'utf8');
  const lines = raw.split('\n');
  const seen = new Set();
  const out = [];
  for (let line of lines) {
    if (line.includes('-->') || line.startsWith('WEBVTT') ||
        line.startsWith('Kind:') || line.startsWith('Language:') || line.trim() === '') {
      continue;
    }
    const clean = line.replace(/<[^>]+>/g, '').trim();
    if (clean && !seen.has(clean)) {
      seen.add(clean);
      out.push(clean);
    }
  }
  return out.join(' ');
}

function chunkText(text, size = 1200, overlap = 150) {
  const chunks = [];
  for (let i = 0; i < text.length; i += (size - overlap)) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
}

async function embed(text) {
  const resp = await oai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return resp.data[0].embedding;
}

(async function main() {
  console.log(`\nProcessing ${VIDEOS.length} council meeting video(s)...\n`);
  let processed = 0, skipped = 0, errors = 0, totalChunks = 0;

  for (let i = 0; i < VIDEOS.length; i++) {
    const { videoId, title, publishedAt } = VIDEOS[i];
    console.log(`[${i + 1}/${VIDEOS.length}] ${publishedAt} -- ${title}`);
    console.log(`         https://www.youtube.com/watch?v=${videoId}`);

    let vttFile;
    try {
      vttFile = downloadVtt(videoId);
    } catch (e) {
      console.log(`  x yt-dlp error: ${e.message}`);
      errors++;
      await sleep(3000);
      continue;
    }

    if (!vttFile) {
      console.log('  x No captions available');
      skipped++;
      await sleep(2000);
      continue;
    }

    const transcript = parseVtt(vttFile);
    fs.unlinkSync(vttFile);

    if (transcript.length < 200) {
      console.log(`  x Too short (${transcript.length} chars) -- likely no real captions`);
      skipped++;
      await sleep(2000);
      continue;
    }

    const header = `Fairfield City Council Meeting -- ${publishedAt}\nTitle: ${title}\n\n`;
    const chunks = chunkText(header + transcript);
    console.log(`  ok ${transcript.length} chars -> ${chunks.length} chunks`);

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
            file:        `City Council Meeting -- ${publishedAt} -- ${title}`,
          },
        });
        await sleep(80);
      } catch (e) {
        console.error(`  x Embed error chunk ${j}: ${e.message}`);
        errors++;
      }
    }

    for (let k = 0; k < vectors.length; k += 100) {
      await index.upsert(vectors.slice(k, k + 100));
    }

    totalChunks += vectors.length;
    processed++;
    console.log(`  ok Uploaded ${vectors.length} vectors\n`);

    if (i < VIDEOS.length - 1) await sleep(3000);
  }

  console.log('=== Done ===');
  console.log(`  Processed : ${processed}`);
  console.log(`  No caps   : ${skipped}`);
  console.log(`  Errors    : ${errors}`);
  console.log(`  Chunks    : ${totalChunks}`);
  if (errors > 0 || skipped > 0) {
    console.log('\n!! Some videos had issues -- check output above.');
  }
})().catch(err => {
  console.error('\nFAILED:', err);
  process.exit(1);
});
