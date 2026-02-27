/**
 * scraper-base.js
 * Shared utilities for all Fairfield community org scrapers.
 * Handles: HTTP fetching, HTML → text, chunking, embedding, Pinecone upsert.
 *
 * Each org script requires this file and calls runScraper(config).
 *
 * Usage from ~/fairfield-research-tool:
 *   node scrapers/education/miu.js
 */

require('dotenv').config({ path: '.env.local' });
const https  = require('https');
const http   = require('http');
const { URL } = require('url');
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');

const oai   = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pc    = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');

const sleep = ms => new Promise(r => setTimeout(r, ms));

// ─── HTTP fetch (follows one redirect) ───────────────────────────────────────
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

  // Remove noisy sections wholesale
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ');

  // Block elements → newline
  s = s.replace(/<\/?(p|div|section|article|h[1-6]|li|tr|br|blockquote)[^>]*>/gi, '\n');

  // Strip remaining tags
  s = s.replace(/<[^>]+>/g, ' ');

  // Decode common HTML entities
  s = s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n)))
    .replace(/&[a-z]+;/gi, ' ');

  // Clean whitespace
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
      // Same hostname only
      if (u.hostname === base.hostname) {
        // Normalize: no trailing slash, no fragment
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

// ─── Crawl a site up to maxPages ─────────────────────────────────────────────
async function crawlSite(startUrl, maxPages = 60, delayMs = 500) {
  const visited = new Set();
  const queue   = [startUrl];
  const results = []; // { url, text }

  while (queue.length > 0 && visited.size < maxPages) {
    const url = queue.shift();
    if (visited.has(url) || shouldSkip(url)) continue;
    visited.add(url);

    process.stdout.write(`  Fetching [${visited.size}/${maxPages}] ${url.slice(0, 80)}...`);
    const res = await fetchPage(url);
    if (!res) { console.log(' ✗'); await sleep(delayMs); continue; }

    const text = htmlToText(res.body);
    if (text.length > 200) {
      results.push({ url, text });
      console.log(` ✓ (${text.length} chars)`);
    } else {
      console.log(' (skipped — too short)');
    }

    // Enqueue new links
    const links = extractLinks(res.body, url);
    for (const link of links) {
      if (!visited.has(link) && !shouldSkip(link) && !queue.includes(link)) {
        queue.push(link);
      }
    }

    await sleep(delayMs);
  }

  return results;
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
      // Split long paragraph by sentences
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
 */
async function runScraper(config) {
  const {
    orgId,
    orgName,
    category,
    startUrl,
    seedUrls = [],
    maxPages = 60,
    delay = 600
  } = config;

  console.log(`\n${'═'.repeat(60)}`);
  console.log(`🌐  ${orgName}`);
  console.log(`    ${startUrl}`);
  console.log(`    Category: ${category} | Max pages: ${maxPages}`);
  console.log(`${'─'.repeat(60)}\n`);

  // Crawl
  const allUrls = [startUrl, ...seedUrls];
  const visited = new Set();
  const queue   = [...allUrls];
  const pages   = [];

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

  // Chunk, embed, upsert
  let totalChunks = 0;
  let errors = 0;

  for (const page of pages) {
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
    console.log(`  ✅ ${page.url.slice(0, 65)} → ${vectors.length} chunks`);
  }

  console.log(`\n${'─'.repeat(60)}`);
  console.log(`  ✅ ${orgName} complete`);
  console.log(`     Pages: ${pages.length} | Chunks: ${totalChunks} | Errors: ${errors}`);
  console.log(`${'═'.repeat(60)}\n`);

  return { pages: pages.length, chunks: totalChunks, errors };
}

module.exports = { runScraper };
