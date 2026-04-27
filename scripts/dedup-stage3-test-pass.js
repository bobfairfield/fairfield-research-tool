#!/usr/bin/env node
/**
 * scripts/dedup-stage3-test-pass.js
 *
 * Stage 3 of source dedup. Smallest test pass.
 *
 * Migrates the 6 vectors with source='Fairfield Beautification Commission Weed Team'
 * to source='fairfield-beautification' using index.update() (partial metadata
 * update — only the source field is overwritten).
 *
 * Verification AFTER the update:
 *   - Old source: should return 0 vectors
 *   - New source: should return 6 vectors with the expected IDs
 *
 * Safety:
 *   - Reads the exact ID list from source-dedup-plan.json (Stage 1 output)
 *     so we never operate on stale or guessed IDs.
 *   - Aborts if the plan can't be loaded or the source is missing.
 *   - Aborts before mutation if the live count doesn't match the plan count.
 */

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { Pinecone } = require('@pinecone-database/pinecone');

const FROM_SOURCE = 'Fairfield Beautification Commission Weed Team';
const TO_SOURCE   = 'fairfield-beautification';
const INDEX_NAME  = 'fairfield-civic-docs';
const PLAN_PATH   = 'source-dedup-plan.json';

async function main() {
  // ── Load plan ─────────────────────────────────────────────────────────────
  if (!fs.existsSync(PLAN_PATH)) {
    console.error(`❌ ${PLAN_PATH} not found. Run scripts/build-dedup-plan.js first.`);
    process.exit(1);
  }
  const plan = JSON.parse(fs.readFileSync(PLAN_PATH, 'utf8'));
  const entry = plan.plan[FROM_SOURCE];
  if (!entry) {
    console.error(`❌ "${FROM_SOURCE}" not found in plan.`);
    process.exit(1);
  }
  if (entry.to !== TO_SOURCE) {
    console.error(`❌ Plan says "${FROM_SOURCE}" → "${entry.to}", expected → "${TO_SOURCE}".`);
    process.exit(1);
  }
  const ids = entry.ids;
  console.log(`=== Stage 3: Test pass ===`);
  console.log(`From: "${FROM_SOURCE}"`);
  console.log(`To:   "${TO_SOURCE}"`);
  console.log(`Plan: ${ids.length} vector IDs to update\n`);

  // ── Pre-flight: confirm live count matches the plan ───────────────────────
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);
  const dummy = new Array(1536).fill(0);

  console.log('Pre-flight: confirming live count matches plan...');
  const preCheck = await index.query({
    vector: dummy,
    topK: 10000,
    filter: { source: { $eq: FROM_SOURCE } },
    includeMetadata: false,
    includeValues: false,
  });
  const liveIds = (preCheck.matches || []).map(m => m.id);
  console.log(`  Live: ${liveIds.length} vectors with source="${FROM_SOURCE}"`);

  if (liveIds.length !== ids.length) {
    console.error(`❌ Live count (${liveIds.length}) does not match plan count (${ids.length}). Aborting — re-run Stage 1 first.`);
    process.exit(1);
  }

  // Confirm every plan ID is present live (set equality, order-independent)
  const liveSet = new Set(liveIds);
  const missing = ids.filter(id => !liveSet.has(id));
  if (missing.length > 0) {
    console.error(`❌ ${missing.length} plan ID(s) not found live. Aborting. First few: ${missing.slice(0, 3).join(', ')}`);
    process.exit(1);
  }
  console.log('  ✅ Pre-flight clean.\n');

  // ── Apply updates ─────────────────────────────────────────────────────────
  console.log(`Applying ${ids.length} updates...`);
  let updated = 0;
  for (const id of ids) {
    try {
      await index.update({
        id,
        metadata: { source: TO_SOURCE },
      });
      updated++;
      process.stdout.write(`  ${updated}/${ids.length} `);
    } catch (err) {
      console.error(`\n❌ Update failed on id="${id}": ${err.message}`);
      process.exit(1);
    }
  }
  console.log('\n  ✅ All updates submitted.\n');

  // Pinecone updates are eventually consistent. Wait briefly before verifying.
  console.log('Waiting 3s for index consistency...\n');
  await new Promise(r => setTimeout(r, 3000));

  // ── Verify: old source should be empty, new source should have 6 ─────────
  console.log('Verification:');

  const oldCheck = await index.query({
    vector: dummy,
    topK: 10000,
    filter: { source: { $eq: FROM_SOURCE } },
    includeMetadata: false,
    includeValues: false,
  });
  const oldRemaining = (oldCheck.matches || []).length;
  console.log(`  Old source "${FROM_SOURCE}": ${oldRemaining} vector(s)  ${oldRemaining === 0 ? '✅' : '❌ EXPECTED 0'}`);

  const newCheck = await index.query({
    vector: dummy,
    topK: 10000,
    filter: { source: { $eq: TO_SOURCE } },
    includeMetadata: true,
    includeValues: false,
  });
  const newMatches = newCheck.matches || [];
  const newIds = newMatches.map(m => m.id);
  console.log(`  New source "${TO_SOURCE}": ${newMatches.length} vector(s)  ${newMatches.length === ids.length ? '✅' : '❌ EXPECTED ' + ids.length}`);

  // Confirm every plan ID is present under the new source
  const newSet = new Set(newIds);
  const stillMissing = ids.filter(id => !newSet.has(id));
  if (stillMissing.length > 0) {
    console.log(`  ❌ ${stillMissing.length} plan ID(s) NOT found under new source. First few: ${stillMissing.slice(0, 3).join(', ')}`);
  } else {
    console.log(`  ✅ All ${ids.length} plan IDs present under new source.`);
  }

  // Spot-check one full metadata payload to confirm other fields untouched
  if (newMatches.length > 0) {
    const sample = newMatches[0];
    console.log(`\nSample vector after update (id="${sample.id}"):`);
    console.log(`  source:   ${JSON.stringify(sample.metadata?.source)}`);
    console.log(`  filename: ${JSON.stringify(sample.metadata?.filename)}`);
    console.log(`  category: ${JSON.stringify(sample.metadata?.category)}`);
    console.log(`  type:     ${JSON.stringify(sample.metadata?.type)}`);
    console.log(`  text len: ${sample.metadata?.text?.length || 0}`);
  }

  const allGood = oldRemaining === 0 && newMatches.length === ids.length && stillMissing.length === 0;
  console.log(`\n${allGood ? '✅' : '❌'} Stage 3 ${allGood ? 'PASSED' : 'FAILED'}.`);
  process.exit(allGood ? 0 : 1);
}

main().catch(err => {
  console.error('FAILED:', err);
  process.exit(1);
});
