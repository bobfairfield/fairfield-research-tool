#!/usr/bin/env node
/**
 * verify-field-alias-pass2.js — Spot-check that the 50 vectors patched in Pass 2
 * actually have their canonical fields populated in Pinecone.
 *
 * Reads field-alias-migration-progress.json (written by the apply script) to find
 * which vector IDs were just patched, then fetches them and reports whether the
 * canonical fields now exist alongside (conservative mode) or instead of
 * (aggressive mode) the legacy fields.
 *
 * Usage: node verify-field-alias-pass2.js
 */

require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });
const { Pinecone } = require('@pinecone-database/pinecone');
const fs = require('fs');
const path = require('path');

const INDEX_NAME = 'fairfield-civic-docs';
const PROGRESS_PATH = path.join(__dirname, 'field-alias-migration-progress.json');
const PLAN_PATH = path.join(__dirname, 'field-alias-migration-plan.json');

const ALIAS_MAP = {
  filename: ['file', 'fileName'],
  chunkIndex: ['chunk_index', 'chunkNum'],
  sourceUrl: ['url', 'source_url']
};

async function main() {
  if (!fs.existsSync(PROGRESS_PATH)) {
    console.error('ERROR: field-alias-migration-progress.json not found. Did the apply script run?');
    process.exit(1);
  }
  if (!fs.existsSync(PLAN_PATH)) {
    console.error('ERROR: field-alias-migration-plan.json not found.');
    process.exit(1);
  }

  const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
  const plan = JSON.parse(fs.readFileSync(PLAN_PATH, 'utf8'));
  const planById = new Map(plan.entries.map(e => [e.id, e]));

  const idsToCheck = progress.processedIds.slice(0, 50);
  console.log(`\n=== Verifying ${idsToCheck.length} patched vectors ===\n`);
  console.log(`Mode reported in progress file: ${progress.mode}`);
  console.log('');

  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  const fetched = await index.fetch(idsToCheck);
  const records = fetched.records || {};

  let allGood = 0;
  let missingCanonical = 0;
  let missingLegacy = 0;        // unexpected — only relevant in aggressive mode
  let surpriseConflict = 0;
  const issues = [];

  console.log('Per-vector check:');
  console.log('');
  for (const id of idsToCheck) {
    const rec = records[id];
    if (!rec) {
      issues.push({ id, problem: 'NOT FOUND in Pinecone' });
      continue;
    }
    const md = rec.metadata || {};
    const planEntry = planById.get(id);
    if (!planEntry) {
      issues.push({ id, problem: 'no plan entry' });
      continue;
    }

    // Check that each canonical field in the patch is now present with the expected value
    const expected = planEntry.conservativePatch;
    const checks = [];
    let vectorOk = true;

    for (const [field, expectedValue] of Object.entries(expected)) {
      const actualValue = md[field];
      if (actualValue === undefined) {
        checks.push(`MISSING canonical \`${field}\``);
        vectorOk = false;
        missingCanonical++;
      } else if (String(actualValue) !== String(expectedValue)) {
        checks.push(`WRONG VALUE for \`${field}\`: expected "${expectedValue}", got "${actualValue}"`);
        vectorOk = false;
        surpriseConflict++;
      } else {
        checks.push(`✓ \`${field}\`="${actualValue}"`);
      }
    }

    // For conservative mode, legacy fields should still be there
    if (progress.mode === 'conservative') {
      for (const legacy of planEntry.fieldsToRemoveInAggressive || []) {
        if (!(legacy in md)) {
          checks.push(`unexpected: legacy \`${legacy}\` was removed (conservative mode should preserve)`);
          missingLegacy++;
        }
      }
    }

    if (vectorOk) {
      allGood++;
      // Print a compact line per OK vector for visibility
      const fieldsAdded = Object.keys(expected).join(', ');
      console.log(`  ✓ ${id} — added ${fieldsAdded}`);
    } else {
      console.log(`  ✗ ${id}`);
      for (const c of checks) console.log(`      ${c}`);
      issues.push({ id, problem: checks.filter(c => !c.startsWith('✓')).join('; ') });
    }
  }

  console.log('');
  console.log('=== Summary ===');
  console.log(`  Vectors checked: ${idsToCheck.length}`);
  console.log(`  All canonical fields present and correct: ${allGood}`);
  console.log(`  Missing canonical field: ${missingCanonical}`);
  console.log(`  Wrong canonical value: ${surpriseConflict}`);
  if (progress.mode === 'conservative') {
    console.log(`  Legacy field unexpectedly removed: ${missingLegacy}`);
  }
  console.log('');

  if (issues.length === 0) {
    console.log('✅ All 50 vectors verified clean. Safe to proceed with full migration.');
  } else {
    console.log(`⚠️  ${issues.length} issue(s) found — review before proceeding.`);
    process.exit(2);
  }
}

main().catch(err => {
  console.error('\nERROR:', err.message);
  console.error(err.stack);
  process.exit(1);
});
