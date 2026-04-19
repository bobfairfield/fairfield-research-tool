// patch-docx.js
// Run from ~/fairfield-research-tool/
// node patch-docx.js

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'pages/index.js');
let src = fs.readFileSync(indexPath, 'utf8');

// ── 1. Add import at the top ──────────────────────────────────────────────────
const importLine = `import { downloadAsDocx } from '../lib/generateDocx';\n`;

if (src.includes("from '../lib/generateDocx'")) {
  console.log('✓  Import already present — skipping.');
} else {
  // Insert after the last import line
  const lastImport = src.lastIndexOf('\nimport ');
  const insertAt = src.indexOf('\n', lastImport + 1) + 1;
  src = src.slice(0, insertAt) + importLine + src.slice(insertAt);
  console.log('✓  Import added.');
}

// ── 2. Find and replace the fake msword blob block ───────────────────────────
// We look for the function that contains the msword blob and grab everything
// from the opening of that function's relevant block to the closing click()

// Strategy: find the line with 'application/msword' and walk outward to replace
// the smallest safe chunk — from any html-building lines up through a.click()

const mswordMarker = `type:'application/msword'`;
if (!src.includes(mswordMarker)) {
  console.error('ERROR: Could not find the msword blob line. Has it already been patched?');
  process.exit(1);
}

// Grab surrounding context to find the full replace target
// Find the function that wraps this — look for const/let html = ... up to URL.revokeObjectURL or a.click
const markerIdx = src.indexOf(mswordMarker);

// Walk backward to find the start of the html-building block
// Look for a blank line or the opening of the enclosing function
let blockStart = markerIdx;
// Step back to find 'const html' or 'const bom' or 'let html'
const htmlBuildPatterns = ['const html', 'let html', 'var html', 'const bom', 'let bom'];
for (const pat of htmlBuildPatterns) {
  const idx = src.lastIndexOf(pat, markerIdx);
  if (idx !== -1 && idx > blockStart - 2000) {
    blockStart = Math.min(blockStart, idx);
  }
}

// Walk forward to find a.click() and the line end
let blockEnd = src.indexOf('a.click()', markerIdx);
if (blockEnd === -1) {
  console.error('ERROR: Could not find a.click() after the blob line.');
  process.exit(1);
}
// Include the rest of that line (semicolon, newline)
blockEnd = src.indexOf('\n', blockEnd) + 1;

// Also grab any URL.revokeObjectURL line immediately after
if (src.slice(blockEnd, blockEnd + 40).includes('revokeObjectURL')) {
  blockEnd = src.indexOf('\n', blockEnd) + 1;
}

const oldBlock = src.slice(blockStart, blockEnd);
console.log('\n── Replacing this block ────────────────────────────────────');
console.log(oldBlock);
console.log('────────────────────────────────────────────────────────────\n');

// Build the replacement — uses the real docx library
const newBlock = `await downloadAsDocx('Fairfield / Jefferson County Civic Research', result);\n`;

src = src.slice(0, blockStart) + newBlock + src.slice(blockEnd);
console.log('✓  Replaced fake msword blob with real docx download.');

// ── 3. Write the patched file ─────────────────────────────────────────────────
fs.writeFileSync(indexPath, src, 'utf8');
console.log('✓  pages/index.js updated.');
console.log('\nNext step: deploy to Vercel');
console.log('  cd ~/fairfield-research-tool && npx vercel --prod --yes');
