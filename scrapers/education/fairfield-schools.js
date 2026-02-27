/**
 * scrapers/education/fairfield-schools.js
 * Fairfield Community School District — fairfieldsfuture.org
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/education/fairfield-schools.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fcsd',
  orgName:  'Fairfield Community School District',
  category: 'education',
  startUrl: 'https://www.fairfieldsfuture.org',
  seedUrls: [
    'https://www.fairfieldsfuture.org/about',
    'https://www.fairfieldsfuture.org/schools',
    'https://www.fairfieldsfuture.org/departments',
    'https://www.fairfieldsfuture.org/board',
    'https://www.fairfieldsfuture.org/community',
  ],
  maxPages: 60,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
