#!/usr/bin/env node
const fs = require('fs');
let src = fs.readFileSync('./generate-map.js', 'utf8');

// ── Step 1: Remove misplaced entries outside SOURCE_CATALOG ──────────────────
// They appear between the }; closing of SOURCE_CATALOG and grow-fairfield-main
const MISPLACED = /\n  'fcsd-board-minutes': \{[^}]*\},\n  'Fairfield Beautification Commission Weed Team': \{[^}]*\},\n  'Fairfield Beautification Commission 2025 Volunteers': \{[^}]*\},\n/s;
if (MISPLACED.test(src)) {
  src = src.replace(MISPLACED, '\n');
  console.log('✓ Removed misplaced entries');
} else {
  console.log('  No misplaced entries found');
}

// ── Step 2: Find the }; that closes SOURCE_CATALOG (first one after line 20) ──
// SOURCE_CATALOG starts at line 20 and its }; is the first standalone }; in the file
const CATALOG_CLOSE = /\n\};\n/;

const NEW_ENTRIES = `
  'fcsd-board-minutes': {
    displayName: 'Fairfield Community School District — Board Minutes',
    emoji: '🏫',
    color: '#1a4a8a',
    url: 'fairfield.k12.ia.us',
    description: 'FCSD Board of Education meeting minutes, work sessions, and special meetings (2019-2024)',
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
`;

// Replace first }; with the new entries + };
src = src.replace(CATALOG_CLOSE, NEW_ENTRIES);
console.log('✓ Inserted entries inside SOURCE_CATALOG');

// ── Step 3: Add fairfield.k12.ia.us to URL_DOMAIN_MAP ────────────────────────
if (src.includes("'fairfield.k12.ia.us'")) {
  console.log('  fairfield.k12.ia.us already in URL_DOMAIN_MAP');
} else {
  src = src.replace(
    "  ['fairfieldiowa.com','fairfieldiowa.com'],\n];",
    "  ['fairfieldiowa.com','fairfieldiowa.com'],\n  ['fairfield.k12.ia.us','fcsd-board-minutes'],\n];"
  );
  console.log('✓ Added fairfield.k12.ia.us to URL_DOMAIN_MAP');
}

// ── Step 4: Write and verify ──────────────────────────────────────────────────
fs.writeFileSync('./generate-map.js', src);

const verify = fs.readFileSync('./generate-map.js', 'utf8');
const closings = [...verify.matchAll(/^const SOURCE_CATALOG|^};/gm)].map((m,i) => {
  const line = verify.slice(0, m.index).split('\n').length;
  return `  line ${line}: ${m[0]}`;
});
console.log('\nSOURCE_CATALOG structure:');
closings.slice(0,4).forEach(l => console.log(l));

const inCatalog = verify.indexOf("'fcsd-board-minutes'");
const catalogClose = verify.indexOf('\n};\n');
console.log('\nfcsd-board-minutes at char:', inCatalog, '| SOURCE_CATALOG closes at char:', catalogClose);
console.log(inCatalog < catalogClose ? '✓ Entry is INSIDE SOURCE_CATALOG' : '✗ Entry is OUTSIDE SOURCE_CATALOG');

console.log('\nRun: node generate-map.js');
