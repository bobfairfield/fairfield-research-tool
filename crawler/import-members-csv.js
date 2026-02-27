/**
 * import-members-csv.js
 * Converts a GrowthZone CSV export into the members.json format
 * that chamber-crawler.js expects
 * 
 * Usage: node import-members-csv.js <path-to-csv>
 * Example: node import-members-csv.js ~/Downloads/chamber-members.csv
 * 
 * GrowthZone CSV typically has columns like:
 *   Organization Name, Website, Address, Phone, Email, Category, etc.
 * This script handles common column name variations automatically.
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = path.join(__dirname, 'members.json');

function parseCSV(text) {
  const lines = text.split('\n').filter(l => l.trim());
  if (lines.length < 2) return [];

  // Parse header row - handle quoted fields
  const headers = parseRow(lines[0]).map(h => h.trim().toLowerCase());
  console.log(`\nCSV columns found: ${headers.join(', ')}\n`);

  // Find name and website columns with flexible matching
  const nameCol = findColumn(headers, ['organization name', 'company name', 'business name', 'name', 'member name', 'org name']);
  const websiteCol = findColumn(headers, ['website', 'web site', 'url', 'web address', 'website url', 'homepage']);

  if (nameCol === -1) {
    console.error('Could not find a name column. Columns available:', headers.join(', '));
    process.exit(1);
  }
  if (websiteCol === -1) {
    console.log('⚠️  No website column found. Will import names only (no websites to crawl).');
    console.log('Available columns:', headers.join(', '));
  }

  console.log(`Using name column: "${headers[nameCol]}"`);
  if (websiteCol >= 0) console.log(`Using website column: "${headers[websiteCol]}"`);

  const members = [];
  for (let i = 1; i < lines.length; i++) {
    const fields = parseRow(lines[i]);
    const name = (fields[nameCol] || '').trim();
    const website = websiteCol >= 0 ? normalizeUrl((fields[websiteCol] || '').trim()) : null;

    if (!name) continue;

    members.push({ name, website, profile_url: null });
  }

  return members;
}

function findColumn(headers, candidates) {
  for (const candidate of candidates) {
    const idx = headers.findIndex(h => h.includes(candidate));
    if (idx >= 0) return idx;
  }
  return -1;
}

function normalizeUrl(url) {
  if (!url) return null;
  if (url === '' || url === 'N/A' || url === 'n/a' || url === '-') return null;
  if (!url.startsWith('http')) url = 'https://' + url;
  try {
    new URL(url); // validate
    return url;
  } catch {
    return null;
  }
}

// Parse a single CSV row handling quoted fields
function parseRow(line) {
  const fields = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      fields.push(field);
      field = '';
    } else {
      field += ch;
    }
  }
  fields.push(field);
  return fields;
}

// Main
const csvPath = process.argv[2];
if (!csvPath) {
  console.error('Usage: node import-members-csv.js <path-to-csv>');
  console.error('Example: node import-members-csv.js ~/Downloads/chamber-members.csv');
  process.exit(1);
}

const fullPath = csvPath.replace('~', process.env.HOME);
if (!fs.existsSync(fullPath)) {
  console.error(`File not found: ${fullPath}`);
  process.exit(1);
}

const text = fs.readFileSync(fullPath, 'utf8');
const members = parseCSV(text);

const withWebsites = members.filter(m => m.website);
const withoutWebsites = members.filter(m => !m.website);

console.log(`Total members: ${members.length}`);
console.log(`With websites: ${withWebsites.length}`);
console.log(`Without websites: ${withoutWebsites.length}`);

const result = {
  extracted_date: new Date().toISOString(),
  source: 'CSV export from GrowthZone',
  total: members.length,
  with_websites: withWebsites.length,
  members
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
console.log(`\n✓ Saved to: ${OUTPUT_FILE}`);
console.log('\nPreview of first 10 members with websites:');
withWebsites.slice(0, 10).forEach(m => console.log(`  ${m.name} → ${m.website}`));
console.log('\nNext step: node chamber-crawler.js --members-only');
