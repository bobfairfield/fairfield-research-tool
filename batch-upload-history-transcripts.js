/**
 * batch-upload-history-transcripts.js
 * Uploads Fairfield History Series documentary transcripts to Pinecone.
 * Source: Fairfield Productions YouTube channel — @fair_field_productions
 *
 * Usage:
 *   node batch-upload-history-transcripts.js --test
 *   node batch-upload-history-transcripts.js
 */

require('dotenv').config({ path: '.env.local' });

const fs       = require('fs');
const path     = require('path');
const pdfParse = require('pdf-parse');
const crypto   = require('crypto');
const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');
const { validateMetadata } = require('./lib/metadata-schema');

const PDF_DIR    = path.join(process.env.HOME, 'fairfield-research-tool', 'history-transcripts');
const ORG_ID     = 'fairfield-history-series';
const SOURCE_URL = 'https://www.youtube.com/@fair_field_productions';
const TEST_MODE  = process.argv.includes('--test');
const TEST_LIMIT = 2;

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index    = pinecone.index('fairfield-civic-docs');
const openai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const CHUNK_SIZE    = 1000;
const CHUNK_OVERLAP = 150;
const BATCH_SIZE    = 100;

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

async function embedChunks(chunks) {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: chunks,
  });
  return response.data.map(d => d.embedding);
}

function vectorId(filePath, chunkIndex) {
  const hash = crypto.createHash('sha256').update(filePath).digest('hex').slice(0, 24);
  return `${ORG_ID}-${hash}-${chunkIndex}`;
}

async function uploadFile(filePath) {
  const basename = path.basename(filePath);

  const rawBuffer = fs.readFileSync(filePath);
  let parsed;
  try {
    parsed = await pdfParse(rawBuffer);
  } catch (err) {
    console.log(`  [ERROR parsing] ${basename}: ${err.message}`);
    return { status: 'error', file: basename };
  }

  const text = parsed.text.trim();

  if (text.length < 100) {
    console.log(`  [SKIP — no text] ${basename}`);
    return { status: 'skipped', file: basename };
  }

  const chunks     = chunkText(text);
  const embeddings = await embedChunks(chunks);

  const vectors = chunks.map((chunk, i) => ({
    id    : vectorId(filePath, i),
    values: embeddings[i],
    metadata: {
      text       : chunk,
      source     : SOURCE_URL,
      orgId      : ORG_ID,
      type       : 'history',
      filename   : basename,
      chunkIndex : i,
      totalChunks: chunks.length,
    },
  }));

  // Validate metadata against canonical schema before upsert
  for (const v of vectors) {
    validateMetadata(v.metadata, { context: 'batch-upload-history-transcripts.js' });
  }

  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    await index.upsert(vectors.slice(i, i + BATCH_SIZE));
  }

  console.log(`  [OK] ${basename} — ${chunks.length} chunks`);
  return { status: 'uploaded', file: basename, chunks: chunks.length };
}

async function main() {
  console.log('\n=== Fairfield History Series — Transcript Upload ===');
  console.log(`PDF dir : ${PDF_DIR}`);
  console.log(`Mode    : ${TEST_MODE ? `TEST (first ${TEST_LIMIT} files)` : 'FULL RUN'}`);
  console.log('');

  if (!fs.existsSync(PDF_DIR)) {
    console.error(`ERROR: Directory not found: ${PDF_DIR}`);
    console.error(`Create it first: mkdir -p ${PDF_DIR}`);
    process.exit(1);
  }

  const allFiles = fs.readdirSync(PDF_DIR)
    .filter(f => f.toLowerCase().endsWith('.pdf'))
    .map(f => path.join(PDF_DIR, f))
    .sort();

  console.log(`Files found: ${allFiles.length}`);

  if (allFiles.length === 0) {
    console.log('No PDFs found. Copy your transcript PDFs into:');
    console.log(`  ${PDF_DIR}`);
    return;
  }

  const filesToProcess = TEST_MODE ? allFiles.slice(0, TEST_LIMIT) : allFiles;
  const stats = { uploaded: 0, skipped: 0, error: 0 };

  console.log('\nUploading...\n');
  for (const filePath of filesToProcess) {
    const result = await uploadFile(filePath);
    stats[result.status] = (stats[result.status] || 0) + 1;
    await new Promise(r => setTimeout(r, 300));
  }

  console.log('\n=== Done ===');
  console.log(`  Uploaded : ${stats.uploaded}`);
  console.log(`  Skipped  : ${stats.skipped}`);
  console.log(`  Errors   : ${stats.error}`);

  if (TEST_MODE) {
    console.log('\nTest run complete. Remove --test to run all files.');
    return;
  }

  const { execSync } = require('child_process');
  console.log('\nRunning deploy...');
  execSync('node deploy.js "Upload Fairfield History Series transcripts"', {
    stdio: 'inherit',
    cwd: path.join(process.env.HOME, 'fairfield-research-tool'),
  });
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
