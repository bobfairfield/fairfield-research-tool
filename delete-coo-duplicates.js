// delete-coo-duplicates.js
// PHASE B: Reads coo-duplicates-to-delete.json and deletes the listed vectors.
//
// SAFETY: Refuses to run without --confirm flag.
// Requires coo-duplicates-to-delete.json in cwd (produced by Phase A audit).
//
// Run from ~/fairfield-research-tool/:
//   node delete-coo-duplicates.js            (dry run — shows plan, no deletion)
//   node delete-coo-duplicates.js --confirm  (actually deletes)

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const { Pinecone } = require('@pinecone-database/pinecone');

const INDEX_NAME = 'fairfield-civic-docs';
const PLAN_PATH = 'coo-duplicates-to-delete.json';
const BATCH_SIZE = 100;

async function main() {
  const confirmed = process.argv.indexOf('--confirm') !== -1;

  if (!fs.existsSync(PLAN_PATH)) {
    console.error('ERROR: Plan file not found: ' + PLAN_PATH);
    console.error('Run audit-coo-duplicates-v2.js first to generate the plan.');
    process.exit(1);
  }

  const plan = JSON.parse(fs.readFileSync(PLAN_PATH, 'utf-8'));

  if (!plan.ids_to_delete || !Array.isArray(plan.ids_to_delete)) {
    console.error('ERROR: Plan file has no ids_to_delete array.');
    process.exit(1);
  }

  console.log('=== Phase B: Delete duplicate Code of Ordinances vectors ===');
  console.log('Plan generated : ' + plan.generated_at);
  console.log('Index          : ' + plan.index_name);
  console.log('IDs to delete  : ' + plan.ids_to_delete.length);
  console.log('Index before   : ' + plan.total_vectors_in_index);
  console.log('Index after    : ' + (plan.total_vectors_in_index - plan.ids_to_delete.length));

  if (!confirmed) {
    console.log('\n*** DRY RUN — nothing will be deleted. ***');
    console.log('To actually delete, re-run with --confirm flag:');
    console.log('  node delete-coo-duplicates.js --confirm');
    return;
  }

  console.log('\n*** --confirm flag present. Proceeding with deletion. ***');

  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  // Sanity check: fetch a sample ID first to confirm it still exists as expected.
  // If the plan is stale (vectors already deleted or IDs don't match), abort.
  console.log('\nSanity check: fetching first plan ID to confirm it still exists...');
  const firstId = plan.ids_to_delete[0];
  try {
    const probe = await index.fetch([firstId]);
    const rec = (probe.records || {})[firstId];
    if (!rec) {
      console.error('ERROR: First plan ID not found in index: ' + firstId);
      console.error('Plan may be stale. Re-run Phase A audit and try again.');
      process.exit(1);
    }
    const md = rec.metadata || {};
    if (md.source !== 'City of Fairfield' || md.type !== 'city_ordinances') {
      console.error('ERROR: First plan ID has unexpected metadata:');
      console.error('  source: ' + JSON.stringify(md.source));
      console.error('  type:   ' + JSON.stringify(md.type));
      console.error('Expected source="City of Fairfield", type="city_ordinances".');
      console.error('Aborting to be safe. Re-run Phase A audit.');
      process.exit(1);
    }
    console.log('OK — sanity check passed. Metadata matches expected values.');
  } catch (e) {
    console.error('ERROR during sanity check: ' + e.message);
    process.exit(1);
  }

  // Delete in batches
  const total = plan.ids_to_delete.length;
  let deleted = 0;
  const startTime = Date.now();

  console.log('\nDeleting ' + total + ' vectors in batches of ' + BATCH_SIZE + '...');

  for (let i = 0; i < total; i += BATCH_SIZE) {
    const batch = plan.ids_to_delete.slice(i, i + BATCH_SIZE);
    try {
      await index.deleteMany(batch);
      deleted += batch.length;
      const pct = Math.round((deleted / total) * 100);
      process.stdout.write('\r  Deleted ' + deleted + '/' + total + ' (' + pct + '%)   ');
    } catch (e) {
      console.error('\nERROR deleting batch starting at index ' + i + ': ' + e.message);
      console.error('Partial deletion occurred. Deleted so far: ' + deleted);
      console.error('Re-run Phase A to see current state and re-plan.');
      process.exit(1);
    }
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  console.log('\n\nDeletion complete in ' + elapsed + 's.');

  // Verification: confirm the first deleted ID is gone
  console.log('\nVerification: fetching first deleted ID to confirm it no longer exists...');
  try {
    const probe = await index.fetch([firstId]);
    const rec = (probe.records || {})[firstId];
    if (rec) {
      console.warn('WARNING: First deleted ID still exists in index: ' + firstId);
      console.warn('Pinecone may be eventually consistent. Try `node inventory.js` in a minute.');
    } else {
      console.log('OK — first deleted ID is confirmed gone.');
    }
  } catch (e) {
    console.log('Verification fetch errored (may also indicate successful deletion): ' + e.message);
  }

  console.log('\n=== Next steps ===');
  console.log('1. Run: node generate-map.js   (rebuild knowledge map HTML)');
  console.log('2. Run: node deploy.js "Deleted 1,583 duplicate Code of Ordinances vectors"');
  console.log('   (deploy.js will commit + push the updated map)');
  console.log('3. Optionally: move coo-duplicates-to-delete.json to a /deletion-logs/ folder');
  console.log('   so the record of what was removed is preserved but not in the repo root.');
}

main().catch(function (e) {
  console.error('ERROR:', e.message);
  process.exit(1);
});
