/**
 * scrapers/faith/first-umc.js
 * First United Methodist Church — fairfieldmethodistchurch.org
 *
 * Hosts the community Thanksgiving Meal and other civic programs.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/faith/first-umc.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fumc',
  orgName:  'First United Methodist Church Fairfield',
  category: 'faith-community',
  startUrl: 'https://www.fairfieldmethodistchurch.org',
  seedUrls: [
    'https://www.fairfieldmethodistchurch.org/about',
    'https://www.fairfieldmethodistchurch.org/ministries',
    'https://www.fairfieldmethodistchurch.org/community',
    'https://www.fairfieldmethodistchurch.org/events',
    'https://www.fairfieldmethodistchurch.org/news',
  ],
  maxPages: 40,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
