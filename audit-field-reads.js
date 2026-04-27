#!/usr/bin/env node
/**
 * audit-field-reads.js
 *
 * Scans pages/ and lib/ for reads of legacy metadata fields that the
 * canonical schema (lib/metadata-schema.js) forbids on upload. A read of
 * a forbidden field is a latent bug: every legacy field has been stripped
 * from the live index, so the read returns undefined for every vector.
 *
 * Why this exists:
 *   On April 26 2026, after Phase 2 stripped legacy fields from all 14,281
 *   vectors, pages/api/research.js was still reading metadata?.file. The
 *   API silently returned empty `sources` arrays and "Unknown document"
 *   citations to the LLM for ~24 hours before someone noticed. The upload
 *   validator had no way to catch this — it guards writes, not reads.
 *
 * Exit codes:
 *   0 = clean (no forbidden reads found)
 *   1 = forbidden reads found (details printed)
 *   2 = script-level error (couldn't read schema, etc)
 */

const fs   = require('fs');
const path = require('path');

const { LEGACY_FIELDS } = require('./lib/metadata-schema');
const FORBIDDEN = Object.keys(LEGACY_FIELDS);

const SCAN_DIRS = ['pages', 'lib'];
const FILE_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx']);

function walk(dir) {
  const entries = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (name === 'node_modules' || name.startsWith('.')) continue;
      entries.push(...walk(full));
    } else if (FILE_EXTS.has(path.extname(name))) {
      // Skip backup/legacy copies of source files
      if (name.endsWith('.bak') || name.includes('.backup-')) continue;
      entries.push(full);
    }
  }
  return entries;
}

// Build one regex that matches any forbidden field after `metadata.` or
// `metadata?.` or `metadata['x']` or `metadata?.['x']`. We use \b so
// `metadata.fileName` matches but `metadata.filename` does NOT.
const fieldAlt = FORBIDDEN.map(f => f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
const PATTERN = new RegExp(
  `metadata\\??\\.(${fieldAlt})\\b|metadata\\??\\[(['"])(${fieldAlt})\\2\\]`,
  'g'
);

const violations = [];
let scanned = 0;

for (const dir of SCAN_DIRS) {
  if (!fs.existsSync(dir)) {
    console.error(`Directory not found: ${dir}`);
    continue;
  }
  for (const file of walk(dir)) {
    scanned++;
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    for (let i = 0; i < lines.length; i++) {
      const matches = [...lines[i].matchAll(PATTERN)];
      for (const m of matches) {
        const field = m[1] || m[3];
        violations.push({
          file,
          line: i + 1,
          field,
          canonical: LEGACY_FIELDS[field],
          snippet: lines[i].trim().slice(0, 120),
        });
      }
    }
  }
}

console.log(`\n=== Field-Reads Audit — ${new Date().toISOString()} ===`);
console.log(`Scanned: ${scanned} files in ${SCAN_DIRS.join(', ')}`);
console.log(`Forbidden fields checked: ${FORBIDDEN.join(', ')}\n`);

if (violations.length === 0) {
  console.log('✅ Clean — no reads of forbidden metadata fields found.\n');
  process.exit(0);
}

console.log(`❌ Found ${violations.length} read(s) of forbidden field(s):\n`);
for (const v of violations) {
  console.log(`  ${v.file}:${v.line}`);
  console.log(`    field: "${v.field}"  →  use "${v.canonical}" instead`);
  console.log(`    code:  ${v.snippet}\n`);
}
process.exit(1);
