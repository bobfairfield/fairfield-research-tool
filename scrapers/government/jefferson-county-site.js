const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'jc-gov-site',
  orgName:  'Jefferson County Iowa Government',
  category: 'government',
  startUrl: 'https://jeffersoncounty.iowa.gov/',
  seedUrls: [
    'https://jeffersoncounty.iowa.gov/departments/',
    'https://jeffersoncounty.iowa.gov/supervisors/',
    'https://jeffersoncounty.iowa.gov/code/',
    'https://jeffersoncounty.iowa.gov/auditor/',
    'https://jeffersoncounty.iowa.gov/treasurer/',
    'https://jeffersoncounty.iowa.gov/assessor.htm',
    'https://jeffersoncounty.iowa.gov/departments/recorder/',
    'https://jeffersoncounty.iowa.gov/environment/',
    'https://jeffersoncounty.iowa.gov/gen-assist/',
    'https://jeffersoncounty.iowa.gov/vets/',
    'https://jeffersoncounty.iowa.gov/sheriff/',
    'https://jeffersoncounty.iowa.gov/brief-history/',
    'https://jeffersoncounty.iowa.gov/news/',
  ],
  maxPages: 100,
  delay:    700,
});
