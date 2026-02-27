/**
 * scrapers/tourism/visit-fairfield.js
 * Visit Fairfield CVB — visitfairfieldiowa.com
 *
 * Convention & Visitors Bureau. Rich source of community
 * identity content: events, attractions, dining, lodging.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/tourism/visit-fairfield.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'visit-fairfield',
  orgName:  'Visit Fairfield Iowa (CVB)',
  category: 'tourism',
  startUrl: 'https://www.visitfairfieldiowa.com',
  seedUrls: [
    'https://www.visitfairfieldiowa.com/about',
    'https://www.visitfairfieldiowa.com/eat',
    'https://www.visitfairfieldiowa.com/stay',
    'https://www.visitfairfieldiowa.com/see-do',
    'https://www.visitfairfieldiowa.com/events',
    'https://www.visitfairfieldiowa.com/arts',
    'https://www.visitfairfieldiowa.com/shopping',
    'https://www.visitfairfieldiowa.com/plan-your-trip',
  ],
  maxPages: 70,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
