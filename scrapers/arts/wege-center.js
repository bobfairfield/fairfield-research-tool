/**
 * scrapers/arts/wege-center.js
 * Wege Center for the Arts — wegecenter.org
 * MIU Art Department gallery, 1000 North 4th Street, Fairfield, IA
 *
 * Squarespace site — JS-rendered; expect surface-level coverage.
 * Key content: current/upcoming/past exhibitions, about, artist lecture series.
 *
 * Usage:
 *   node scrapers/arts/wege-center.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'wege-center',
  orgName:  'Wege Center for the Arts',
  category: 'arts',
  startUrl: 'https://www.wegecenter.org',
  seedUrls: [
    'https://www.wegecenter.org/current',
    'https://www.wegecenter.org/upcoming',
    'https://www.wegecenter.org/past',
    'https://www.wegecenter.org/about',
    'https://www.wegecenter.org/contact',
    'https://www.wegecenter.org/davidthansonartistlectureseries',
    'https://www.wegecenter.org/whirl',
  ],
  maxPages: 30,
  delay:    700,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
