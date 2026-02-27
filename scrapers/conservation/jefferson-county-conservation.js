/**
 * scrapers/conservation/jefferson-county-conservation.js
 * Jefferson County Conservation — jeffersoncountyconservation.com
 *
 * Manages 12 park areas in Jefferson County. Rich static content:
 * individual park pages, camping, hunting, fishing, nature programs,
 * news archive, and board/governance info.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/conservation/jefferson-county-conservation.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'jcc',
  orgName:  'Jefferson County Conservation',
  category: 'conservation',
  startUrl: 'https://jeffersoncountyconservation.com',
  seedUrls: [
    'https://jeffersoncountyconservation.com/about/',
    'https://jeffersoncountyconservation.com/parks/',
    'https://jeffersoncountyconservation.com/jefferson-county-park/',
    'https://jeffersoncountyconservation.com/camping/',
    'https://jeffersoncountyconservation.com/cabins/',
    'https://jeffersoncountyconservation.com/hunting/',
    'https://jeffersoncountyconservation.com/fishing/',
    'https://jeffersoncountyconservation.com/nature-center/',
    'https://jeffersoncountyconservation.com/programs/',
    'https://jeffersoncountyconservation.com/news/',
    'https://jeffersoncountyconservation.com/board/',
    'https://jeffersoncountyconservation.com/contact/',
  ],
  maxPages: 80,
  delay:    650,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
