/**
 * scrapers/business/fairfield-chamber.js
 * Fairfield Area Chamber of Commerce — fairfieldiowa.com
 *
 * WordPress site with community pages, news/press releases,
 * business directory, events, and civic resources. Directory
 * pages may have limited yield if behind member login.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/business/fairfield-chamber.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fairfield-chamber',
  orgName:  'Fairfield Area Chamber of Commerce',
  category: 'business',
  startUrl: 'https://www.fairfieldiowa.com',
  seedUrls: [
    'https://www.fairfieldiowa.com/about/',
    'https://www.fairfieldiowa.com/news/',
    'https://www.fairfieldiowa.com/events/',
    'https://www.fairfieldiowa.com/community/',
    'https://www.fairfieldiowa.com/business-resources/',
    'https://www.fairfieldiowa.com/relocation/',
    'https://www.fairfieldiowa.com/members/',
    'https://www.fairfieldiowa.com/page/Main-Street/',
  ],
  maxPages: 120,
  delay:    650,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
