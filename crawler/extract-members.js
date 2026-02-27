/**
 * extract-members.js
 * Uses system Chrome (not Puppeteer's bundled Chromium) to avoid Mac crashes
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const DIRECTORY_URL = 'https://www.fairfieldiowa.com/directory/';
const OUTPUT_FILE = path.join(__dirname, 'members.json');
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function extractMembers() {
  console.log('Launching system Chrome...');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1280,900'
    ]
  });

  const page = await browser.newPage();
  
  await page.evaluateOnNewDocument(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => false });
  });

  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1280, height: 900 });

  console.log(`Loading: ${DIRECTORY_URL}`);
  
  try {
    await page.goto(DIRECTORY_URL, { waitUntil: 'networkidle0', timeout: 45000 });
  } catch(e) {
    console.log(`  Load note: ${e.message} - continuing...`);
  }

  console.log('Waiting for JavaScript to render...');
  await new Promise(r => setTimeout(r, 5000));

  // Scroll to load lazy content
  await page.evaluate(async () => {
    for (let i = 0; i < 15; i++) {
      window.scrollBy(0, 600);
      await new Promise(r => setTimeout(r, 300));
    }
    window.scrollTo(0, 0);
  });
  await new Promise(r => setTimeout(r, 2000));

  // Get page text preview
  const bodyText = await page.evaluate(() => document.body.innerText.slice(0, 3000));
  console.log(`\nPage content preview:\n${bodyText}\n`);

  // Extract all links
  const allLinks = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href]')).map(a => ({
      text: a.textContent.trim().slice(0, 80),
      href: a.href
    })).filter(l => l.text.length > 1);
  });

  console.log(`Total links found: ${allLinks.length}`);

  // External business links
  const businessLinks = allLinks.filter(l =>
    l.href.startsWith('http') &&
    !l.href.includes('fairfieldiowa.com') &&
    !l.href.includes('growthzoneapp.com') &&
    !l.href.includes('facebook.com') &&
    !l.href.includes('twitter.com') &&
    !l.href.includes('instagram.com') &&
    !l.href.includes('linkedin.com') &&
    !l.href.includes('youtube.com') &&
    l.text.length > 2
  );

  console.log(`External business links: ${businessLinks.length}`);
  if (businessLinks.length > 0) {
    businessLinks.slice(0, 30).forEach(l => console.log(`  "${l.text}" → ${l.href}`));
  }

  await browser.close();

  if (businessLinks.length === 0) {
    console.log('\n⚠️  Directory loaded but no member websites found.');
    console.log('GrowthZone may be loading members in an iframe or blocking bots.');
    console.log('\nRecommended: Ask Mendy for a CSV export of members with website URLs.');
    console.log('(See the letter we prepared - just add one line requesting this)\n');
    fs.writeFileSync(OUTPUT_FILE.replace('.json', '-debug.json'),
      JSON.stringify({ links: allLinks.slice(0, 100), preview: bodyText }, null, 2));
    return [];
  }

  const members = businessLinks.map(l => ({ name: l.text, website: l.href, profile_url: null }));
  const result = {
    extracted_date: new Date().toISOString(),
    total: members.length,
    with_websites: members.length,
    members
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
  console.log(`\n✓ Saved ${members.length} members to: ${OUTPUT_FILE}`);
  return members;
}

extractMembers().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
