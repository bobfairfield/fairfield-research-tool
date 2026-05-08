require('dotenv').config({ path: '.env.local' });
const { Pinecone } = require('@pinecone-database/pinecone');

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

async function main() {
  console.log('='.repeat(70));
  console.log('FULL CONTENT INSPECTION: fairfield-history-series');
  console.log('='.repeat(70));

  const dummyVector = new Array(1536).fill(0);
  dummyVector[0] = 1;

  const result = await index.query({
    vector: dummyVector,
    topK: 100,
    filter: { source: 'fairfield-history-series' },
    includeMetadata: true,
  });

  console.log('\nTotal vectors: ' + result.matches.length + '\n');

  result.matches.forEach((m, i) => {
    console.log('-'.repeat(70));
    console.log('CHUNK ' + (i + 1) + ' of ' + result.matches.length);
    console.log('  ID: ' + m.id);
    console.log('  Metadata keys: ' + Object.keys(m.metadata || {}).join(', '));
    if (m.metadata?.sourceUrl) console.log('  sourceUrl: ' + m.metadata.sourceUrl);
    if (m.metadata?.url)       console.log('  url: ' + m.metadata.url);
    if (m.metadata?.filename)  console.log('  filename: ' + m.metadata.filename);
    if (m.metadata?.type)      console.log('  type: ' + m.metadata.type);
    if (m.metadata?.chunkIndex !== undefined) console.log('  chunkIndex: ' + m.metadata.chunkIndex);
    console.log('  --- TEXT ---');
    console.log('  ' + (m.metadata?.text || '(empty)').replace(/\s+/g, ' ').slice(0, 800));
    console.log('');
  });
}

main().catch(e => { console.error(e); process.exit(1); });
