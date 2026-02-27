/**
 * scrapers/arts/iowa-source.js
 * Iowa Source — iowasource.com
 *
 * Regional monthly newspaper published in Fairfield covering
 * community news, arts, and culture across southeast Iowa.
 *
 * Strategy: index the About page and recent article archive.
 * We skip individual article URLs older than what's reachable
 * from the homepage/archive (capped at 80 pages).
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/arts/iowa-source.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'iowa-source',
  orgName:  'Iowa Source',
  category: 'media',
  startUrl: 'https://www.iowasource.com',
  seedUrls: [
    'https://www.iowasource.com/about',
    'https://www.iowasource.com/archive',
    'https://www.iowasource.com/community',
    'https://www.iowasource.com/current-issue',
  ],
  maxPages: 80,
  delay:    700,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
