#!/usr/bin/env node
/**
 * patch-auto-deploy.js
 * Adds automatic deploy call to the end of each upload script.
 * Run once from ~/fairfield-research-tool/
 */

const fs = require('fs');
const path = require('path');

const SCRIPTS = [
  {
    file: 'document-processor.js',
    // Append after the last console.log in the done/summary block
    anchor: /console\.log\(`✅ Done.*?\);\s*$/ms,
    description: 'PDF batch uploader',
    msg: 'Update knowledge base — PDF upload',
  },
  {
    file: 'txt-processor.js',
    anchor: /console\.log\(`✅ Done.*?\);\s*$/ms,
    description: 'Text file uploader',
    msg: 'Update knowledge base — text upload',
  },
  {
    file: 'batch-upload-school-board.js',
    anchor: /console\.log\('\\n=== Done ===/ms,
    description: 'FCSD school board batch uploader',
    msg: 'Update knowledge base — FCSD board minutes upload',
  },
  {
    file: path.join('scrapers', 'run-all-orgs.js'),
    anchor: /process\.exit\(0\)/,
    description: 'Master scraper runner',
    msg: 'Update knowledge base — scraper run',
  },
];

const DEPLOY_SNIPPET = `
// ── Auto-deploy to Vercel ──────────────────────────────────────────────────
const { deploy } = require('./deploy');
deploy(COMMIT_MSG);
`;

let patched = 0;
let skipped = 0;

SCRIPTS.forEach(({ file, description, msg }) => {
  const filePath = path.join(__dirname, file);

  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  Not found, skipping: ${file}`);
    skipped++;
    return;
  }

  let src = fs.readFileSync(filePath, 'utf8');

  if (src.includes("require('./deploy')")) {
    console.log(`  ✓  Already patched: ${file}`);
    skipped++;
    return;
  }

  // Append deploy call at end of file
  const snippet = DEPLOY_SNIPPET.replace('COMMIT_MSG', `'${msg}'`);
  src = src.trimEnd() + '\n' + snippet + '\n';
  fs.writeFileSync(filePath, src);
  console.log(`  ✓  Patched: ${file} (${description})`);
  patched++;
});

console.log(`\nDone. ${patched} patched, ${skipped} skipped.`);
console.log('Every upload script will now auto-deploy to Vercel when it completes cleanly.\n');
