// diagnose-board-sources.js
// Run from ~/fairfield-research-tool/ with: node diagnose-board-sources.js
// Samples vectors from the two school-board-ish sources to check what's actually in them.

require('dotenv').config({ path: '.env.local' });
const { Pinecone } = require('@pinecone-database/pinecone');

const INDEX_NAME = 'fairfield-civic-docs';

async function main() {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  const SOURCES_TO_CHECK = [
    'https://www.fairfield.k12.ia.us/board-of-education/board-meeting-minutes',
    'fcsd-board-minutes',
  ];

  // Pinecone serverless requires a vector for query; zero vector + metadata filter
  // gives us random-ish samples within the filter set.
  const dummyVec = new Array(1536).fill(0);

  for (const source of SOURCES_TO_CHECK) {
    console.log('\n' + '='.repeat(72));
    console.log('SOURCE: ' + source);
    console.log('='.repeat(72));

    const result = await index.query({
      vector: dummyVec,
      topK: 5,
      filter: { source: { $eq: source } },
      includeMetadata: true,
    });

    const matches = result.matches || [];
    console.log('Matched ' + matches.length + ' sample vectors.\n');

    matches.forEach((m, i) => {
      const md = m.metadata || {};
      console.log('--- Sample ' + (i + 1) + ' ---');
      console.log('  id:          ' + m.id);
      console.log('  title:       ' + (md.title || '(none)'));
      console.log('  url:         ' + (md.url || '(none)'));
      console.log('  filename:    ' + (md.filename || '(none)'));
      console.log('  yearFolder:  ' + (md.yearFolder || '(none)'));
      console.log('  orgId:       ' + (md.orgId || '(none)'));
      console.log('  type:        ' + (md.type || '(none)'));
      console.log('  category:    ' + (md.category || '(none)'));
      console.log('  subcategory: ' + (md.subcategory || '(none)'));
      const txt = (md.text || '').substring(0, 250).replace(/\s+/g, ' ');
      console.log('  text sample: ' + txt + '...');
      console.log('');
    });
  }
}

main().catch(function (e) {
  console.error('ERROR:', e.message);
  process.exit(1);
});
