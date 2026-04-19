// Diagnostic + fix for beautification SOURCE_CATALOG entries
const fs = require('fs');
const path = require('path');
const file = path.join(process.env.HOME, 'fairfield-research-tool/generate-map.js');
let s = fs.readFileSync(file, 'utf8');

// Step 1: Remove ALL existing beautification entries (however malformed)
const before = s;
s = s.replace(/\s*'Fairfield Beautification Commission Weed Team'[\s\S]*?group: 'community_orgs',\s*\},/g, '');
s = s.replace(/\s*'Fairfield Beautification Commission 2025 Volunteers'[\s\S]*?group: 'community_orgs',\s*\},/g, '');

if (s === before) {
  console.log('  (no existing beautification entries found to remove)');
} else {
  console.log('✓ Removed old beautification entries');
}

// Step 2: Insert clean entries before grow-fairfield-main
const anchor = "  'grow-fairfield-main': {";
if (!s.includes(anchor)) {
  console.log('ERROR: anchor not found in generate-map.js');
  process.exit(1);
}

const insert = `  'Fairfield Beautification Commission Weed Team': {
    displayName: 'Fairfield Beautification Commission — Weed Team',
    emoji: '🌿',
    color: '#4a7c3f',
    url: 'southeastiowaunion.com',
    description: 'Downtown weed-free initiative led by Bob Ferguson — nine-block coverage, non-toxic treatment, volunteer team',
    group: 'community_orgs',
  },
  'Fairfield Beautification Commission 2025 Volunteers': {
    displayName: 'Fairfield Beautification Commission — 2025 Volunteers',
    emoji: '🌸',
    color: '#4a7c3f',
    url: 'southeastiowaunion.com',
    description: 'Second Annual Volunteer Appreciation Dinner 2025 — Weed Team, Rose of Year, Artist of Year, Youth Volunteer',
    group: 'community_orgs',
  },
  `;

s = s.replace(anchor, insert + anchor);
fs.writeFileSync(file, s);
console.log('✓ Clean entries inserted');

// Step 3: Verify they are now directly findable
// Extract SOURCE_CATALOG by eval (safe since this is our own file)
try {
  // Quick string check
  const key1 = "'Fairfield Beautification Commission Weed Team':";
  const key2 = "'Fairfield Beautification Commission 2025 Volunteers':";
  const count1 = (s.match(new RegExp(key1.replace(/'/g, "'"), 'g')) || []).length;
  const count2 = (s.match(new RegExp(key2.replace(/'/g, "'"), 'g')) || []).length;
  console.log('  Key 1 appears', count1, 'time(s) in generate-map.js');
  console.log('  Key 2 appears', count2, 'time(s) in generate-map.js');
  if (count1 === 1 && count2 === 1) {
    console.log('✓ Both keys present exactly once — looks correct');
  }
} catch(e) {
  console.log('  (verification skipped:', e.message, ')');
}

console.log('\nRun:\n  cd ~/fairfield-research-tool && node generate-map.js');
