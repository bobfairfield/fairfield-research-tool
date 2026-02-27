const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');
require('dotenv').config({ path: '.env.local' });

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const index = pc.index('fairfield-civic-docs');

async function run() {
  const queries = [
    'comprehensive plan city planning land use zoning',
    'economic development downtown business growth',
    'housing study residential development',
    'city budget financial audit',
    'WhatsthePlan strategic plan'
  ];

  const sources = new Map();

  for (const q of queries) {
    const emb = await openai.embeddings.create({ model: 'text-embedding-3-small', input: q });
    const res = await index.query({ vector: emb.data[0].embedding, topK: 20, includeMetadata: true });
    res.matches.forEach(m => {
      if (m.metadata && m.metadata.source) {
        const key = m.metadata.source;
        if (!sources.has(key)) {
          sources.set(key, { category: m.metadata.category, filename: m.metadata.filename || '' });
        }
      }
    });
  }

  console.log('\nSources found:');
  [...sources.entries()].sort().forEach(([src, meta]) => {
    console.log(`  ${src} [${meta.category}] ${meta.filename}`);
  });
}

run().catch(console.error);
