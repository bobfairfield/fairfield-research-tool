#!/usr/bin/env node
/**
 * apply-canonical-schema-patches.js
 *
 * Patches the six upload scripts in this repo to import and call
 * validateMetadata() from lib/metadata-schema.js. Locks down legacy
 * field names at the upload site, preventing future drift.
 *
 * Files patched:
 *   - upload-jc-history.js                  (add validation only)
 *   - batch-upload-history-transcripts.js   (add validation only)
 *   - batch-upload-school-board.js          (add validation only)
 *   - txt-processor.js                      (rename fileName→filename + validation)
 *   - document-processor.js                 (rename file→filename, add chunkIndex, validation)
 *   - scrapers/scraper-base.js              (drop fake "file", add sourceUrl + chunkIndex + validation)
 *
 * Modes:
 *   (default)     dry-run preview, no writes
 *   --apply       write changes (creates .bak backups first)
 *   --rollback    restore .bak backups
 *
 * Usage from ~/fairfield-research-tool/:
 *   node apply-canonical-schema-patches.js              # dry-run preview
 *   node apply-canonical-schema-patches.js --apply      # execute
 *   node apply-canonical-schema-patches.js --rollback   # undo
 */

const fs   = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const MODE = args.includes('--apply')    ? 'apply'
           : args.includes('--rollback') ? 'rollback'
           : 'dry-run';

const REPO_ROOT = __dirname;

// ────────────────────────────────────────────────────────────────────────────
// Patches — each `find` string must appear EXACTLY ONCE in its target file.
// Preflight verifies this before any writes happen.
// ────────────────────────────────────────────────────────────────────────────

const PATCHES = [
  {
    path: 'upload-jc-history.js',
    patches: [
      {
        label: 'add require for validateMetadata',
        find:
`const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');`,
        replace:
`const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');
const { validateMetadata } = require('./lib/metadata-schema');`,
      },
      {
        label: 'validate before upsert',
        find:
`    // Upsert in sub-batches of 100
    for (let k = 0; k < vectors.length; k += BATCH_SIZE) {
      await index.upsert(vectors.slice(k, k + BATCH_SIZE));
    }`,
        replace:
`    // Validate metadata against canonical schema before upsert
    for (const v of vectors) {
      validateMetadata(v.metadata, { context: 'upload-jc-history.js' });
    }

    // Upsert in sub-batches of 100
    for (let k = 0; k < vectors.length; k += BATCH_SIZE) {
      await index.upsert(vectors.slice(k, k + BATCH_SIZE));
    }`,
      },
    ],
  },

  {
    path: 'batch-upload-history-transcripts.js',
    patches: [
      {
        label: 'add require for validateMetadata',
        find:
`const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');`,
        replace:
`const { Pinecone } = require('@pinecone-database/pinecone');
const { OpenAI }   = require('openai');
const { validateMetadata } = require('./lib/metadata-schema');`,
      },
      {
        label: 'validate before upsert',
        find:
`  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    await index.upsert(vectors.slice(i, i + BATCH_SIZE));
  }

  console.log(\`  [OK] \${basename} — \${chunks.length} chunks\`);`,
        replace:
`  // Validate metadata against canonical schema before upsert
  for (const v of vectors) {
    validateMetadata(v.metadata, { context: 'batch-upload-history-transcripts.js' });
  }

  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    await index.upsert(vectors.slice(i, i + BATCH_SIZE));
  }

  console.log(\`  [OK] \${basename} — \${chunks.length} chunks\`);`,
      },
    ],
  },

  {
    path: 'batch-upload-school-board.js',
    patches: [
      {
        label: 'add require for validateMetadata',
        find:
`const fs   = require('fs');
const path = require('path');

// ─── CONFIG ──────────────────────────────────────────────────────────────────`,
        replace:
`const fs   = require('fs');
const path = require('path');
const { validateMetadata } = require('./lib/metadata-schema');

// ─── CONFIG ──────────────────────────────────────────────────────────────────`,
      },
      {
        label: 'validate before upsert',
        find:
`  // Upsert in batches
  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    const batch = vectors.slice(i, i + BATCH_SIZE);
    await index.upsert(batch);
  }`,
        replace:
`  // Validate metadata against canonical schema before upsert
  for (const v of vectors) {
    validateMetadata(v.metadata, { context: 'batch-upload-school-board.js' });
  }

  // Upsert in batches
  for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
    const batch = vectors.slice(i, i + BATCH_SIZE);
    await index.upsert(batch);
  }`,
      },
    ],
  },

  {
    path: 'txt-processor.js',
    patches: [
      {
        label: 'add require for validateMetadata',
        find:
`const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');`,
        replace:
`const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');
const { validateMetadata } = require('./lib/metadata-schema');`,
      },
      {
        label: 'rename fileName -> filename and add validation',
        find:
`      values: embedding,
      metadata: {
        ...metadata,
        text: chunks[i],
        fileName,
        chunkIndex: i,
      },
    });
  }

  // Upsert in batches of 100
  for (let i = 0; i < vectors.length; i += 100) {
    await index.upsert(vectors.slice(i, i + 100));
  }`,
        replace:
`      values: embedding,
      metadata: {
        ...metadata,
        text: chunks[i],
        filename: fileName,
        chunkIndex: i,
      },
    });
  }

  // Validate metadata against canonical schema before upsert
  for (const v of vectors) {
    validateMetadata(v.metadata, { context: 'txt-processor.js' });
  }

  // Upsert in batches of 100
  for (let i = 0; i < vectors.length; i += 100) {
    await index.upsert(vectors.slice(i, i + 100));
  }`,
      },
    ],
  },

  {
    path: 'document-processor.js',
    patches: [
      {
        label: 'add require for validateMetadata',
        find:
`const { Pinecone } = require("@pinecone-database/pinecone");
const OpenAI = require("openai");`,
        replace:
`const { Pinecone } = require("@pinecone-database/pinecone");
const OpenAI = require("openai");
const { validateMetadata } = require("./lib/metadata-schema");`,
      },
      {
        label: 'rewrite upsert: rename file->filename, add chunkIndex, validate',
        find:
`    await index.upsert([{ id: \`\${fileName}-chunk-\${i}\`, values: embedding.data[0].embedding, metadata: { ...metadata, text: chunk, file: fileName } }]);`,
        replace:
`    const fullMetadata = { ...metadata, text: chunk, filename: fileName, chunkIndex: i };
    validateMetadata(fullMetadata, { context: "document-processor.js" });
    await index.upsert([{ id: \`\${fileName}-chunk-\${i}\`, values: embedding.data[0].embedding, metadata: fullMetadata }]);`,
      },
    ],
  },

  {
    path: 'scrapers/scraper-base.js',
    patches: [
      {
        label: 'add require for validateMetadata (note: ../lib path)',
        find:
`require('dotenv').config({ path: '.env.local' });
const https  = require('https');
const http   = require('http');`,
        replace:
`require('dotenv').config({ path: '.env.local' });
const { validateMetadata } = require('../lib/metadata-schema');
const https  = require('https');
const http   = require('http');`,
      },
      {
        label: 'fix metadata: drop fake "file", add sourceUrl + chunkIndex',
        find:
`          values: embedding,
          metadata: {
            text:     chunks[i].slice(0, 1000),
            source:   page.url,
            org:      orgName,
            category: category,
            type:     'community_org',
            file:     \`\${orgName} — \${page.url}\`
          }`,
        replace:
`          values: embedding,
          metadata: {
            text:       chunks[i].slice(0, 1000),
            source:     page.url,
            sourceUrl:  page.url,
            org:        orgName,
            category:   category,
            type:       'community_org',
            chunkIndex: i,
          }`,
      },
      {
        label: 'validate inside upsertBatch',
        find:
`async function upsertBatch(vectors) {
  for (let i = 0; i < vectors.length; i += 100) {
    await index.upsert(vectors.slice(i, i + 100));
    await sleep(300);
  }
}`,
        replace:
`async function upsertBatch(vectors) {
  // Validate metadata against canonical schema before upsert
  for (const v of vectors) {
    validateMetadata(v.metadata, { context: 'scrapers/scraper-base.js' });
  }
  for (let i = 0; i < vectors.length; i += 100) {
    await index.upsert(vectors.slice(i, i + 100));
    await sleep(300);
  }
}`,
      },
    ],
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Helpers
// ────────────────────────────────────────────────────────────────────────────

function shorten(s, n = 120) {
  const flat = s.replace(/\n/g, '\\n');
  return flat.length > n ? flat.slice(0, n) + '...' : flat;
}

function preflight() {
  console.log('=== Pre-flight: verifying patches and dependencies ===\n');
  let allOk = true;

  // Check helper exists
  const helperPath = path.join(REPO_ROOT, 'lib', 'metadata-schema.js');
  if (!fs.existsSync(helperPath)) {
    console.error(`  ✗ lib/metadata-schema.js NOT FOUND — patches would break the scripts.`);
    console.error(`      Stage it first: cp ~/Downloads/metadata-schema.js lib/metadata-schema.js`);
    allOk = false;
  } else {
    console.log(`  ✓ lib/metadata-schema.js found`);
  }

  // Check each target file and patch
  for (const file of PATCHES) {
    const fullPath = path.join(REPO_ROOT, file.path);
    if (!fs.existsSync(fullPath)) {
      console.error(`  ✗ ${file.path}: FILE NOT FOUND`);
      allOk = false;
      continue;
    }
    const content = fs.readFileSync(fullPath, 'utf8');
    let fileOk = true;
    for (const patch of file.patches) {
      const occurrences = content.split(patch.find).length - 1;
      if (occurrences === 1) continue;
      fileOk = false; allOk = false;
      if (occurrences === 0) {
        console.error(`  ✗ ${file.path} — "${patch.label}": NOT FOUND in file`);
        console.error(`      looked for: ${shorten(patch.find)}`);
      } else {
        console.error(`  ✗ ${file.path} — "${patch.label}": found ${occurrences} times (expected 1)`);
      }
    }
    if (fileOk) {
      console.log(`  ✓ ${file.path} — ${file.patches.length} patch(es) match exactly once`);
    }
  }
  console.log('');
  return allOk;
}

function dryRun() {
  console.log('=== DRY-RUN: previewing changes (no writes) ===\n');
  if (!preflight()) {
    console.error('Pre-flight failed. Resolve mismatches before --apply.');
    process.exit(1);
  }
  console.log('All patches match cleanly. --apply would change:\n');
  for (const file of PATCHES) {
    console.log(`  ${file.path}:`);
    for (const patch of file.patches) {
      console.log(`    • ${patch.label}`);
    }
  }
  console.log('\n✅ Dry-run clean. Re-run with --apply to execute.');
}

function apply() {
  console.log('=== APPLY: writing changes (with .bak backups) ===\n');
  if (!preflight()) {
    console.error('Pre-flight failed. Aborting — no files modified.');
    process.exit(1);
  }
  console.log('Applying patches...\n');
  for (const file of PATCHES) {
    const fullPath = path.join(REPO_ROOT, file.path);
    const bakPath  = fullPath + '.bak';
    let content = fs.readFileSync(fullPath, 'utf8');
    fs.writeFileSync(bakPath, content);
    for (const patch of file.patches) {
      content = content.replace(patch.find, patch.replace);
    }
    fs.writeFileSync(fullPath, content);
    console.log(`  ✓ ${file.path} (.bak saved)`);
  }
  console.log('\n✅ All patches applied. Backups saved as *.bak');
  console.log('   To roll back: node apply-canonical-schema-patches.js --rollback');
  console.log('   Next: run `node --check` on each modified file.');
}

function rollback() {
  console.log('=== ROLLBACK: restoring from .bak files ===\n');
  let restored = 0, skipped = 0;
  for (const file of PATCHES) {
    const fullPath = path.join(REPO_ROOT, file.path);
    const bakPath  = fullPath + '.bak';
    if (!fs.existsSync(bakPath)) {
      console.log(`  - ${file.path}: no .bak file (skipping)`);
      skipped++;
      continue;
    }
    fs.copyFileSync(bakPath, fullPath);
    fs.unlinkSync(bakPath);
    console.log(`  ✓ ${file.path}: restored`);
    restored++;
  }
  console.log(`\n${restored} restored, ${skipped} skipped`);
}

if (MODE === 'rollback')   rollback();
else if (MODE === 'apply') apply();
else                       dryRun();
