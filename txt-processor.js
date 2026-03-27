#!/usr/bin/env node
/**
 * txt-processor.js
 * Upload plain text files to Pinecone using the same pattern as document-processor.js
 * Usage: node txt-processor.js <file.txt> '<{"source":"...","category":"...","subcategory":"..."}>'
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');

const filePath = process.argv[2];
const metadata = JSON.parse(process.argv[3] || '{}');

if (!filePath) {
  console.error('Usage: node txt-processor.js <file.txt> \'{"source":"..."}\'');
  process.exit(1);
}

const CHUNK_SIZE = 1000;   // characters per chunk
const CHUNK_OVERLAP = 200;

function chunkText(text) {
  const chunks = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + CHUNK_SIZE, text.length);
    chunks.push(text.slice(start, end).trim());
    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }
  return chunks.filter(c => c.length > 50);
}

async function main() {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pinecone.index(process.env.PINECONE_INDEX || 'fairfield-civic-docs');

  const text = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath);
  console.log(`Processing: ${fileName} (${text.length} chars)`);

  const chunks = chunkText(text);
  console.log(`  ${chunks.length} chunks`);

  const vectors = [];
  for (let i = 0; i < chunks.length; i++) {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: chunks[i],
    });
    const embedding = response.data[0].embedding;
    const id = `${fileName.replace(/\.[^.]+$/, '')}_chunk_${i}`;
    vectors.push({
      id,
      values: embedding,
      metadata: {
        ...metadata,
        text: chunks[i],
        fileName,
        chunkIndex: i,
      },
    });
  }

  // Upsert in batches of 100
  for (let i = 0; i < vectors.length; i += 100) {
    await index.upsert(vectors.slice(i, i + 100));
  }

  console.log(`  ✓ Uploaded ${vectors.length} vectors`);
  const { execSync } = require('child_process');
  execSync('node deploy.js "Update knowledge base — text upload"', { stdio: 'inherit', cwd: require('path').join(__dirname) });
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});

