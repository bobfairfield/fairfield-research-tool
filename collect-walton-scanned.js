/**
 * collect-walton-scanned.js
 * Identifies scanned/image-only PDFs in walton-lake-docs and copies them
 * to ~/Desktop/walton-ocr/ for OCR treatment.
 *
 * Run from ~/fairfield-research-tool:
 *   node collect-walton-scanned.js
 */

require('dotenv').config({ path: '.env.local' });

const fs       = require('fs');
const path     = require('path');
const pdfParse = require('pdf-parse');

const SRC_DIR  = path.join(process.env.HOME, 'fairfield-research-tool', 'walton-lake-docs');
const DEST_DIR = path.join(process.env.HOME, 'Desktop', 'walton-ocr');

async function main() {
  console.log('\n=== Collecting Scanned Walton Lake PDFs ===\n');

  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
    console.log(`Created folder: ${DEST_DIR}\n`);
  }

  const files = fs.readdirSync(SRC_DIR)
    .filter(f => f.toLowerCase().endsWith('.pdf'))
    .sort();

  console.log(`Scanning ${files.length} PDFs...\n`);

  const scanned = [];

  for (const filename of files) {
    const filePath = path.join(SRC_DIR, filename);
    const buf = fs.readFileSync(filePath);
    let text = '';
    try {
      const parsed = await pdfParse(buf);
      text = parsed.text.trim();
    } catch (e) {
      // parse error — treat as scanned
    }

    if (text.length < 100) {
      console.log(`  [SCANNED] ${filename}`);
      scanned.push(filename);
      fs.copyFileSync(filePath, path.join(DEST_DIR, filename));
    }
  }

  console.log(`\n=== Done ===`);
  console.log(`  Scanned PDFs found : ${scanned.length}`);
  console.log(`  Copied to          : ${DEST_DIR}`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
