/**
 * scrapers/civic/jefferson-county-fair.js
 * Jefferson County Fair — jeffersoncofair.com
 */
const { runScraper } = require('../scraper-base');
runScraper({
  orgId:    'jc-fair',
  orgName:  'Jefferson County Fair',
  category: 'civic',
  startUrl: 'https://www.jeffersoncofair.com',
  seedUrls: [
    'https://www.jeffersoncofair.com/about',
    'https://www.jeffersoncofair.com/schedule',
    'https://www.jeffersoncofair.com/calendar',
    'https://www.jeffersoncofair.com/applications',
    'https://www.jeffersoncofair.com/exhibitor-rules',
    'https://www.jeffersoncofair.com/ffa-alumni',
    'https://www.jeffersoncofair.com/history',
    'https://www.jeffersoncofair.com/contact',
  ],
  maxPages: 40,
  delay:    650,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
