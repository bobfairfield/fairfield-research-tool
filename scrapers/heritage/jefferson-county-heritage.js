/**
 * scrapers/heritage/jefferson-county-heritage.js
 * Jefferson County Heritage Foundation — jeffersoncountyheritage.org
 */
const { runScraper } = require('../scraper-base');
runScraper({
  orgId:    'jc-heritage',
  orgName:  'Jefferson County Heritage Foundation',
  category: 'heritage',
  startUrl: 'https://www.jeffersoncountyheritage.org',
  seedUrls: [
    'https://www.jeffersoncountyheritage.org/carnegie-museum',
    'https://www.jeffersoncountyheritage.org/support-carnegie',
    'https://www.jeffersoncountyheritage.org/parsons-alumni',
    'https://www.jeffersoncountyheritage.org/maasdam-barns',
    'https://www.jeffersoncountyheritage.org/bonnifield-cabin',
    'https://www.jeffersoncountyheritage.org/mcelhinney-house',
    'https://www.jeffersoncountyheritage.org/elm-grove-school',
    'https://www.jeffersoncountyheritage.org/events',
  ],
  maxPages: 60,
  delay:    650,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
