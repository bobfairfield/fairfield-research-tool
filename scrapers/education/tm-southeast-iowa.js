// scrapers/education/tm-southeast-iowa.js
// Transcendental Meditation — Southeast Iowa Center (Fairfield only)

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'tm-southeast-iowa',
  orgName:  'TM Southeast Iowa Center',
  category: 'education',
  startUrl: 'https://www.tm.org/en-us/centers/southeast-iowa',
  seedUrls: [
    'https://www.tm.org/en-us/what-is-tm',
    'https://www.tm.org/en-us/tm-course',
    'https://www.tm.org/en-us/course-fee',
    'https://www.tm.org/en-us/benefits',
  ],
  maxPages: 6,
  delay:    1500,
  force:    true,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
