#!/usr/bin/env node
/**
 * deploy.js — Civic Intelligence Hub deployment script
 *
 * Run after any RAG upload to regenerate the knowledge map and push to Vercel.
 * Blocks deployment if there are unmapped sources in SOURCE_CATALOG.
 *
 * Usage: node deploy.js "optional commit message"
 */

const { execSync } = require('child_process');

const commitMsg = process.argv[2] || 'Update knowledge base map';

function run(cmd, opts = {}) {
  return execSync(cmd, { encoding: 'utf8', stdio: opts.silent ? 'pipe' : 'inherit' });
}

console.log('\n=== Civic Intelligence Hub — Deploy ===\n');

// ── Step 1: Regenerate the map ────────────────────────────────────────────────
console.log('Step 1: Regenerating knowledge base map...');
const mapOutput = run('node generate-map.js', { silent: true });
process.stdout.write(mapOutput);

// ── Step 2: Check for unmapped sources ───────────────────────────────────────
if (mapOutput.includes('New sources not yet in SOURCE_CATALOG')) {
  console.log('\n❌ DEPLOY BLOCKED — Unmapped sources detected.');
  console.log('   Add all sources to SOURCE_CATALOG and URL_DOMAIN_MAP in generate-map.js,');
  console.log('   then re-run: node deploy.js\n');
  process.exit(1);
}

console.log('✅ No unmapped sources. Proceeding to deploy.\n');

// ── Step 3: Commit and push ───────────────────────────────────────────────────
console.log('Step 2: Committing and pushing to GitHub → Vercel...');
try {
  run('git add -A');
  run(`git commit -m "${commitMsg}" || true`);
  run('git push');
  console.log('\n✅ Deployed. Vercel will update civicintelligencehub.com within ~60 seconds.\n');
} catch (err) {
  console.error('\n❌ Git push failed:', err.message);
  process.exit(1);
}
