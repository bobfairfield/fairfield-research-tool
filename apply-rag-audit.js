#!/usr/bin/env node
/**
 * apply-rag-audit.js — Phase B of the RAG source cleanup.
 *
 * Reads rag-audit-plan.json (produced by Phase A / audit-rag-sources.js) and
 * applies the metadata changes to Pinecone. WRITES to the index.
 *
 * Safety stack:
 *   1. Dry-run by default. Pass --apply to actually write.
 *   2. Refuses to run if the plan is missing, malformed, has any
 *      reviewRequired items unresolved, or is older than 24h.
 *   3. BEFORE any writes, dumps the current metadata of every affected
 *      vector to rag-audit-backup-{timestamp}.json (rollback artifact).
 *   4. Writes a per-action progress log to rag-audit-applied-{timestamp}.json.
 *   5. Spot-checks a sample of updated vectors after applying.
 *
 * What it changes per vector:
 *   rename_source:
 *     metadata.source = action.to
 *   collapse_url_to_org (Hybrid C, Bob's May 8 design call):
 *     metadata.source    = action.to               (the orgId)
 *     metadata.sourceUrl = (vector's original source, which was a URL)
 *     metadata.orgId     = action.to
 *   All other metadata fields are untouched — Pinecone's update() does a
 *   partial-merge on metadata, only specified keys are written.
 *
 * Usage:
 *   node apply-rag-audit.js              # dry-run, prints what would change
 *   node apply-rag-audit.js --apply      # actually apply changes
 *
 * After it finishes, run `node generate-map.js` to refresh the HTML map
 * against the cleaned-up corpus, then `node deploy.js "RAG audit applied"`.
 */

const { Pinecone } = require('@pinecone-database/pinecone');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const INDEX_NAME         = 'fairfield-civic-docs';
const PLAN_FILE          = 'rag-audit-plan.json';
const FETCH_BATCH        = 100;
const LIST_BATCH         = 100;
const UPDATE_CONCURRENCY = 20;
const BATCH_DELAY_MS     = 50;
const MAX_PLAN_AGE_HOURS = 24;
const SAMPLE_VERIFY_SIZE = 8;

const args    = process.argv.slice(2);
const APPLY   = args.includes('--apply');
const DRY_RUN = !APPLY;

const fmt    = (n) => Number(n).toLocaleString();
const tsFile = () => new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const sleep  = (ms) => new Promise((r) => setTimeout(r, ms));

function fail(msg) {
  console.error(`\n❌ ${msg}\n`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Plan validation
// ---------------------------------------------------------------------------

function loadAndValidatePlan() {
  if (!fs.existsSync(PLAN_FILE)) {
    fail(`Plan file ${PLAN_FILE} not found. Run Phase A (audit-rag-sources.js) first.`);
  }
  const plan = JSON.parse(fs.readFileSync(PLAN_FILE, 'utf8'));

  const generated = new Date(plan.generated);
  const ageHours  = (Date.now() - generated.getTime()) / (1000 * 60 * 60);
  if (ageHours > MAX_PLAN_AGE_HOURS) {
    fail(`Plan is ${ageHours.toFixed(1)}h old (limit: ${MAX_PLAN_AGE_HOURS}h). Re-run Phase A.`);
  }

  if (plan.reviewRequired && plan.reviewRequired.length > 0) {
    fail(
      `Plan has ${plan.reviewRequired.length} unresolved reviewRequired item(s). ` +
      `Resolve them in ${PLAN_FILE} or re-run Phase A.`
    );
  }

  if (!Array.isArray(plan.actions) || plan.actions.length === 0) {
    fail('Plan has no actions. Nothing to apply.');
  }
  for (const a of plan.actions) {
    if (a.type !== 'rename_source' && a.type !== 'collapse_url_to_org') {
      fail(`Unknown action type: ${a.type} (action ${a.id})`);
    }
    if (a.type === 'collapse_url_to_org' && !Array.isArray(a.sourceUrlsList)) {
      fail(`collapse_url_to_org action ${a.id} missing sourceUrlsList.`);
    }
  }
  return plan;
}

// ---------------------------------------------------------------------------
// Plan summary & build the source→action lookup
// ---------------------------------------------------------------------------

function summarizePlan(plan) {
  const renameCount   = plan.actions.filter((a) => a.type === 'rename_source').length;
  const collapseCount = plan.actions.filter((a) => a.type === 'collapse_url_to_org').length;
  const totalVectors  = plan.actions.reduce((s, a) => s + (a.vectorsAffected || 0), 0);

  console.log('Plan summary:');
  console.log(`  Generated:           ${plan.generated}`);
  console.log(`  Index:               ${plan.indexName}`);
  console.log(`  Total actions:       ${plan.actions.length}`);
  console.log(`    rename_source:     ${renameCount}`);
  console.log(`    collapse_url_to_org: ${collapseCount}`);
  console.log(`  Vectors expected to be updated: ${fmt(totalVectors)}`);
  console.log(`  Sources before / after (projected): ${fmt(plan.sources.before)} → ${fmt(plan.sources.afterProjected)}`);
  console.log('');
}

/** source-string → action map. O(1) lookup per vector. */
function buildSourceLookup(plan) {
  const map = new Map();
  for (const action of plan.actions) {
    if (action.type === 'rename_source') {
      map.set(action.from, action);
    } else if (action.type === 'collapse_url_to_org') {
      for (const url of action.sourceUrlsList) map.set(url, action);
    }
  }
  return map;
}

// ---------------------------------------------------------------------------
// Discovery: list IDs + fetch full metadata
// ---------------------------------------------------------------------------

async function discoverVectors(index) {
  console.log('📋 Listing vector IDs...');
  const allIds = [];
  let pageToken;
  let pages = 0;
  while (true) {
    const opts = { limit: LIST_BATCH };
    if (pageToken) opts.paginationToken = pageToken;
    const resp = await index.listPaginated(opts);
    allIds.push(...(resp.vectors || []).map((v) => v.id));
    pages++;
    if (pages % 20 === 0) {
      process.stdout.write(`\r   ${fmt(allIds.length)} IDs (${pages} pages)`);
    }
    pageToken = resp.pagination && resp.pagination.next;
    if (!pageToken) break;
  }
  process.stdout.write('\r' + ' '.repeat(60) + '\r');
  console.log(`   ${fmt(allIds.length)} IDs listed across ${pages} pages.`);

  console.log('📥 Fetching metadata...');
  const records = new Map();
  for (let i = 0; i < allIds.length; i += FETCH_BATCH) {
    const slice = allIds.slice(i, i + FETCH_BATCH);
    const resp  = await index.fetch(slice);
    const recs  = resp.records || resp.vectors || {};
    for (const id of Object.keys(recs)) {
      records.set(id, { id, metadata: recs[id].metadata || {} });
    }
    if ((Math.floor(i / FETCH_BATCH)) % 20 === 0) {
      process.stdout.write(`\r   ${fmt(records.size)} / ${fmt(allIds.length)} fetched`);
    }
  }
  process.stdout.write('\r' + ' '.repeat(60) + '\r');
  console.log(`   ${fmt(records.size)} vectors loaded.\n`);
  return records;
}

// ---------------------------------------------------------------------------
// Compute per-vector updates
// ---------------------------------------------------------------------------

function computeUpdate(vector, action) {
  if (action.type === 'rename_source') {
    return { id: vector.id, newMetadata: { source: action.to }, action };
  }
  if (action.type === 'collapse_url_to_org') {
    return {
      id: vector.id,
      newMetadata: {
        source:    action.to,
        sourceUrl: vector.metadata.source, // preserve original URL
        orgId:     action.to,
      },
      action,
    };
  }
  return null;
}

function computeAllUpdates(records, sourceMap) {
  const updates = [];
  const perAction = new Map();
  for (const vec of records.values()) {
    const src = vec.metadata && vec.metadata.source;
    if (!src) continue;
    const action = sourceMap.get(src);
    if (!action) continue;
    const upd = computeUpdate(vec, action);
    if (upd) {
      updates.push(upd);
      perAction.set(action.id, (perAction.get(action.id) || 0) + 1);
    }
  }
  return { updates, perAction };
}

// ---------------------------------------------------------------------------
// Backup, apply, log
// ---------------------------------------------------------------------------

function writeBackup(updates, records) {
  const ts = tsFile();
  const path = `rag-audit-backup-${ts}.json`;
  const payload = {
    generated: new Date().toISOString(),
    indexName: INDEX_NAME,
    vectorCount: updates.length,
    note: 'Full pre-update metadata for every vector touched by Phase B. ' +
          'To roll back, re-set each id\'s metadata to the value here.',
    vectors: updates.map((u) => ({
      id: u.id,
      metadata: records.get(u.id).metadata,
    })),
  };
  fs.writeFileSync(path, JSON.stringify(payload, null, 2));
  console.log(`💾 Backup written: ${path} (${fmt(updates.length)} vectors)`);
  return path;
}

async function applyUpdates(index, updates) {
  console.log(`\n✏️  Applying ${fmt(updates.length)} metadata updates (concurrency ${UPDATE_CONCURRENCY})...`);
  const errors = [];
  let done = 0;
  for (let i = 0; i < updates.length; i += UPDATE_CONCURRENCY) {
    const slice = updates.slice(i, i + UPDATE_CONCURRENCY);
    const results = await Promise.allSettled(
      slice.map((u) => index.update({ id: u.id, metadata: u.newMetadata }))
    );
    for (let j = 0; j < results.length; j++) {
      if (results[j].status === 'rejected') {
        errors.push({ id: slice[j].id, error: String(results[j].reason) });
      }
    }
    done += slice.length;
    if (done % 500 === 0 || done === updates.length) {
      process.stdout.write(`\r   ${fmt(done)} / ${fmt(updates.length)} updated   ${errors.length ? '(' + errors.length + ' errors)' : ''}`);
    }
    if (BATCH_DELAY_MS) await sleep(BATCH_DELAY_MS);
  }
  process.stdout.write('\n');
  return { errors };
}

function writeAppliedLog(plan, updates, perAction, errors) {
  const ts = tsFile();
  const path = `rag-audit-applied-${ts}.json`;
  const payload = {
    timestamp:        new Date().toISOString(),
    planFile:         PLAN_FILE,
    planGenerated:    plan.generated,
    indexName:        INDEX_NAME,
    vectorsUpdated:   updates.length - errors.length,
    vectorsErrored:   errors.length,
    perActionCounts:  Object.fromEntries(perAction),
    actionsExecuted:  plan.actions.map((a) => ({
      id: a.id,
      type: a.type,
      to: a.to,
      from: a.from,
      vectorsExpected: a.vectorsAffected,
      vectorsActuallyUpdated: perAction.get(a.id) || 0,
    })),
    errors: errors.slice(0, 100),
  };
  fs.writeFileSync(path, JSON.stringify(payload, null, 2));
  console.log(`📝 Apply log written: ${path}`);
  return path;
}

async function verifySample(index, updates) {
  if (updates.length === 0) return;
  console.log(`\n🔍 Spot-checking ${SAMPLE_VERIFY_SIZE} vectors across the update set...`);
  const sample = [];
  const step = Math.max(1, Math.floor(updates.length / SAMPLE_VERIFY_SIZE));
  for (let i = 0; i < updates.length && sample.length < SAMPLE_VERIFY_SIZE; i += step) {
    sample.push(updates[i]);
  }
  const ids = sample.map((u) => u.id);
  const resp = await index.fetch(ids);
  const recs = resp.records || resp.vectors || {};
  let pass = 0, failC = 0;
  for (const u of sample) {
    const r = recs[u.id];
    if (!r) { failC++; console.log(`   ✗ ${u.id} not found`); continue; }
    const md = r.metadata || {};
    const ok = Object.entries(u.newMetadata).every(([k, v]) => md[k] === v);
    if (ok) {
      pass++;
      console.log(`   ✓ ${u.id.slice(0, 28).padEnd(28)} source="${md.source}"`);
    } else {
      failC++;
      console.log(`   ✗ ${u.id} mismatch — expected ${JSON.stringify(u.newMetadata)}, got ${JSON.stringify(md)}`);
    }
  }
  console.log(`   ${pass} pass, ${failC} fail`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

(async function main() {
  if (!process.env.PINECONE_API_KEY) fail('PINECONE_API_KEY not set. Check .env.local.');

  const mode = DRY_RUN ? '🟡 DRY RUN' : '🔴 APPLY MODE';
  console.log(`\n${mode}\n${'='.repeat(60)}`);

  const plan = loadAndValidatePlan();
  summarizePlan(plan);

  const sourceMap = buildSourceLookup(plan);
  console.log(`Source→action lookup built: ${fmt(sourceMap.size)} entries.\n`);

  const pc      = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index   = pc.index(INDEX_NAME);
  const records = await discoverVectors(index);

  console.log('🧮 Computing per-vector updates...');
  const { updates, perAction } = computeAllUpdates(records, sourceMap);
  console.log(`   ${fmt(updates.length)} updates computed.`);

  const expectedTotal = plan.actions.reduce((s, a) => s + (a.vectorsAffected || 0), 0);
  if (updates.length !== expectedTotal) {
    console.log(
      `   ⚠️  Expected ${fmt(expectedTotal)} from plan, computed ${fmt(updates.length)}. ` +
      `Difference of ${expectedTotal - updates.length} suggests minor drift since audit (vectors added/removed).`
    );
  }

  console.log('\nSample of proposed updates (first 5):');
  for (const u of updates.slice(0, 5)) {
    const cur = records.get(u.id).metadata;
    console.log(`  id=${u.id.slice(0, 24)}…`);
    console.log(`    BEFORE  source="${cur.source}"   sourceUrl="${cur.sourceUrl || ''}"   orgId="${cur.orgId || ''}"`);
    console.log(`    AFTER   ${Object.entries(u.newMetadata).map(([k, v]) => `${k}="${v}"`).join('   ')}`);
  }
  console.log('');

  if (DRY_RUN) {
    console.log('═'.repeat(60));
    console.log('DRY RUN COMPLETE — no changes written to Pinecone.');
    console.log('Review the plan and the sample above. To apply:');
    console.log('   node apply-rag-audit.js --apply');
    console.log('═'.repeat(60) + '\n');
    return;
  }

  console.log('');
  const backupPath = writeBackup(updates, records);
  const { errors } = await applyUpdates(index, updates);
  const appliedPath = writeAppliedLog(plan, updates, perAction, errors);
  await verifySample(index, updates);

  console.log('\n' + '═'.repeat(60));
  console.log('PHASE B COMPLETE');
  console.log('═'.repeat(60));
  console.log(`Vectors updated:   ${fmt(updates.length - errors.length)}`);
  console.log(`Errors:            ${errors.length}`);
  console.log(`Backup file:       ${backupPath}`);
  console.log(`Apply log:         ${appliedPath}`);
  console.log('');
  console.log('Next steps:');
  console.log('   1. node generate-map.js               # rebuild HTML map');
  console.log('   2. node deploy.js "RAG audit applied" # commit + push');
  console.log('');
  if (errors.length > 0) {
    console.log(`⚠️  ${errors.length} update(s) failed. See errors[] in ${appliedPath}.`);
  }
})().catch((err) => {
  console.error('\n❌ Phase B failed:', err);
  process.exit(1);
});
