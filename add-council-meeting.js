/**
 * add-council-meeting.js
 * Adds ONE (or a few) city council meeting video(s) to Pinecone by URL.
 *
 * Auto-extracts the YouTube video ID from any of these URL shapes:
 *   https://www.youtube.com/live/VIDEOID?si=...
 *   https://www.youtube.com/watch?v=VIDEOID
 *   https://youtu.be/VIDEOID
 *   https://www.fairfieldmediacenter.com/...?wix-vod-video-id=VIDEOID&...
 *   VIDEOID            (bare 11-char id)
 *
 * Auto-fetches title + date from YouTube (yt-dlp). No hand-editing any array.
 * Vector IDs are deterministic: `fc-council-{videoId}-{chunkIndex}` — re-running
 * a meeting that's already indexed simply OVERWRITES in place. Safe to re-run.
 *
 * Usage:
 *   node add-council-meeting.js "<url>"
 *   node add-council-meeting.js "<url>" 2026-05-26     # pin the real meeting date
 *   node add-council-meeting.js "<url1>" "<url2>" ...  # backlog catch-up
 *
 * Run from: ~/fairfield-research-tool/
 * After it finishes: node deploy.js "Add <meeting> (<n> vectors)"
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

const sleep = ms => new Promise(r => setTimeout(r, ms));

// --- arg parsing -------------------------------------------------------------
// If exactly two args and the 2nd is a YYYY-MM-DD date, treat it as a date
// override for a single URL. Otherwise every arg is a URL/ID.
function parseArgs(argv) {
  const raw = argv.slice(2);
  if (raw.length === 0) {
    console.error('\nUsage: node add-council-meeting.js "<youtube-url>" [YYYY-MM-DD]\n');
    process.exit(1);
  }
  if (raw.length === 2 && /^\d{4}-\d{2}-\d{2}$/.test(raw[1])) {
    return { inputs: [raw[0]], dateOverride: raw[1] };
  }
  return { inputs: raw, dateOverride: null };
}

// --- video id extraction -----------------------------------------------------
function extractVideoId(input) {
  input = String(input).trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(input)) return input;          // bare id
  try {
    const u = new URL(input);
    const q = u.searchParams.get('v') || u.searchParams.get('wix-vod-video-id');
    if (q && /^[A-Za-z0-9_-]{11}$/.test(q)) return q;           // ?v= or wix param
    for (const seg of u.pathname.split('/').filter(Boolean)) {  // /live/ID, /embed/ID, youtu.be/ID
      if (/^[A-Za-z0-9_-]{11}$/.test(seg)) return seg;
    }
  } catch (_) { /* not a URL, fall through */ }
  const m = input.match(/[A-Za-z0-9_-]{11}/);                   // last-resort scan
  return m ? m[0] : null;
}

// --- metadata fetch (title + upload date) ------------------------------------
function fetchMeta(videoId) {
  const r = spawnSync(YTDLP, [
    '--skip-download',
    '--no-warnings',
    '--print', '%(title)s\t%(upload_date)s',
    `https://www.youtube.com/watch?v=${videoId}`
  ], { encoding: 'utf8', timeout: 60000 });

  const out = (r.stdout || '').trim();
  if (!out) return null;
  const [title, uploadDate] = out.split('\t');
  let publishedAt = null;
  if (uploadDate && /^\d{8}$/.test(uploadDate.trim())) {
    const d = uploadDate.trim();
    publishedAt = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
  }
  return { title: (title || '').trim() || 'Fairfield City Council Meeting', publishedAt };
}

// --- shared pipeline (same as add-council-meetings.js) -----------------------
function downloadVtt(videoId) {
  fs.mkdirSync(TMP_DIR, { recursive: true });
  const outPattern = path.join(TMP_DIR, '%(id)s');
  spawnSync(YTDLP, [
    '--write-auto-sub', '--skip-download', '--sub-lang', 'en',
    '--sub-format', 'vtt', '--no-warnings', '-o', outPattern,
    `https://www.youtube.com/watch?v=${videoId}`
  ], { encoding: 'utf8', timeout: 60000 });

  const exact = path.join(TMP_DIR, `${videoId}.en.vtt`);
  if (fs.existsSync(exact)) return exact;
  const files = fs.readdirSync(TMP_DIR).filter(f => f.startsWith(videoId) && f.endsWith('.vtt'));
  return files.length ? path.join(TMP_DIR, files[0]) : null;
}

function parseVtt(vttFile) {
  const raw = fs.readFileSync(vttFile, 'utf8');
  const seen = new Set();
  const out = [];
  for (let line of raw.split('\n')) {
    if (line.includes('-->') || line.startsWith('WEBVTT') ||
        line.startsWith('Kind:') || line.startsWith('Language:') || line.trim() === '') continue;
    const clean = line.replace(/<[^>]+>/g, '').trim();
    if (clean && !seen.has(clean)) { seen.add(clean); out.push(clean); }
  }
  return out.join(' ');
}

function chunkText(text, size = 1200, overlap = 150) {
  const chunks = [];
  for (let i = 0; i < text.length; i += (size - overlap)) chunks.push(text.slice(i, i + size));
  return chunks;
}

async function embed(text) {
  const resp = await oai.embeddings.create({ model: 'text-embedding-3-small', input: text });
  return resp.data[0].embedding;
}

// --- process one video -------------------------------------------------------
async function processVideo(input, dateOverride) {
  const videoId = extractVideoId(input);
  if (!videoId) {
    console.log(`  x Could not extract a video ID from: ${input}`);
    return { ok: false, chunks: 0 };
  }

  const meta = fetchMeta(videoId);
  if (!meta) {
    console.log(`  x Could not fetch metadata for ${videoId} (yt-dlp returned nothing)`);
    return { ok: false, chunks: 0 };
  }
  const title       = meta.title;
  const publishedAt = dateOverride || meta.publishedAt || new Date().toISOString().slice(0, 10);
  const dateNote    = dateOverride ? '(pinned)' : (meta.publishedAt ? '(from YouTube upload date)' : '(fallback: today)');

  console.log(`  id          : ${videoId}`);
  console.log(`  title       : ${title}`);
  console.log(`  publishedAt : ${publishedAt} ${dateNote}`);
  console.log(`  url         : https://www.youtube.com/watch?v=${videoId}`);

  const vttFile = downloadVtt(videoId);
  if (!vttFile) { console.log('  x No captions available'); return { ok: false, chunks: 0 }; }

  const transcript = parseVtt(vttFile);
  fs.unlinkSync(vttFile);
  if (transcript.length < 200) {
    console.log(`  x Too short (${transcript.length} chars) -- likely no real captions`);
    return { ok: false, chunks: 0 };
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
    }
  }

  for (let k = 0; k < vectors.length; k += 100) {
    await index.upsert(vectors.slice(k, k + 100));
  }
  console.log(`  ok Uploaded ${vectors.length} vectors\n`);
  return { ok: true, chunks: vectors.length };
}

// --- main --------------------------------------------------------------------
(async function main() {
  const { inputs, dateOverride } = parseArgs(process.argv);
  console.log(`\nProcessing ${inputs.length} council meeting video(s)...\n`);

  let processed = 0, failed = 0, totalChunks = 0;
  for (let i = 0; i < inputs.length; i++) {
    console.log(`[${i + 1}/${inputs.length}] ${inputs[i]}`);
    const res = await processVideo(inputs[i], inputs.length === 1 ? dateOverride : null);
    if (res.ok) { processed++; totalChunks += res.chunks; } else { failed++; }
    if (i < inputs.length - 1) await sleep(3000);
  }

  console.log('=== Done ===');
  console.log(`  Processed : ${processed}`);
  console.log(`  Failed    : ${failed}`);
  console.log(`  Chunks    : ${totalChunks}`);
  if (failed > 0) console.log('\n!! Some videos failed -- check output above.');
  if (processed > 0) {
    console.log('\nNext: node deploy.js "Add council meeting(s) (' + totalChunks + ' vectors)"');
  }
})().catch(err => {
  console.error('\nFAILED:', err);
  process.exit(1);
});
