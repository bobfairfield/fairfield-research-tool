/**
 * scrapers/civic/pathfinders-rcd.js
 * Pathfinders RC&D — pathfindersrcd.org
 * 304 South Maple, Fairfield, Iowa 52556
 *
 * Resource Conservation & Development organization serving Jefferson,
 * Mahaska, Keokuk, Davis, Van Buren, and surrounding SE Iowa counties.
 * Programs: community development, housing, water quality/soil health,
 * grant writing/administration, small business loans, Historic Hills Byway,
 * Pathfinders Learning Center (childcare, Bloomfield), kayak rental.
 *
 * WordPress site — expect SUBSTANTIAL coverage.
 *
 * Usage:
 *   node scrapers/civic/pathfinders-rcd.js
 */

const { runScraper } = require('../scraper-base');

runScraper({
  orgId:    'pathfinders-rcd',
  orgName:  'Pathfinders RC&D',
  category: 'civic',
  startUrl: 'https://pathfindersrcd.org',
  seedUrls: [
    'https://pathfindersrcd.org/who-we-are/',
    'https://pathfindersrcd.org/who-we-are/staff/',
    'https://pathfindersrcd.org/who-we-are/board-of-directors/',
    'https://pathfindersrcd.org/who-we-are/mission-vision/',
    'https://pathfindersrcd.org/who-we-are/history/',
    'https://pathfindersrcd.org/who-we-are/contact-us/',
    'https://pathfindersrcd.org/what-we-do/',
    'https://pathfindersrcd.org/what-we-do/community-development/',
    'https://pathfindersrcd.org/what-we-do/community-development/communityresourceguide/',
    'https://pathfindersrcd.org/what-we-do/community-development/historic-hills-byway/',
    'https://pathfindersrcd.org/what-we-do/community-development/hunger-dialogue/',
    'https://pathfindersrcd.org/what-we-do/community-development/small-business-loans/',
    'https://pathfindersrcd.org/what-we-do/housing/',
    'https://pathfindersrcd.org/what-we-do/housing/housingconference/',
    'https://pathfindersrcd.org/what-we-do/water-quality-and-soil-health/',
    'https://pathfindersrcd.org/what-we-do/water-quality-and-soil-health/mine-land-reclamation/',
    'https://pathfindersrcd.org/what-we-do/water-quality-and-soil-health/municipal-water-and-sewer-upgrades/',
    'https://pathfindersrcd.org/what-we-do/water-quality-and-soil-health/sidca/',
    'https://pathfindersrcd.org/what-we-do/water-quality-and-soil-health/watershed-projects/',
    'https://pathfindersrcd.org/what-we-do/portfolio/',
    'https://pathfindersrcd.org/work-with-us/',
    'https://pathfindersrcd.org/work-with-us/fiscal-management/',
    'https://pathfindersrcd.org/work-with-us/grant-administration/',
    'https://pathfindersrcd.org/work-with-us/grant-writing/',
    'https://pathfindersrcd.org/work-with-us/project-development-2/',
    'https://pathfindersrcd.org/work-with-us/strategic-planning/',
    'https://pathfindersrcd.org/work-with-us/where-we-work/',
    'https://pathfindersrcd.org/se-iowa-watershed-partnership-rcpp-2448/',
    'https://pathfindersrcd.org/pathfinders-learning-center/',
    'https://pathfindersrcd.org/pathfinders-rcd-kayak-rental/',
    'https://pathfindersrcd.org/news-events/',
  ],
  maxPages: 80,
  delay:    600,
}).catch(err => { console.error('Fatal:', err); process.exit(1); });
