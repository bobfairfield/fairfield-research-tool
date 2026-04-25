/**
 * upload-jc-history.js
 * One-time upload of History of Jefferson County, Iowa (1914) text file.
 * Run from ~/fairfield-research-tool/
 */

require('dotenv').config({ path: '.env.local' });

const fs      = require('fs');
const path    = require('path');
const crypto  = require('crypto');
const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');
const { validateMetadata } = require('./lib/metadata-schema');

const FILE_PATH  = path.join(__dirname, 'jefferson-county-history', 'historyofjeffers01fult_djvuFullText.txt');
const ORG_ID     = 'jefferson-county-history';
const SOURCE_URL = 'https://archive.org/details/historyofjeffers01fult';

const CHUNK_SIZE    = 1000;
const CHUNK_OVERLAP = 150;
const BATCH_SIZE    = 100;

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index    = pinecone.index('fairfield-civic-docs');
const openai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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

async function embedBatch(chunks) {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: chunks,
  });
  return response.data.map(d => d.embedding);
}

function vectorId(chunkIndex) {
  const hash = crypto.createHash('sha256').update(FILE_PATH).digest('hex').slice(0, 24);
  return `${ORG_ID}-${hash}-${chunkIndex}`;
}

async function main() {
  console.log('\n=== History of Jefferson County, Iowa (1914) — Upload ===\n');

  if (!fs.existsSync(FILE_PATH)) {
    console.error('ERROR: File not found:', FILE_PATH);
    process.exit(1);
  }

  const text   = fs.readFileSync(FILE_PATH, 'utf8');
  const chunks = chunkText(text);
  console.log(`File: ${path.basename(FILE_PATH)}`);
  console.log(`Characters: ${text.length.toLocaleString()}`);
  console.log(`Chunks: ${chunks.length}`);
  console.log('\nUploading...\n');

  // Process in embed batches of 20, then upsert in batches of 100
  const EMBED_BATCH = 20;
  let uploaded = 0;

  for (let i = 0; i < chunks.length; i += EMBED_BATCH) {
    const batchChunks = chunks.slice(i, i + EMBED_BATCH);
    const embeddings  = await embedBatch(batchChunks);

    const vectors = batchChunks.map((chunk, j) => ({
      id    : vectorId(i + j),
      values: embeddings[j],
      metadata: {
        text       : chunk,
        source     : SOURCE_URL,
        orgId      : ORG_ID,
        type       : 'history',
        filename   : path.basename(FILE_PATH),
        chunkIndex : i + j,
        totalChunks: chunks.length,
      },
    }));

    // Validate metadata against canonical schema before upsert
    for (const v of vectors) {
      validateMetadata(v.metadata, { context: 'upload-jc-history.js' });
    }

    // Upsert in sub-batches of 100
    for (let k = 0; k < vectors.length; k += BATCH_SIZE) {
      await index.upsert(vectors.slice(k, k + BATCH_SIZE));
    }

    uploaded += batchChunks.length;
    process.stdout.write(`  ${uploaded}/${chunks.length} chunks uploaded\r`);
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n\n✅ Done — ${uploaded} chunks uploaded to Pinecone.`);
  console.log('\nRunning deploy...\n');

  const { execSync } = require('child_process');
  execSync('node deploy.js "Add History of Jefferson County Iowa 1914"', {
    stdio: 'inherit',
    cwd: __dirname,
  });
}

main().catch(err => {
  console.error('\nFatal error:', err.message);
  process.exit(1);
});
