// generate-map.js — Run from ~/fairfield-research-tool/
// Queries Pinecone and generates fairfield_knowledge_base.html automatically.
// Usage: node generate-map.js
// Output: fairfield_knowledge_base.html (open in any browser)

require('dotenv').config({ path: '.env.local' });
const { Pinecone } = require('@pinecone-database/pinecone');
const fs = require('fs');

const INDEX_NAME = 'fairfield-civic-docs';
const OUTPUT_FILE = 'fairfield_knowledge_base.html';
const CONCURRENCY = 10;

// ─────────────────────────────────────────────────────────────────────────────
// SOURCE CATALOG
// This is the human-readable config that maps raw Pinecone source labels
// to display names, sections, and descriptions.
// ADD NEW SOURCES HERE as you upload them.
// ─────────────────────────────────────────────────────────────────────────────
const SOURCE_CATALOG = {
  'iowa-dance-collective': { group: 'arts', coverage: 'SUBSTANTIAL', displayName: 'Iowa Dance Collective', emoji: '💃', color: '#5b3ea6', url: 'iowadancecollective.org' },
  'visit-fairfield': { group: 'tourism', coverage: 'SUBSTANTIAL', displayName: 'Visit Fairfield Iowa (CVB)', emoji: '🗺️', color: '#b06a20', url: 'visitfairfieldiowa.com' },
  'https://freeformartgallery.com/product-category/jewelry': { group: 'arts', coverage: 'SUBSTANTIAL', displayName: 'Freeform Art Gallery', emoji: '🖼️', color: '#7c3d6b', url: 'freeformartgallery.com' },
  'freeform-gallery': { group: 'arts', coverage: 'SUBSTANTIAL', displayName: 'Freeform Art Gallery', emoji: '🖼️', color: '#7c3d6b', url: 'freeformartgallery.com' },
  'iowa-source': { group: 'arts', coverage: 'SUBSTANTIAL', displayName: 'Iowa Source', emoji: '📰', color: '#8b3a1e', url: 'iowasource.com' },
  'fairfield-cultural-alliance': { group: 'arts', coverage: 'SUBSTANTIAL', displayName: 'Fairfield Cultural Alliance', emoji: '🎨', color: '#5b3ea6', url: 'fairfieldculturaldistrict.org' },
  'jc-trails': { group: 'parks', coverage: 'SUBSTANTIAL', displayName: 'Jefferson County Trails Council', emoji: '🥾', color: '#2a6049', url: 'jeffersoncountytrails.org' },
  'tm-southeast-iowa': { group: 'higher_ed', coverage: 'SUBSTANTIAL', displayName: 'TM Southeast Iowa Center', emoji: '🧘', color: '#4a7c6b', url: 'tm.org' },
  'miu': { group: 'higher_ed', coverage: 'SUBSTANTIAL', displayName: 'Maharishi International University', emoji: '🎓', color: '#2a6049', url: 'miu.edu' },
  'maharishi_school': { group: 'k12', coverage: 'SURFACE', displayName: 'Maharishi School', emoji: '🌿', color: '#2a6049', url: 'maharishischool.org', note: 'Most internal links returned errors; only homepage, admissions, and academic office captured.' },
  'isu-extension': { group: 'k12', coverage: 'SUBSTANTIAL', displayName: 'ISU Extension — Jefferson County', emoji: '🌾', color: '#2a6049', url: 'extension.iastate.edu/jefferson' },
  'tm-southeast-iowa': { group: 'education', coverage: 'SURFACE', displayName: 'TM Southeast Iowa Center', emoji: '🧘', color: '#4a7c9e', url: 'www.tm.org/en-us/centers/southeast-iowa' },
  'city-council-videos': { group: 'city', coverage: 'SUBSTANTIAL', displayName: 'Fairfield City Council Videos', emoji: '🎥', color: '#1d5fa8', url: 'youtube.com' },
  'area15rpc': { group: 'community', coverage: 'SURFACE', displayName: 'Area 15 Regional Planning Commission', emoji: '🗺️', color: '#2a6049', url: 'area15rpc.com' },
  'fairfield-farmers-market': { group: 'economic', coverage: 'SURFACE', displayName: 'Fairfield Farmers Market', emoji: '🌽', color: '#2a6049', url: 'fairfieldiowafarmersmarket.farm' },
  'kufner-art': { group: 'arts', coverage: 'SURFACE', displayName: 'Kufner Art', emoji: '🎨', color: '#5b3ea6', url: 'kufnerart.com' },
  'pathfinders-rcd': { group: 'community', coverage: 'SURFACE', displayName: 'Pathfinders Resource Conservation & Development', emoji: '🌱', color: '#2a6049', url: 'pathfindersrcd.org' },
  'wege-center': { group: 'arts', coverage: 'SURFACE', displayName: 'Wege Center', emoji: '🎭', color: '#3a4a6b', url: 'wegecenter.org' },
  'icon-art': { group: 'arts', coverage: 'SURFACE', displayName: 'ICON Art', emoji: '🖼️', color: '#8b3a1e', url: 'icon-art.org' },
  'icf': { group: 'civic_knowledge', coverage: 'SUBSTANTIAL', displayName: 'Intelligent Community Forum', emoji: '🌐', color: '#4a7c9e', url: 'intelligentcommunity.org' },
  'jefferson-county': { group: 'county', coverage: 'SUBSTANTIAL', displayName: 'Jefferson County Iowa', emoji: '🏛️', color: '#3a4a6b', url: 'jeffersoncounty.iowa.gov' },
  'fef': { group: 'k12', coverage: 'SURFACE', displayName: 'Fairfield Education Foundation', emoji: '🎓', color: '#1d5fa8', url: 'fairfieldeducationfoundation.com', note: 'Small site; directors, awards, and support pages captured.' },
  'fairfield-first-fridays': { group: 'arts', coverage: 'SURFACE', displayName: 'Fairfield First Fridays Art Walk', emoji: '🖼️', color: '#b06a20', url: 'fairfieldfirstfridays.org', note: 'Wix site with limited static content.' },
  'fmc': { group: 'arts', coverage: 'SURFACE', displayName: 'Fairfield Media Center', emoji: '📺', color: '#3a4a6b', url: 'fairfieldmediacenter.com', note: 'Static pages only; includes some council meeting content — NOT a comprehensive archive.' },
  'fnll': { group: 'youth_sports', coverage: 'SURFACE', displayName: 'Fairfield National Little League', emoji: '⚾', color: '#1d5fa8', url: 'fnll.org', note: 'Homepage and news page only.' },
  'fall': { group: 'youth_sports', coverage: 'SURFACE', displayName: 'Fairfield Atlantic Little League', emoji: '⚾', color: '#2a6049', url: 'fairfieldatlanticlittleleague.org', note: 'Homepage only.' },
  'jcll': { group: 'youth_sports', coverage: 'SURFACE', displayName: 'Jefferson County Little League', emoji: '⚾', color: '#1e7268', url: 'jeffersoncountylittleleague.com', note: 'Homepage and registration page only.' },
  'jc-heritage': { group: 'heritage', coverage: 'SURFACE', displayName: 'Jefferson County Heritage Foundation', emoji: '🏛️', color: '#8b3a1e', url: 'jeffersoncountyheritage.org', note: 'Carnegie Museum, Maasdam Barns, and a few other pages; several returned errors.' },
  'jc-fair': { group: 'civic', coverage: 'SURFACE', displayName: 'Jefferson County Fair', emoji: '🎡', color: '#b06a20', url: 'jeffersoncofair.com', note: 'Seasonal site; only about and schedule pages captured.' },
  'gjcf': { group: 'civic', coverage: 'SUBSTANTIAL', displayName: 'Greater Jefferson County Foundation', emoji: '🤲', color: '#1d5fa8', url: 'greaterjeffersoncountyfoundation.org' },
  'fumc': { group: 'faith', coverage: 'SURFACE', displayName: 'First United Methodist Church', emoji: '⛪', color: '#3a4a6b', url: 'fairfieldmethodistchurch.org', note: 'Site pages are brief; limited body text.' },
  'ffc': { group: 'faith', coverage: 'SURFACE', displayName: 'Fairfield Friends Church', emoji: '⛪', color: '#5b3ea6', url: 'fairfieldfriendschurch.org', note: 'Small site; homepage and a few pages captured.' },
  'carry-on-bags': { group: 'health', coverage: 'SURFACE', displayName: 'Carry On Bags', emoji: '🎒', color: '#a33030', url: 'carryonbags.org', note: 'Small nonprofit site; about, donate, and volunteer pages captured.' },
  'fairfield-acc': { group: 'economic', coverage: 'SURFACE', displayName: 'Fairfield Arts and Convention Center', emoji: '🎭', color: '#3a4a6b', url: 'fairfieldacc.com', note: 'JS-rendered site; only homepage, about, events listing, and programs captured.' },
  'fairfield_community_school_district': { group: 'k12', coverage: 'SURFACE', displayName: 'Fairfield Community School District', emoji: '🏫', color: '#1d5fa8', url: 'fairfieldsfuture.org', note: 'Finalsite JS-rendered CMS; 54 pages crawled but most yielded no extractable text.' },


  // ── CITY OF FAIRFIELD ──────────────────────────────────────────────────────
  'cityoffairfieldiowa.com': {
    group: 'city',
    displayName: 'City of Fairfield',
    mergeInto: 'city-fairfield-main',
  },
  'cityoffanrfieldiowa.com': {          // typo — merge in
    group: 'city',
    displayName: 'City of Fairfield',
    mergeInto: 'city-fairfield-main',
    note: '⚠️ Source label has a typo (<code>cityoffanrfieldiowa.com</code>) — consider fixing metadata.',
  },

  // ── COUNTY GOVERNMENT ─────────────────────────────────────────────────────
  'jeffersoncounty.iowa.gov': {
    group: 'county',
    displayName: 'Jefferson County Government',
    mergeInto: 'jefferson-county-gov',
  },
  'jefferson-county': {
    group: 'county',
    displayName: 'Jefferson County Government',
    mergeInto: 'jefferson-county-gov',
  },
  'jefferson.iowaassessors.com': {
    group: 'county',
    displayName: 'Jefferson County Assessor',
    mergeInto: 'jefferson-county-gov',
  },

  // ── K-12 EDUCATION ────────────────────────────────────────────────────────
  'fairfield_community_school_district': {
    group: 'k12',
    displayName: 'Fairfield Community School District',
    emoji: '🏫',
    color: '#1d5fa8',
    url: 'fairfieldcsd.org',
  },
  'maharishi_school': {
    group: 'k12',
    displayName: 'Maharishi School',
    emoji: '🌟',
    color: '#5b3ea6',
    url: 'maharishischool.com',
  },
  'singing_cedars_school': {
    group: 'k12',
    displayName: 'Singing Cedars Waldorf School',
    emoji: '🌲',
    color: '#1e7268',
    url: 'singingcedars.org',
  },

  // ── HIGHER EDUCATION ──────────────────────────────────────────────────────
  'miu': {
    group: 'higher_ed',
    displayName: 'Maharishi International University',
    emoji: '🎓',
    color: '#5b3ea6',
    url: 'miu.edu',
  },
  'fairfield-public-library': {
    group: 'higher_ed',
    displayName: 'Fairfield Public Library',
    emoji: '📚',
    color: '#5b3ea6',
    url: 'fairfieldlibrary.org',
  },

  // ── HEALTH & SOCIAL SERVICES ──────────────────────────────────────────────
  'jeffersoncountyhealthcenter.org': {
    group: 'health',
    displayName: 'Jefferson County Health Center',
    mergeInto: 'jchc-main',
  },
  'jchc': {
    group: 'health',
    displayName: 'Jefferson County Health Center',
    mergeInto: 'jchc-main',
  },
  'thewelliowa.org': {
    group: 'health',
    displayName: 'The Well Resource Center',
    emoji: '🤲',
    color: '#1e7268',
    url: 'thewelliowa.org',
  },
  'fairfield-cares': {
    group: 'health',
    displayName: 'Fairfield Cares',
    emoji: '❤️',
    color: '#a33030',
  },

  'fairfield-beautification': {
    group: 'civic',
    displayName: 'Fairfield Beautification Commission',
    emoji: '🌸',
    color: '#7c3d6b',
  },

  // ── ECONOMIC DEVELOPMENT ──────────────────────────────────────────────────
  'grow-fairfield': {
    group: 'economic',
    displayName: 'Grow Fairfield / FEDA',
    mergeInto: 'grow-fairfield-main',
  },
  'growfairfield.com': {
    group: 'economic',
    displayName: 'Grow Fairfield / FEDA',
    mergeInto: 'grow-fairfield-main',
  },
  'fairfieldiowa.com': {
    group: 'economic',
    displayName: 'Fairfield Area Chamber of Commerce',
    mergeInto: 'chamber-main',
  },
  'ffcolab.com': {
    group: 'economic',
    displayName: 'Fairfield CoLab',
    emoji: '💻',
    color: '#5b3ea6',
    url: 'ffcolab.com',
  },
  'freeformartgallery.com/product-category/jewelry': { group: 'arts', displayName: 'Freeform Art Gallery', emoji: '🖼️', color: '#7c3d6b', url: 'freeformartgallery.com' },
  'tm-southeast-iowa': {
    group: 'higher_ed',
    displayName: 'TM Southeast Iowa Center',
    emoji: '🧘',
    color: '#4a7c6b',
    url: 'tm.org',
  },
  'freeform-gallery': {
    group: 'arts',
    displayName: 'Freeform Art Gallery',
    emoji: '🖼️',
    color: '#7c3d6b',
    url: 'freeformartgallery.com',
  },
  'fairfield-acc': {
    group: 'economic',
    displayName: 'Fairfield Arts & Convention Center',
    emoji: '🎭',
    color: '#3a4a6b',
    url: 'fairfield-acc.com',
  },
  'opportunityiowa.gov': {
    group: 'economic',
    displayName: '2024 Downtown Assessment',
    emoji: '🏙️',
    color: '#1d5fa8',
    url: 'opportunityiowa.gov',
  },

  // ── PARKS & CONSERVATION ──────────────────────────────────────────────────
  'jeffersoncountyconservation.com': {
    group: 'parks',
    displayName: 'Jefferson County Conservation',
    emoji: '🌿',
    color: '#2a6049',
    url: 'jeffersoncountyconservation.com',
  },

  // ── COMMUNITY ORGANIZATIONS ───────────────────────────────────────────────
  'fran': {
    group: 'community',
    displayName: 'FRAN',
    emoji: '🌐',
    color: '#1e7268',
  },
  'golden_magnolia_sanctuary': {
    group: 'community',
    displayName: 'Golden Magnolia Sanctuary',
    emoji: '✨',
    color: '#8b3a1e',
    url: 'goldenmagnolia.org',
  },
  'sustainablelivingcoalition.org': {
    group: 'community',
    displayName: 'Fairfield Garden Initiative & Community Garden',
    mergeInto: 'garden-main',
  },
  'wildspiritsfarm.com': {
    group: 'community',
    displayName: 'Fairfield Garden Initiative & Community Garden',
    mergeInto: 'garden-main',
  },
  'fcsd-board-minutes': {
    displayName: 'Fairfield Community School District — Board Minutes',
    emoji: '🏫',
    color: '#1a4a8a',
    url: 'fairfield.k12.ia.us',
    description: 'FCSD Board of Education meeting minutes, work sessions, and special meetings (2019-2024)',
    group: 'government',
  },
  'jefferson-county-history': {
    displayName: 'History of Jefferson County, Iowa (1914)',
    emoji: '📖',
    color: '#8b3a1e',
    url: 'archive.org/details/historyofjeffers01fult',
    description: 'History of Jefferson County, Iowa — A Record of Settlement, Organization, Progress and Achievement by Charles J. Fulton (1914)',
    group: 'government',
  },
  'traction-thursdays': {
    displayName: 'Traction Thursdays — Fairfield CoLab',
    emoji: '🚀',
    color: '#b06a20',
    url: 'www.fairfieldmediacenter.com/copy-of-carnegie-museum-1',
    description: 'Weekly entrepreneur presentations at the Fairfield CoLab — peer support, business ideas, and local economic development',
    group: 'economic',
  },
  'fairfield-history-series': {
    displayName: 'Fairfield History Series — Documentary Transcripts',
    emoji: '🎬',
    color: '#7c3aed',
    url: 'www.youtube.com/@fair_field_productions',
    description: 'Transcripts of Fairfield History Series documentary films by Fairfield Productions',
    group: 'government',
  },
  'walton-lake-bridge': {
    displayName: 'Walton Lake Golf Cart Bridge',
    emoji: '🌉',
    color: '#1a5c3a',
    url: 'www.fairfield.ia.us/walton-lake-bridge',
    description: 'Documents related to the Walton Lake golf cart bridge construction, controversy, and associated litigation',
    group: 'government',
  },
  'Fairfield Beautification Commission Weed Team': {
    displayName: 'Fairfield Beautification Commission - Weed Team',
    emoji: '🌿',
    color: '#4a7c3f',
    url: 'southeastiowaunion.com',
    description: 'Downtown weed-free initiative, nine-block coverage area, non-toxic treatment',
    group: 'community_orgs',
  },
  'Fairfield Beautification Commission 2025 Volunteers': {
    displayName: 'Fairfield Beautification Commission - 2025 Volunteers',
    emoji: '🌸',
    color: '#4a7c3f',
    url: 'southeastiowaunion.com',
    description: 'Second Annual Volunteer Appreciation Dinner 2025',
    group: 'community_orgs',
  },
};

// Merged group display config (for sources with mergeInto)
const MERGED_CONFIG = {
  'fairfield-permits': {
    displayName: 'Fairfield Building Permits & Zoning',
    emoji: '🏗️',
    color: '#1a4fa0',
    url: 'cityoffairfieldiowa.com/75/Building-Zoning',
    description: 'How to apply for building, zoning, and demolition permits in Fairfield',
    group: 'government',
  },
  'city-fairfield-main': {
    displayName: 'City of Fairfield — Full Document Collection',
    emoji: '🏛️',
    color: '#2a6049',
    url: 'cityoffairfieldiowa.com',
    description: 'Code of Ordinances (Titles 6, 7, 9, 11, 17, 19, 20), City Departments, Planning Documents (2020 Comp Plan, 2023 Housing Study), Budget, City Attorney, Brand Guidelines',
  },
  'jefferson-county-gov': {
    displayName: 'Jefferson County Government & Assessor',
    emoji: '⚖️',
    color: '#1d5fa8',
    url: 'jeffersoncounty.iowa.gov',
    description: 'Board of Supervisors, all county departments, Sheriff, Recorder (land, boats, ATV), Assessor, Veterans Affairs, Public Health, Elections',
  },
  'jchc-main': {
    displayName: 'Jefferson County Health Center',
    emoji: '🏥',
    color: '#a33030',
    url: 'jeffersoncountyhealthcenter.org',
    description: '21 clinical service lines, patient resources, financial assistance, SHIIP Medicare counseling, 2024 Community Resource Directory PDF',
  },
  'grow-fairfield-main': {
    displayName: 'Grow Fairfield / FEDA',
    emoji: '📈',
    color: '#2a6049',
    url: 'growfairfield.com',
    description: 'Business resources, Entrepreneur in Residence (Alex Taylor), Traction Thursdays, NewBoCo partnership, angel investor group',
  },
  'chamber-main': {
    displayName: 'Fairfield Area Chamber of Commerce',
    emoji: '🤝',
    color: '#b06a20',
    url: 'fairfieldiowa.com',
    description: 'Member directory, Chamber Bucks, Main Street Fairfield, events calendar, community resources',
  },
  'garden-main': {
    displayName: 'Garden Initiative & Community Garden',
    emoji: '🌱',
    color: '#2a6049',
    url: 'sustainablelivingcoalition.org',
    description: 'Fairfield Garden Initiative (seedlings for low-income families) and Fairfield Community Garden (40 raised beds at O.B. Nelson Park)',
  },
};

const GROUP_LABELS = {
  city:      'City of Fairfield',
  county:    'Jefferson County Government',
  k12:       'K–12 Education',
  higher_ed: 'Higher Education',
  health:    'Health & Social Services',
  economic:  'Economic Development & Business',
  parks:     'Parks, Trails & Conservation',
  community: 'Community Organizations',
  government: 'History, Documents & Special Projects',
};

// ─────────────────────────────────────────────────────────────────────────────
// PINECONE FETCH
// ─────────────────────────────────────────────────────────────────────────────
async function fetchInventory() {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(INDEX_NAME);

  console.log('📡 Fetching vector IDs from Pinecone...');
  const allIds = [];
  let paginationToken;
  do {
    const result = await index.listPaginated({ limit: 100, paginationToken });
    allIds.push(...(result.vectors || []).map(v => v.id));
    paginationToken = result.pagination?.next;
  } while (paginationToken);
  console.log(`✅ ${allIds.length} vectors found. Fetching metadata...`);

  const batches = [];
  for (let i = 0; i < allIds.length; i += 100) batches.push(allIds.slice(i, i + 100));

  const rawCounts = {};
  let done = 0;

  async function fetchBatch(batch) {
    const result = await index.fetch(batch);
    for (const vec of Object.values(result.records || {})) {
      const source = (vec.metadata || {}).source || '(unknown)';
      rawCounts[source] = (rawCounts[source] || 0) + 1;
    }
    done++;
    process.stdout.write(`\r  ${done}/${batches.length} batches...`);
  }

  for (let i = 0; i < batches.length; i += CONCURRENCY) {
    await Promise.all(batches.slice(i, i + CONCURRENCY).map(fetchBatch));
  }
  console.log('\n');
  return { totalVectors: allIds.length, rawCounts };
}

// ─────────────────────────────────────────────────────────────────────────────
// BUILD DISPLAY DATA
// ─────────────────────────────────────────────────────────────────────────────

const URL_DOMAIN_MAP = [
  ['cityoffairfieldiowa.com/75/Building-Zoning','fairfield-permits'],
  ['visitfairfieldiowa.com','visit-fairfield'],
  ['fairfieldculturaldistrict.org','fairfield-cultural-alliance'],
  ['iowasource.com','iowa-source'],
  ['jeffersoncountyheritage.org','jc-heritage'],
  ['jeffersoncofair.com','jc-fair'],
  ['jeffersoncountyconservation.com','jeffersoncountyconservation.com'],
  ['greaterjeffersoncountyfoundation.org','gjcf'],
  ['fnll.org','fnll'],
  ['fairfieldmediacenter.com','fmc'],
  ['jeffersoncountytrails.org','jc-trails'],
  ['extension.iastate.edu','isu-extension'],
  ['www.tm.org','tm-southeast-iowa'],
  ['youtube.com/@fair_field_productions','fairfield-history-series'],
  ['watch?v=HsOQIzMwF5c','fairfield-history-series'],
  ['watch?v=EZjCGlJ6kY8','fairfield-history-series'],
  ['watch?v=7OPfNhx4bOk','fairfield-history-series'],
  ['watch?v=5L3TBYbPunM','fairfield-history-series'],
  ['watch?v=f2l-WpTgHyE','fairfield-history-series'],
  ['watch?v=lWW6pNBe1BY','fairfield-history-series'],
  ['watch?v=GVDXFre7hWU','fairfield-history-series'],
  ['watch?v=V8PWx4fz1a4','fairfield-history-series'],
  ['watch?v=zR9ME41lUKM','fairfield-history-series'],
  ['watch?v=mDgaUVpvVqA','fairfield-history-series'],['www.youtube.com','city-council-videos'],
  ['youtube.com','city-council-videos'],
  ['www.area15rpc.com','area15rpc'],
  ['area15rpc.com','area15rpc'],
  ['fairfieldiowafarmersmarket.farm','fairfield-farmers-market'],
  ['www.kufnerart.com','kufner-art'],
  ['kufnerart.com','kufner-art'],
  ['pathfindersrcd.org','pathfinders-rcd'],
  ['www.wegecenter.org','wege-center'],
  ['wegecenter.org','wege-center'],
  ['www.icon-art.org','icon-art'],
  ['icon-art.org','icon-art'],
  ['www.intelligentcommunity.org','icf'],
  ['intelligentcommunity.org','icf'],
  ['jeffersoncounty.iowa.gov','jefferson-county'],
  ['fairfieldeducationfoundation.com','fef'],
  ['fairfieldfirstfridays.org','fairfield-first-fridays'],
  ['fairfieldsfuture.org','fairfield_community_school_district'],
  ['fairfieldfriendschurch.org','ffc'],
  ['fairfieldmethodistchurch.org','fumc'],
  ['carryonbags.org','carry-on-bags'],
  ['fairfieldacc.com','fairfield-acc'],
  ['fairfieldatlanticlittleleague.org','fall'],
  ['jeffersoncountyhealthcenter.org','jeffersoncountyhealthcenter.org'],
  ['miu.edu','miu'],
  ['maharishischool.org','maharishi_school'],
  ['jeffersoncountylittleleague.com','jcll'],
  ['fairfieldiowa.com','fairfieldiowa.com'],
  ['fairfield.k12.ia.us','fcsd-board-minutes'],
  ['fairfield.ia.us/walton-lake-bridge','walton-lake-bridge'],
  ['www.fairfield.ia.us/walton-lake-bridge','walton-lake-bridge'],
  ['archive.org','jefferson-county-history'],
  ['www.fairfieldmediacenter.com/copy-of-carnegie-museum-1','traction-thursdays'],
  ['cityoffairfieldiowa.com', 'cityoffairfieldiowa.com'],
  ['freeformartgallery.com', 'freeform-gallery'],
];
function resolveCatalogKey(source) {
  if (!source) return null;
  if (SOURCE_CATALOG[source]) return source;
  if (source.startsWith('http://') || source.startsWith('https://')) {
    for (var i=0; i<URL_DOMAIN_MAP.length; i++) {
      if (source.indexOf(URL_DOMAIN_MAP[i][0]) !== -1) return URL_DOMAIN_MAP[i][1];
    }
  }
  return null;
}

function buildDisplayData(rawCounts) {
  const mergedCounts = {};     // mergeKey or source -> count
  const mergedNotes = {};
  const unmapped = {};

  for (var _k in rawCounts) {
    var count = rawCounts[_k];
    var resolvedKey = resolveCatalogKey(_k);
    if (!resolvedKey) { unmapped[_k] = count; continue; }
    var cfg = SOURCE_CATALOG[resolvedKey]; if (!cfg) { unmapped[_k] = count; continue; }
    var key = cfg.mergeInto || resolvedKey;
    mergedCounts[key] = (mergedCounts[key] || 0) + count;
    if (cfg.note && !mergedNotes[key]) mergedNotes[key] = cfg.note;
  }


  // Group by section
  const groups = {};
  for (const [key, count] of Object.entries(mergedCounts)) {
    const isMerged = !!MERGED_CONFIG[key];
    const cfg = isMerged ? null : SOURCE_CATALOG[key];
    const group = isMerged
      ? Object.values(SOURCE_CATALOG).find(c => c.mergeInto === key)?.group
      : cfg?.group;
    if (!group) continue;
    if (!groups[group]) groups[group] = [];
    groups[group].push({ key, count, isMerged, note: mergedNotes[key] || null });
  }

  return { groups, unmapped };
}

// ─────────────────────────────────────────────────────────────────────────────
// HTML GENERATION
// ─────────────────────────────────────────────────────────────────────────────
function renderCard(key, count, note) {
  const isMerged = !!MERGED_CONFIG[key];
  const cfg = isMerged ? MERGED_CONFIG[key] : SOURCE_CATALOG[key];
  const displayName = cfg.displayName || key;
  const emoji = cfg.emoji || '📁';
  const color = cfg.color || '#2a6049';
  const url = cfg.url || '';
  const description = cfg.description || '';
  const isWide = isMerged;
  const isLow = count < 20;

  const vecClass = isLow ? 'vec-count vec-warn' : 'vec-count';
  const metaText = url ? `<a href="https://${url}" target="_blank" style="color:inherit">${url}</a>` : '';
  const descHtml = description
    ? `<ul class="items"><li>${description.split(', ').join('</li><li>')}</li></ul>`
    : '';
  const noteHtml = note
    ? `<div class="note">${note}</div>`
    : isLow
    ? `<div class="note">⚠️ <b>Only ${count} vectors</b> — thin coverage, consider expanding.</div>`
    : '';

  return `
    <div class="card${isWide ? ' wide' : ''}">
      <div class="stripe" style="background:linear-gradient(90deg,${color},${color}cc)"></div>
      <div class="inner">
        <div class="card-head">
          <div class="emoji">${emoji}</div>
          <div>
            <div class="card-title">${displayName}</div>
            <div class="card-meta">${metaText}</div>
          </div>
          <span class="${vecClass}">${count.toLocaleString()} vectors</span>
        </div>
        <hr class="c">
        ${descHtml}
        ${noteHtml}
      </div>
    </div>`;
}

function renderSection(groupKey, cards) {
  const label = GROUP_LABELS[groupKey] || groupKey;
  const cardsHtml = cards
    .sort((a, b) => b.count - a.count)
    .map(c => renderCard(c.key, c.count, c.note))
    .join('\n');
  return `
  <div class="sec"><span class="sec-text">${label}</span><div class="sec-line"></div></div>
  <div class="grid">
    ${cardsHtml}
  </div>`;
}

function renderUnmapped(unmapped) {
  if (Object.keys(unmapped).length === 0) return '';
  const rows = Object.entries(unmapped)
    .sort((a, b) => b[1] - a[1])
    .map(([s, c]) => `<li><b>${s}</b> — ${c} vectors (not yet in SOURCE_CATALOG)</li>`)
    .join('');
  return `
  <div class="sec"><span class="sec-text">Unconfigured Sources</span><div class="sec-line"></div></div>
  <div class="grid">
    <div class="card wide">
      <div class="stripe" style="background:#ccc"></div>
      <div class="inner">
        <div class="card-head"><div class="emoji">⚠️</div><div><div class="card-title">New sources detected — not yet configured</div><div class="card-meta">Add these to SOURCE_CATALOG in generate-map.js</div></div></div>
        <hr class="c">
        <ul class="items">${rows}</ul>
      </div>
    </div>
  </div>`;
}

function buildHTML(totalVectors, rawCounts, generatedAt) {
  const { groups, unmapped } = buildDisplayData(rawCounts);
  const sourceCount = Object.keys(rawCounts).length;
  const groupOrder = ['city', 'county', 'government', 'k12', 'higher_ed', 'health', 'economic', 'parks', 'community'];

  const sectionsHtml = groupOrder
    .filter(g => groups[g] && groups[g].length > 0)
    .map(g => renderSection(g, groups[g]))
    .join('\n');

  const unmappedHtml = renderUnmapped(unmapped);
  const dateStr = new Date(generatedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fairfield Civic Knowledge Base — What's Inside</title>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root {
    --sand:#fdf9f3;--white:#ffffff;--border:#e4e0d8;--stone:#f0ece3;
    --green:#2a6049;--green2:#3a8a68;--teal:#1e7268;--blue:#1d5fa8;
    --amber:#b06a20;--red:#a33030;--purple:#5b3ea6;--rust:#8b3a1e;--slate:#3a4a6b;
    --green-bg:#e8f5ee;--teal-bg:#e4f4f1;--blue-bg:#e6eef9;--amber-bg:#fdecd8;
    --red-bg:#fde8e8;--purple-bg:#eeebf9;--rust-bg:#fae8e0;--slate-bg:#e8ecf6;
    --text:#1e1e1e;--text-soft:#4a4a4a;--text-light:#777;
    --shadow-sm:0 1px 6px rgba(0,0,0,.06);--shadow:0 4px 20px rgba(0,0,0,.09);--radius:14px;
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:var(--sand);color:var(--text);font-family:'Nunito',sans-serif;line-height:1.65;}
  .topbar{background:var(--green);color:rgba(255,255,255,.75);font-size:12px;font-weight:600;letter-spacing:.05em;text-align:center;padding:9px 20px;}
  .topbar a{color:#a8e6c5;text-decoration:none;font-weight:800;margin-left:6px;}
  .hero{background:var(--white);border-bottom:1px solid var(--border);padding:56px 48px 48px;display:flex;align-items:flex-start;gap:48px;flex-wrap:wrap;}
  .hero-text{flex:1;min-width:280px;}
  .hero-badge{display:inline-block;background:var(--green-bg);color:var(--green);font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:18px;}
  h1{font-family:'Merriweather',serif;font-size:clamp(22px,3.5vw,38px);font-weight:700;line-height:1.25;margin-bottom:14px;}
  h1 em{font-style:italic;color:var(--green2);}
  .hero-desc{font-size:16px;color:var(--text-soft);max-width:520px;margin-bottom:28px;line-height:1.75;}
  .cta-btn{display:inline-block;background:var(--green);color:#fff;text-decoration:none;font-size:14px;font-weight:800;padding:13px 26px;border-radius:8px;box-shadow:0 4px 14px rgba(42,96,73,.25);}
  .cta-btn:hover{background:#1d4535;}
  .stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;flex-shrink:0;align-self:center;}
  .stat-bubble{background:#f0f7f4;border:1px solid #c8e6d4;border-radius:12px;padding:16px 20px;text-align:center;min-width:130px;}
  .stat-num{font-family:'Merriweather',serif;font-size:28px;font-weight:700;color:var(--green);display:block;line-height:1;margin-bottom:4px;}
  .stat-desc{font-size:11px;color:var(--text-light);font-weight:700;text-transform:uppercase;letter-spacing:.06em;}
  .samples{background:var(--white);border-bottom:1px solid var(--border);padding:20px 48px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;}
  .samples-label{font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;color:var(--text-light);white-space:nowrap;margin-right:4px;}
  .sample{font-size:12px;font-weight:600;color:var(--text-soft);background:var(--stone);border-radius:20px;padding:5px 14px;}
  main{max-width:1040px;margin:0 auto;padding:48px 32px 72px;}
  .sec{display:flex;align-items:center;gap:12px;margin-bottom:20px;}
  .sec-text{font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:var(--text-light);white-space:nowrap;}
  .sec-line{flex:1;height:1px;background:var(--border);}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:18px;margin-bottom:48px;}
  .card{background:var(--white);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-sm);transition:box-shadow .2s,transform .2s;}
  .card:hover{box-shadow:var(--shadow);transform:translateY(-2px);}
  .card.wide{grid-column:1/-1;}
  .stripe{height:5px;}
  .inner{padding:20px 22px 22px;}
  .card-head{display:flex;align-items:flex-start;gap:12px;margin-bottom:14px;}
  .emoji{font-size:28px;line-height:1;flex-shrink:0;margin-top:2px;}
  .card-title{font-family:'Merriweather',serif;font-size:15px;font-weight:700;line-height:1.3;margin-bottom:2px;}
  .card-meta{font-size:11px;color:var(--text-light);font-weight:600;}
  .card-meta a{color:inherit;}
  .vec-count{margin-left:auto;flex-shrink:0;font-size:11px;font-weight:800;color:var(--green);background:var(--green-bg);padding:3px 9px;border-radius:10px;white-space:nowrap;}
  .vec-warn{color:var(--amber)!important;background:var(--amber-bg)!important;}
  hr.c{height:1px;background:var(--stone);border:none;margin:0 0 14px;}
  ul.items{list-style:none;display:flex;flex-direction:column;gap:5px;margin-bottom:14px;}
  ul.items li{font-size:13px;color:var(--text-soft);padding-left:16px;position:relative;line-height:1.45;}
  ul.items li::before{content:'›';position:absolute;left:3px;color:#bbb;font-weight:700;}
  ul.items li b{color:var(--text);font-weight:700;}
  .note{background:#fffbf0;border:1px solid #f0d890;border-radius:8px;padding:10px 14px;font-size:12px;color:#7a5a10;margin-top:12px;line-height:1.5;}
  .note.info{background:#f0f4ff;border-color:#b8c8f0;color:#334;}
  .note b{color:#5a3a00;}
  .how{background:linear-gradient(135deg,#fffef8,#f5f9f5);border:1px solid #dde8dc;border-radius:var(--radius);padding:32px 36px;}
  .how h2{font-family:'Merriweather',serif;font-size:20px;font-weight:700;margin-bottom:6px;}
  .how .intro{font-size:14px;color:var(--text-soft);margin-bottom:22px;}
  .steps{display:grid;grid-template-columns:repeat(auto-fill,minmax(195px,1fr));gap:14px;}
  .step{background:#fff;border:1px solid #d8e9d5;border-radius:10px;padding:18px;}
  .step-n{font-family:'Merriweather',serif;font-size:34px;font-weight:700;color:#cde8d2;line-height:1;margin-bottom:6px;}
  .step h3{font-size:13px;font-weight:800;margin-bottom:4px;}
  .step p{font-size:12px;color:var(--text-soft);line-height:1.55;}
  footer{background:#1a2a22;padding:28px 48px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
  footer p{font-size:12px;color:rgba(255,255,255,.4);}
  footer a{font-size:13px;font-weight:800;color:#7dd9a8;text-decoration:none;}
  @media(max-width:600px){.hero,.samples,footer{padding:32px 20px;}main{padding:32px 20px 52px;}}
</style>
</head>
<body>

<div class="topbar">Search the database at <a href="https://fairfield-research-tool.vercel.app" target="_blank">fairfield-research-tool.vercel.app →</a></div>

<div class="hero">
  <div class="hero-text">
    <div class="hero-badge">🗂 Fairfield, Iowa · Live from Pinecone</div>
    <h1>What's in the<br><em>Research Database?</em></h1>
    <p class="hero-desc">Official documents, websites, and records from Fairfield and Jefferson County — fully indexed and searchable in plain English. Generated directly from live database on ${dateStr}.</p>
    <a class="cta-btn" href="https://fairfield-research-tool.vercel.app" target="_blank">Ask a Question →</a>
  </div>
  <div class="stats-grid">
    <div class="stat-bubble"><span class="stat-num">${totalVectors.toLocaleString()}</span><span class="stat-desc">Passages Indexed</span></div>
    <div class="stat-bubble"><span class="stat-num">${sourceCount}</span><span class="stat-desc">Sources</span></div>
    <div class="stat-bubble"><span class="stat-num">${Object.keys(GROUP_LABELS).filter(g => groups[g]?.length).length}</span><span class="stat-desc">Topic Areas</span></div>
    <div class="stat-bubble"><span class="stat-num">${dateStr.split(' ')[0] + ' ' + dateStr.split(' ')[2]}</span><span class="stat-desc">Last Generated</span></div>
  </div>
</div>

<div class="samples">
  <span class="samples-label">Try asking:</span>
  <span class="sample">"What are the zoning rules for home businesses?"</span>
  <span class="sample">"Does MIU offer graduate degrees?"</span>
  <span class="sample">"Where can I go camping near Fairfield?"</span>
  <span class="sample">"What services does JCHC offer?"</span>
  <span class="sample">"How do I apply for a building permit?"</span>
  <span class="sample">"What is Maharishi School's curriculum?"</span>
  <span class="sample">"How do I register a boat in Jefferson County?"</span>
  <span class="sample">"What coworking options are available?"</span>
</div>

<main>
${sectionsHtml}
${unmappedHtml}

  <div class="how">
    <h2>How the Research Tool Works</h2>
    <p class="intro">${totalVectors.toLocaleString()} passages from ${sourceCount} Fairfield and Jefferson County sources, searchable in plain English. No login required.</p>
    <div class="steps">
      <div class="step"><div class="step-n">1</div><h3>Documents collected</h3><p>PDFs and websites from official local sources are captured and indexed from primary sources only.</p></div>
      <div class="step"><div class="step-n">2</div><h3>Text is vectorized</h3><p>Each document is split into passages and stored in Pinecone (AWS us-east-1, cosine similarity).</p></div>
      <div class="step"><div class="step-n">3</div><h3>You ask a question</h3><p>Type anything in plain English at fairfield-research-tool.vercel.app.</p></div>
      <div class="step"><div class="step-n">4</div><h3>AI finds the answer</h3><p>The most relevant passages are retrieved and Claude generates a clear, sourced response.</p></div>
    </div>
  </div>
</main>

<footer>
  <p>Fairfield Civic Research Tool · Auto-generated from Pinecone · ${totalVectors.toLocaleString()} vectors · ${sourceCount} sources · ${dateStr}</p>
  <a href="https://fairfield-research-tool.vercel.app" target="_blank">Open the Tool →</a>
</footer>

</body>
</html>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────
async function main() {
  const { totalVectors, rawCounts } = await fetchInventory();
  const html = buildHTML(totalVectors, rawCounts, Date.now());
  fs.writeFileSync(OUTPUT_FILE, html);
  console.log(`✅ Map generated: ${OUTPUT_FILE}`);
  console.log(`   ${totalVectors.toLocaleString()} vectors · ${Object.keys(rawCounts).length} sources\n`);

  const { unmapped } = buildDisplayData(rawCounts);
  if (Object.keys(unmapped).length > 0) {
    console.log('⚠️  New sources not yet in SOURCE_CATALOG — add them to generate-map.js:');
    for (const [s, c] of Object.entries(unmapped)) console.log(`   "${s}": ${c} vectors`);
    console.log();
  }
}

main().catch(err => { console.error('Error:', err.message); process.exit(1); });
module.exports = { URL_DOMAIN_MAP, SOURCE_CATALOG };
