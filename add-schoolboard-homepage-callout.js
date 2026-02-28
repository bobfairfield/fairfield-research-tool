#!/usr/bin/env node
/**
 * add-schoolboard-homepage-callout.js
 * Adds an FCSD School Board callout to pages/index.js, below the City Council archive callout.
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

// Anchor: find the closing of the City Council archive callout div
// The callout ends just before the Constitution/KB buttons row
// We'll anchor on the unique text from the existing callout
const anchor = `/* END MEETINGS CALLOUT */`;

if (!content.includes(anchor)) {
  // Fallback: try to find the Browse → link which is distinctive to the callout
  const fallbackAnchor = `'Browse →'`;
  if (!content.includes(fallbackAnchor)) {
    console.error('❌ Could not find anchor for City Council callout in index.js.');
    console.error('   Please inspect pages/index.js and identify where the meetings callout ends.');
    process.exit(1);
  }

  // Find the closing </div> after the Browse → link and inject after it
  const browseIdx = content.indexOf(fallbackAnchor);
  // Find next two closing </div> tags after the Browse link (closes the flex row, then the outer div)
  let searchFrom = browseIdx;
  let closingCount = 0;
  let insertIdx = -1;
  for (let i = searchFrom; i < content.length - 5; i++) {
    if (content.slice(i, i + 6) === '</div>') {
      closingCount++;
      if (closingCount === 2) {
        insertIdx = i + 6;
        break;
      }
    }
  }

  if (insertIdx === -1) {
    console.error('❌ Could not locate end of callout block. Please add manually.');
    process.exit(1);
  }

  const schoolBoardCallout = `

            {/* FCSD School Board Callout */}
            <div
              onClick={() => window.open('https://fairfieldsfuture.diligent.community/portal/', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: '#f0f4ff',
                border: '1px solid #c0d0f0',
                borderLeft: '4px solid #1a4fa0',
                borderRadius: 8,
                padding: '14px 18px',
                marginBottom: 16,
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: 22, flexShrink: 0 }}>🏫</span>
              <div style={{ flex: 1 }}>
                <span style={{
                  display: 'inline-block',
                  background: '#1a4fa0',
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '2px 7px',
                  borderRadius: 10,
                  letterSpacing: '0.5px',
                  marginRight: 8,
                  verticalAlign: 'middle',
                }}>SCHOOL BOARD</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e', verticalAlign: 'middle' }}>
                  FCSD Board of Education — Agendas &amp; Minutes
                </span>
                <div style={{ fontSize: 12, color: '#555', marginTop: 3 }}>
                  Meets 1st &amp; 3rd Monday, 6:30 PM · Hosted on Diligent Community portal
                </div>
              </div>
              <span style={{ fontSize: 13, color: '#1a4fa0', fontWeight: 600, flexShrink: 0 }}>Visit →</span>
            </div>`;

  content = content.slice(0, insertIdx) + schoolBoardCallout + content.slice(insertIdx);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✅ FCSD School Board callout added to homepage (via fallback anchor).');
  console.log('');
  console.log('Next steps:');
  console.log('  git add pages/index.js');
  console.log('  git commit -m "Add FCSD School Board callout to homepage"');
  console.log('  git push');
  process.exit(0);
}

// If the END MEETINGS CALLOUT comment exists, inject right after it
const schoolBoardCallout = `

            {/* FCSD School Board Callout */}
            <div
              onClick={() => window.open('https://fairfieldsfuture.diligent.community/portal/', '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                background: '#f0f4ff',
                border: '1px solid #c0d0f0',
                borderLeft: '4px solid #1a4fa0',
                borderRadius: 8,
                padding: '14px 18px',
                marginBottom: 16,
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: 22, flexShrink: 0 }}>🏫</span>
              <div style={{ flex: 1 }}>
                <span style={{
                  display: 'inline-block',
                  background: '#1a4fa0',
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                  padding: '2px 7px',
                  borderRadius: 10,
                  letterSpacing: '0.5px',
                  marginRight: 8,
                  verticalAlign: 'middle',
                }}>SCHOOL BOARD</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e', verticalAlign: 'middle' }}>
                  FCSD Board of Education — Agendas &amp; Minutes
                </span>
                <div style={{ fontSize: 12, color: '#555', marginTop: 3 }}>
                  Meets 1st &amp; 3rd Monday, 6:30 PM · Hosted on Diligent Community portal
                </div>
              </div>
              <span style={{ fontSize: 13, color: '#1a4fa0', fontWeight: 600, flexShrink: 0 }}>Visit →</span>
            </div>`;

content = content.replace(anchor, anchor + schoolBoardCallout);
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ FCSD School Board callout added to homepage.');
console.log('');
console.log('Next steps:');
console.log('  git add pages/index.js');
console.log('  git commit -m "Add FCSD School Board callout to homepage"');
console.log('  git push');
