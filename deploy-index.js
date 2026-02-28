#!/usr/bin/env node
/**
 * deploy-index.js
 * Commits and pushes pages/index.js to trigger a Vercel redeploy.
 * Run from: ~/fairfield-research-tool/
 */

const { execSync } = require('child_process');

function run(cmd) {
  console.log(`> ${cmd}`);
  return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
}

try {
  // Check for changes
  const status = run('git status pages/index.js --short');
  if (!status) {
    console.log('ℹ️  No changes detected in pages/index.js — nothing to commit.');
    process.exit(0);
  }

  run('git add pages/index.js');

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
  run(`git commit -m "Update index.js — ${timestamp}"`);

  const result = run('git push');
  console.log(result);

  console.log('\n✅ pages/index.js pushed — Vercel will redeploy in ~30 seconds.');
  console.log('   https://civicintelligencehub.com');
} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
