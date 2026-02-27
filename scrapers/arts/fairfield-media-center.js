/**
 * scrapers/arts/fairfield-media-center.js
 * Fairfield Media Center — fairfieldmediacenter.com
 *
 * Community public access TV and media organization.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/arts/fairfield-media-center.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fmc',
  orgName:  'Fairfield Media Center',
  category: 'arts-culture',
  startUrl: 'https://www.fairfieldmediacenter.com',
  seedUrls: [
    'https://www.fairfieldmediacenter.com/about',
    'https://www.fairfieldmediacenter.com/programs',
    'https://www.fairfieldmediacenter.com/equipment',
    'https://www.fairfieldmediacenter.com/community',
    'https://www.fairfieldmediacenter.com/news',
  ],
  maxPages: 40,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
