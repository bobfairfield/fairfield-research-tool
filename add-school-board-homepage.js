#!/usr/bin/env node
/**
 * add-school-board-homepage.js
 * Adds an FCSD School Board callout to pages/index.js (the homepage)
 * Run from: ~/fairfield-research-tool/
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'index.js');

if (!fs.existsSync(filePath)) {
  console.error('❌ Could not find pages/index.js');
  process.exit(1);
}

let content = fs.readFileSync(filePath, 'utf8');

if (content.includes('FCSD School Board')) {
  console.log('⚠️  Already exists in index.js — skipping.');
  process.exit(0);
}

const schoolBoardCallout = `

          {/* FCSD School Board Meetings Callout */}
          <div
            style={{
              border: '1px solid #c0d0f0',
              borderLeft: '4px solid #1a4fa0',
              borderRadius: 8,
              padding: '14px 20px',
              marginBottom: 16,
              background: '#f5f8ff',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <span style={{ fontSize: 22 }}>🏫</span>
            <div style={{ flex: 1 }}>
              <span style={{
                background: '#1a4fa0',
                color: '#fff',
                fontSize: 10,
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: 10,
                letterSpacing: 0.5,
                marginRight: 8,
              }}>FCSD</span>
              <strong style={{ fontSize: 14, color: '#1a1a2e' }}>School Board Meeting Agendas &amp; Minutes</strong>
              <div style={{ fontSize: 12, color: '#555', marginTop: 3 }}>
                Meets 1st &amp; 3rd Monday at 6:30 PM · ACT Center board room · All meetings open to the public
              </div>
            </div>
            <a
              href="https://fairfieldsfuture.diligent.community/portal/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: '#1a4fa0',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              View →
            </a>
          </div>`;

// Find the city council callout (which we know exists) and insert after it
// The council callout ends just before the Constitution/KB row
// Anchor: look for the style block containing marginBottom:24 that closes the council callout
const anchor = "display:'flex', gap:10, marginBottom:24";

if (!content.includes(anchor)) {
  // Fallback: find "Browse" link closing and insert after next closing div
  console.log('Primary anchor not found, trying fallback...');
  const anchor2 = 'Browse \u2192';
  if (!content.includes(anchor2)) {
    console.error('❌ Cannot find insertion point. Please check pages/index.js manually.');
    process.exit(1);
  }
  // Find the closing </div> after "Browse →"
  const browseIdx = content.indexOf(anchor2);
  // Find two closing divs after it
  let closeCount = 0;
  let i = browseIdx;
  while (i < content.length && closeCount < 3) {
    const nextClose = content.indexOf('</div>', i);
    if (nextClose === -1) break;
    closeCount++;
    i = nextClose + 6;
  }
  content = content.slice(0, i) + schoolBoardCallout + content.slice(i);
} else {
  // The anchor is inside the council callout's outer div style
  // Find the closing </div> of that block
  const anchorIdx = content.indexOf(anchor);
  let depth = 0;
  let i = anchorIdx;
  // scan forward to find the matching closing div
  while (i < content.length) {
    const openTag = content.indexOf('<div', i);
    const closeTag = content.indexOf('</div>', i);
    if (closeTag === -1) break;
    if (openTag !== -1 && openTag < closeTag) {
      depth++;
      i = openTag + 4;
    } else {
      if (depth === 0) {
        // This is our closing div
        const insertAt = closeTag + 6;
        content = content.slice(0, insertAt) + schoolBoardCallout + content.slice(insertAt);
        break;
      }
      depth--;
      i = closeTag + 6;
    }
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ FCSD School Board callout inserted into pages/index.js');
console.log('');
console.log('Next:');
console.log('  git add pages/index.js && git commit -m "Add FCSD School Board callout to homepage" && git push');
