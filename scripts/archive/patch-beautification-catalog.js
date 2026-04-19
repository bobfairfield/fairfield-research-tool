const fs = require('fs');
const path = require('path');
const file = path.join(process.env.HOME, 'fairfield-research-tool/generate-map.js');
let s = fs.readFileSync(file, 'utf8');

if (s.includes('Fairfield Beautification Commission Weed Team')) {
  console.log('✓ Beautification entries already present — no change needed.');
  process.exit(0);
}

const newEntries = `  'Fairfield Beautification Commission Weed Team': {
    displayName: 'Fairfield Beautification Commission — Weed Team',
    emoji: '🌿',
    color: '#4a7c3f',
    url: 'southeastiowaunion.com',
    description: 'Downtown weed-free initiative led by Bob Ferguson — nine-block coverage area, non-toxic treatment, volunteer team',
    group: 'community_orgs',
  },
  'Fairfield Beautification Commission 2025 Volunteers': {
    displayName: 'Fairfield Beautification Commission — 2025 Volunteers',
    emoji: '🌸',
    color: '#4a7c3f',
    url: 'southeastiowaunion.com',
    description: 'Second Annual Volunteer Appreciation Dinner 2025 — award recipients including Weed Team, Rose of the Year, Artist of the Year',
    group: 'community_orgs',
  },
  `;

const anchor = "'grow-fairfield-main': {";
if (!s.includes(anchor)) {
  console.log('ERROR: Could not find insertion point in generate-map.js');
  process.exit(1);
}

s = s.replace(anchor, newEntries + anchor);
fs.writeFileSync(file, s);
console.log('✓ Added Beautification Commission Weed Team to SOURCE_CATALOG');
console.log('✓ Added Beautification Commission 2025 Volunteers to SOURCE_CATALOG');
console.log('\nRun:\n  cd ~/fairfield-research-tool && node generate-map.js');
