// diagnose-v2.js
// Better diagnostic. Fetches a random sample of vector IDs matching several
// patterns (fcsd-*, board-*, school-*) and dumps raw metadata so we can see
// EXACTLY how these vectors are structured — no filter assumptions.
//
// Run from ~/fairfield-research-tool/ with: node diagnose-v2.js

require('dotenv').config({ path: '.env.local' });
const { Pinecone } = require('@pinecone-database/pinecone');

const INDEX_NAME = 'fairfield-civic-docs';

async function main() {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  console.log('Enumerating all vector IDs (this takes ~60s)...');
  const allIds = [];
  let paginationToken = undefined;
  do {
    const listResult = await index.listPaginated({ limit: 100, paginationToken });
    const ids = (listResult.vectors || []).map(function (v) { return v.id; });
    allIds.push.apply(allIds, ids);
    paginationToken = listResult.pagination && listResult.pagination.next;
  } while (paginationToken);
  console.log('Total vectors: ' + allIds.length);

  // Find IDs that look school-board-related
  const patterns = [
    { label: 'contains "fcsd"',      re: /fcsd/i },
    { label: 'contains "board"',     re: /board/i },
    { label: 'contains "school"',    re: /school/i },
    { label: 'contains "k12"',       re: /k12/i },
    { label: 'contains "minutes"',   re: /minutes/i },
    { label: 'contains "agenda"',    re: /agenda/i },
  ];

  console.log('\nID pattern counts:');
  patterns.forEach(function (p) {
    const hits = allIds.filter(function (id) { return p.re.test(id); });
    console.log('  ' + p.label + ' — ' + hits.length + ' IDs');
    hits.slice(0, 3).forEach(function (id) {
      console.log('    example: ' + id);
    });
  });

  // Try to find vectors whose metadata source field contains school-board strings.
  // We can't query with a filter if the field may not exist — so instead we
  // fetch a random-ish sample of 10 IDs and dump everything.
  console.log('\n--- Raw metadata dump from 10 random vectors ---');
  const sampleIds = [];
  for (let i = 0; i < 10; i++) {
    sampleIds.push(allIds[Math.floor(Math.random() * allIds.length)]);
  }

  const fetched = await index.fetch(sampleIds);
  const records = fetched.records || {};
  Object.keys(records).forEach(function (id, i) {
    const rec = records[id];
    console.log('\n[' + (i + 1) + '] ID: ' + id);
    console.log('    metadata keys: ' + Object.keys(rec.metadata || {}).join(', '));
    const md = rec.metadata || {};
    Object.keys(md).forEach(function (k) {
      let v = md[k];
      if (typeof v === 'string' && v.length > 120) v = v.substring(0, 120) + '...';
      console.log('    ' + k + ': ' + JSON.stringify(v));
    });
  });

  // Also fetch 5 vectors whose IDs match "fcsd" or "board" if any exist
  const schoolIsh = allIds.filter(function (id) {
    return /fcsd|board|school|k12|minutes|agenda/i.test(id);
  }).slice(0, 5);

  if (schoolIsh.length > 0) {
    console.log('\n--- Raw metadata dump from school-board-ish IDs ---');
    const fetched2 = await index.fetch(schoolIsh);
    const records2 = fetched2.records || {};
    Object.keys(records2).forEach(function (id, i) {
      const rec = records2[id];
      console.log('\n[' + (i + 1) + '] ID: ' + id);
      const md = rec.metadata || {};
      console.log('    metadata keys: ' + Object.keys(md).join(', '));
      Object.keys(md).forEach(function (k) {
        let v = md[k];
        if (typeof v === 'string' && v.length > 200) v = v.substring(0, 200) + '...';
        console.log('    ' + k + ': ' + JSON.stringify(v));
      });
    });
  } else {
    console.log('\n(no IDs matched school-board patterns — nothing to sample)');
  }
}

main().catch(function (e) {
  console.error('ERROR:', e.message);
  console.error(e.stack);
  process.exit(1);
});
