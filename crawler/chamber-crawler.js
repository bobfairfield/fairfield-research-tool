/**
 * chamber-crawler.js
 * Master script that:
 * 1. Captures Chamber's own website pages
 * 2. Extracts member directory
 * 3. Crawls each member's website
 * 4. Uploads everything to Pinecone via smart-processor
 * 
 * Run: node chamber-crawler.js
 * Options:
 *   --chamber-only    Just capture Chamber's own pages
 *   --members-only    Just crawl member sites (requires members.json)
 *   --member "Name"   Crawl a single member by name
 */

require('dotenv').config({ path: require('path').join(process.env.HOME, 'fairfield-research-tool', '.env.local') });

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { processAndTrack } = require('./smart-processor');
const { crawlMember } = require('./crawl-member');
const { printSummary } = require('./manifest-manager');

const BASE_DIR = path.join(process.env.HOME, 'Documents', 'Fairfield_RAG_Knowledge_Base', '02_Community_Organizations', 'Fairfield Area Chamber of Commerce');
const CHAMBER_DIR = path.join(BASE_DIR, 'Chamber_Website');
const MEMBERS_DIR = path.join(BASE_DIR, 'Members');
const MEMBERS_JSON = path.join(__dirname, 'members.json');
const CHROME = '/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome';

// ============================================================
// CHAMBER'S OWN PAGES
// ============================================================
const CHAMBER_PAGES = [
  { folder: '.', name: '00_Home', url: 'https://www.fairfieldiowa.com/' },
  { folder: 'About', name: '01_About', url: 'https://www.fairfieldiowa.com/about/' },
  { folder: 'About', name: '02_Ambassadors', url: 'https://www.fairfieldiowa.com/about/ambassadors/' },
  { folder: 'About', name: '03_Board_of_Directors', url: 'https://www.fairfieldiowa.com/about/board/' },
  { folder: 'About', name: '04_Chamber_Bucks', url: 'https://www.fairfieldiowa.com/about/chamber_bucks/' },
  { folder: 'About', name: '05_Main_Street', url: 'https://www.fairfieldiowa.com/page/Main-Street/' },
  { folder: 'About', name: '06_Member_Spotlight', url: 'https://www.fairfieldiowa.com/sponsor/member_spotlight/' },
  { folder: 'Calendar', name: '01_Chamber_Events', url: 'https://www.fairfieldiowa.com/calendar/annual_events/' },
  { folder: 'Calendar', name: '02_Community_Calendar', url: 'https://www.fairfieldiowa.com/calendar/' },
  { folder: 'Community', name: '01_Community', url: 'https://www.fairfieldiowa.com/community/' },
  { folder: 'Join', name: '01_Join_Us', url: 'https://www.fairfieldiowa.com/join/' },
  { folder: 'News', name: '01_News', url: 'https://www.fairfieldiowa.com/news/' },
  { folder: 'Contact', name: '01_Contact', url: 'https://www.fairfieldiowa.com/contact/' },
  { folder: 'Sponsor', name: '01_Sponsor', url: 'https://www.fairfieldiowa.com/sponsor/' },
];

function capturePage(url, outputPath) {
  try {
    execSync(
      `${CHROME} --headless --print-to-pdf="${outputPath}" --no-pdf-header-footer --virtual-time-budget=5000 "${url}" 2>/dev/null`,
      { timeout: 30000 }
    );
    if (!require('fs').existsSync(outputPath)) return false;
    const stats = require('fs').statSync(outputPath);
    return stats.size > 3000;
  } catch (err) {
    return false;
  }
}

async function captureChamblerWebsite() {
  console.log('\n=== Capturing Chamber Website ===');
  
  for (const page of CHAMBER_PAGES) {
    const dir = path.join(CHAMBER_DIR, page.folder);
    fs.mkdirSync(dir, { recursive: true });
    const pdfPath = path.join(dir, `${page.name}.pdf`);
    
    process.stdout.write(`Capturing: ${page.name}... `);
    const success = capturePage(page.url, pdfPath);
    
    if (success) {
      console.log('✓');
      await processAndTrack(pdfPath, {
        source: 'Fairfield Area Chamber of Commerce',
        category: 'Community Organizations',
        subcategory: `Chamber Website/${page.folder}`,
        type: 'web page',
        org: 'Fairfield Area Chamber of Commerce',
        member: null
      }, page.url);
    } else {
      console.log('✗ (failed)');
    }
    
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log('\nChamber website capture complete.');
}

// ============================================================
// MEMBER SITE CRAWLING
// ============================================================
async function crawlAllMembers() {
  if (!fs.existsSync(MEMBERS_JSON)) {
    console.log('\n⚠️  members.json not found. Run extract-members.js first.');
    console.log('  node extract-members.js');
    return;
  }

  const data = JSON.parse(fs.readFileSync(MEMBERS_JSON, 'utf8'));
  const members = data.members.filter(m => m.website);
  
  console.log(`\n=== Crawling ${members.length} Member Websites ===`);
  fs.mkdirSync(MEMBERS_DIR, { recursive: true });

  let completed = 0;
  let failed = 0;

  for (const member of members) {
    try {
      const captured = await crawlMember(member.name, member.website, MEMBERS_DIR);
      
      // Upload each captured page
      for (const { url, pdf_path } of captured) {
        await processAndTrack(pdf_path, {
          source: 'Fairfield Area Chamber of Commerce',
          category: 'Community Organizations',
          subcategory: 'Chamber Members',
          type: 'member website',
          org: 'Fairfield Area Chamber of Commerce',
          member: member.name,
          member_website: member.website
        }, url);
      }
      
      completed++;
    } catch (err) {
      console.log(`  Error crawling ${member.name}: ${err.message}`);
      failed++;
    }
    
    // Polite delay between members
    await new Promise(r => setTimeout(r, 2000 + Math.random() * 2000));
  }

  console.log(`\nMember crawl complete: ${completed} succeeded, ${failed} failed`);
}

// ============================================================
// MAIN
// ============================================================
async function main() {
  const args = process.argv.slice(2);
  const chamberOnly = args.includes('--chamber-only');
  const membersOnly = args.includes('--members-only');
  const singleMember = args.includes('--member') ? args[args.indexOf('--member') + 1] : null;

  if (singleMember) {
    if (!fs.existsSync(MEMBERS_JSON)) {
      console.log('Run extract-members.js first');
      process.exit(1);
    }
    const data = JSON.parse(fs.readFileSync(MEMBERS_JSON, 'utf8'));
    const member = data.members.find(m => m.name.toLowerCase().includes(singleMember.toLowerCase()));
    if (!member) {
      console.log(`Member "${singleMember}" not found`);
      process.exit(1);
    }
    if (!member.website) {
      console.log(`${member.name} has no website listed`);
      process.exit(1);
    }
    fs.mkdirSync(MEMBERS_DIR, { recursive: true });
    const captured = await crawlMember(member.name, member.website, MEMBERS_DIR);
    for (const { url, pdf_path } of captured) {
      await processAndTrack(pdf_path, {
        source: 'Fairfield Area Chamber of Commerce',
        category: 'Community Organizations',
        subcategory: 'Chamber Members',
        type: 'member website',
        org: 'Fairfield Area Chamber of Commerce',
        member: member.name
      }, url);
    }
  } else if (chamberOnly) {
    await captureChamblerWebsite();
  } else if (membersOnly) {
    await crawlAllMembers();
  } else {
    await captureChamblerWebsite();
    await crawlAllMembers();
  }

  printSummary();
}

main().catch(err => { console.error(err); process.exit(1); });
