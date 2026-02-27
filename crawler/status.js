/**
 * status.js
 * Quick dashboard showing the current state of the knowledge base
 * 
 * Run: node status.js
 */

const { getAllPages, getStalePages } = require('./manifest-manager');
const path = require('path');
const fs = require('fs');

function status() {
  const pages = getAllPages();
  const urls = Object.keys(pages);
  
  if (urls.length === 0) {
    console.log('No pages indexed yet. Run chamber-crawler.js to get started.');
    return;
  }

  // Group by org and member
  const orgs = {};
  urls.forEach(url => {
    const p = pages[url];
    const orgKey = p.org || 'Unknown';
    if (!orgs[orgKey]) orgs[orgKey] = { pages: 0, members: new Set(), oldest: null };
    orgs[orgKey].pages++;
    if (p.member) orgs[orgKey].members.add(p.member);
    const d = new Date(p.last_updated);
    if (!orgs[orgKey].oldest || d < orgs[orgKey].oldest) orgs[orgKey].oldest = d;
  });

  console.log('\n╔══════════════════════════════════════════════════════╗');
  console.log('║       Fairfield RAG Knowledge Base Status            ║');
  console.log('╚══════════════════════════════════════════════════════╝\n');
  console.log(`Total pages indexed: ${urls.length}`);
  
  // Stale check
  const stale = getStalePages(7);
  if (stale.length > 0) {
    console.log(`⚠️  Stale (>7 days): ${stale.length} pages need updating`);
  } else {
    console.log(`✓ All pages updated within 7 days`);
  }

  console.log('\n── By Organization ──────────────────────────────────\n');
  
  Object.entries(orgs).sort().forEach(([org, data]) => {
    const memberCount = data.members.size;
    const daysOld = data.oldest ? Math.floor((Date.now() - data.oldest) / 86400000) : '?';
    const staleFlag = daysOld > 7 ? ' ⚠️' : '';
    console.log(`  ${org}`);
    console.log(`    Pages: ${data.pages}  |  Members w/ sites: ${memberCount}  |  Oldest: ${daysOld}d ago${staleFlag}`);
  });

  // Recent log
  const logDir = path.join(process.env.HOME, 'fairfield-research-tool', 'logs');
  const logs = fs.existsSync(logDir) ? fs.readdirSync(logDir).filter(f => f.startsWith('update-')).sort().reverse() : [];
  
  if (logs.length > 0) {
    console.log('\n── Recent Updates ───────────────────────────────────\n');
    logs.slice(0, 3).forEach(logFile => {
      const report = JSON.parse(fs.readFileSync(path.join(logDir, logFile), 'utf8'));
      console.log(`  ${report.date.split('T')[0]}:  ${report.updated} updated, ${report.unchanged} unchanged, ${report.errors} errors`);
    });
  }

  console.log('\n── Commands ─────────────────────────────────────────\n');
  console.log('  Capture Chamber website:    node chamber-crawler.js --chamber-only');
  console.log('  Extract member list:        node extract-members.js');
  console.log('  Crawl all members:          node chamber-crawler.js --members-only');
  console.log('  Crawl single member:        node chamber-crawler.js --member "Business Name"');
  console.log('  Run weekly update:          node weekly-update.js');
  console.log('  View this status:           node status.js');
  console.log('');
}

status();
