/**
 * scrapers/youth-sports/jefferson-county-ll.js
 * Jefferson County Little League — jeffersoncountylittleleague.com
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/youth-sports/jefferson-county-ll.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'jcll',
  orgName:  'Jefferson County Little League',
  category: 'youth-sports',
  startUrl: 'https://www.jeffersoncountylittleleague.com',
  seedUrls: [
    'https://www.jeffersoncountylittleleague.com/about',
    'https://www.jeffersoncountylittleleague.com/news',
    'https://www.jeffersoncountylittleleague.com/registration',
    'https://www.jeffersoncountylittleleague.com/teams',
    'https://www.jeffersoncountylittleleague.com/schedule',
    'https://www.jeffersoncountylittleleague.com/volunteers',
  ],
  maxPages: 40,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
