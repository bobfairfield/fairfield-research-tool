/**
 * scrapers/arts/kufner-art.js
 * Kufner Art Gallery — kufnerart.com
 * Christopher Kufner, painter & photographer
 * 104 W. Burlington Ave., Fairfield, IA 52556
 *
 * Squarespace portfolio site — mostly images; expect SURFACE coverage.
 * Text content concentrated in About page and category descriptions.
 *
 * Usage:
 *   node scrapers/arts/kufner-art.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'kufner-art',
  orgName:  'Kufner Art Gallery',
  category: 'arts',
  startUrl: 'https://www.kufnerart.com',
  seedUrls: [
    'https://www.kufnerart.com/about',
    'https://www.kufnerart.com/landscapes',
    'https://www.kufnerart.com/figurative',
    'https://www.kufnerart.com/devotional',
    'https://www.kufnerart.com/abstract',
    'https://www.kufnerart.com/photography',
    'https://www.kufnerart.com/contact',
    'https://www.kufnerart.com/original-artwork',
    'https://www.kufnerart.com/prints-reproductions',
  ],
  maxPages: 25,
  delay:    700,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
