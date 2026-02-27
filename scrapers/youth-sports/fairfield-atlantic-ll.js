/**
 * scrapers/youth-sports/fairfield-atlantic-ll.js
 * Fairfield Atlantic Little League — fairfieldatlanticlittleleague.org
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/youth-sports/fairfield-atlantic-ll.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fall',
  orgName:  'Fairfield Atlantic Little League',
  category: 'youth-sports',
  startUrl: 'https://www.fairfieldatlanticlittleleague.org',
  seedUrls: [
    'https://www.fairfieldatlanticlittleleague.org/about',
    'https://www.fairfieldatlanticlittleleague.org/news',
    'https://www.fairfieldatlanticlittleleague.org/registration',
    'https://www.fairfieldatlanticlittleleague.org/teams',
    'https://www.fairfieldatlanticlittleleague.org/schedule',
    'https://www.fairfieldatlanticlittleleague.org/volunteers',
  ],
  maxPages: 40,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
