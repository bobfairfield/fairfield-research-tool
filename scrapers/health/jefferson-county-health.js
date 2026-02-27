/**
 * scrapers/health/jefferson-county-health.js
 * Jefferson County Health Center — jeffersoncountyhealthcenter.org
 *
 * Iowa's oldest county hospital. Critical access hospital serving
 * Fairfield and surrounding communities.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/health/jefferson-county-health.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'jchc',
  orgName:  'Jefferson County Health Center',
  category: 'health',
  startUrl: 'https://www.jeffersoncountyhealthcenter.org',
  seedUrls: [
    'https://www.jeffersoncountyhealthcenter.org/about',
    'https://www.jeffersoncountyhealthcenter.org/services',
    'https://www.jeffersoncountyhealthcenter.org/community',
    'https://www.jeffersoncountyhealthcenter.org/providers',
    'https://www.jeffersoncountyhealthcenter.org/patients',
    'https://www.jeffersoncountyhealthcenter.org/careers',
  ],
  maxPages: 60,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
