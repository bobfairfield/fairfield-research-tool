#!/usr/bin/env node
/**
 * patch-school-board-catalog.js
 * Adds fcsd-board-minutes to SOURCE_CATALOG and URL_DOMAIN_MAP,
 * and fixes the Beautification Commission entries.
 *
 * Run from: ~/fairfield-research-tool/
 * Usage: node patch-school-board-catalog.js
 */

const fs   = require('fs');
const path = require('path');

const TARGET = path.join(__dirname, 'generate-map.js');
let src = fs.readFileSync(TARGET, 'utf8');

// ─── 1. ADD fcsd-board-minutes TO SOURCE_CATALOG ──────────────────────────────
// Insert before 'grow-fairfield-main' (line ~283)

const BOARD_ENTRY = `  'fcsd-board-minutes': {
    displayName: 'Fairfield Community School District — Board Minutes',
    emoji: '🏫',
    color: '#1a4a8a',
    url: 'fairfield.k12.ia.us',
    description: 'FCSD Board of Education meeting minutes, work sessions, and special meetings (2019–2024)',
    group: 'government',
  },
`;

if (src.includes("'fcsd-board-minutes'")) {
  console.log('  fcsd-board-minutes already in SOURCE_CATALOG — skipping');
} else {
  src = src.replace("  'grow-fairfield-main':", BOARD_ENTRY + "  'grow-fairfield-main':");
  console.log('✓ Added fcsd-board-minutes to SOURCE_CATALOG');
}

// ─── 2. ADD fairfield.k12.ia.us TO URL_DOMAIN_MAP ─────────────────────────────
// Insert before the closing ]; of URL_DOMAIN_MAP

const DOMAIN_ENTRY = `  ['fairfield.k12.ia.us','fcsd-board-minutes'],\n`;

if (src.includes("'fairfield.k12.ia.us'")) {
  console.log('  fairfield.k12.ia.us already in URL_DOMAIN_MAP — skipping');
} else {
  // Find the closing of URL_DOMAIN_MAP (the ]; after the last domain entry)
  src = src.replace(
    "  ['fairfieldiowa.com','fairfieldiowa.com'],\n];",
    "  ['fairfieldiowa.com','fairfieldiowa.com'],\n" + DOMAIN_ENTRY + "];"
  );
  console.log('✓ Added fairfield.k12.ia.us to URL_DOMAIN_MAP');
}

// ─── 3. FIX BEAUTIFICATION ENTRIES ────────────────────────────────────────────
// Remove any existing malformed beautification entries first, then re-insert clean ones

// Strip any existing beautification blocks (however they were inserted)
src = src.replace(/\s*'Fairfield Beautification Commission Weed Team':\s*\{[^}]*\},?\n?/g, '');
src = src.replace(/\s*'Fairfield Beautification Commission 2025 Volunteers':\s*\{[^}]*\},?\n?/g, '');

const BEAUTIFICATION_ENTRIES = `  'Fairfield Beautification Commission Weed Team': {
    displayName: 'Fairfield Beautification Commission — Weed Team',
    emoji: '🌿',
    color: '#4a7c3f',
    url: 'southeastiowaunion.com',
    description: 'Downtown weed-free initiative — nine-block coverage area, non-toxic treatment, volunteer team',
    group: 'community_orgs',
  },
  'Fairfield Beautification Commission 2025 Volunteers': {
    displayName: 'Fairfield Beautification Commission — 2025 Volunteers',
    emoji: '🌸',
    color: '#4a7c3f',
    url: 'southeastiowaunion.com',
    description: 'Second Annual Volunteer Appreciation Dinner 2025 — Weed Team, Rose of the Year, Artist of the Year',
    group: 'community_orgs',
  },
`;

src = src.replace("  'grow-fairfield-main':", BEAUTIFICATION_ENTRIES + "  'grow-fairfield-main':");
console.log('✓ Inserted clean Beautification entries');

// ─── 4. WRITE & VERIFY ────────────────────────────────────────────────────────
fs.writeFileSync(TARGET, src, 'utf8');

const verify = fs.readFileSync(TARGET, 'utf8');
const checks = [
  "'fcsd-board-minutes'",
  "'fairfield.k12.ia.us'",
  "'Fairfield Beautification Commission Weed Team'",
  "'Fairfield Beautification Commission 2025 Volunteers'",
];
checks.forEach(key => {
  const count = (verify.match(new RegExp(key.replace(/'/g, "\\'"), 'g')) || []).length;
  console.log(`  ${key} appears ${count} time(s)`);
});

console.log('\nRun: node generate-map.js');
