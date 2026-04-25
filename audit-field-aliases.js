#!/usr/bin/env node
/**
 * audit-field-aliases.js — Civic Intelligence Hub field-alias migration planner
 *
 * READ-ONLY. Scans every vector in Pinecone for non-canonical metadata field names
 * and writes a migration plan JSON. Does NOT modify Pinecone.
 *
 * Phase A of the two-phase destructive-ops pattern. Phase B is a separate script
 * (apply-field-alias-migration.js) that reads the plan and applies the patches.
 *
 * Usage: node audit-field-aliases.js
 *
 * Output:
 *   - field-alias-migration-plan.json   (the plan, machine-readable)
 *   - field-alias-migration-summary.md  (executive summary, human-readable)
 */

require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });
const { Pinecone } = require('@pinecone-database/pinecone');
const fs = require('fs');
const path = require('path');

const INDEX_NAME = 'fairfield-civic-docs';
const FETCH_BATCH_SIZE = 100;

// ── Canonical mapping ──────────────────────────────────────────────────────
// For each canonical field name, list the legacy aliases that should be migrated.
const ALIAS_MAP = {
  filename: ['file', 'fileName'],
  chunkIndex: ['chunk_index', 'chunkNum'],
  sourceUrl: ['url', 'source_url']
};

// Build reverse lookup: legacy field name -> canonical name
const LEGACY_TO_CANONICAL = {};
for (const [canonical, aliases] of Object.entries(ALIAS_MAP)) {
  for (const alias of aliases) {
    LEGACY_TO_CANONICAL[alias] = canonical;
  }
}

// ── Utility: deep-equal for primitive values ──────────────────────────────
function valuesEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null || a === undefined || b === undefined) return false;
  return String(a) === String(b);
}

// ── Plan a vector's patch ─────────────────────────────────────────────────
// Returns { needsChange: bool, conservative: {...patch}, aggressive: {...patch}, fieldsToRemove: [...], notes: [...] }
function planPatch(metadata) {
  const conservativeAdd = {};   // fields to add (canonical names with legacy values)
  const aggressiveRemove = []; // legacy field names to remove (in aggressive mode)
  const conflicts = [];         // notes about conflicts found

  for (const [legacyField, canonicalField] of Object.entries(LEGACY_TO_CANONICAL)) {
    const hasLegacy = legacyField in metadata;
    if (!hasLegacy) continue;

    const legacyValue = metadata[legacyField];
    const hasCanonical = canonicalField in metadata;
    const canonicalValue = hasCanonical ? metadata[canonicalField] : undefined;

    if (hasCanonical && valuesEqual(legacyValue, canonicalValue)) {
      // Both fields exist with the same value — just remove the legacy in aggressive mode
      aggressiveRemove.push(legacyField);
      conflicts.push(`${legacyField} and ${canonicalField} both present with matching values`);
    } else if (hasCanonical && !valuesEqual(legacyValue, canonicalValue)) {
      // Both exist but values differ — DO NOT overwrite. Flag for human review.
      conflicts.push(`CONFLICT: ${legacyField}="${legacyValue}" vs ${canonicalField}="${canonicalValue}" — skipping, needs human review`);
      // Don't add to conservativeAdd or aggressiveRemove. Leave it alone.
    } else {
      // Only legacy exists. Plan to add canonical with the legacy value.
      // If multiple legacy fields map to the same canonical, the first one wins;
      // record subsequent ones as conflicts.
      if (canonicalField in conservativeAdd) {
        conflicts.push(`Multiple legacy fields map to ${canonicalField}: keeping value from earlier alias, ${legacyField}="${legacyValue}" not migrated`);
      } else {
        conservativeAdd[canonicalField] = legacyValue;
        aggressiveRemove.push(legacyField);
      }
    }
  }

  const needsChange = Object.keys(conservativeAdd).length > 0 || aggressiveRemove.length > 0;
  if (!needsChange) return null;

  // Conservative patch: just the additions
  const conservative = { ...conservativeAdd };

  // Aggressive patch: additions PLUS legacy-field removals signaled with null
  // (Pinecone's index.update() does not directly support deleting fields;
  //  the apply script will need to fetch + rewrite. For now we just record what to remove.)
  const aggressive = { ...conservativeAdd };

  return {
    conservative,
    aggressive,
    fieldsToRemove: aggressiveRemove,
    conflicts
  };
}

async function main() {
  if (!process.env.PINECONE_API_KEY) {
    console.error('ERROR: PINECONE_API_KEY not set. Is .env.local present?');
    process.exit(1);
  }

  const startedAt = new Date();
  console.log(`\n=== Field-Alias Migration Planner — ${startedAt.toISOString()} ===\n`);
  console.log('Canonical mapping:');
  for (const [canonical, aliases] of Object.entries(ALIAS_MAP)) {
    console.log(`  ${canonical} <- [${aliases.join(', ')}]`);
  }
  console.log('');

  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  // ── Phase 1: list all vector IDs ──────────────────────────────────────
  console.log('Phase 1: Listing all vector IDs...');
  const allIds = [];
  let paginationToken;
  do {
    const result = await index.listPaginated({ paginationToken });
    const ids = (result.vectors || []).map(v => v.id);
    allIds.push(...ids);
    paginationToken = result.pagination?.next;
  } while (paginationToken);
  console.log(`  Total vectors: ${allIds.length.toLocaleString()}\n`);

  // ── Phase 2: fetch and plan ───────────────────────────────────────────
  console.log('Phase 2: Fetching and planning patches...');
  const planEntries = [];
  const stats = {
    totalScanned: 0,
    totalNeedingChange: 0,
    totalConflicts: 0,
    bySource: {},
    byCanonicalField: {},
    byLegacyField: {},
    conflictExamples: []
  };

  const totalBatches = Math.ceil(allIds.length / FETCH_BATCH_SIZE);
  for (let i = 0; i < allIds.length; i += FETCH_BATCH_SIZE) {
    const batchIds = allIds.slice(i, i + FETCH_BATCH_SIZE);
    const batchNum = Math.floor(i / FETCH_BATCH_SIZE) + 1;
    if (batchNum % 10 === 0 || batchNum === totalBatches) {
      process.stdout.write(`  Batch ${batchNum}/${totalBatches}\n`);
    }

    const fetched = await index.fetch(batchIds);
    const records = fetched.records || {};

    for (const [id, rec] of Object.entries(records)) {
      stats.totalScanned++;
      const md = rec.metadata || {};
      const plan = planPatch(md);
      if (!plan) continue;

      stats.totalNeedingChange++;
      const source = md.source || '(no-source)';
      stats.bySource[source] = (stats.bySource[source] || 0) + 1;

      for (const f of Object.keys(plan.conservative)) {
        stats.byCanonicalField[f] = (stats.byCanonicalField[f] || 0) + 1;
      }
      for (const f of plan.fieldsToRemove) {
        stats.byLegacyField[f] = (stats.byLegacyField[f] || 0) + 1;
      }

      const hasRealConflict = plan.conflicts.some(c => c.startsWith('CONFLICT'));
      if (hasRealConflict) {
        stats.totalConflicts++;
        if (stats.conflictExamples.length < 20) {
          stats.conflictExamples.push({ id, source, conflicts: plan.conflicts });
        }
      }

      planEntries.push({
        id,
        source,
        currentMetadataKeys: Object.keys(md).sort(),
        conservativePatch: plan.conservative,
        aggressivePatch: plan.aggressive,
        fieldsToRemoveInAggressive: plan.fieldsToRemove,
        notes: plan.conflicts
      });
    }
  }

  console.log(`  Done.\n`);

  // ── Phase 3: write outputs ────────────────────────────────────────────
  const finishedAt = new Date();
  const durationMs = finishedAt - startedAt;

  const planJson = {
    generatedAt: finishedAt.toISOString(),
    durationSeconds: Math.round(durationMs / 1000),
    index: INDEX_NAME,
    aliasMap: ALIAS_MAP,
    stats: {
      totalScanned: stats.totalScanned,
      totalNeedingChange: stats.totalNeedingChange,
      totalConflicts: stats.totalConflicts,
      changesByCanonicalField: stats.byCanonicalField,
      removalsByLegacyField: stats.byLegacyField,
      changesBySource: stats.bySource
    },
    conflictExamples: stats.conflictExamples,
    entries: planEntries
  };

  fs.writeFileSync(
    path.join(__dirname, 'field-alias-migration-plan.json'),
    JSON.stringify(planJson, null, 2)
  );
  console.log('Wrote field-alias-migration-plan.json');

  // Markdown summary
  const md = [];
  md.push('# Field-Alias Migration Plan — Summary');
  md.push('');
  md.push(`**Generated**: ${finishedAt.toISOString()}`);
  md.push(`**Duration**: ${Math.round(durationMs / 1000)}s`);
  md.push(`**Index**: \`${INDEX_NAME}\``);
  md.push('');
  md.push('## Canonical mapping');
  md.push('');
  md.push('| Canonical field | Legacy aliases (will be migrated) |');
  md.push('|---|---|');
  for (const [canonical, aliases] of Object.entries(ALIAS_MAP)) {
    md.push(`| \`${canonical}\` | ${aliases.map(a => `\`${a}\``).join(', ')} |`);
  }
  md.push('');
  md.push('## Stats');
  md.push('');
  md.push(`- **Total vectors scanned**: ${stats.totalScanned.toLocaleString()}`);
  md.push(`- **Vectors needing change**: ${stats.totalNeedingChange.toLocaleString()} (${(stats.totalNeedingChange / stats.totalScanned * 100).toFixed(1)}%)`);
  md.push(`- **Vectors with field-value conflicts** (skipped, need human review): ${stats.totalConflicts}`);
  md.push('');
  md.push('### Canonical fields to be added (conservative mode)');
  md.push('');
  md.push('| Canonical field | Vectors getting this added |');
  md.push('|---|---:|');
  for (const [f, n] of Object.entries(stats.byCanonicalField).sort((a, b) => b[1] - a[1])) {
    md.push(`| \`${f}\` | ${n.toLocaleString()} |`);
  }
  md.push('');
  md.push('### Legacy fields to be removed (aggressive mode only)');
  md.push('');
  md.push('| Legacy field | Vectors that have it |');
  md.push('|---|---:|');
  for (const [f, n] of Object.entries(stats.byLegacyField).sort((a, b) => b[1] - a[1])) {
    md.push(`| \`${f}\` | ${n.toLocaleString()} |`);
  }
  md.push('');
  md.push('### Top sources affected');
  md.push('');
  const topSources = Object.entries(stats.bySource).sort((a, b) => b[1] - a[1]).slice(0, 15);
  md.push('| Source | Vectors needing change |');
  md.push('|---|---:|');
  for (const [src, n] of topSources) {
    md.push(`| \`${src.length > 80 ? src.substring(0, 77) + '...' : src}\` | ${n.toLocaleString()} |`);
  }
  md.push('');
  if (stats.totalConflicts > 0) {
    md.push(`### Conflict examples (first ${Math.min(20, stats.conflictExamples.length)})`);
    md.push('');
    md.push('Vectors where both legacy and canonical field exist with **different values**. These are NOT auto-migrated by either mode — they need a human decision.');
    md.push('');
    for (const ex of stats.conflictExamples) {
      md.push(`- **${ex.id}** (\`${ex.source}\`)`);
      for (const c of ex.conflicts) md.push(`  - ${c}`);
    }
    md.push('');
  }
  md.push('## Sample entries (first 5)');
  md.push('');
  md.push('```json');
  md.push(JSON.stringify(planEntries.slice(0, 5), null, 2));
  md.push('```');

  fs.writeFileSync(path.join(__dirname, 'field-alias-migration-summary.md'), md.join('\n'));
  console.log('Wrote field-alias-migration-summary.md');

  console.log(`\n=== Plan complete in ${Math.round(durationMs / 1000)}s ===`);
  console.log(`  ${stats.totalScanned.toLocaleString()} scanned, ${stats.totalNeedingChange.toLocaleString()} need change, ${stats.totalConflicts} conflicts`);
  console.log('\nNext: review field-alias-migration-summary.md before running the apply script.\n');
}

main().catch(err => {
  console.error('\nERROR:', err.message);
  console.error(err.stack);
  process.exit(1);
});
