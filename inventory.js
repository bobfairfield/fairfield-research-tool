// inventory.js — Run from ~/fairfield-research-tool/
// Queries Pinecone to enumerate every unique source, category, and subcategory in the index.
// Usage: node inventory.js
// Output: inventory.json (full list) + printed summary

require('dotenv').config({ path: '.env.local' });
const { Pinecone } = require('@pinecone-database/pinecone');

const INDEX_NAME = 'fairfield-civic-docs';

async function getInventory() {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  console.log('📡 Connected to Pinecone. Listing all vector IDs...\n');

  // Collect all vector IDs using the list endpoint (serverless)
  const allIds = [];
  let paginationToken = undefined;

  do {
    const listResult = await index.listPaginated({ limit: 100, paginationToken });
    const ids = (listResult.vectors || []).map(v => v.id);
    allIds.push(...ids);
    paginationToken = listResult.pagination?.next;
    process.stdout.write(`\r  Found ${allIds.length} vectors so far...`);
  } while (paginationToken);

  console.log(`\n✅ Total vectors found: ${allIds.length}\n`);

  // Fetch metadata in batches of 100
  const BATCH = 100;
  const sourceMap = {}; // source -> { categories: { cat -> Set(subcats) }, count }

  for (let i = 0; i < allIds.length; i += BATCH) {
    const batch = allIds.slice(i, i + BATCH);
    const fetched = await index.fetch(batch);
    
    for (const vec of Object.values(fetched.records || {})) {
      const meta = vec.metadata || {};
      const source = meta.source || '(unknown)';
      const category = meta.category || '(uncategorized)';
      const subcategory = meta.subcategory || null;
      const title = meta.title || null;

      if (!sourceMap[source]) {
        sourceMap[source] = { count: 0, categories: {}, titles: new Set() };
      }
      sourceMap[source].count++;

      if (!sourceMap[source].categories[category]) {
        sourceMap[source].categories[category] = new Set();
      }
      if (subcategory) {
        sourceMap[source].categories[category].add(subcategory);
      }
      if (title) {
        sourceMap[source].titles.add(title);
      }
    }

    process.stdout.write(`\r  Fetched metadata for ${Math.min(i + BATCH, allIds.length)}/${allIds.length} vectors...`);
  }

  console.log('\n\n═══════════════════════════════════════════════════════');
  console.log('  FAIRFIELD CIVIC DOCS — PINECONE INDEX INVENTORY');
  console.log('═══════════════════════════════════════════════════════\n');

  const sorted = Object.entries(sourceMap).sort((a, b) => b[1].count - a[1].count);
  let totalVectors = 0;

  for (const [source, data] of sorted) {
    totalVectors += data.count;
    console.log(`📁 ${source}  (${data.count} vectors)`);
    for (const [cat, subcats] of Object.entries(data.categories)) {
      const subList = [...subcats].sort().join(', ');
      console.log(`   category: ${cat}${subList ? `  →  ${subList}` : ''}`);
    }
    if (data.titles.size > 0 && data.titles.size <= 20) {
      const titleList = [...data.titles].sort().slice(0, 15);
      titleList.forEach(t => console.log(`     • ${t}`));
      if (data.titles.size > 15) console.log(`     … and ${data.titles.size - 15} more`);
    }
    console.log();
  }

  console.log('═══════════════════════════════════════════════════════');
  console.log(`  TOTAL: ${totalVectors} vectors across ${sorted.length} sources`);
  console.log('═══════════════════════════════════════════════════════\n');

  // Write JSON for use by the map page builder
  const fs = require('fs');
  const jsonOutput = sorted.map(([source, data]) => ({
    source,
    vectorCount: data.count,
    categories: Object.fromEntries(
      Object.entries(data.categories).map(([cat, subcats]) => [cat, [...subcats].sort()])
    ),
    titles: [...data.titles].sort()
  }));

  fs.writeFileSync('inventory.json', JSON.stringify(jsonOutput, null, 2));
  console.log('✅ Full inventory saved to inventory.json\n');
}

getInventory().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
