#!/usr/bin/env node
/**
 * add-school-board-callout.js
 * 1. Removes any prior FCSD/school board code fragments from pages/index.js
 * 2. Inserts a clean school board callout below the City Council archive callout
 *
 * Run from: ~/fairfield-research-tool/
 *   node add-school-board-callout.js
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'index.js');

if (!fs.existsSync(filePath)) {
  console.error('❌ Could not find pages/index.js');
  process.exit(1);
}

let src = fs.readFileSync(filePath, 'utf8');
const originalLength = src.length;

// ── Step 1: Remove any prior FCSD school board fragments ─────────────────────
// Remove blocks between our marker comments
src = src.replace(/\s*\{\/\* FCSD SCHOOL BOARD CALLOUT[\s\S]*?END \*\/\}/g, '');
// Remove any stray reference to the Diligent portal URL if it leaked in
src = src.replace(/[^\n]*fairfieldsfuture\.diligent\.community[^\n]*\n/g, '');

if (src.length !== originalLength) {
  console.log(`🧹 Cleaned up ${originalLength - src.length} chars of prior FCSD code`);
} else {
  console.log('✅ No prior FCSD fragments found — starting clean');
}

// ── Step 2: Find the City Council archive callout ────────────────────────────
// The callout was added in a prior session and contains "Browse →"
// We find its closing ),  and insert after it

const browseArrow = "Browse \u2192";
if (!src.includes(browseArrow)) {
  console.error("❌ Could not find the City Council archive callout ('Browse →') in index.js.");
  console.error("   The callout may not be present, or the file structure has changed.");
  process.exit(1);
}

const anchorPos = src.indexOf(browseArrow);

// Find the next ),  after the anchor — that closes the archive callout element
const afterAnchor = src.slice(anchorPos);
const closeMatch = afterAnchor.match(/\),?\s*\n/);
if (!closeMatch) {
  console.error('❌ Could not find closing ), after the archive callout.');
  process.exit(1);
}

const insertPos = anchorPos + closeMatch.index + closeMatch[0].length;

// ── Step 3: The new callout JSX (React.createElement style, no JSX transpiler needed) ──
const schoolBoardCallout = `
          {/* FCSD SCHOOL BOARD CALLOUT */}
          React.createElement('a', {
            href: 'https://fairfieldsfuture.diligent.community/portal/',
            target: '_blank',
            rel: 'noopener noreferrer',
            style: {
              display: 'flex',
              alignItems: 'center',
              background: '#eef2fc',
              border: '1px solid #c5d3f0',
              borderLeft: '4px solid #1a4fa0',
              borderRadius: 8,
              padding: '14px 20px',
              marginBottom: 16,
              gap: 14,
              textDecoration: 'none',
              color: 'inherit',
            }
          },
            React.createElement('span', { style: { fontSize: 20, flexShrink: 0 } }, '\uD83C\uDFEB'),
            React.createElement('div', { style: { flex: 1 } },
              React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' } },
                React.createElement('span', {
                  style: {
                    background: '#1a4fa0', color: '#fff',
                    fontSize: 10, fontWeight: 700,
                    padding: '2px 7px', borderRadius: 10,
                    letterSpacing: '0.5px',
                  }
                }, 'SCHOOL BOARD'),
                React.createElement('span', {
                  style: { fontSize: 14, fontWeight: 600, color: '#1a1a2e' }
                }, 'FCSD Board of Education \u2014 Agendas & Minutes')
              ),
              React.createElement('div', {
                style: { fontSize: 12, color: '#666', marginTop: 3 }
              }, '1st & 3rd Monday \u00B7 6:30 PM \u00B7 ACT Center Board Room \u00B7 Open to the public')
            ),
            React.createElement('span', {
              style: { color: '#1a4fa0', fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap' }
            }, 'Portal \u2192')
          ),
          {/* END FCSD SCHOOL BOARD CALLOUT */}

`;

src = src.slice(0, insertPos) + schoolBoardCallout + src.slice(insertPos);

fs.writeFileSync(filePath, src, 'utf8');

// Verify
if (src.includes('FCSD SCHOOL BOARD CALLOUT')) {
  console.log('✅ School board callout successfully inserted into pages/index.js');
  console.log('');
  console.log('Deploy:');
  console.log('  git add pages/index.js');
  console.log('  git commit -m "Add FCSD school board callout to homepage"');
  console.log('  git push');
} else {
  console.error('❌ Verification failed. Check pages/index.js manually.');
  process.exit(1);
}
