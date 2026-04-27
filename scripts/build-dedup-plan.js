#!/usr/bin/env node
/**
 * scripts/build-dedup-plan.js
 *
 * Stage 1 of source dedup (backlog item b). READ-ONLY.
 *
 * Queries Pinecone for the affected vectors, builds a plan of source-key
 * rewrites, and checks whether each destination key is registered in
 * generate-map.js's SOURCE_CATALOG. Writes:
 *
 *   source-dedup-plan.json   — full plan (IDs grouped by from→to)
 *   source-dedup-summary.txt — human-readable summary
 *
 * No mutations. Run, review, then proceed to Stage 3 (test pass).
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');
const { Pinecone } = require('@pinecone-database/pinecone');

const MERGE_MAP = {
  'City of Fairfield':                              'cityoffairfieldiowa.com',
  'City of Fairfield Website':                      'cityoffairfieldiowa.com',
  'City Attorney':                                  'cityoffairfieldiowa.com',
  'Fairfield Public Library':                       'fairfield-public-library',
  'Iowa Dance Collective':                          'iowa-dance-collective',
  'Grow Fairfield':                                 'grow-fairfield',
  'Fairfield Area Chamber of Commerce':             'fairfieldiowa.com',
  'Fairfield Cares':                                'fairfield-cares',
  'Fairfield Beautification Commission Weed Team':  'fairfield-beautification',
  'Fairfield Beautification Commission 2025 Volunteers': 'fairfield-beautification',
};

const INDEX_NAME = 'fairfield-civic-docs';

async function main() {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  console.log('=== Source Dedup Plan Builder (Stage 1, READ-ONLY) ===\n');

  // ── Query each freeform source for its vector IDs ─────────────────────────
  const plan = {};
  let totalVectors = 0;

  for (const [fromSource, toSource] of Object.entries(MERGE_MAP)) {
    process.stdout.write(`Querying "${fromSource}"... `);

    const ids = [];
    let paginationToken = undefined;
    do {
      const resp = await index.listPaginated({
        prefix: undefined,
        limit: 100,
        paginationToken,
      });
      // listPaginated returns ALL ids; we need to filter by source.
      // Instead, query with metadata filter (more efficient).
      paginationToken = resp.pagination?.next;
      // Break out — use the dedicated query path below instead.
      break;
    } while (paginationToken);

    // Use a filtered fetch via query with topK + filter.
    // We use a dummy vector and rely on the filter to grab everything.
    // For sources with hundreds/thousands of vectors, page through.
    const dummyVector = new Array(1536).fill(0);
    let collected = [];
    let seenIds = new Set();
    const PAGE_SIZE = 1000;

    // Pinecone query with filter returns up to topK matches. For comprehensive
    // collection, we use `listPaginated` with no filter and post-filter in code.
    // But that's expensive at 18k vectors. Instead, use repeated query with
    // exclusion of already-seen IDs. Pinecone doesn't support NOT IN at scale,
    // so we'll use a different approach: fetch IDs in chunks via list, then
    // filter by the source field via batched index.fetch().
    //
    // Simplest reliable approach for this scale: query once with topK=10000
    // and metadata filter. Pinecone caps topK at 10000.
    const queryResp = await index.query({
      vector: dummyVector,
      topK: 10000,
      filter: { source: { $eq: fromSource } },
      includeMetadata: false,
      includeValues: false,
    });

    for (const m of queryResp.matches || []) {
      if (!seenIds.has(m.id)) {
        seenIds.add(m.id);
        collected.push(m.id);
      }
    }

    plan[fromSource] = {
      to: toSource,
      vectorCount: collected.length,
      ids: collected,
    };
    totalVectors += collected.length;
    console.log(`${collected.length} vectors → "${toSource}"`);
  }

  // ── Read SOURCE_CATALOG from generate-map.js ──────────────────────────────
  console.log('\n--- Checking SOURCE_CATALOG registration ---');
  const generateMapSrc = fs.readFileSync('generate-map.js', 'utf8');

  const destinationKeys = [...new Set(Object.values(MERGE_MAP))];
  const catalogStatus = {};
  for (const dest of destinationKeys) {
    // Look for the key as a string literal in the file.
    const patterns = [
      `'${dest}'`,
      `"${dest}"`,
      `\`${dest}\``,
    ];
    const found = patterns.some(p => generateMapSrc.includes(p));
    catalogStatus[dest] = found;
    console.log(`  ${found ? '✅' : '❌'} ${dest}`);
  }

  const missing = destinationKeys.filter(d => !catalogStatus[d]);

  // ── Write plan files ──────────────────────────────────────────────────────
  fs.writeFileSync(
    'source-dedup-plan.json',
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      mergeMap: MERGE_MAP,
      catalogStatus,
      missingFromCatalog: missing,
      totals: {
        sourcesAffected: Object.keys(plan).length,
        destinationKeys: destinationKeys.length,
        totalVectors,
      },
      plan,
    }, null, 2)
  );

  // Human-readable summary
  const summaryLines = [
    '=== Source Dedup Plan Summary ===',
    `Generated: ${new Date().toISOString()}`,
    '',
    `Sources to merge: ${Object.keys(plan).length}`,
    `Destination keys: ${destinationKeys.length}`,
    `Total vectors affected: ${totalVectors}`,
    '',
    '--- Merge map (source → destination, vector count) ---',
  ];
  for (const [from, info] of Object.entries(plan)) {
    summaryLines.push(`  "${from}" → "${info.to}"  (${info.vectorCount} vectors)`);
  }
  summaryLines.push('');
  summaryLines.push('--- SOURCE_CATALOG status ---');
  for (const dest of destinationKeys) {
    summaryLines.push(`  ${catalogStatus[dest] ? '✅' : '❌ NEEDS ADDING'}  ${dest}`);
  }
  if (missing.length > 0) {
    summaryLines.push('');
    summaryLines.push(`⚠️  ${missing.length} destination key(s) missing from generate-map.js SOURCE_CATALOG:`);
    summaryLines.push(`   ${missing.join(', ')}`);
    summaryLines.push('   Add these before running Stage 4 (full migration), or deploy will block.');
  }
  fs.writeFileSync('source-dedup-summary.txt', summaryLines.join('\n') + '\n');

  console.log('\n=== Plan written ===');
  console.log('  source-dedup-plan.json     — full plan with vector IDs');
  console.log('  source-dedup-summary.txt   — human-readable summary');
  console.log(`\nTotal: ${totalVectors} vectors across ${Object.keys(plan).length} sources → ${destinationKeys.length} destinations`);
  if (missing.length > 0) {
    console.log(`\n⚠️  ${missing.length} destination key(s) need to be added to SOURCE_CATALOG before Stage 4.`);
  } else {
    console.log('\n✅ All destination keys already registered in SOURCE_CATALOG.');
  }
}

main().catch(err => {
  console.error('FAILED:', err);
  process.exit(1);
});
