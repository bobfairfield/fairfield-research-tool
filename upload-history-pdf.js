/**
 * upload-history-pdf.js
 * Uploads a single PDF transcript to Pinecone under source: fairfield-history-series
 * Does NOT call deploy — run node deploy.js manually after all uploads are complete.
 *
 * Usage: node upload-history-pdf.js "Filename.pdf"
 * File must be in ~/fairfield-research-tool/history-transcripts/
 */

require('dotenv').config({ path: '.env.local' });

const fs       = require('fs');
const path     = require('path');
const crypto   = require('crypto');
const pdfParse = require('pdf-parse');
const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');

// ── Config ────────────────────────────────────────────────────────────────
const SOURCE_KEY    = 'fairfield-history-series';
const SOURCE_URL    = 'https://www.youtube.com/@fair_field_productions';
const CHUNK_SIZE    = 1000;   // characters
const CHUNK_OVERLAP = 150;
const EMBED_BATCH   = 20;
const UPSERT_BATCH  = 100;

// ── Init ──────────────────────────────────────────────────────────────────
const filename = process.argv[2];
if (!filename) {
  console.error('Usage: node upload-history-pdf.js "Filename.pdf"');
  process.exit(1);
}

const filePath = path.join(__dirname, 'history-transcripts', filename);
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index    = pinecone.index('fairfield-civic-docs');
const openai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ── Helpers ───────────────────────────────────────────────────────────────
function chunkText(text) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + CHUNK_SIZE, text.length);
    const chunk = text.slice(start, end).trim();
    if (chunk.length > 50) chunks.push(chunk);
    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }
  return chunks;
}

async function embedBatch(texts) {
  const resp = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: texts,
  });
  return resp.data.map(d => d.embedding);
}

async function upsertBatch(vectors) {
  for (let i = 0; i < vectors.length; i += UPSERT_BATCH) {
    await index.upsert(vectors.slice(i, i + UPSERT_BATCH));
  }
}

// ── Main ──────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\nUploading: ${filename}`);
  console.log(`Source key: ${SOURCE_KEY}\n`);

  // Extract text from PDF
  const buffer = fs.readFileSync(filePath);
  const parsed = await pdfParse(buffer);
  const text   = parsed.text.replace(/\s+/g, ' ').trim();
  console.log(`Extracted ${text.length} characters`);

  // Chunk
  const chunks = chunkText(text);
  console.log(`Created ${chunks.length} chunks`);

  // Embed in batches
  const allEmbeddings = [];
  for (let i = 0; i < chunks.length; i += EMBED_BATCH) {
    const batch = chunks.slice(i, i + EMBED_BATCH);
    const embeddings = await embedBatch(batch);
    allEmbeddings.push(...embeddings);
    process.stdout.write(`  Embedded ${Math.min(i + EMBED_BATCH, chunks.length)}/${chunks.length}\r`);
  }
  console.log('\nEmbedding complete');

  // Build vectors
  const baseHash = crypto.createHash('sha256').update(filename).digest('hex').slice(0, 16);
  const vectors  = chunks.map((chunk, i) => ({
    id:     `${SOURCE_KEY}-${baseHash}-${i}`,
    values: allEmbeddings[i],
    metadata: {
      text:   chunk,
      source: SOURCE_KEY,
      url:    SOURCE_URL,
      title:  filename.replace(/_/g, ' ').replace('.pdf', ''),
      type:   'history_transcript',
    },
  }));

  // Upsert
  await upsertBatch(vectors);
  console.log(`Upserted ${vectors.length} vectors to Pinecone`);
  console.log(`\nDone. Do NOT deploy yet — wait until all 5 transcripts are uploaded.\n`);
}

main().catch(err => {
  console.error('\nError:', err.message);
  process.exit(1);
});
