/**
 * batch-upload-walton-lake.js
 * Uploads Walton Lake golf cart bridge documents to Pinecone.
 *
 * Usage:
 *   node batch-upload-walton-lake.js --test     (process first 3 PDFs, no upload)
 *   node batch-upload-walton-lake.js            (full run)
 */

require('dotenv').config({ path: '.env.local' });

const fs       = require('fs');
const path     = require('path');
const pdfParse = require('pdf-parse');
const crypto   = require('crypto');
const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');

const PDF_DIR    = path.join(process.env.HOME, 'fairfield-research-tool', 'walton-lake-docs');
const ORG_ID     = 'walton-lake-bridge';
const SOURCE_URL = 'https://www.fairfield.ia.us/walton-lake-bridge';
const TEST_MODE  = process.argv.includes('--test');
const TEST_LIMIT = 3;

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
  const filename = path.basename(filePath);
  const rawBuffer = fs.readFileSync(filePath);

  let parsed;
  try {
    parsed = await pdfParse(rawBuffer);
  } catch (err) {
    console.log(`  [ERROR parsing] ${filename}: ${err.message}`);
    return { status: 'error', file: filename };
  }

  const text = parsed.text.trim();

  if (text.length < 100) {
    console.log(`  [SKIP scanned] ${filename}`);
    return { status: 'skipped_scanned', file: filename };
  }

  const chunks     = chunkText(text);
  const embeddings = await embedChunks(chunks);

  const vectors = chunks.map((chunk, i) => ({
    id    : vectorId(filePath, i),
    values: embeddings[i],
    metadata: {
      text      : chunk,
      source    : SOURCE_URL,
      orgId     : ORG_ID,
      type      : 'government',
      filename,
      chunkIndex: i,
      totalChunks: chunks.length,
    },
  }));

  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    await index.upsert(vectors.slice(i, i + BATCH_SIZE));
  }

  console.log(`  [OK] ${filename} — ${chunks.length} chunks`);
  return { status: 'uploaded', file: filename, chunks: chunks.length };
}

async function main() {
  console.log('\n=== Walton Lake Bridge Documents — Batch Upload ===');
  console.log(`PDF dir : ${PDF_DIR}`);
  console.log(`Mode    : ${TEST_MODE ? `TEST (first ${TEST_LIMIT} files)` : 'FULL RUN'}`);
  console.log('');

  if (!fs.existsSync(PDF_DIR)) {
    console.error(`ERROR: Directory not found: ${PDF_DIR}`);
    process.exit(1);
  }

  const allFiles = fs.readdirSync(PDF_DIR)
    .filter(f => f.toLowerCase().endsWith('.pdf'))
    .map(f => path.join(PDF_DIR, f))
    .sort();

  console.log(`Files found: ${allFiles.length}`);

  if (allFiles.length === 0) {
    console.log('Nothing to upload.');
    return;
  }

  const filesToProcess = TEST_MODE ? allFiles.slice(0, TEST_LIMIT) : allFiles;
  const stats = { uploaded: 0, skipped_scanned: 0, error: 0 };

  console.log('\nUploading...\n');
  for (const filePath of filesToProcess) {
    const result = await uploadFile(filePath);
    stats[result.status] = (stats[result.status] || 0) + 1;
    await new Promise(r => setTimeout(r, 300));
  }

  console.log('\n=== Done ===');
  console.log(`  Uploaded        : ${stats.uploaded}`);
  console.log(`  Skipped scanned : ${stats.skipped_scanned}`);
  console.log(`  Errors          : ${stats.error}`);

  if (TEST_MODE) {
    console.log('\nTest run complete. Remove --test to run all files.');
    return;
  }

  // Auto-deploy
  const { execSync } = require('child_process');
  console.log('\nRunning deploy...');
  execSync('node deploy.js "Add Walton Lake bridge documents to knowledge base"', {
    stdio: 'inherit',
    cwd: path.join(process.env.HOME, 'fairfield-research-tool'),
  });
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
