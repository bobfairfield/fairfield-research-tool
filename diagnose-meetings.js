#!/usr/bin/env node
/**
 * diagnose-meetings.js
 * Shows the structure of council_meetings.html so we can find the right anchor
 * Run from: ~/fairfield-research-tool/
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'council_meetings.html');

if (!fs.existsSync(filePath)) {
  console.error('❌ File not found: public/council_meetings.html');
  process.exit(1);
}

const html = fs.readFileSync(filePath, 'utf8');

console.log(`\n📄 File size: ${html.length} characters\n`);

// Check for key anchors
const anchors = [
  '<div class="controls"',
  'class="controls"',
  'FCSD School Board',
  'school-board',
  'controls',
  '<footer',
  '</main>',
  '</body>',
  'Browse',
  'search-box',
  'meeting-list',
  'archive',
];

console.log('🔍 Anchor search results:');
anchors.forEach(anchor => {
  const idx = html.indexOf(anchor);
  if (idx !== -1) {
    const snippet = html.slice(Math.max(0, idx - 30), idx + 60).replace(/\n/g, '↵');
    console.log(`  ✅ Found "${anchor}" at pos ${idx}: ...${snippet}...`);
  } else {
    console.log(`  ❌ NOT FOUND: "${anchor}"`);
  }
});

// Show last 2000 chars to find the end structure
console.log('\n📋 Last 2000 characters of file:');
console.log('---');
console.log(html.slice(-2000));
console.log('---');
