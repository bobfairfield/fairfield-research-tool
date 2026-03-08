const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'freeform-gallery',
  orgName:  'Freeform Art Gallery',
  category: 'arts-culture',
  startUrl: 'https://freeformartgallery.com',
  seedUrls: [
    'https://freeformartgallery.com/about/',
    'https://freeformartgallery.com/gallery/',
    'https://freeformartgallery.com/shop/',
    'https://freeformartgallery.com/contact/',
  ],
  maxPages: 20,
  delay:    1000,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
