/**
 * crawl-member.js
 * For a given member business website, discovers and captures up to 8 key pages as PDFs
 * Focuses on: homepage, about, services/products, contact, team, locations
 * 
 * Usage: node crawl-member.js <business_name> <website_url> <output_base_dir>
 */

const puppeteer = require('puppeteer');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME = '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome';
const MAX_PAGES = 8;

// Priority page patterns - we prefer these over random pages
const PRIORITY_PATTERNS = [
  /^\/?$/,                          // homepage
  /about/i,
  /services?/i,
  /products?/i,
  /contact/i,
  /team|staff|people/i,
  /location|directions|hours/i,
  /what-we-do|our-work|offerings/i,
];

// Skip these - they don't add useful information
const SKIP_PATTERNS = [
  /\.(jpg|jpeg|png|gif|pdf|zip|doc|docx|mp4|mp3|css|js)(\?|$)/i,
  /privacy-policy|terms-of-service|cookie/i,
  /login|signin|register|cart|checkout|account/i,
  /wp-admin|wp-content|wp-json/i,
  /#/,
  /facebook\.com|twitter\.com|instagram\.com|linkedin\.com/i,
  /mailto:|tel:/i,
];

function shouldSkip(url) {
  return SKIP_PATTERNS.some(p => p.test(url));
}

function priorityScore(url) {
  for (let i = 0; i < PRIORITY_PATTERNS.length; i++) {
    if (PRIORITY_PATTERNS[i].test(url)) return PRIORITY_PATTERNS.length - i;
  }
  return 0;
}

function safeName(str) {
  return str.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_').slice(0, 60);
}

async function discoverPages(startUrl) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');

  let links = [startUrl];

  try {
    await page.goto(startUrl, { waitUntil: 'networkidle2', timeout: 15000 });
    
    const baseUrl = new URL(startUrl);
    const domain = baseUrl.hostname;

    // Extract all internal links
    const foundLinks = await page.evaluate((domain) => {
      const anchors = document.querySelectorAll('a[href]');
      const urls = [];
      anchors.forEach(a => {
        try {
          const href = a.href;
          const url = new URL(href);
          if (url.hostname === domain || url.hostname === `www.${domain}` || `www.${url.hostname}` === domain) {
            urls.push(href.split('#')[0]); // strip fragments
          }
        } catch(e) {}
      });
      return [...new Set(urls)];
    }, domain);

    // Filter and score
    const candidates = foundLinks
      .filter(u => !shouldSkip(u))
      .map(u => ({ url: u, score: priorityScore(u) }))
      .sort((a, b) => b.score - a.score);

    // Take unique, prioritized pages up to MAX_PAGES
    const seen = new Set([startUrl]);
    links = [startUrl];
    for (const { url } of candidates) {
      if (links.length >= MAX_PAGES) break;
      if (!seen.has(url)) {
        seen.add(url);
        links.push(url);
      }
    }

  } catch (err) {
    console.log(`  Warning: could not crawl ${startUrl}: ${err.message}`);
  }

  await browser.close();
  return links;
}

function captureAsPdf(url, outputPath) {
  try {
    execSync(
      `${CHROME} --headless --print-to-pdf="${outputPath}" --no-pdf-header-footer --timeout=15000 "${url}" 2>/dev/null`,
      { timeout: 20000 }
    );
    const stats = fs.statSync(outputPath);
    return stats.size > 5000; // at least 5KB = real content
  } catch (err) {
    return false;
  }
}

async function crawlMember(businessName, websiteUrl, outputBaseDir) {
  const memberDir = path.join(outputBaseDir, safeName(businessName));
  fs.mkdirSync(memberDir, { recursive: true });

  console.log(`\nCrawling: ${businessName}`);
  console.log(`  URL: ${websiteUrl}`);

  // Discover pages
  let pages;
  try {
    pages = await discoverPages(websiteUrl);
  } catch (err) {
    pages = [websiteUrl]; // fallback to homepage only
  }
  console.log(`  Found ${pages.length} pages to capture`);

  const captured = [];
  for (let i = 0; i < pages.length; i++) {
    const url = pages[i];
    const pageName = i === 0 ? '00_Home' : `${String(i).padStart(2,'0')}_${safeName(new URL(url).pathname)}`;
    const pdfPath = path.join(memberDir, `${pageName}.pdf`);
    
    const success = captureAsPdf(url, pdfPath);
    if (success) {
      captured.push({ url, pdf_path: pdfPath });
      process.stdout.write(`  ✓ ${pageName}\n`);
    } else {
      process.stdout.write(`  ✗ ${pageName} (failed)\n`);
    }
    
    // Polite delay between requests
    await new Promise(r => setTimeout(r, 1500 + Math.random() * 1000));
  }

  console.log(`  Captured ${captured.length}/${pages.length} pages`);
  return captured;
}

// CLI
if (require.main === module) {
  const [,, businessName, websiteUrl, outputDir] = process.argv;
  if (!businessName || !websiteUrl || !outputDir) {
    console.error('Usage: node crawl-member.js <business_name> <website_url> <output_dir>');
    process.exit(1);
  }
  crawlMember(businessName, websiteUrl, outputDir)
    .then(captured => {
      console.log(JSON.stringify(captured));
    })
    .catch(err => { console.error(err); process.exit(1); });
}

module.exports = { crawlMember };
