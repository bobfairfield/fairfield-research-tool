// audit-coo-duplicates-v2.js
// Fixed: removes the broken "related uploads" probe that caused URI-too-large error.
// Writes the plan file IMMEDIATELY after confirming the 1,583 IDs, before any other work.
//
// Run from ~/fairfield-research-tool/ with: node audit-coo-duplicates-v2.js

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { Pinecone } = require('@pinecone-database/pinecone');

const INDEX_NAME = 'fairfield-civic-docs';
const OUT_PATH = 'coo-duplicates-to-delete.json';

async function main() {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  console.log('Enumerating all vector IDs (~60s)...');
  const allIds = [];
  let paginationToken = undefined;
  do {
    const listResult = await index.listPaginated({ limit: 100, paginationToken });
    const ids = (listResult.vectors || []).map(function (v) { return v.id; });
    allIds.push.apply(allIds, ids);
    paginationToken = listResult.pagination && listResult.pagination.next;
  } while (paginationToken);
  console.log('Total vectors in index: ' + allIds.length);

  // Find all IDs matching "Code of Ordinances.pdf-chunk-*"
  const cooIds = allIds.filter(function (id) {
    return id.indexOf('Code of Ordinances.pdf-chunk-') === 0;
  });

  console.log('IDs matching "Code of Ordinances.pdf-chunk-*": ' + cooIds.length);

  if (cooIds.length === 0) {
    console.log('No matching IDs found. Nothing to do.');
    return;
  }

  // WRITE PLAN FILE IMMEDIATELY — before any other network calls that could crash
  const plan = {
    generated_at: new Date().toISOString(),
    index_name: INDEX_NAME,
    total_vectors_in_index: allIds.length,
    ids_to_delete: cooIds,
    delete_count: cooIds.length,
    rationale: 'Old Code of Ordinances.pdf upload (source: "City of Fairfield", type: "city_ordinances"). Superseded by fresh uploads fairfield-title-20-zoning.txt and fairfield-code-of-ordinances-titles-1-19.txt which have cleaner structure and canonical source metadata ("cityoffairfieldiowa.com").',
    note: 'Review this file before running the deletion script. Phase B will read ids_to_delete array and delete in batches of 100.',
  };
  fs.writeFileSync(OUT_PATH, JSON.stringify(plan, null, 2));
  console.log('Plan file written: ' + OUT_PATH);

  // Now sample metadata for human verification (after plan is safely on disk)
  console.log('\nSampling metadata from 5 of the matched vectors for verification...');
  const sampleIds = [
    cooIds[0],
    cooIds[Math.floor(cooIds.length * 0.25)],
    cooIds[Math.floor(cooIds.length * 0.5)],
    cooIds[Math.floor(cooIds.length * 0.75)],
    cooIds[cooIds.length - 1],
  ];
  const fetched = await index.fetch(sampleIds);
  const records = fetched.records || {};
  sampleIds.forEach(function (id, i) {
    const rec = records[id];
    if (!rec) {
      console.log('\n[Sample ' + (i + 1) + '] ID: ' + id + ' — NOT FOUND (already deleted?)');
      return;
    }
    const md = rec.metadata || {};
    console.log('\n[Sample ' + (i + 1) + '] ID: ' + id);
    console.log('  source: ' + JSON.stringify(md.source));
    console.log('  type:   ' + JSON.stringify(md.type));
    console.log('  file:   ' + JSON.stringify(md.file));
    const txt = (md.text || '').substring(0, 200).replace(/\s+/g, ' ');
    console.log('  text:   ' + txt + '...');
  });

  console.log('\n=============================================================');
  console.log('Plan file : ' + OUT_PATH);
  console.log('Deletions : ' + cooIds.length);
  console.log('Before    : ' + allIds.length);
  console.log('After     : ' + (allIds.length - cooIds.length));
  console.log('=============================================================');
  console.log('\nNext step: review this output and the JSON file. If correct,');
  console.log('the Phase B script will delete the 1,583 vectors in the plan.');
}

main().catch(function (e) {
  console.error('ERROR:', e.message);
  process.exit(1);
});
