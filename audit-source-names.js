require('dotenv').config({ path: '.env.local' });
const { Pinecone } = require('@pinecone-database/pinecone');
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

async function main() {
  const stats = await index.describeIndexStats();
  console.log('Total vectors in index:', stats.totalRecordCount);
  console.log('Sampling source names across the index...\n');

  // Sample with multiple random vectors to surface as many distinct sources as possible
  const sourceCounts = {};
  const sampleSize = 12;

  for (let i = 0; i < sampleSize; i++) {
    const v = Array.from({length: 1536}, () => Math.random() * 2 - 1);
    const r = await index.query({
      vector: v, topK: 1000,
      includeMetadata: true,
    });
    r.matches.forEach(m => {
      const s = m.metadata?.source || '(NO_SOURCE_FIELD)';
      sourceCounts[s] = (sourceCounts[s] || 0) + 1;
    });
  }

  const sorted = Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]);
  console.log('Source name | sampled count (across ' + sampleSize + ' random queries of topK=1000)');
  console.log('='.repeat(80));
  sorted.forEach(([name, count]) => {
    console.log(count.toString().padStart(6) + '  ' + name);
  });
  console.log('\nTotal distinct source names sampled: ' + sorted.length);
  console.log('\nNote: this is a sample, not exhaustive. Sources with very few vectors\n' +
              'may not appear. But sources with significant data will all show up.');
}
main().catch(e => { console.error(e); process.exit(1); });
