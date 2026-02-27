/**
 * scrapers/arts/fairfield-acc.js
 * Fairfield Arts & Convention Center — fairfieldacc.com
 *
 * Home of the 522-seat Sondheim Theater. Major cultural anchor
 * for Fairfield's arts community.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/arts/fairfield-acc.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'facc',
  orgName:  'Fairfield Arts & Convention Center',
  category: 'arts-culture',
  startUrl: 'https://www.fairfieldacc.com',
  seedUrls: [
    'https://www.fairfieldacc.com/about',
    'https://www.fairfieldacc.com/events',
    'https://www.fairfieldacc.com/venue',
    'https://www.fairfieldacc.com/sondheim-theater',
    'https://www.fairfieldacc.com/gallery',
    'https://www.fairfieldacc.com/education',
    'https://www.fairfieldacc.com/rent',
    'https://www.fairfieldacc.com/community',
  ],
  maxPages: 60,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
