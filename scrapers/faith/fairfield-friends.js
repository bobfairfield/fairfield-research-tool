/**
 * scrapers/faith/fairfield-friends.js
 * Fairfield Friends Church — fairfieldfriendschurch.org
 *
 * Quaker congregation with community outreach programs.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/faith/fairfield-friends.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'ffc',
  orgName:  'Fairfield Friends Church',
  category: 'faith-community',
  startUrl: 'https://www.fairfieldfriendschurch.org',
  seedUrls: [
    'https://www.fairfieldfriendschurch.org/about',
    'https://www.fairfieldfriendschurch.org/ministries',
    'https://www.fairfieldfriendschurch.org/community',
    'https://www.fairfieldfriendschurch.org/events',
    'https://www.fairfieldfriendschurch.org/news',
  ],
  maxPages: 40,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
