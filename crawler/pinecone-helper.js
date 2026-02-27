/**
 * pinecone-helper.js
 * Handles deleting old vectors before re-indexing updated pages
 * Uses metadata filtering to find vectors by URL
 */

require('dotenv').config({ path: require('path').join(process.env.HOME, 'fairfield-research-tool', '.env.local') });
const { Pinecone } = require('@pinecone-database/pinecone');

const INDEX_NAME = 'fairfield-civic-docs';

async function getClient() {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  return pc.index(INDEX_NAME);
}

/**
 * Delete all vectors associated with a URL
 * Vectors are stored with metadata.source_url if we add it,
 * otherwise we delete by stored IDs from manifest
 */
async function deleteVectorsByIds(ids) {
  if (!ids || ids.length === 0) return;
  const index = await getClient();
  await index.deleteMany(ids);
  console.log(`  Deleted ${ids.length} old vectors`);
}

/**
 * Get current vector count in index
 */
async function getIndexStats() {
  const index = await getClient();
  const stats = await index.describeIndexStats();
  return stats;
}

module.exports = { deleteVectorsByIds, getIndexStats };
