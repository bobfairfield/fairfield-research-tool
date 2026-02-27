const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'area15-rpc',
  orgName:  'Area 15 Regional Planning Commission',
  category: 'regional_planning',
  startUrl: 'https://www.area15rpc.com/',
  seedUrls: [
    'https://www.area15rpc.com/who-we-are',
    'https://www.area15rpc.com/copy-of-what-we-do',
    'https://www.area15rpc.com/housing',
    'https://www.area15rpc.com/economic-development',
    'https://www.area15rpc.com/transportation',
    'https://www.area15rpc.com/community-development',
    'https://www.area15rpc.com/contact',
  ],
  maxPages: 60,
  delay:    700,
});
