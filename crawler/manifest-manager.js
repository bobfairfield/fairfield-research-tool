/**
 * manifest-manager.js
 * Tracks every captured page: URL, content hash, PDF path, Pinecone IDs, capture date
 * This is the heart of the change detection system
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MANIFEST_PATH = path.join(process.env.HOME, 'fairfield-research-tool', 'capture-manifest.json');

function loadManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return { version: 1, last_updated: null, pages: {} };
  }
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
}

function saveManifest(manifest) {
  manifest.last_updated = new Date().toISOString();
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

function hashContent(content) {
  return crypto.createHash('md5').update(content).digest('hex');
}

function getPage(url) {
  const manifest = loadManifest();
  return manifest.pages[url] || null;
}

function setPage(url, data) {
  const manifest = loadManifest();
  manifest.pages[url] = {
    ...data,
    last_updated: new Date().toISOString()
  };
  saveManifest(manifest);
}

function removePage(url) {
  const manifest = loadManifest();
  delete manifest.pages[url];
  saveManifest(manifest);
}

function getAllPages() {
  return loadManifest().pages;
}

function getStalePages(maxAgeDays = 7) {
  const pages = getAllPages();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - maxAgeDays);
  
  return Object.entries(pages)
    .filter(([url, data]) => {
      const lastUpdated = new Date(data.last_updated);
      return lastUpdated < cutoff;
    })
    .map(([url, data]) => ({ url, ...data }));
}

function printSummary() {
  const manifest = loadManifest();
  const pages = manifest.pages;
  const total = Object.keys(pages).length;
  
  const byOrg = {};
  Object.values(pages).forEach(p => {
    const key = p.member ? `${p.org} > ${p.member}` : p.org;
    byOrg[key] = (byOrg[key] || 0) + 1;
  });

  console.log(`\n=== Fairfield RAG Manifest Summary ===`);
  console.log(`Total pages indexed: ${total}`);
  console.log(`Last updated: ${manifest.last_updated || 'never'}`);
  console.log(`\nBreakdown by organization:`);
  Object.entries(byOrg).sort().forEach(([org, count]) => {
    console.log(`  ${count.toString().padStart(3)} pages  ${org}`);
  });
  console.log('');
}

module.exports = { loadManifest, saveManifest, hashContent, getPage, setPage, removePage, getAllPages, getStalePages, printSummary };
