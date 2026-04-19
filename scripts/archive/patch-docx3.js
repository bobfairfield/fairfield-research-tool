// patch-docx3.js
// Run from ~/fairfield-research-tool/
// node patch-docx3.js

const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'pages/index.js');
let src = fs.readFileSync(indexPath, 'utf8');

const old = `const handleExportWord = () => {`;
const neu = `const handleExportWord = async () => {`;

if (!src.includes(old)) {
  console.log('ERROR: Could not find handleExportWord — check index.js manually.');
  process.exit(1);
}

src = src.replace(old, neu);
fs.writeFileSync(indexPath, src, 'utf8');
console.log('✓  handleExportWord is now async');
console.log('\nDeploy:');
console.log('  npx vercel --prod --yes');
