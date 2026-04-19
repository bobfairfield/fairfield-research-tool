/**
 * collect-scanned-pdfs.js
 * Identifies board minutes PDFs with no text layer (scanned/image-only)
 * and copies them to ~/fairfield-research-tool/school-board-docs/needs-ocr/
 *
 * Run from ~/fairfield-research-tool:
 *   node collect-scanned-pdfs.js
 */

require('dotenv').config({ path: '.env.local' });

const fs      = require('fs');
const path    = require('path');
const pdfParse = require('pdf-parse');

const PDF_ROOT  = path.join(process.env.HOME, 'fairfield-research-tool', 'school-board-docs', 'minutes', 'Board Meeting Minutes');
const OCR_DIR   = path.join(process.env.HOME, 'fairfield-research-tool', 'school-board-docs', 'needs-ocr');

// ── Same filters as batch-upload-school-board.js ─────────────────────────────

function shouldSkipYearFolder(folderName) {
  const years = folderName.match(/\d{4}/g);
  if (!years || years.length === 0) return false;
  const endYear = parseInt(years[years.length - 1], 10);
  return endYear < 2020;
}

function isMinutesPDF(filename) {
  if (!filename.toLowerCase().endsWith('.pdf')) return false;
  if (filename.toLowerCase().includes('agenda')) return false;
  return true;
}

function collectPDFs(rootDir) {
  const results = [];
  const topLevel = fs.readdirSync(rootDir, { withFileTypes: true });

  for (const entry of topLevel) {
    if (!entry.isDirectory()) continue;
    const folderName = entry.name;
    const folderPath = path.join(rootDir, folderName);

    if (/\d{4}/.test(folderName)) {
      if (shouldSkipYearFolder(folderName)) continue;
      for (const file of fs.readdirSync(folderPath)) {
        if (isMinutesPDF(file)) {
          results.push({ filePath: path.join(folderPath, file), yearFolder: folderName, filename: file });
        }
      }
    } else {
      // Recurse one level (e.g. "Archived Board Meeting Minutes")
      const subEntries = fs.readdirSync(folderPath, { withFileTypes: true });
      for (const sub of subEntries) {
        if (!sub.isDirectory()) continue;
        if (shouldSkipYearFolder(sub.name)) continue;
        const subPath = path.join(folderPath, sub.name);
        for (const file of fs.readdirSync(subPath)) {
          if (isMinutesPDF(file)) {
            results.push({ filePath: path.join(subPath, file), yearFolder: sub.name, filename: file });
          }
        }
      }
    }
  }
  return results;
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n=== Collecting Scanned PDFs for OCR ===\n');

  if (!fs.existsSync(OCR_DIR)) {
    fs.mkdirSync(OCR_DIR, { recursive: true });
    console.log(`Created folder: ${OCR_DIR}\n`);
  } else {
    console.log(`Output folder: ${OCR_DIR}\n`);
  }

  const allFiles = collectPDFs(PDF_ROOT);
  console.log(`Scanning ${allFiles.length} PDFs...\n`);

  const scanned = [];

  for (const { filePath, yearFolder, filename } of allFiles) {
    const buf = fs.readFileSync(filePath);
    let text = '';
    try {
      const parsed = await pdfParse(buf);
      text = parsed.text.trim();
    } catch (e) {
      // parse error — treat as scanned
    }

    if (text.length < 100) {
      console.log(`  [SCANNED] ${yearFolder}/${filename}`);
      scanned.push({ filePath, yearFolder, filename });

      // Copy to needs-ocr/, prefixing with year folder to avoid name collisions
      const destName = `${yearFolder}__${filename}`;
      fs.copyFileSync(filePath, path.join(OCR_DIR, destName));
    }
  }

  console.log(`\n=== Done ===`);
  console.log(`  Scanned PDFs found : ${scanned.length}`);
  console.log(`  Copied to          : ${OCR_DIR}`);
  console.log('\nNext step: run OCR on those files, then re-upload with batch-upload-school-board.js');
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
