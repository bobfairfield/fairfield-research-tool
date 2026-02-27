/**
 * scrapers/health/carry-on-bags.js
 * Carry On Bags — carryonbags.org
 *
 * Nonprofit providing weekend food bags to food-insecure students
 * in Jefferson County schools.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/health/carry-on-bags.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'carry-on-bags',
  orgName:  'Carry On Bags',
  category: 'human-services',
  startUrl: 'https://www.carryonbags.org',
  seedUrls: [
    'https://www.carryonbags.org/about',
    'https://www.carryonbags.org/how-it-works',
    'https://www.carryonbags.org/volunteer',
    'https://www.carryonbags.org/donate',
    'https://www.carryonbags.org/news',
  ],
  maxPages: 30,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
