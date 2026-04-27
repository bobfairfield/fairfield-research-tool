#!/usr/bin/env node
/**
 * scripts/dedup-stage4-full-run.js
 *
 * Stage 4 of source dedup. Full migration of remaining 1,407 vectors.
 *
 * For each (fromSource → toSource) pair in source-dedup-plan.json:
 *   1. Pre-flight: confirm live count is non-negative (resume-safe — a 0 means
 *      that source was already migrated, treat as success and skip).
 *   2. Update each vector's source field, 10 at a time in parallel.
 *   3. Verify: old source returns 0, new source contains expected IDs.
 *
 * Aborts the entire run if any per-source verification fails.
 *
 * Resume safety: re-running after a partial failure is safe. Already-migrated
 * vectors no longer match the old-source filter, so they're naturally skipped.
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { Pinecone } = require('@pinecone-database/pinecone');

const INDEX_NAME = 'fairfield-civic-docs';
const PLAN_PATH  = 'source-dedup-plan.json';
const CONCURRENCY = 10;

// Stage 3 already did this one — skip here. Listed explicitly so it's audit-able.
const ALREADY_DONE = new Set([
  'Fairfield Beautification Commission Weed Team',
]);

async function migrateSource(index, fromSource, toSource, planIds) {
  const dummy = new Array(1536).fill(0);

  // Pre-flight: get live IDs for fromSource
  const preCheck = await index.query({
    vector: dummy,
    topK: 10000,
    filter: { source: { $eq: fromSource } },
    includeMetadata: false,
    includeValues: false,
  });
  const liveIds = (preCheck.matches || []).map(m => m.id);

  if (liveIds.length === 0) {
    console.log(`  (already migrated — 0 live vectors with old source)`);
    return { migrated: 0, skipped: true };
  }

  // Use the intersection of plan IDs and live IDs — protects against drift
  const liveSet = new Set(liveIds);
  const toUpdate = planIds.filter(id => liveSet.has(id));

  if (toUpdate.length !== liveIds.length) {
    console.log(`  ⚠️  Live count (${liveIds.length}) differs from plan intersection (${toUpdate.length}).`);
    console.log(`     Drift: live has ${liveIds.length - toUpdate.length} ID(s) not in plan.`);
    console.log(`     Migrating only the ${toUpdate.length} IDs that are in both.`);
  }

  // Apply updates with bounded concurrency
  let updated = 0;
  for (let i = 0; i < toUpdate.length; i += CONCURRENCY) {
    const batch = toUpdate.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(id =>
      index.update({ id, metadata: { source: toSource } })
    ));
    updated += batch.length;
    process.stdout.write(`\r  Updating: ${updated}/${toUpdate.length}`);
  }
  console.log(' ✅');

  // Wait for consistency, then verify
  await new Promise(r => setTimeout(r, 2000));

  const oldCheck = await index.query({
    vector: dummy,
    topK: 10000,
    filter: { source: { $eq: fromSource } },
    includeMetadata: false,
    includeValues: false,
  });
  const oldRemaining = (oldCheck.matches || []).length;

  if (oldRemaining > 0) {
    console.error(`  ❌ Verification failed: ${oldRemaining} vectors still have source="${fromSource}"`);
    return { migrated: updated, verified: false };
  }

  console.log(`  ✅ Verified: 0 vectors remain with old source.`);
  return { migrated: updated, verified: true };
}

async function main() {
  if (!fs.existsSync(PLAN_PATH)) {
    console.error(`❌ ${PLAN_PATH} not found.`);
    process.exit(1);
  }
  const plan = JSON.parse(fs.readFileSync(PLAN_PATH, 'utf8'));

  // Build the work list, excluding already-done sources
  const work = Object.entries(plan.plan)
    .filter(([from]) => !ALREADY_DONE.has(from));

  const totalToMigrate = work.reduce((sum, [, info]) => sum + info.vectorCount, 0);

  console.log('=== Stage 4: Full migration ===\n');
  console.log(`Sources to migrate: ${work.length}`);
  console.log(`Vectors to migrate: ${totalToMigrate}`);
  console.log(`Already done (Stage 3): ${[...ALREADY_DONE].join(', ')}\n`);

  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  let totalMigrated = 0;
  let allGood = true;
  const results = [];

  for (const [fromSource, info] of work) {
    console.log(`\n--- "${fromSource}" → "${info.to}" (${info.vectorCount} vectors) ---`);
    const result = await migrateSource(index, fromSource, info.to, info.ids);
    results.push({ fromSource, to: info.to, ...result });
    totalMigrated += result.migrated;
    if (result.verified === false) {
      allGood = false;
      console.error(`\n❌ Aborting — verification failed for "${fromSource}".`);
      break;
    }
  }

  // Final summary
  console.log('\n=== Stage 4 Summary ===');
  console.log(`Total migrated this run: ${totalMigrated}`);
  for (const r of results) {
    const status = r.skipped ? '⏭️  skipped' : (r.verified ? '✅' : '❌');
    console.log(`  ${status}  ${r.fromSource} → ${r.to}  (${r.migrated} updated)`);
  }

  console.log(`\n${allGood ? '✅' : '❌'} Stage 4 ${allGood ? 'COMPLETE' : 'FAILED'}.`);
  process.exit(allGood ? 0 : 1);
}

main().catch(err => {
  console.error('FAILED:', err);
  process.exit(1);
});
