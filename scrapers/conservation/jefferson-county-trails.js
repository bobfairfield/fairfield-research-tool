/**
 * scrapers/conservation/jefferson-county-trails.js
 * Jefferson County Trails Council — jeffersoncountytrails.org
 *
 * Plain HTML site with rich text content: Loop Trail details,
 * individual trail segments, water trails, mileage markers,
 * parks, news archive, and event history.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/conservation/jefferson-county-trails.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'jctc',
  orgName:  'Jefferson County Trails Council',
  category: 'conservation',
  startUrl: 'http://www.jeffersoncountytrails.org',
  seedUrls: [
    'http://www.jeffersoncountytrails.org/index.htm',
    'http://www.jeffersoncountytrails.org/news.htm',
    'http://www.jeffersoncountytrails.org/t-water.htm',
    'http://www.jeffersoncountytrails.org/n-markers.htm',
    'http://www.jeffersoncountytrails.org/maps.htm',
    'http://www.jeffersoncountytrails.org/parks.htm',
    'http://www.jeffersoncountytrails.org/about.htm',
    'http://www.jeffersoncountytrails.org/contact.htm',
  ],
  maxPages: 100,
  delay:    650,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
