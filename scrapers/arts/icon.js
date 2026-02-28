/**
 * scrapers/arts/icon.js
 * ICON — Iowa Contemporary Art
 * 58 North Main Street, Fairfield, IA
 *
 * Static HTML site with rich content: exhibitions archive,
 * art radio show listings, artist statements, events, board info.
 *
 * Usage:
 *   node scrapers/arts/icon.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'icon',
  orgName:  'ICON — Iowa Contemporary Art',
  category: 'arts',
  startUrl: 'https://www.icon-art.org',
  seedUrls: [
    'https://www.icon-art.org/currentoverview.htm',
    'https://www.icon-art.org/arc-exhibitions.htm',
    'https://www.icon-art.org/billsroom.htm',
    'https://www.icon-art.org/currentevents.htm',
    'https://www.icon-art.org/artradio.htm',
    'https://www.icon-art.org/people.htm',
    'https://www.icon-art.org/contact.htm',
    'https://www.icon-art.org/subscribe.htm',
    'https://www.icon-art.org/volunteer.htm',
  ],
  maxPages: 40,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
