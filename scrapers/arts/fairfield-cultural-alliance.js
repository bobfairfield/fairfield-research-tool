/**
 * scrapers/arts/fairfield-cultural-alliance.js
 * Fairfield Cultural Alliance — fairfieldculturaldistrict.org
 *
 * Administers the state-certified Cultural District around Fairfield's Central Square.
 * Plain HTML site (similar to Trails Council) with news archive, grant info,
 * district history, Cultural Achievement Awards.
 * Re-designated Iowa Cultural & Entertainment District 2018–2028.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/arts/fairfield-cultural-alliance.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'fca',
  orgName:  'Fairfield Cultural Alliance',
  category: 'arts',
  startUrl: 'http://www.fairfieldculturaldistrict.org',
  seedUrls: [
    'http://www.fairfieldculturaldistrict.org/index.htm',
    'http://www.fairfieldculturaldistrict.org/cd.htm',
    'http://www.fairfieldculturaldistrict.org/sitelist.htm',
  ],
  maxPages: 80,
  delay:    650,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
