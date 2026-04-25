/**
 * batch-upload-school-board.js
 * Uploads Fairfield Community School District board meeting minutes to Pinecone.
 *
 * Filters applied:
 *   1. Year folders: skips any school year folder that ends BEFORE 2019-2020
 *      (i.e., keeps 2019-2020 and later)
 *   2. File type: minutes only — skips agendas
 *
 * Usage:
 *   node batch-upload-school-board.js --test     (process first 3 PDFs, no upload)
 *   node batch-upload-school-board.js            (full run)
 */

require('dotenv').config({ path: '.env.local' });

const fs   = require('fs');
const path = require('path');
const { validateMetadata } = require('./lib/metadata-schema');

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const PDF_ROOT   = path.join(process.env.HOME, 'fairfield-research-tool', 'school-board-docs', 'minutes', 'Board Meeting Minutes');
const ORG_ID     = 'fcsd-board-minutes';
const SOURCE_URL = 'https://www.fairfield.k12.ia.us/board-of-education/board-meeting-minutes';
const TEST_MODE  = process.argv.includes('--test');
const TEST_LIMIT = 3;

// ─── YEAR FILTER ─────────────────────────────────────────────────────────────

/**
 * Returns true if the folder should be SKIPPED (i.e., it predates 2019-2020).
 *
 * Folder name examples:
 *   "2017-2018"  → skip  (ends before 2019)
 *   "2018-2019"  → skip  (ends at 2019 — school year wraps up in spring 2019)
 *   "2019-2020"  → keep
 *   "2020-2021"  → keep
 *   "2024"       → keep  (single-year folders: parsed as the start year)
 *
 * Logic: extract the LAST 4-digit year in the folder name.
 * If that year is less than 2020, skip it.
 */
function shouldSkipYearFolder(folderName) {
  // Find all 4-digit sequences; use the last one as the end year
  const years = folderName.match(/\d{4}/g);
  if (!years || years.length === 0) return false; // can't tell — don't skip

  const endYear = parseInt(years[years.length - 1], 10);
  return endYear < 2020;
}

// ─── FILE FILTER ─────────────────────────────────────────────────────────────

/**
 * Returns true if the file is a minutes PDF we want to upload.
 * Agendas are excluded; minutes are included.
 */
function isMinutesPDF(filename) {
  if (!filename.toLowerCase().endsWith('.pdf')) return false;
  const lower = filename.toLowerCase();

  // Explicit agenda exclusion
  if (lower.includes('agenda')) return false;

  // Accept anything with "minute" in the name, or generic PDFs in a minutes context
  // (some districts name files by date only — include those too)
  return true;
}

// ─── COLLECT FILES ───────────────────────────────────────────────────────────

function collectPDFs(rootDir) {
  const results = [];

  if (!fs.existsSync(rootDir)) {
    console.error(`ERROR: PDF_ROOT not found: ${rootDir}`);
    process.exit(1);
  }

  // Collect year folders from a given parent directory
  function scanYearFolder(folderName, folderPath) {
    if (shouldSkipYearFolder(folderName)) {
      console.log(`  [SKIP year] ${folderName}`);
      return;
    }

    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      if (!isMinutesPDF(file)) {
        if (file.toLowerCase().endsWith('.pdf')) {
          console.log(`  [SKIP agenda] ${folderName}/${file}`);
        }
        continue;
      }

      results.push({
        filePath  : path.join(folderPath, file),
        yearFolder: folderName,
        filename  : file,
      });
    }
  }

  const topLevel = fs.readdirSync(rootDir, { withFileTypes: true });

  for (const entry of topLevel) {
    if (!entry.isDirectory()) continue;

    const folderName = entry.name;
    const folderPath = path.join(rootDir, folderName);

    // Check if this looks like a year folder (contains a 4-digit year)
    if (/d{4}/.test(folderName)) {
      scanYearFolder(folderName, folderPath);
    } else {
      // It's a subdirectory (e.g. "Archived Board Meeting Minutes") — recurse one level
      console.log(`  [Scanning subdir] ${folderName}`);
      const subEntries = fs.readdirSync(folderPath, { withFileTypes: true });
      for (const sub of subEntries) {
        if (!sub.isDirectory()) continue;
        scanYearFolder(sub.name, path.join(folderPath, sub.name));
      }
    }
  }

  return results;
}

// ─── UPLOAD HELPERS ──────────────────────────────────────────────────────────

const { Pinecone }         = require('@pinecone-database/pinecone');
const { OpenAI }           = require('openai');
const pdfParse             = require('pdf-parse');
const crypto               = require('crypto');

const pinecone  = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index     = pinecone.index('fairfield-civic-docs');
const openai    = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const CHUNK_SIZE    = 1000;   // characters
const CHUNK_OVERLAP = 150;
const EMBED_MODEL   = 'text-embedding-3-small';
const BATCH_SIZE    = 100;    // vectors per upsert call

function chunkText(text) {
  const chunks = [];
  let start    = 0;
  while (start < text.length) {
    const end = Math.min(start + CHUNK_SIZE, text.length);
    const chunk = text.slice(start, end).trim();
    if (chunk.length > 50) chunks.push(chunk);
    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }
  return chunks;
}

async function embedChunks(chunks) {
  const response = await openai.embeddings.create({
    model: EMBED_MODEL,
    input: chunks,
  });
  return response.data.map(d => d.embedding);
}

function vectorId(filePath, chunkIndex) {
  const hash = crypto.createHash('sha256').update(filePath).digest('hex').slice(0, 24);
  return `${ORG_ID}-${hash}-${chunkIndex}`;
}

async function uploadFile({ filePath, yearFolder, filename }) {
  const rawBuffer = fs.readFileSync(filePath);
  let parsed;
  try {
    parsed = await pdfParse(rawBuffer);
  } catch (err) {
    console.log(`  [ERROR parsing] ${filename}: ${err.message}`);
    return { status: 'error', file: filename };
  }

  const text = parsed.text.trim();

  // Detect scanned/image-only PDFs
  if (text.length < 100) {
    console.log(`  [SKIP scanned] ${filename}`);
    return { status: 'skipped_scanned', file: filename };
  }

  const chunks     = chunkText(text);
  const embeddings = await embedChunks(chunks);

  const vectors = chunks.map((chunk, i) => ({
    id    : vectorId(filePath, i),
    values: embeddings[i],
    metadata: {
      text      : chunk,
      source    : SOURCE_URL,
      orgId     : ORG_ID,
      type      : 'government',
      yearFolder,
      filename,
      chunkIndex: i,
      totalChunks: chunks.length,
    },
  }));

  // Validate metadata against canonical schema before upsert
  for (const v of vectors) {
    validateMetadata(v.metadata, { context: 'batch-upload-school-board.js' });
  }

  // Upsert in batches
  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    const batch = vectors.slice(i, i + BATCH_SIZE);
    await index.upsert(batch);
  }

  console.log(`  [OK] ${yearFolder}/${filename} — ${chunks.length} chunks`);
  return { status: 'uploaded', file: filename, chunks: chunks.length };
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n=== Fairfield School Board Minutes — Batch Upload ===');
  console.log(`PDF root : ${PDF_ROOT}`);
  console.log(`Mode     : ${TEST_MODE ? `TEST (first ${TEST_LIMIT} files)` : 'FULL RUN'}`);
  console.log('');

  console.log('Scanning folders...');
  const allFiles = collectPDFs(PDF_ROOT);
  console.log(`\nFiles to process: ${allFiles.length}`);

  if (allFiles.length === 0) {
    console.log('Nothing to upload. Check PDF_ROOT and folder names.');
    return;
  }

  const filesToProcess = TEST_MODE ? allFiles.slice(0, TEST_LIMIT) : allFiles;

  const stats = { uploaded: 0, skipped_scanned: 0, error: 0 };

  console.log('\nUploading...\n');
  for (const fileInfo of filesToProcess) {
    const result = await uploadFile(fileInfo);
    stats[result.status] = (stats[result.status] || 0) + 1;

    // Polite delay to avoid hammering the embedding API
    await new Promise(r => setTimeout(r, 300));
  }

  console.log('\n=== Done ===');
  console.log(`  Uploaded        : ${stats.uploaded}`);
  console.log(`  Skipped scanned : ${stats.skipped_scanned}`);
  console.log(`  Errors          : ${stats.error}`);
  if (TEST_MODE) {
    console.log('\nTest run complete. Remove --test to run all files.');
  }
}

main()
  .then(() => {
    const { execSync } = require('child_process');
    console.log('\nRunning deploy...');
    execSync('node deploy.js "Update knowledge base — FCSD board minutes upload"', {
      stdio: 'inherit',
      cwd: path.join(process.env.HOME, 'fairfield-research-tool'),
    });
  })
  .catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
  });

