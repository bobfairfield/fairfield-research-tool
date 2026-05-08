require('dotenv').config({ path: '.env.local' });
const { Pinecone } = require('@pinecone-database/pinecone');
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

async function main() {
  const stats = await index.describeIndexStats();
  console.log('Total vectors in index:', stats.totalRecordCount);
  console.log('');

  // Sample with multiple random vectors to better estimate count
  const counts = new Set();
  for (let i = 0; i < 5; i++) {
    const v = Array.from({length: 1536}, () => Math.random() * 2 - 1);
    const r = await index.query({
      vector: v, topK: 1000,
      filter: { source: 'fairfield-history-series' },
      includeMetadata: false,
    });
    r.matches.forEach(m => counts.add(m.id));
  }
  console.log('Unique fairfield-history-series vectors found across 5 sample queries:', counts.size);

  const types = {};
  const sourceUrls = {};
  for (let i = 0; i < 3; i++) {
    const v = Array.from({length: 1536}, () => Math.random() * 2 - 1);
    const r = await index.query({
      vector: v, topK: 1000,
      filter: { source: 'fairfield-history-series' },
      includeMetadata: true,
    });
    r.matches.forEach(m => {
      const t = m.metadata?.type || '(none)';
      const u = m.metadata?.sourceUrl || '(none)';
      types[t] = (types[t] || 0) + 1;
      sourceUrls[u] = (sourceUrls[u] || 0) + 1;
    });
  }
  console.log('\nType distribution (across 3 sample queries):');
  Object.entries(types).forEach(([k,v]) => console.log('  ' + k + ': ' + v));
  console.log('\nsourceUrl distribution:');
  Object.entries(sourceUrls).forEach(([k,v]) => console.log('  ' + k + ': ' + v));
}
main().catch(e => { console.error(e); process.exit(1); });
