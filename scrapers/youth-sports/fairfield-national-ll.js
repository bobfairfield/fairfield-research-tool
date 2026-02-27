/**
 * scrapers/youth-sports/fairfield-national-ll.js
 * Fairfield National Little League — fnll.org
 *
 * Fairfield National achieved 3rd place at the Little League
 * World Series in 2025. A significant community achievement.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/youth-sports/fairfield-national-ll.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fnll',
  orgName:  'Fairfield National Little League',
  category: 'youth-sports',
  startUrl: 'https://www.fnll.org',
  seedUrls: [
    'https://www.fnll.org/about',
    'https://www.fnll.org/news',
    'https://www.fnll.org/history',
    'https://www.fnll.org/registration',
    'https://www.fnll.org/teams',
    'https://www.fnll.org/sponsors',
  ],
  maxPages: 40,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
