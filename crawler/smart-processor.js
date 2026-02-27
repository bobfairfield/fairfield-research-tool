/**
 * smart-processor.js
 * Wraps document-processor.js to:
 * 1. Track which Pinecone vector IDs were created for each PDF
 * 2. Enable clean deletion when pages are updated
 * 3. Store capture metadata in manifest
 * 
 * Usage: node smart-processor.js <pdf_path> <metadata_json> <url>
 */

require('dotenv').config({ path: require('path').join(process.env.HOME, 'fairfield-research-tool', '.env.local') });

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const pdfParse = require('pdf-parse');
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');
const { setPage, getPage, hashContent } = require('./manifest-manager');
const { deleteVectorsByIds } = require('./pinecone-helper');

const TOOL_DIR = path.join(process.env.HOME, 'fairfield-research-tool');
const INDEX_NAME = 'fairfield-civic-docs';
const CHUNK_SIZE = 500;
const CHUNK_OVERLAP = 50;

function chunkText(text) {
  const words = text.split(/\s+/);
  const chunks = [];
  for (let i = 0; i < words.length; i += (CHUNK_SIZE - CHUNK_OVERLAP)) {
    const chunk = words.slice(i, i + CHUNK_SIZE).join(' ');
    if (chunk.trim().length > 50) chunks.push(chunk);
  }
  return chunks;
}

async function processAndTrack(pdfPath, metadata, sourceUrl) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  // Read and hash PDF content
  const pdfBuffer = fs.readFileSync(pdfPath);
  const pdfData = await pdfParse(pdfBuffer);
  const contentHash = hashContent(pdfData.text);

  // Check if content has changed
  const existing = getPage(sourceUrl);
  if (existing && existing.hash === contentHash) {
    console.log(`  Unchanged: ${path.basename(pdfPath)}`);
    return { changed: false };
  }

  // Delete old vectors if updating
  if (existing && existing.pinecone_ids && existing.pinecone_ids.length > 0) {
    console.log(`  Content changed, replacing ${existing.pinecone_ids.length} old vectors...`);
    await deleteVectorsByIds(existing.pinecone_ids);
  }

  // Generate new vectors
  const chunks = chunkText(pdfData.text);
  const fileBase = path.basename(pdfPath, '.pdf');
  const vectorIds = [];

  console.log(`  Processing: ${fileBase} (${chunks.length} chunks)`);

  for (let i = 0; i < chunks.length; i++) {
    const response = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: chunks[i]
    });

    const vectorId = `${fileBase}_${contentHash.slice(0,8)}_${i}`;
    vectorIds.push(vectorId);

    await index.upsert([{
      id: vectorId,
      values: response.data[0].embedding,
      metadata: {
        ...metadata,
        member: metadata.member || '',  // Pinecone rejects null
        source_url: sourceUrl,
        text: chunks[i],
        chunk_index: i,
        total_chunks: chunks.length,
        captured_date: new Date().toISOString().split('T')[0]
      }
    }]);
  }

  // Save to manifest
  setPage(sourceUrl, {
    hash: contentHash,
    pdf_path: pdfPath,
    captured_date: new Date().toISOString().split('T')[0],
    pinecone_ids: vectorIds,
    ...metadata
  });

  console.log(`  Done: ${fileBase} → ${vectorIds.length} vectors`);
  return { changed: true, vectorIds };
}

// CLI usage
if (require.main === module) {
  const [,, pdfPath, metadataJson, sourceUrl] = process.argv;
  if (!pdfPath || !metadataJson || !sourceUrl) {
    console.error('Usage: node smart-processor.js <pdf_path> <metadata_json> <source_url>');
    process.exit(1);
  }
  const metadata = JSON.parse(metadataJson);
  processAndTrack(pdfPath, metadata, sourceUrl)
    .then(result => {
      if (!result.changed) process.exit(2); // exit code 2 = unchanged
    })
    .catch(err => { console.error(err); process.exit(1); });
}

module.exports = { processAndTrack };
