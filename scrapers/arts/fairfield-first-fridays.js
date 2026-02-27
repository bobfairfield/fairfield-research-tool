/**
 * scrapers/arts/fairfield-first-fridays.js
 * Fairfield First Fridays Art Walk — fairfieldfirstfridays.org
 *
 * Monthly art walk event organization, 24+ years running.
 * Wix-built site — expect JS-rendering limitations (likely Surface yield).
 * Blog posts are the main content value if extractable.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/arts/fairfield-first-fridays.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fff',
  orgName:  'Fairfield First Fridays Art Walk',
  category: 'arts',
  startUrl: 'https://fairfieldfirstfridays.org',
  seedUrls: [
    'https://fairfieldfirstfridays.org/about-us',
    'https://fairfieldfirstfridays.org/blog',
    'https://fairfieldfirstfridays.org/contact-us',
  ],
  maxPages: 40,
  delay:    700,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
