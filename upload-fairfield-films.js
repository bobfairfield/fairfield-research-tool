/**
 * upload-fairfield-films.js
 * Uploads three Fairfield Productions film transcripts to Pinecone:
 *   - Cedar_Creek_Transcript.vtt  (converts VTT → plain text)
 *   - Big_River_Connectivity_Wildlife_Crossings_Project_Transcript.pdf
 *   - Be_Wild_to_ReWild_transcript.pdf
 *
 * All go under source key: fairfield-history-series
 * Run from: ~/fairfield-research-tool/
 * Usage: node upload-fairfield-films.js
 */

require('dotenv').config({ path: '.env.local' });

const fs      = require('fs');
const path    = require('path');
const crypto  = require('crypto');
const pdfParse = require('pdf-parse');
const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');

const TRANSCRIPTS_DIR = path.join(__dirname, 'history-transcripts');
const ORG_ID          = 'fairfield-history-series';
const SOURCE_URL      = 'https://www.youtube.com/@fair_field_productions';

const CHUNK_SIZE    = 1000;
const CHUNK_OVERLAP = 150;
const EMBED_BATCH   = 20;
const UPSERT_BATCH  = 100;

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index    = pinecone.index('fairfield-civic-docs');
const openai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ── VTT → plain text ──────────────────────────────────────────────────────
function parseVTT(vttContent) {
  const lines = vttContent.split('\n');
  const textLines = [];
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip WEBVTT header, sequence numbers, timestamps, and blank lines
    if (!trimmed) continue;
    if (trimmed === 'WEBVTT') continue;
    if (/^\d+$/.test(trimmed)) continue;                        // sequence number
    if (/^\d{2}:\d{2}:\d{2}\.\d{3}\s*-->\s*/.test(trimmed)) continue; // timestamp
    textLines.push(trimmed);
  }
  // Join into flowing paragraphs — collapse fragments into sentences
  return textLines.join(' ').replace(/\s+/g, ' ').trim();
}

// ── Text chunker ──────────────────────────────────────────────────────────
function chunkText(text) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    const chunk = text.slice(start, start + CHUNK_SIZE).trim();
    if (chunk.length > 50) chunks.push(chunk);
    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }
  return chunks;
}

// ── Embed + upsert ────────────────────────────────────────────────────────
async function uploadChunks(chunks, filename) {
  let uploaded = 0;
  const hash = crypto.createHash('sha256').update(filename).digest('hex').slice(0, 24);

  for (let i = 0; i < chunks.length; i += EMBED_BATCH) {
    const batch      = chunks.slice(i, i + EMBED_BATCH);
    const response   = await openai.embeddings.create({ model: 'text-embedding-3-small', input: batch });
    const embeddings = response.data.map(d => d.embedding);

    const vectors = batch.map((chunk, j) => ({
      id    : `${ORG_ID}-${hash}-${i + j}`,
      values: embeddings[j],
      metadata: {
        text       : chunk,
        source     : SOURCE_URL,
        orgId      : ORG_ID,
        type       : 'history',
        filename,
        chunkIndex : i + j,
        totalChunks: chunks.length,
      },
    }));

    for (let k = 0; k < vectors.length; k += UPSERT_BATCH) {
      await index.upsert(vectors.slice(k, k + UPSERT_BATCH));
    }

    uploaded += batch.length;
    process.stdout.write(`  ${uploaded}/${chunks.length} chunks\r`);
    await new Promise(r => setTimeout(r, 200));
  }
  process.stdout.write('\n');
  return uploaded;
}

// ── Process each file ─────────────────────────────────────────────────────
async function processFile(filePath) {
  const ext      = path.extname(filePath).toLowerCase();
  const basename = path.basename(filePath);
  let text;

  if (ext === '.vtt') {
    const raw = fs.readFileSync(filePath, 'utf8');
    text = parseVTT(raw);
    console.log(`  Format: VTT → converted to plain text`);
  } else if (ext === '.pdf') {
    const buf    = fs.readFileSync(filePath);
    const parsed = await pdfParse(buf);
    text = parsed.text.trim();
    console.log(`  Format: PDF`);
  } else {
    text = fs.readFileSync(filePath, 'utf8');
    console.log(`  Format: TXT`);
  }

  if (text.length < 100) {
    console.log(`  [SKIP] Too little text extracted.`);
    return 0;
  }

  const chunks = chunkText(text);
  console.log(`  Characters: ${text.length.toLocaleString()} | Chunks: ${chunks.length}`);
  const uploaded = await uploadChunks(chunks, basename);
  return uploaded;
}

// ── Main ──────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n=== Fairfield Productions Film Transcripts — Upload ===\n');

  const files = [
    'Cedar_Creek_Transcript.vtt',
    'Big_River_Connectivity_Wildlife_Crossings_Project_Transcript.pdf',
    'Be_Wild_to_ReWild_transcript.pdf',
  ];

  let totalUploaded = 0;
  let errors = 0;

  for (const filename of files) {
    const filePath = path.join(TRANSCRIPTS_DIR, filename);
    console.log(`\nProcessing: ${filename}`);

    if (!fs.existsSync(filePath)) {
      console.log(`  [ERROR] File not found: ${filePath}`);
      console.log(`  → Copy it to ~/fairfield-research-tool/history-transcripts/`);
      errors++;
      continue;
    }

    try {
      const uploaded = await processFile(filePath);
      console.log(`  ✓ ${uploaded} chunks uploaded`);
      totalUploaded += uploaded;
    } catch (err) {
      console.log(`  [ERROR] ${err.message}`);
      errors++;
    }
  }

  console.log(`\n=== Done ===`);
  console.log(`  Total chunks uploaded : ${totalUploaded}`);
  console.log(`  Errors                : ${errors}`);

  if (errors > 0) {
    console.log('\n⚠ Some files had errors. Fix them and re-run — existing chunks will be overwritten cleanly.');
    process.exit(1);
  }

  console.log('\nRunning deploy...\n');
  const { execSync } = require('child_process');
  execSync('node deploy.js "Add Fairfield Productions film transcripts: Cedar Creek, Big River, Be Wild to ReWild"', {
    stdio: 'inherit',
    cwd: __dirname,
  });
}

main().catch(err => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
