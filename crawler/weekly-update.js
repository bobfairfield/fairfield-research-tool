/**
 * weekly-update.js
 * Checks all indexed pages for changes and re-indexes only what's different
 * 
 * Run manually: node weekly-update.js
 * Or add to cron: 0 6 * * 0 cd ~/fairfield-research-tool && node weekly-update.js >> logs/update.log 2>&1
 * 
 * What it does:
 * 1. Reads all tracked URLs from manifest
 * 2. Fetches current page content
 * 3. Compares hash to stored hash
 * 4. If changed: deletes old Pinecone vectors, re-captures PDF, re-indexes
 * 5. Generates a change report
 */

require('dotenv').config({ path: require('path').join(process.env.HOME, 'fairfield-research-tool', '.env.local') });

const { execSync } = require('child_process');
const https = require('https');
const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { getAllPages, hashContent, getPage } = require('./manifest-manager');
const { processAndTrack } = require('./smart-processor');

const CHROME = '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome';
const LOG_DIR = path.join(process.env.HOME, 'fairfield-research-tool', 'logs');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  fs.appendFileSync(path.join(LOG_DIR, 'update.log'), line + '\n');
}

function fetchPageContent(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { 
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

function recapturePdf(url, pdfPath) {
  try {
    const dir = path.dirname(pdfPath);
    fs.mkdirSync(dir, { recursive: true });
    execSync(
      `${CHROME} --headless --print-to-pdf="${pdfPath}" --no-pdf-header-footer "${url}" 2>/dev/null`,
      { timeout: 20000 }
    );
    const stats = fs.statSync(pdfPath);
    return stats.size > 5000;
  } catch (err) {
    return false;
  }
}

async function runUpdate() {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  
  const startTime = Date.now();
  log('=== Weekly Update Started ===');

  const pages = getAllPages();
  const urls = Object.keys(pages);
  
  log(`Checking ${urls.length} tracked pages for changes...`);

  const report = {
    date: new Date().toISOString(),
    total_checked: urls.length,
    unchanged: 0,
    updated: 0,
    failed: 0,
    errors: 0,
    changes: []
  };

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const stored = pages[url];
    
    process.stdout.write(`[${i+1}/${urls.length}] Checking: ${url.slice(0,60)}... `);

    // Fetch current page HTML to check for changes
    const content = await fetchPageContent(url);
    
    if (content === null) {
      console.log('ERROR (unreachable)');
      log(`ERROR: Could not reach ${url}`);
      report.errors++;
      await new Promise(r => setTimeout(r, 1000));
      continue;
    }

    // Hash the HTML content (faster than re-parsing PDF)
    const currentHash = hashContent(content);
    
    if (stored.html_hash && stored.html_hash === currentHash) {
      console.log('unchanged');
      report.unchanged++;
    } else {
      console.log('CHANGED - re-indexing...');
      
      // Re-capture the PDF
      const success = recapturePdf(url, stored.pdf_path);
      
      if (success) {
        // Re-process with smart-processor (handles delete + re-upload)
        const result = await processAndTrack(stored.pdf_path, {
          source: stored.source,
          category: stored.category,
          subcategory: stored.subcategory,
          type: stored.type,
          org: stored.org,
          member: stored.member || null
        }, url);

        // Update HTML hash in manifest
        const { setPage } = require('./manifest-manager');
        const existing = getPage(url);
        setPage(url, { ...existing, html_hash: currentHash });

        report.updated++;
        report.changes.push({ url, org: stored.org, member: stored.member });
        log(`UPDATED: ${url}`);
      } else {
        console.log('  Re-capture failed');
        report.failed++;
        log(`FAILED to re-capture: ${url}`);
      }
    }

    // Polite delay
    await new Promise(r => setTimeout(r, 500 + Math.random() * 500));
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000);
  
  // Save report
  const reportPath = path.join(LOG_DIR, `update-${new Date().toISOString().split('T')[0]}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  log(`=== Update Complete ===`);
  log(`Duration: ${elapsed}s`);
  log(`Unchanged: ${report.unchanged}`);
  log(`Updated: ${report.updated}`);
  log(`Failed: ${report.failed}`);
  log(`Errors: ${report.errors}`);
  
  if (report.changes.length > 0) {
    log(`\nChanged pages:`);
    report.changes.forEach(c => log(`  ${c.member || c.org}: ${c.url}`));
  }

  console.log(`\nReport saved: ${reportPath}`);
  return report;
}

runUpdate().catch(err => { log(`FATAL: ${err.message}`); process.exit(1); });
