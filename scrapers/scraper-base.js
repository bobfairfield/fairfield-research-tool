/**
 * scraper-base.js
 * Shared utilities for all Fairfield community org scrapers.
 * Handles: HTTP fetching, HTML → text, chunking, embedding, Pinecone upsert.
 *
 * Each org script requires this file and calls runScraper(config).
 *
 * Usage from ~/fairfield-research-tool:
 *   node scrapers/education/miu.js
 *
 * Change detection:
 *   A manifest file (scrape-manifest.json) tracks a SHA-256 hash of each
 *   page's text content. On re-runs, unchanged pages are skipped entirely.
 *   Changed pages have their old Pinecone vectors deleted before new ones
 *   are upserted. Pass { force: true } in config to bypass the manifest.
 */

require('dotenv').config({ path: '.env.local' });
const https  = require('https');
const http   = require('http');
const crypto = require('crypto');
const fs     = require('fs');
const path   = require('path');
const { URL } = require('url');
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');

const oai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pc    = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ─── Manifest helpers ─────────────────────────────────────────────────────────
const MANIFEST_PATH = path.join(__dirname, '..', 'scrape-manifest.json');

function loadManifest() {
  try {
    if (fs.existsSync(MANIFEST_PATH)) {
      return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    }
  } catch (e) {
    console.warn(`  ⚠️  Could not read manifest: ${e.message}`);
  }
  return {};
}

function saveManifest(manifest) {
  try {
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf8');
  } catch (e) {
    console.warn(`  ⚠️  Could not write manifest: ${e.message}`);
  }
}

function hashText(text) {
  return crypto.createHash('sha256').update(text).digest('hex').slice(0, 16);
}

// Reconstruct vector IDs for a given orgId + url + chunkCount so we can delete them
function vectorIds(orgId, url, chunkCount) {
  const b64 = Buffer.from(url).toString('base64').slice(0, 20);
  return Array.from({ length: chunkCount }, (_, i) => `${orgId}-${b64}-${i}`);
}

// ─── HTTP fetch (follows redirects) ──────────────────────────────────────────
function fetchPage(rawUrl, timeoutMs = 15000) {
  return new Promise((resolve) => {
    let resolved = false;
    const done = (val) => { if (!resolved) { resolved = true; resolve(val); } };

    const tryFetch = (urlStr, redirectsLeft = 3) => {
      let u;
      try { u = new URL(urlStr); } catch { done(null); return; }
      const lib = u.protocol === 'https:' ? https : http;
      const req = lib.get(urlStr, {
        timeout: timeoutMs,
        headers: {
          'User-Agent': 'CivicIntelligenceHub/1.0 (civic-research-bot; fairfield-ia)',
          'Accept': 'text/html,application/xhtml+xml'
        }
      }, (res) => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirectsLeft > 0) {
          res.resume();
          const next = res.headers.location.startsWith('http')
            ? res.headers.location
            : new URL(res.headers.location, urlStr).href;
          tryFetch(next, redirectsLeft - 1);
          return;
        }
        if (res.statusCode !== 200) { res.resume(); done(null); return; }
        const bufs = [];
        res.on('data', d => bufs.push(d));
        res.on('end', () => done({ body: Buffer.concat(bufs).toString('utf8'), finalUrl: urlStr }));
        res.on('error', () => done(null));
      });
      req.on('error', () => done(null));
      req.on('timeout', () => { req.destroy(); done(null); });
    };

    tryFetch(rawUrl);
  });
}

// ─── HTML → plain text ────────────────────────────────────────────────────────
function htmlToText(html) {
  if (!html) return '';

  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');

  s = s.replace(/<\/?(p|div|section|article|h[1-6]|li|tr|br|blockquote)[^>]*>/gi, '\n');
  s = s.replace(/<[^>]+>/g, ' ');

  s = s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n)))
    .replace(/&[a-z]+;/gi, ' ');

  s = s.replace(/[ \t]+/g, ' ');
  s = s.replace(/\n{3,}/g, '\n\n');
  return s.trim();
}

// ─── Extract internal links from HTML ────────────────────────────────────────
function extractLinks(html, baseUrl) {
  const links = new Set();
  const base = new URL(baseUrl);
  const re = /href=["']([^"'#?]+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      const u = new URL(m[1], baseUrl);
      if (u.hostname === base.hostname) {
        const clean = u.origin + u.pathname.replace(/\/$/, '');
        if (clean !== base.origin) links.add(clean);
      }
    } catch { /* skip */ }
  }
  return [...links];
}

// ─── Filter out unhelpful paths ───────────────────────────────────────────────
const SKIP_PATTERNS = [
  /\.(pdf|docx?|xlsx?|pptx?|zip|jpg|jpeg|png|gif|svg|mp4|mp3|webp|ico|woff|ttf|css|js)$/i,
  /\/(wp-json|wp-content\/uploads|feed|tag\/|author\/|page\/\d|cart|checkout|account|login|register|search|wp-admin)/i,
  /\/(category\/|attachment\/|embed\/)/i,
];

function shouldSkip(url) {
  return SKIP_PATTERNS.some(p => p.test(url));
}

// ─── Chunk text into ~400-word blocks ────────────────────────────────────────
function chunkText(text, maxWords = 400) {
  const paras = text.split(/\n\n+/).filter(p => p.trim().length > 40);
  const chunks = [];
  let current = [];
  let wordCount = 0;

  const flush = () => {
    if (current.length) {
      const chunk = current.join('\n\n').replace(/\s+/g, ' ').trim();
      if (chunk.length > 80) chunks.push(chunk);
      current = [];
      wordCount = 0;
    }
  };

  for (const para of paras) {
    const words = para.split(/\s+/).length;
    if (wordCount + words > maxWords) flush();
    if (words > maxWords) {
      const sentences = para.match(/[^.!?]+[.!?]+/g) || [para];
      for (const sent of sentences) {
        const sw = sent.split(/\s+/).length;
        if (wordCount + sw > maxWords) flush();
        current.push(sent.trim());
        wordCount += sw;
      }
    } else {
      current.push(para.trim());
      wordCount += words;
    }
  }
  flush();
  return chunks;
}

// ─── Embed with retry ────────────────────────────────────────────────────────
async function embed(text, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await oai.embeddings.create({
        model: 'text-embedding-3-small',
        input: text.slice(0, 8000)
      });
      return res.data[0].embedding;
    } catch (e) {
      if (i < retries - 1) await sleep(2000 * (i + 1));
      else throw e;
    }
  }
}

// ─── Upsert vectors in batches ───────────────────────────────────────────────
async function upsertBatch(vectors) {
  for (let i = 0; i < vectors.length; i += 100) {
    await index.upsert(vectors.slice(i, i + 100));
    await sleep(300);
  }
}

// ─── Delete vectors for a page ───────────────────────────────────────────────
async function deletePageVectors(orgId, url, chunkCount) {
  if (!chunkCount || chunkCount === 0) return;
  const ids = vectorIds(orgId, url, chunkCount);
  for (let i = 0; i < ids.length; i += 100) {
    await index.deleteMany(ids.slice(i, i + 100));
    await sleep(200);
  }
}

// ─── Main runner ─────────────────────────────────────────────────────────────
/**
 * @param {object} config
 * @param {string}   config.orgId      - Short ID used for Pinecone vector IDs (e.g. 'miu')
 * @param {string}   config.orgName    - Full org name for metadata
 * @param {string}   config.category   - Category string (education, health, arts, etc.)
 * @param {string}   config.startUrl   - Homepage or seed URL to start crawling
 * @param {string[]} [config.seedUrls] - Additional URLs to seed (optional)
 * @param {number}   [config.maxPages] - Max pages to crawl (default 60)
 * @param {number}   [config.delay]    - Delay between requests in ms (default 600)
 * @param {boolean}  [config.force]    - Skip manifest check and re-index everything (default false)
 */
async function runScraper(config) {
  const {
    orgId,
    orgName,
    category,
    startUrl,
    seedUrls = [],
    maxPages = 60,
    delay = 600,
    force = false
  } = config;

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`🌐  ${orgName}`);
  console.log(`    ${startUrl}`);
  console.log(`    Category: ${category} | Max pages: ${maxPages}`);
  if (force) console.log(`    Mode: FORCE (manifest ignored)`);
  console.log(`${'─'.repeat(60)}\n`);

  // Load manifest
  const manifest = loadManifest();
  const orgManifest = manifest[orgId] || {};

  // Crawl
  const allUrls = [startUrl, ...seedUrls];
  const visited = new Set();
  const queue   = [...allUrls];
  const pages   = []; // { url, text }

  while (queue.length > 0 && visited.size < maxPages) {
    const url = queue.shift();
    if (visited.has(url) || shouldSkip(url)) continue;
    visited.add(url);

    process.stdout.write(`  [${visited.size}/${maxPages}] ${url.slice(0, 75).padEnd(75)} `);
    const res = await fetchPage(url);
    if (!res) { console.log('✗'); await sleep(delay); continue; }

    const text = htmlToText(res.body);
    if (text.length > 200) {
      pages.push({ url, text });
      console.log(`✓ (${(text.length/1000).toFixed(1)}k chars)`);
    } else {
      console.log('— too short');
    }

    const links = extractLinks(res.body, url);
    for (const link of links) {
      if (!visited.has(link) && !shouldSkip(link) && !queue.includes(link)) {
        queue.push(link);
      }
    }

    await sleep(delay);
  }

  console.log(`\n  Pages collected: ${pages.length}`);

  // Chunk, embed, upsert — with change detection
  let totalChunks  = 0;
  let skippedPages = 0;
  let changedPages = 0;
  let errors       = 0;
  const updatedOrgManifest = { ...orgManifest };

  for (const page of pages) {
    const hash = hashText(page.text);
    const prior = orgManifest[page.url];

    // Skip unchanged pages (unless force)
    if (!force && prior && prior.hash === hash) {
      console.log(`  ⏭  ${page.url.slice(0, 65)} — unchanged`);
      totalChunks += prior.chunks;
      skippedPages++;
      continue;
    }

    // Page is new or changed — delete old vectors if we know how many there were
    if (prior && prior.chunks > 0) {
      await deletePageVectors(orgId, page.url, prior.chunks);
    }

    const chunks = chunkText(page.text);
    if (chunks.length === 0) continue;

    const vectors = [];
    for (let i = 0; i < chunks.length; i++) {
      try {
        const embedding = await embed(chunks[i]);
        vectors.push({
          id: `${orgId}-${Buffer.from(page.url).toString('base64').slice(0, 20)}-${i}`,
          values: embedding,
          metadata: {
            text:     chunks[i].slice(0, 1000),
            source:   page.url,
            org:      orgName,
            category: category,
            type:     'community_org',
            file:     `${orgName} — ${page.url}`
          }
        });
        await sleep(80);
      } catch (e) {
        console.error(`\n  ❌ Embed error: ${page.url} chunk ${i}: ${e.message}`);
        errors++;
      }
    }

    await upsertBatch(vectors);
    totalChunks += vectors.length;
    changedPages++;

    const label = prior ? '🔄' : '✅';
    console.log(`  ${label} ${page.url.slice(0, 65)} → ${vectors.length} chunks`);

    // Update manifest entry for this page
    updatedOrgManifest[page.url] = {
      hash,
      chunks: vectors.length,
      lastScraped: new Date().toISOString()
    };
  }

  // Persist updated manifest
  manifest[orgId] = updatedOrgManifest;
  saveManifest(manifest);

  console.log(`\n${'─'.repeat(60)}`);
  console.log(`  ✅ ${orgName} complete`);
  console.log(`     Pages: ${pages.length} | Chunks: ${totalChunks} | Errors: ${errors}`);
  if (skippedPages > 0 || changedPages > 0) {
    console.log(`     Unchanged (skipped): ${skippedPages} | New/changed (re-indexed): ${changedPages}`);
  }
  console.log(`${'═'.repeat(60)}\n`);

  return { pages: pages.length, chunks: totalChunks, errors, skipped: skippedPages, changed: changedPages };
}

module.exports = { runScraper };
