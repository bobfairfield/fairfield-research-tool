/**
 * scrapers/civic/greater-jc-foundation.js
 * Greater Jefferson County Foundation — greaterjeffersoncountyfoundation.org
 */
const { runScraper } = require('../scraper-base');
runScraper({
  orgId:    'gjcf',
  orgName:  'Greater Jefferson County Foundation',
  category: 'civic',
  startUrl: 'https://www.greaterjeffersoncountyfoundation.org',
  seedUrls: [
    'https://www.greaterjeffersoncountyfoundation.org/who-we-are',
    'https://www.greaterjeffersoncountyfoundation.org/history',
    'https://www.greaterjeffersoncountyfoundation.org/board',
    'https://www.greaterjeffersoncountyfoundation.org/grants',
    'https://www.greaterjeffersoncountyfoundation.org/grant-recipients',
    'https://www.greaterjeffersoncountyfoundation.org/scholarships',
    'https://www.greaterjeffersoncountyfoundation.org/scholarship-recipients',
    'https://www.greaterjeffersoncountyfoundation.org/contact',
  ],
  maxPages: 50,
  delay:    700,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
