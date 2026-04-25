#!/usr/bin/env node
/**
 * audit-rag.js — Civic Intelligence Hub RAG audit
 *
 * Read-only inventory of every vector in the Pinecone index.
 * Produces:
 *   - audit-report.json (machine-readable, full detail)
 *   - audit-report.md   (executive summary + per-source detail)
 *
 * Safe to run anytime. Does not write, update, or delete.
 *
 * Usage: node audit-rag.js
 */

require('dotenv').config({ path: require('path').join(__dirname, '.env.local') });
const { Pinecone } = require('@pinecone-database/pinecone');
const fs = require('fs');
const path = require('path');

const INDEX_NAME = 'fairfield-civic-docs';
const FETCH_BATCH_SIZE = 100;       // Pinecone URL limit requires <=100 per fetch
const SAMPLE_FETCH_PER_SOURCE = 10; // fetch up to N vectors per source to profile metadata

// ── Utility: classify a vector ID into a pattern family ─────────────────────
function classifyIdPattern(id) {
  // Common patterns observed in the codebase
  if (/^[^_]+_chunk_\d+$/.test(id))          return 'filename_chunk_N';
  if (/^[^-]+-[a-f0-9]{24}-\d+$/.test(id))    return 'orgId-sha24-N';
  if (/\.pdf-chunk-\d+$/i.test(id))           return 'filename.pdf-chunk-N';
  if (/^[a-z0-9-]+_[a-z0-9_-]+_chunk_\d+$/.test(id)) return 'prefix_name_chunk_N';
  if (/^[a-f0-9]{32,}$/.test(id))             return 'raw-hash';
  return 'other';
}

// ── Utility: truncate a value for display ───────────────────────────────────
function truncate(v, n = 120) {
  if (v === null || v === undefined) return v;
  const s = typeof v === 'string' ? v : JSON.stringify(v);
  return s.length > n ? s.substring(0, n) + '...' : s;
}

// ── Utility: make a string safe for markdown (escape pipes and newlines) ────
function mdEscape(s) {
  if (typeof s !== 'string') return String(s);
  return s.replace(/\|/g, '\\|').replace(/\n/g, ' ').replace(/\r/g, '');
}

async function main() {
  if (!process.env.PINECONE_API_KEY) {
    console.error('ERROR: PINECONE_API_KEY not set. Is .env.local present?');
    process.exit(1);
  }

  const startedAt = new Date();
  console.log(`\n=== RAG Audit — ${startedAt.toISOString()} ===\n`);

  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  // ── Phase 1: collect every vector ID via listPaginated ────────────────────
  console.log('Phase 1: Listing all vector IDs...');
  const allIds = [];
  let paginationToken;
  let page = 0;
  do {
    const result = await index.listPaginated({ paginationToken });
    const ids = (result.vectors || []).map(v => v.id);
    allIds.push(...ids);
    paginationToken = result.pagination?.next;
    page++;
    if (page % 10 === 0) process.stdout.write(`  ...${allIds.length} IDs so far\n`);
  } while (paginationToken);
  console.log(`  Total vectors: ${allIds.length}\n`);

  // ── Phase 2: fetch all vectors in batches of 100, build source buckets ───
  console.log('Phase 2: Fetching vectors in batches of 100...');
  // We fetch EVERY vector to get its source metadata (so we know counts per source).
  // But we only keep detailed field info for a sample per source.

  const sources = new Map();    // source name -> { count, idSamples[], idPatterns{}, metadataObservations{} }
  const orphans = [];           // vectors missing a source field
  const idPatternGlobal = {};   // global ID pattern tallies

  const totalBatches = Math.ceil(allIds.length / FETCH_BATCH_SIZE);
  for (let i = 0; i < allIds.length; i += FETCH_BATCH_SIZE) {
    const batchIds = allIds.slice(i, i + FETCH_BATCH_SIZE);
    const batchNum = Math.floor(i / FETCH_BATCH_SIZE) + 1;
    if (batchNum % 10 === 0 || batchNum === totalBatches) {
      process.stdout.write(`  Batch ${batchNum}/${totalBatches}\n`);
    }

    const fetched = await index.fetch(batchIds);
    const records = fetched.records || {};

    for (const [id, rec] of Object.entries(records)) {
      const md = rec.metadata || {};
      const source = md.source || '(no-source-field)';

      // global ID pattern tally
      const pattern = classifyIdPattern(id);
      idPatternGlobal[pattern] = (idPatternGlobal[pattern] || 0) + 1;

      if (source === '(no-source-field)') {
        orphans.push({ id, metadataKeys: Object.keys(md) });
      }

      if (!sources.has(source)) {
        sources.set(source, {
          count: 0,
          idSamples: [],
          idPatterns: {},
          metadataFieldPresence: {},   // field -> count of vectors where it appears
          metadataFieldExamples: {},   // field -> [sample values]
          detailVectorsProfiled: 0
        });
      }
      const bucket = sources.get(source);
      bucket.count++;

      // collect up to 3 ID samples per source
      if (bucket.idSamples.length < 3) bucket.idSamples.push(id);

      // ID pattern tally within this source
      bucket.idPatterns[pattern] = (bucket.idPatterns[pattern] || 0) + 1;

      // For detailed metadata profiling, limit to SAMPLE_FETCH_PER_SOURCE vectors per source
      if (bucket.detailVectorsProfiled < SAMPLE_FETCH_PER_SOURCE) {
        bucket.detailVectorsProfiled++;
        for (const [field, value] of Object.entries(md)) {
          bucket.metadataFieldPresence[field] = (bucket.metadataFieldPresence[field] || 0) + 1;
          if (!bucket.metadataFieldExamples[field]) bucket.metadataFieldExamples[field] = [];
          if (bucket.metadataFieldExamples[field].length < 2) {
            bucket.metadataFieldExamples[field].push(truncate(value));
          }
        }
      }
    }
  }
  console.log(`  Done. ${sources.size} distinct source values observed.\n`);

  // ── Phase 3: analyze cross-source schema inconsistencies ─────────────────
  console.log('Phase 3: Analyzing schema inconsistencies...');
  const allFieldsAcrossSources = new Set();
  for (const bucket of sources.values()) {
    for (const f of Object.keys(bucket.metadataFieldPresence)) allFieldsAcrossSources.add(f);
  }

  // Detect field-name drift (fields that probably mean the same thing)
  const suspectedAliases = [
    ['file', 'fileName', 'filename'],
    ['url', 'sourceUrl', 'source_url'],
    ['title', 'docTitle', 'name'],
    ['text', 'content', 'body'],
    ['chunkIndex', 'chunk_index', 'chunkNum'],
  ];
  const aliasFindings = suspectedAliases
    .map(group => {
      const used = group.filter(f => allFieldsAcrossSources.has(f));
      return used.length > 1 ? { group, used } : null;
    })
    .filter(Boolean);

  // Classify sources by source-key style
  const sourceKeyStyles = { rootDomain: [], url: [], hyphenatedKey: [], freeform: [], other: [] };
  for (const srcName of sources.keys()) {
    if (srcName === '(no-source-field)') continue;
    if (/^https?:\/\//.test(srcName))              sourceKeyStyles.url.push(srcName);
    else if (/^[a-z0-9]+(?:\.[a-z0-9]+)+$/i.test(srcName)) sourceKeyStyles.rootDomain.push(srcName);
    else if (/^[a-z0-9-]+$/i.test(srcName) && srcName.includes('-')) sourceKeyStyles.hyphenatedKey.push(srcName);
    else if (/[A-Z ]/.test(srcName))               sourceKeyStyles.freeform.push(srcName);
    else                                            sourceKeyStyles.other.push(srcName);
  }

  console.log(`  ${aliasFindings.length} aliased-field groups detected`);
  console.log(`  Source-key styles: rootDomain=${sourceKeyStyles.rootDomain.length} url=${sourceKeyStyles.url.length} hyphenated=${sourceKeyStyles.hyphenatedKey.length} freeform=${sourceKeyStyles.freeform.length} other=${sourceKeyStyles.other.length}\n`);

  // ── Phase 4: build JSON report ───────────────────────────────────────────
  const finishedAt = new Date();
  const durationMs = finishedAt - startedAt;

  const sourcesArray = Array.from(sources.entries()).map(([name, bucket]) => ({
    source: name,
    count: bucket.count,
    idSamples: bucket.idSamples,
    idPatterns: bucket.idPatterns,
    metadataFieldPresence: bucket.metadataFieldPresence,
    metadataFieldExamples: bucket.metadataFieldExamples,
    detailVectorsProfiled: bucket.detailVectorsProfiled
  })).sort((a, b) => b.count - a.count);

  const jsonReport = {
    generatedAt: finishedAt.toISOString(),
    durationSeconds: Math.round(durationMs / 1000),
    index: INDEX_NAME,
    totals: {
      vectors: allIds.length,
      sources: sources.size,
      orphans: orphans.length
    },
    idPatternGlobal,
    sourceKeyStyles: {
      rootDomain: sourceKeyStyles.rootDomain.length,
      url: sourceKeyStyles.url.length,
      hyphenatedKey: sourceKeyStyles.hyphenatedKey.length,
      freeform: sourceKeyStyles.freeform.length,
      other: sourceKeyStyles.other.length
    },
    sourceKeyStyleExamples: {
      rootDomain: sourceKeyStyles.rootDomain.slice(0, 5),
      url: sourceKeyStyles.url.slice(0, 5),
      hyphenatedKey: sourceKeyStyles.hyphenatedKey.slice(0, 5),
      freeform: sourceKeyStyles.freeform.slice(0, 5),
      other: sourceKeyStyles.other.slice(0, 5)
    },
    aliasFindings,
    sources: sourcesArray,
    orphanSample: orphans.slice(0, 20)
  };

  fs.writeFileSync(path.join(__dirname, 'audit-report.json'), JSON.stringify(jsonReport, null, 2));
  console.log('Wrote audit-report.json');

  // ── Phase 5: build markdown report ───────────────────────────────────────
  const md = [];
  md.push('# Civic Intelligence Hub — RAG Audit Report');
  md.push('');
  md.push(`**Generated**: ${finishedAt.toISOString()}`);
  md.push(`**Duration**: ${Math.round(durationMs / 1000)} seconds`);
  md.push(`**Index**: \`${INDEX_NAME}\``);
  md.push('');

  // Executive Summary
  md.push('## Executive Summary');
  md.push('');
  md.push(`- **Total vectors**: ${allIds.length.toLocaleString()}`);
  md.push(`- **Distinct sources**: ${sources.size.toLocaleString()}`);
  md.push(`- **Orphan vectors** (no \`source\` field): ${orphans.length}`);
  md.push('');
  md.push('### Vector ID pattern distribution');
  md.push('');
  md.push('| Pattern | Count | % of total |');
  md.push('|---|---:|---:|');
  for (const [pat, n] of Object.entries(idPatternGlobal).sort((a, b) => b[1] - a[1])) {
    md.push(`| \`${pat}\` | ${n.toLocaleString()} | ${(n / allIds.length * 100).toFixed(1)}% |`);
  }
  md.push('');
  md.push('### Source-key style distribution');
  md.push('');
  md.push('| Style | Count | Examples |');
  md.push('|---|---:|---|');
  for (const [style, list] of Object.entries(sourceKeyStyles)) {
    const examples = list.slice(0, 3).map(s => `\`${mdEscape(s)}\``).join(', ') || '—';
    md.push(`| ${style} | ${list.length} | ${examples} |`);
  }
  md.push('');

  // Aliased field groups
  md.push('### Suspected aliased metadata fields');
  md.push('');
  if (aliasFindings.length === 0) {
    md.push('_None detected in the common alias groups checked._');
  } else {
    md.push('These field groups likely mean the same thing but are spelled differently across sources:');
    md.push('');
    for (const { group, used } of aliasFindings) {
      md.push(`- **${group.join(' / ')}** — both used: \`${used.join('\`, \`')}\``);
    }
  }
  md.push('');

  // Top-10 sources by vector count
  md.push('### Top 10 sources by vector count');
  md.push('');
  md.push('| Source | Vectors | ID pattern(s) |');
  md.push('|---|---:|---|');
  for (const src of sourcesArray.slice(0, 10)) {
    const patterns = Object.entries(src.idPatterns).map(([p, n]) => `${p} (${n})`).join(', ');
    md.push(`| \`${mdEscape(src.source)}\` | ${src.count.toLocaleString()} | ${patterns} |`);
  }
  md.push('');

  // Key findings
  md.push('### Key findings');
  md.push('');
  const findings = [];
  if (aliasFindings.length > 0) findings.push(`${aliasFindings.length} field-name alias group(s) detected — metadata schema is not consistent across uploads.`);
  if (sourceKeyStyles.url.length > 0) findings.push(`${sourceKeyStyles.url.length} source(s) use full URLs as the \`source\` key instead of short hyphenated keys.`);
  if (sourceKeyStyles.freeform.length > 0) findings.push(`${sourceKeyStyles.freeform.length} source(s) use freeform/capitalized labels as the \`source\` key.`);
  if (orphans.length > 0) findings.push(`${orphans.length} orphan vector(s) have no \`source\` metadata at all.`);
  const patternCount = Object.keys(idPatternGlobal).length;
  if (patternCount > 2) findings.push(`${patternCount} distinct vector ID patterns in use across the index.`);
  if (findings.length === 0) findings.push('No major inconsistencies detected.');
  for (const f of findings) md.push(`- ${f}`);
  md.push('');

  md.push('---');
  md.push('');

  // Full detail: every source
  md.push('## Full Per-Source Detail');
  md.push('');
  md.push(`All ${sources.size} sources, sorted by vector count (descending). Metadata-field stats are based on a sample of up to ${SAMPLE_FETCH_PER_SOURCE} vectors per source.`);
  md.push('');

  for (const src of sourcesArray) {
    md.push(`### \`${mdEscape(src.source)}\``);
    md.push('');
    md.push(`- **Vector count**: ${src.count.toLocaleString()}`);
    md.push(`- **Sample IDs**: ${src.idSamples.map(id => `\`${id}\``).join(', ')}`);
    const patternsStr = Object.entries(src.idPatterns).map(([p, n]) => `\`${p}\` (${n})`).join(', ');
    md.push(`- **ID patterns**: ${patternsStr}`);
    md.push(`- **Vectors profiled for metadata**: ${src.detailVectorsProfiled}`);
    md.push('');
    md.push('| Metadata field | Presence | Example |');
    md.push('|---|---:|---|');
    const fields = Object.keys(src.metadataFieldPresence).sort();
    for (const f of fields) {
      const presence = src.metadataFieldPresence[f];
      const pct = Math.round(presence / src.detailVectorsProfiled * 100);
      const example = src.metadataFieldExamples[f]?.[0] ?? '';
      md.push(`| \`${mdEscape(f)}\` | ${presence}/${src.detailVectorsProfiled} (${pct}%) | ${mdEscape(truncate(example, 80))} |`);
    }
    md.push('');
  }

  // Orphan sample if any
  if (orphans.length > 0) {
    md.push('---');
    md.push('');
    md.push('## Orphan Vectors (no `source` metadata)');
    md.push('');
    md.push(`Total: ${orphans.length}. Sample of first 20:`);
    md.push('');
    md.push('| ID | Metadata keys present |');
    md.push('|---|---|');
    for (const o of orphans.slice(0, 20)) {
      md.push(`| \`${o.id}\` | ${o.metadataKeys.join(', ') || '(none)'} |`);
    }
    md.push('');
  }

  fs.writeFileSync(path.join(__dirname, 'audit-report.md'), md.join('\n'));
  console.log('Wrote audit-report.md');

  console.log(`\n=== Audit complete in ${Math.round(durationMs / 1000)}s ===`);
  console.log(`  ${allIds.length.toLocaleString()} vectors across ${sources.size.toLocaleString()} sources`);
  console.log(`  ${orphans.length} orphans, ${aliasFindings.length} field-alias groups, ${Object.keys(idPatternGlobal).length} ID patterns`);
  console.log('\nNext: open audit-report.md in your editor to review.\n');
}

main().catch(err => {
  console.error('\nERROR:', err.message);
  console.error(err.stack);
  process.exit(1);
});
