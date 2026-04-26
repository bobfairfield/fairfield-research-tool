require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { Pinecone } = require('@pinecone-database/pinecone');

const LEGACY = ['file', 'fileName', 'chunk_index', 'chunkNum', 'url', 'source_url'];

(async () => {
  const progress = JSON.parse(fs.readFileSync('field-alias-migration-progress.json', 'utf8'));
  const ids = progress.processedIds || [];
  console.log(`Mode in progress: ${progress.mode}`);
  console.log(`Checking ${ids.length} vectors for legacy field presence...\n`);

  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pinecone.index(process.env.PINECONE_INDEX_NAME || 'fairfield-civic-docs');
  const fetched = await index.fetch(ids);

  let cleanCount = 0;
  let dirtyCount = 0;
  const dirtyExamples = [];

  for (const id of ids) {
    const meta = fetched.records?.[id]?.metadata || {};
    const legacyPresent = LEGACY.filter(f => f in meta);
    if (legacyPresent.length === 0) {
      cleanCount++;
    } else {
      dirtyCount++;
      if (dirtyExamples.length < 5) {
        dirtyExamples.push({ id, legacyPresent, fullMeta: Object.keys(meta) });
      }
    }
  }

  console.log(`Clean (no legacy fields):   ${cleanCount}`);
  console.log(`Dirty (legacy still there): ${dirtyCount}\n`);

  if (dirtyCount > 0) {
    console.log('Examples of dirty vectors:');
    for (const e of dirtyExamples) {
      console.log(`  ${e.id}`);
      console.log(`    legacy still present: ${e.legacyPresent.join(', ')}`);
      console.log(`    full keys: ${e.fullMeta.join(', ')}`);
    }
  } else {
    console.log('✅ All vectors have legacy fields removed.');
  }

  const first = ids[0];
  console.log(`\nRaw metadata of ${first}:`);
  console.log(JSON.stringify(fetched.records?.[first]?.metadata, null, 2));
})();
