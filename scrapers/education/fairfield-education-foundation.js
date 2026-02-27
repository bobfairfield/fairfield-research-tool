/**
 * scrapers/education/fairfield-education-foundation.js
 * Fairfield Education Foundation — fairfieldeducationfoundation.com
 *
 * Supports Fairfield schools via private grants since 1997.
 * Small site (~5 pages); directors, awards, mission.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/education/fairfield-education-foundation.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fef',
  orgName:  'Fairfield Education Foundation',
  category: 'education',
  startUrl: 'https://fairfieldeducationfoundation.com',
  seedUrls: [
    'https://fairfieldeducationfoundation.com/directors/',
    'https://fairfieldeducationfoundation.com/awards/',
    'https://fairfieldeducationfoundation.com/support/',
    'https://fairfieldeducationfoundation.com/contact/',
  ],
  maxPages: 20,
  delay:    700,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
