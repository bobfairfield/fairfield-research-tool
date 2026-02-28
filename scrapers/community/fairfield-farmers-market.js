/**
 * scrapers/arts/fairfield-farmers-market.js
 * Fairfield Farmers Market — fairfieldiowafarmersmarket.farm
 *
 * SE Iowa's most well-known farmers market, founded 1975.
 * 501c3 non-profit managed by a Market Advisory Board.
 * Outdoor: Saturdays & Wednesdays May–October at Howard Park
 * Indoor: Saturdays November–April (location on Facebook)
 *
 * Usage:
 *   node scrapers/community/fairfield-farmers-market.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fairfield-farmers-market',
  orgName:  'Fairfield Farmers Market',
  category: 'community',
  startUrl: 'https://fairfieldiowafarmersmarket.farm/',
  seedUrls: [
    'https://fairfieldiowafarmersmarket.farm/about/',
    'https://fairfieldiowafarmersmarket.farm/market-locations/',
    'https://fairfieldiowafarmersmarket.farm/guidelines-rules-for-merchants/',
    'https://fairfieldiowafarmersmarket.farm/contact/',
  ],
  maxPages: 20,
  delay:    500,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
