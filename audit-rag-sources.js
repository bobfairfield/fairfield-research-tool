#!/usr/bin/env node
/**
 * audit-rag-sources.js
 *
 * Phase A of the RAG source cleanup. READ-ONLY.
 *
 * Scans every vector in the Pinecone index, computes proposed source-field
 * cleanups, and writes a plan to rag-audit-plan.json. Does NOT touch the
 * index. Phase B (apply-rag-audit.js) is the only script that modifies
 * vectors, and only after Bob reviews this plan.
 *
 * What it audits for (per rag-audit-prep.md, May 8 2026):
 *
 *   1. Variant clusters — sources that normalize to the same canonical form
 *      under conservative rules (case, trailing slash, "Website" suffix).
 *      No fuzzy / Levenshtein matching. If a cluster has no obvious canonical
 *      in SOURCE_CATALOG, it goes to `reviewRequired` for Bob to resolve.
 *
 *   2. URL-keyed sources — source values that are http(s) URLs. Per the
 *      Hybrid decision (Option C): source becomes the orgId, the original
 *      URL is preserved as `sourceUrl` metadata. Grouped by target orgId
 *      using URL_DOMAIN_MAP. Unmatched URLs go to `unmatchedSources`.
 *
 * Anything the script can't classify confidently lands in `reviewRequired`.
 * Phase B refuses to run until those are cleared.
 *
 * Usage:
 *   node audit-rag-sources.js
 *   node audit-rag-sources.js --verbose       # print top-30 source counts
 *   node audit-rag-sources.js --limit 1000    # debug: scan first N vectors only
 *
 * v2 (May 8 2026): fixed matchUrlToOrg to handle URL_DOMAIN_MAP's actual
 *                  structure ({ numKey: [pattern, orgId] }, not { domain: orgId }).
 */

const { Pinecone } = require('@pinecone-database/pinecone');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const INDEX_NAME  = 'fairfield-civic-docs';
const FETCH_BATCH = 100;   // Pinecone fetch() limit
const LIST_BATCH  = 100;   // listPaginated() page size
const PLAN_FILE   = 'rag-audit-plan.json';

const args      = process.argv.slice(2);
const VERBOSE   = args.includes('--verbose');
const LIMIT_IDX = args.indexOf('--limit');
const LIMIT     = LIMIT_IDX >= 0 ? parseInt(args[LIMIT_IDX + 1], 10) : null;

// ---------------------------------------------------------------------------
// Load reference maps from generate-map.js
// ---------------------------------------------------------------------------

let URL_DOMAIN_MAP, SOURCE_CATALOG;
try {
  const map = require('./generate-map');
  URL_DOMAIN_MAP = map.URL_DOMAIN_MAP;
  SOURCE_CATALOG = map.SOURCE_CATALOG;
  if (!URL_DOMAIN_MAP || !SOURCE_CATALOG) {
    throw new Error('generate-map.js loaded but did not export URL_DOMAIN_MAP and SOURCE_CATALOG');
  }
} catch (e) {
  console.error('\n❌ Could not import URL_DOMAIN_MAP and SOURCE_CATALOG from generate-map.js');
  console.error(`   Reason: ${e.message}`);
  console.error('\n   Fix: add this single line to the very end of generate-map.js:');
  console.error('       module.exports = { URL_DOMAIN_MAP, SOURCE_CATALOG };');
  console.error('\n   Non-breaking — generate-map.js still runs as a CLI script after this.\n');
  process.exit(1);
}

console.log(
  `✓ Loaded URL_DOMAIN_MAP (${Object.keys(URL_DOMAIN_MAP).length} entries) ` +
  `and SOURCE_CATALOG (${Object.keys(SOURCE_CATALOG).length} entries)`
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const fmt = (n) => n.toLocaleString();
const isUrl = (s) => typeof s === 'string' && /^https?:\/\//i.test(s);

/** Conservative normalization for variant clustering.
 *  Lowercase + trim + strip trailing slashes + strip trailing "Website" suffix. */
function normalizeForCluster(s) {
  if (typeof s !== 'string') return '';
  return s
    .toLowerCase()
    .trim()
    .replace(/\/+$/, '')
    .replace(/\s*[-–—]?\s*website\s*$/i, '')
    .trim();
}

function tryParseUrl(s) {
  try { return new URL(s); } catch { return null; }
}

/** Match a URL against URL_DOMAIN_MAP.
 *
 *  URL_DOMAIN_MAP's actual structure: { "0": [pattern, orgId], "1": [...], ... }
 *  — numeric-string keys, value is a [pattern, orgId] tuple. Patterns come in
 *  three flavors and need different match logic:
 *
 *    1. Bare domain        e.g. "fairfieldacc.com"
 *       → host equality (with www. stripped from both sides)
 *    2. Domain + path      e.g. "fairfield.ia.us/walton-lake-bridge"
 *       → substring match against the URL (sans protocol)
 *    3. URL fragment       e.g. "watch?v=HsOQIzMwF5c"
 *       → substring match against the URL (sans protocol)
 *
 *  Longest matching pattern wins (so e.g. a specific video URL beats the
 *  generic youtube.com entry, which is what URL_DOMAIN_MAP intends).
 */
function matchUrlToOrg(url) {
  const parsed = tryParseUrl(url);
  if (!parsed) return null;
  const hostNoWww   = parsed.hostname.toLowerCase().replace(/^www\./, '');
  const fullNoProto = url.toLowerCase().replace(/^https?:\/\//, '');

  let best = null;
  for (const entry of Object.values(URL_DOMAIN_MAP)) {
    if (!Array.isArray(entry) || entry.length < 2) continue;
    const pattern = String(entry[0]).toLowerCase().replace(/^https?:\/\//, '');
    const orgId   = String(entry[1]);

    let matched = false;
    const hasPath = pattern.includes('/') || pattern.includes('?');
    if (hasPath) {
      // Path or query pattern → substring match on URL sans protocol.
      matched = fullNoProto.includes(pattern);
    } else {
      // Bare domain pattern → exact host match, www-normalized.
      const patNoWww = pattern.replace(/^www\./, '');
      matched = hostNoWww === patNoWww || hostNoWww.endsWith('.' + patNoWww);
    }

    if (matched && (!best || pattern.length > best.matchedKey.length)) {
      best = { orgId, matchedKey: pattern };
    }
  }
  return best;
}

/** Get total vector count from describeIndexStats, defensive across SDK versions. */
function getTotalVectorCount(stats) {
  if (typeof stats.totalRecordCount === 'number') return stats.totalRecordCount;
  if (typeof stats.totalVectorCount === 'number') return stats.totalVectorCount;
  return Object.values(stats.namespaces || {})
    .reduce((s, ns) => s + (ns.recordCount || ns.vectorCount || 0), 0);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

(async function main() {
  if (!process.env.PINECONE_API_KEY) {
    console.error('❌ PINECONE_API_KEY not set. Check .env.local.');
    process.exit(1);
  }

  const pc    = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  console.log(`\n📡 Connecting to Pinecone index "${INDEX_NAME}"...`);
  const stats = await index.describeIndexStats();
  const totalVectors = getTotalVectorCount(stats);
  console.log(`   Total vectors in index: ${fmt(totalVectors)}`);
  if (LIMIT) console.log(`   ⚠️  --limit ${LIMIT} active (debug mode, partial scan)`);

  // -------------------------------------------------------------------------
  // 1. Enumerate all IDs via listPaginated
  // -------------------------------------------------------------------------

  console.log('\n📋 Listing vector IDs...');
  const allIds = [];
  let pageToken;
  let pages = 0;

  while (true) {
    const opts = { limit: LIST_BATCH };
    if (pageToken) opts.paginationToken = pageToken;
    const resp = await index.listPaginated(opts);
    const batch = (resp.vectors || []).map((v) => v.id);
    allIds.push(...batch);
    pages++;

    if (pages % 20 === 0) {
      process.stdout.write(`\r   ${fmt(allIds.length)} IDs listed (${pages} pages)`);
    }

    pageToken = resp.pagination && resp.pagination.next;
    if (!pageToken) break;
    if (LIMIT && allIds.length >= LIMIT) {
      allIds.length = LIMIT;
      break;
    }
  }
  process.stdout.write('\r' + ' '.repeat(60) + '\r');
  console.log(`   ${fmt(allIds.length)} IDs listed across ${pages} page(s).`);

  // -------------------------------------------------------------------------
  // 2. Fetch metadata in batches of 100
  // -------------------------------------------------------------------------

  console.log('\n📥 Fetching metadata...');
  const allRecords = [];

  for (let i = 0; i < allIds.length; i += FETCH_BATCH) {
    const slice = allIds.slice(i, i + FETCH_BATCH);
    const resp  = await index.fetch(slice);
    const recs  = resp.records || resp.vectors || {};
    for (const id of Object.keys(recs)) {
      const r = recs[id];
      allRecords.push({
        id,
        source:    r.metadata && r.metadata.source,
        sourceUrl: r.metadata && r.metadata.sourceUrl,
        orgId:     r.metadata && r.metadata.orgId,
        type:      r.metadata && r.metadata.type,
      });
    }
    if ((Math.floor(i / FETCH_BATCH)) % 20 === 0) {
      process.stdout.write(`\r   ${fmt(allRecords.length)} / ${fmt(allIds.length)} fetched`);
    }
  }
  process.stdout.write('\r' + ' '.repeat(60) + '\r');
  console.log(`   ${fmt(allRecords.length)} vectors loaded.`);

  // -------------------------------------------------------------------------
  // 3. Aggregate per-source statistics
  // -------------------------------------------------------------------------

  console.log('\n🔍 Aggregating sources...');
  const sourceCounts          = new Map(); // source -> count
  const sourceIds             = new Map(); // source -> [first 5 sample ids]
  const sourceWithSourceUrl   = new Map(); // source -> count of records that already have sourceUrl
  const invalidSources        = [];        // records with missing/empty source

  for (const rec of allRecords) {
    if (!rec.source || typeof rec.source !== 'string' || rec.source.trim() === '') {
      invalidSources.push({ id: rec.id, observed: rec.source });
      continue;
    }
    const src = rec.source;
    sourceCounts.set(src, (sourceCounts.get(src) || 0) + 1);
    if (!sourceIds.has(src)) sourceIds.set(src, []);
    if (sourceIds.get(src).length < 5) sourceIds.get(src).push(rec.id);
    if (rec.sourceUrl) {
      sourceWithSourceUrl.set(src, (sourceWithSourceUrl.get(src) || 0) + 1);
    }
  }

  console.log(`   ${fmt(sourceCounts.size)} unique source values.`);
  if (invalidSources.length) {
    console.log(`   ⚠️  ${fmt(invalidSources.length)} record(s) with missing/empty source field.`);
  }
  if (VERBOSE) {
    const top = [...sourceCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30);
    console.log('   Top 30 sources by vector count:');
    for (const [s, n] of top) console.log(`     ${fmt(n).padStart(6)}  ${s}`);
  }

  // -------------------------------------------------------------------------
  // 4. Build variant clusters (skip URL-keyed sources)
  // -------------------------------------------------------------------------

  const clusters = new Map(); // normalized -> [original sources]
  for (const src of sourceCounts.keys()) {
    if (isUrl(src)) continue;
    const norm = normalizeForCluster(src);
    if (!norm) continue;
    if (!clusters.has(norm)) clusters.set(norm, []);
    clusters.get(norm).push(src);
  }

  // -------------------------------------------------------------------------
  // 5. Build the plan: actions, reviewRequired, unmatched
  // -------------------------------------------------------------------------

  const actions          = [];
  const reviewRequired   = [];
  const unmatchedSources = [];
  let actionCounter      = 0;
  let reviewCounter      = 0;
  const nextActionId = () => 'A' + String(++actionCounter).padStart(3, '0');
  const nextReviewId = () => 'R' + String(++reviewCounter).padStart(3, '0');

  // 5a. Variant clusters
  for (const [norm, variants] of clusters) {
    if (variants.length <= 1) continue;

    const sorted = variants
      .map((v) => ({ source: v, count: sourceCounts.get(v) || 0, sampleIds: sourceIds.get(v) }))
      .sort((a, b) => b.count - a.count);

    // Look for a SOURCE_CATALOG hit among the variants to nominate canonical.
    const catalogHit = sorted.find((s) => SOURCE_CATALOG[s.source]);

    if (catalogHit) {
      // Auto-generate rename actions toward the catalog canonical.
      for (const variant of sorted) {
        if (variant.source === catalogHit.source) continue;
        actions.push({
          id: nextActionId(),
          type: 'rename_source',
          from: variant.source,
          to:   catalogHit.source,
          rationale: `variant cluster (normalized="${norm}"); canonical found in SOURCE_CATALOG`,
          vectorsAffected: variant.count,
          sampleIds: variant.sampleIds,
        });
      }
    } else {
      // No catalog canonical — surface for Bob.
      reviewRequired.push({
        id: nextReviewId(),
        kind: 'variant_cluster_no_catalog_canonical',
        normalized: norm,
        cluster: sorted,
        suggestion:
          `No member of this cluster is in SOURCE_CATALOG. Bob: pick the canonical, then ` +
          `manually add a rename_source action for each non-canonical variant. Example:`,
        exampleAction: {
          id: '<assign next>',
          type: 'rename_source',
          from: sorted[1] ? sorted[1].source : '<variant>',
          to: '<canonical, e.g. "cityoffairfieldiowa.com">',
          rationale: 'manual canonical pick (variant cluster resolution)',
          vectorsAffected: sorted[1] ? sorted[1].count : 0,
          sampleIds: sorted[1] ? sorted[1].sampleIds : [],
        },
      });
    }
  }

  // 5b. URL-keyed sources — Hybrid (Option C): source -> orgId, URL -> sourceUrl
  const urlBuckets = new Map(); // orgId -> { matchedKey, sources, totalVectors, sampleIds }

  for (const src of sourceCounts.keys()) {
    if (!isUrl(src)) continue;
    const match = matchUrlToOrg(src);
    if (!match) {
      unmatchedSources.push({
        source: src,
        vectorCount: sourceCounts.get(src),
        reason: 'no URL_DOMAIN_MAP entry matched this URL',
        sampleIds: sourceIds.get(src),
      });
      continue;
    }

    const key = match.orgId;
    if (!urlBuckets.has(key)) {
      urlBuckets.set(key, {
        orgId: match.orgId,
        matchedKey: match.matchedKey,
        sources: [],
        totalVectors: 0,
        sampleIds: [],
      });
    }
    const bucket = urlBuckets.get(key);
    bucket.sources.push(src);
    bucket.totalVectors += sourceCounts.get(src);
    if (bucket.sampleIds.length < 5) {
      bucket.sampleIds.push(
        ...sourceIds.get(src).slice(0, 5 - bucket.sampleIds.length)
      );
    }
  }

  for (const [orgId, bucket] of urlBuckets) {
    actions.push({
      id: nextActionId(),
      type: 'collapse_url_to_org',
      to: orgId,
      preserveAs: 'sourceUrl',
      matchedDomainKey: bucket.matchedKey,
      uniqueSourceUrls: bucket.sources.length,
      vectorsAffected: bucket.totalVectors,
      sampleSourceUrls: bucket.sources.slice(0, 5),
      sampleIds: bucket.sampleIds,
      // Phase B reads sourceUrlsList to know which exact source values to update.
      sourceUrlsList: bucket.sources,
    });
  }

  // -------------------------------------------------------------------------
  // 6. Project the after-state (so Bob sees the reduction up front)
  // -------------------------------------------------------------------------

  const projected = new Set();
  for (const src of sourceCounts.keys()) {
    let final = src;
    if (isUrl(src)) {
      const match = matchUrlToOrg(src);
      final = match ? match.orgId : src;
    } else {
      const renamed = actions.find((a) => a.type === 'rename_source' && a.from === src);
      if (renamed) final = renamed.to;
    }
    projected.add(final);
  }

  // -------------------------------------------------------------------------
  // 7. Write the plan
  // -------------------------------------------------------------------------

  const plan = {
    generated:           new Date().toISOString(),
    indexName:           INDEX_NAME,
    designDecision:      'Hybrid (Option C): URL-keyed sources collapse to orgId; original URL preserved as sourceUrl',
    totalVectorsScanned: allRecords.length,
    totalVectorsInIndex: totalVectors,
    partialScan:         !!LIMIT,
    sources: {
      before:         sourceCounts.size,
      afterProjected: projected.size,
      reduction:      sourceCounts.size - projected.size,
    },
    summary: {
      renameActions:        actions.filter((a) => a.type === 'rename_source').length,
      urlCollapseActions:   actions.filter((a) => a.type === 'collapse_url_to_org').length,
      reviewRequired:       reviewRequired.length,
      unmatchedSources:     unmatchedSources.length,
      invalidSources:       invalidSources.length,
      vectorsAffectedTotal: actions.reduce((s, a) => s + (a.vectorsAffected || 0), 0),
    },
    actions,
    reviewRequired,
    unmatchedSources,
    invalidSources: invalidSources.slice(0, 50),  // cap for readability
    invalidSourcesTotal: invalidSources.length,
  };

  fs.writeFileSync(PLAN_FILE, JSON.stringify(plan, null, 2));

  // -------------------------------------------------------------------------
  // 8. stdout summary
  // -------------------------------------------------------------------------

  const line = '='.repeat(60);
  console.log(`\n${line}\nAUDIT COMPLETE\n${line}`);
  console.log(`Vectors scanned:        ${fmt(plan.totalVectorsScanned)}${LIMIT ? ' (partial)' : ''}`);
  console.log(`Unique sources before:  ${fmt(plan.sources.before)}`);
  console.log(`Unique sources after:   ${fmt(plan.sources.afterProjected)}`);
  console.log(`Reduction:              ${fmt(plan.sources.reduction)}`);
  console.log('');
  console.log(`Rename actions:         ${plan.summary.renameActions}`);
  console.log(`URL→orgId collapses:    ${plan.summary.urlCollapseActions}`);
  console.log(`Vectors to be updated:  ${fmt(plan.summary.vectorsAffectedTotal)}`);
  console.log('');
  console.log(`Review required:        ${plan.summary.reviewRequired}    ← Phase B refuses to run until cleared`);
  console.log(`Unmatched URL sources:  ${plan.summary.unmatchedSources}    ← stay as-is unless added to URL_DOMAIN_MAP`);
  console.log(`Invalid (no source):    ${plan.summary.invalidSources}    ← record-level, not source-level`);
  console.log('');
  console.log(`📄 Plan written to: ${PLAN_FILE}`);
  console.log(`   Read it before running Phase B (apply-rag-audit.js).`);

  if (plan.summary.reviewRequired > 0) {
    console.log(`\n⚠️  ${plan.summary.reviewRequired} variant cluster(s) need a manual canonical pick.`);
    console.log(`    See "reviewRequired" in ${PLAN_FILE}. Each has an exampleAction template.`);
  }
  if (plan.summary.unmatchedSources > 0) {
    console.log(`\n⚠️  ${plan.summary.unmatchedSources} URL source(s) had no URL_DOMAIN_MAP match.`);
    console.log(`    See "unmatchedSources" in ${PLAN_FILE}.`);
  }
  console.log('');
})().catch((err) => {
  console.error('\n❌ Audit failed:', err);
  process.exit(1);
});
