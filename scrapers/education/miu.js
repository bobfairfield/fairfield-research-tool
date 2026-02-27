/**
 * scrapers/education/miu.js
 * Maharishi International University — miu.edu
 *
 * MIU is a large site (2,700+ students, many programs). We target
 * the most civically relevant pages: about, academics, sustainability,
 * community programs, and news — capped at 80 pages to stay focused.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/education/miu.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'miu',
  orgName:  'Maharishi International University',
  category: 'education',
  startUrl: 'https://www.miu.edu',
  seedUrls: [
    'https://www.miu.edu/about',
    'https://www.miu.edu/about/fairfield-iowa',
    'https://www.miu.edu/about/sustainability',
    'https://www.miu.edu/about/history',
    'https://www.miu.edu/academics',
    'https://www.miu.edu/community',
    'https://www.miu.edu/community/community-programs',
    'https://www.miu.edu/news',
    'https://www.miu.edu/admissions',
  ],
  maxPages: 80,
  delay:    700,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
