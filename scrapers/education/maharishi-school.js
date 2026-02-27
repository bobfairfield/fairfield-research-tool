/**
 * scrapers/education/maharishi-school.js
 * Maharishi School (Pre-K–12) — maharishischool.org
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/education/maharishi-school.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'maharishi-school',
  orgName:  'Maharishi School',
  category: 'education',
  startUrl: 'https://www.maharishischool.org',
  seedUrls: [
    'https://www.maharishischool.org/about',
    'https://www.maharishischool.org/academics',
    'https://www.maharishischool.org/admissions',
    'https://www.maharishischool.org/news',
    'https://www.maharishischool.org/community',
  ],
  maxPages: 50,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
