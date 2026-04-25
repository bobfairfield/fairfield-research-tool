#!/usr/bin/env node
/**
 * apply-field-alias-migration.js — Civic Intelligence Hub field-alias migration applier
 *
 * PHASE B of the two-phase destructive-ops pattern. Reads field-alias-migration-plan.json
 * (produced by audit-field-aliases.js) and applies the metadata patches via Pinecone's
 * index.update() API.
 *
 * Modes:
 *   --dry-run         : Show what would be done, make no API calls (default if no mode given)
 *   --mode=conservative : Add canonical field names; leave legacy fields intact
 *   --mode=aggressive   : Add canonical names AND remove legacy fields (uses fetch+rewrite)
 *
 * Resumable: writes progress to field-alias-migration-progress.json after every batch.
 * If interrupted, restart with the same command and it will skip already-done vectors.
 *
 * Usage:
 *   node apply-field-alias-migration.js                       # dry-run (no writes)
 *   node apply-field-alias-migration.js --mode=conservative   # add canonical, keep legacy
 *   node apply-field-alias-migration.js --mode=aggressive     # add canonical, remove legacy
 *
 * Optional:
 *   --limit=N    : Stop after processing N vectors (useful for a small test pass first)
 *   --reset      : Ignore the progress file and start over from the beginning
 */

require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });
const { Pinecone } = require('@pinecone-database/pinecone');
const fs = require('fs');
const path = require('path');

const INDEX_NAME = 'fairfield-civic-docs';
const PLAN_PATH = path.join(__dirname, 'field-alias-migration-plan.json');
const PROGRESS_PATH = path.join(__dirname, 'field-alias-migration-progress.json');
const REPORT_PATH = path.join(__dirname, 'field-alias-migration-report.md');

const DELAY_MS_BETWEEN_CALLS = 50;   // throttle: ~20 calls/sec
const PROGRESS_SAVE_EVERY = 100;     // checkpoint progress every N vectors
const REPORT_EVERY = 250;            // print stats every N vectors

// ── Parse CLI args ────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const argMap = {};
for (const a of args) {
  if (a.startsWith('--')) {
    const [k, v] = a.substring(2).split('=');
    argMap[k] = v === undefined ? true : v;
  }
}

let MODE = 'dry-run';
if (argMap['mode'] === 'conservative') MODE = 'conservative';
else if (argMap['mode'] === 'aggressive') MODE = 'aggressive';
else if (argMap['dry-run']) MODE = 'dry-run';

const LIMIT = argMap.limit ? parseInt(argMap.limit, 10) : null;
const RESET = !!argMap.reset;

// ── Helpers ───────────────────────────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fmtDuration(ms) {
  if (ms < 60_000) return `${Math.round(ms / 1000)}s`;
  const m = Math.floor(ms / 60_000);
  const s = Math.round((ms % 60_000) / 1000);
  return `${m}m ${s}s`;
}

async function main() {
  if (!process.env.PINECONE_API_KEY) {
    console.error('ERROR: PINECONE_API_KEY not set. Is .env.local present?');
    process.exit(1);
  }

  if (!fs.existsSync(PLAN_PATH)) {
    console.error(`ERROR: ${PLAN_PATH} not found. Run audit-field-aliases.js first.`);
    process.exit(1);
  }

  console.log('\n=== Field-Alias Migration Applier ===\n');
  console.log(`Mode: ${MODE.toUpperCase()}`);
  if (LIMIT) console.log(`Limit: ${LIMIT} vectors (test pass)`);
  if (RESET) console.log(`Reset: yes (ignoring previous progress)`);
  console.log('');

  // Load plan
  const plan = JSON.parse(fs.readFileSync(PLAN_PATH, 'utf8'));
  const allEntries = plan.entries;
  console.log(`Plan: ${allEntries.length.toLocaleString()} entries in field-alias-migration-plan.json`);
  console.log(`Plan generated: ${plan.generatedAt}`);
  console.log('');

  // Load or initialize progress
  let processed = new Set();
  if (!RESET && fs.existsSync(PROGRESS_PATH)) {
    const prog = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
    processed = new Set(prog.processedIds || []);
    console.log(`Resuming from previous run: ${processed.size.toLocaleString()} already processed.`);
    if (prog.mode && prog.mode !== MODE && MODE !== 'dry-run') {
      console.error(`ERROR: Previous progress was in mode "${prog.mode}", but you specified "${MODE}". Use --reset or use the same mode.`);
      process.exit(1);
    }
    console.log('');
  }

  // Filter to entries not yet processed
  const todo = allEntries.filter(e => !processed.has(e.id));
  const todoLimited = LIMIT ? todo.slice(0, LIMIT) : todo;
  console.log(`To process this run: ${todoLimited.length.toLocaleString()} entries`);
  console.log('');

  if (todoLimited.length === 0) {
    console.log('Nothing to do. Migration is already complete (or limit reached).');
    return;
  }

  // Confirmation gate for write modes
  if (MODE !== 'dry-run') {
    console.log(`!! This will make WRITE calls to Pinecone in ${MODE.toUpperCase()} mode.`);
    console.log(`!! Throttle: ~${1000 / (DELAY_MS_BETWEEN_CALLS + 50)} calls/sec`);
    console.log(`!! ETA at that rate: ~${fmtDuration(todoLimited.length * (DELAY_MS_BETWEEN_CALLS + 50))}`);
    console.log(`!! Press Ctrl+C in the next 5 seconds to abort.`);
    console.log('');
    await sleep(5000);
  }

  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  const startedAt = Date.now();
  const stats = {
    total: todoLimited.length,
    succeeded: 0,
    failed: 0,
    skippedNoChange: 0,
    failures: []   // up to 50 sample failures
  };

  for (let i = 0; i < todoLimited.length; i++) {
    const entry = todoLimited[i];
    const patch = MODE === 'aggressive' ? entry.aggressivePatch : entry.conservativePatch;

    if (!patch || Object.keys(patch).length === 0) {
      stats.skippedNoChange++;
      processed.add(entry.id);
      continue;
    }

    try {
      if (MODE === 'dry-run') {
        // No-op — just count
      } else if (MODE === 'conservative') {
        // Patch metadata only (additive). index.update() merges metadata, doesn't replace.
        await index.update({ id: entry.id, metadata: patch });
        await sleep(DELAY_MS_BETWEEN_CALLS);
      } else if (MODE === 'aggressive') {
        // Pinecone index.update() can't remove fields. To remove legacy fields, we
        // must fetch the vector, build the desired metadata (current minus legacy + canonical),
        // and update. This costs an extra fetch per vector.
        const fetched = await index.fetch([entry.id]);
        const current = fetched.records?.[entry.id]?.metadata || {};
        const newMeta = { ...current, ...patch };
        for (const f of entry.fieldsToRemoveInAggressive || []) {
          delete newMeta[f];
        }
        // Pinecone update() merges; to "remove" we'd ideally replace. Since update() merges,
        // the cleanest way to remove is to upsert with the full vector (fetched.values + newMeta).
        // But that requires fetching values too. Pinecone fetch() returns values by default.
        const values = fetched.records?.[entry.id]?.values;
        if (!values) {
          throw new Error(`No values returned for ${entry.id}`);
        }
        await index.upsert([{ id: entry.id, values, metadata: newMeta }]);
        await sleep(DELAY_MS_BETWEEN_CALLS);
      }
      stats.succeeded++;
      processed.add(entry.id);
    } catch (err) {
      stats.failed++;
      if (stats.failures.length < 50) {
        stats.failures.push({ id: entry.id, error: err.message });
      }
      // Don't abort on individual failures; keep going.
    }

    // Periodic checkpoint and progress print
    if ((i + 1) % PROGRESS_SAVE_EVERY === 0) {
      fs.writeFileSync(PROGRESS_PATH, JSON.stringify({
        mode: MODE,
        lastUpdate: new Date().toISOString(),
        processedIds: Array.from(processed)
      }, null, 0));   // single line for fast write
    }

    if ((i + 1) % REPORT_EVERY === 0 || i === todoLimited.length - 1) {
      const elapsed = Date.now() - startedAt;
      const rate = (i + 1) / (elapsed / 1000);
      const remaining = todoLimited.length - (i + 1);
      const eta = remaining / rate;
      console.log(
        `  ${(i + 1).toLocaleString()}/${todoLimited.length.toLocaleString()} ` +
        `(${stats.succeeded} ok, ${stats.failed} failed, ${stats.skippedNoChange} no-op) ` +
        `· ${rate.toFixed(1)}/s · ETA ${fmtDuration(eta * 1000)}`
      );
    }
  }

  // Final progress save
  fs.writeFileSync(PROGRESS_PATH, JSON.stringify({
    mode: MODE,
    lastUpdate: new Date().toISOString(),
    processedIds: Array.from(processed)
  }, null, 0));

  // Final report
  const totalElapsed = Date.now() - startedAt;
  console.log('');
  console.log(`=== Migration ${MODE === 'dry-run' ? 'DRY-RUN ' : ''}complete in ${fmtDuration(totalElapsed)} ===`);
  console.log(`  Succeeded: ${stats.succeeded.toLocaleString()}`);
  console.log(`  Failed:    ${stats.failed.toLocaleString()}`);
  console.log(`  No-op:     ${stats.skippedNoChange.toLocaleString()}`);
  console.log(`  Mode:      ${MODE}`);
  console.log('');

  // Markdown report
  const md = [];
  md.push(`# Field-Alias Migration Apply Report`);
  md.push('');
  md.push(`**Run at**: ${new Date().toISOString()}`);
  md.push(`**Mode**: \`${MODE}\``);
  md.push(`**Duration**: ${fmtDuration(totalElapsed)}`);
  md.push(`**Plan source**: \`field-alias-migration-plan.json\` (generated ${plan.generatedAt})`);
  md.push('');
  md.push('## Results');
  md.push('');
  md.push(`- **Succeeded**: ${stats.succeeded.toLocaleString()}`);
  md.push(`- **Failed**: ${stats.failed.toLocaleString()}`);
  md.push(`- **No-op (no patch needed)**: ${stats.skippedNoChange.toLocaleString()}`);
  md.push(`- **Total processed this run**: ${(stats.succeeded + stats.failed + stats.skippedNoChange).toLocaleString()}`);
  md.push(`- **Total cumulative processed (across all runs)**: ${processed.size.toLocaleString()} of ${allEntries.length.toLocaleString()}`);
  md.push('');
  if (stats.failures.length > 0) {
    md.push(`## Failure samples (first ${stats.failures.length})`);
    md.push('');
    md.push('| Vector ID | Error |');
    md.push('|---|---|');
    for (const f of stats.failures) {
      md.push(`| \`${f.id}\` | ${f.error.replace(/\|/g, '\\|').substring(0, 120)} |`);
    }
    md.push('');
  }
  md.push('## Next steps');
  md.push('');
  if (MODE === 'dry-run') {
    md.push('- Re-run with `--mode=conservative` to actually apply the canonical-name additions.');
  } else if (MODE === 'conservative') {
    md.push('- Re-run `node audit-rag.js` to verify the canonical fields are now populated.');
    md.push('- If everything looks right, re-run this script with `--mode=aggressive --reset` to remove the legacy field names.');
  } else if (MODE === 'aggressive') {
    md.push('- Re-run `node audit-rag.js` to verify the legacy field names are gone.');
    md.push('- Update upload scripts to use canonical field names going forward (Memory #14, task 2c).');
  }
  fs.writeFileSync(REPORT_PATH, md.join('\n'));
  console.log(`Wrote ${path.basename(REPORT_PATH)}\n`);
}

main().catch(err => {
  console.error('\nERROR:', err.message);
  console.error(err.stack);
  process.exit(1);
});
