/**
 * scrapers/education/isu-extension-jefferson.js
 * ISU Extension Jefferson County — extension.iastate.edu/jefferson
 *
 * Local subsite of Iowa State University Extension. Content includes
 * local programs, 4-H youth development, ag education, family/finance
 * resources, master gardener, and county impact reports.
 *
 * Run from ~/fairfield-research-tool:
 *   node scrapers/education/isu-extension-jefferson.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'isu-extension',
  orgName:  'ISU Extension Jefferson County',
  category: 'education',
  startUrl: 'https://www.extension.iastate.edu/jefferson',
  seedUrls: [
    'https://www.extension.iastate.edu/jefferson',
    'https://www.extension.iastate.edu/jefferson/4h-youth-development',
    'https://www.extension.iastate.edu/jefferson/agriculture',
    'https://www.extension.iastate.edu/jefferson/human-sciences',
    'https://www.extension.iastate.edu/jefferson/master-gardener',
    'https://www.extension.iastate.edu/jefferson/news',
    'https://www.extension.iastate.edu/jefferson/about',
    'https://www.extension.iastate.edu/jefferson/staff',
  ],
  maxPages: 60,
  delay:    700,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
