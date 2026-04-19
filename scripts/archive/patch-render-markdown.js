const fs = require('fs');
const path = require('path');
const file = path.join(process.env.HOME, 'fairfield-research-tool/pages/index.js');
let src = fs.readFileSync(file, 'utf8');

// Add renderMarkdown function after the first 'use client' or after imports
const renderFn = `
function renderMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/^### (.+)$/gm, '<h3 style="font-size:15px;font-weight:700;margin:18px 0 6px;color:#1a1a2e">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 style="font-size:17px;font-weight:700;margin:22px 0 8px;color:#1a1a2e;border-bottom:1px solid #e5e7eb;padding-bottom:4px">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 style="font-size:20px;font-weight:700;margin:24px 0 10px;color:#1a1a2e">$1</h1>')
    .replace(/^---+$/gm, '<hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^> (.+)$/gm, '<blockquote style="border-left:3px solid #9ca3af;margin:8px 0;padding:4px 12px;color:#4b5563">$1</blockquote>')
    .replace(/^[-*] (.+)$/gm, '<li style="margin:3px 0 3px 20px;list-style:disc">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li style="margin:3px 0 3px 20px;list-style:decimal">$2</li>')
    .replace(/(<li[^>]*>.*<\/li>\n?)+/g, s => '<ul style="margin:8px 0;padding:0">'+s+'</ul>')
    .replace(/\n\n/g, '</p><p style="margin:8px 0">')
    .replace(/^(?!<[hbulp])(.+)$/gm, (m) => m.startsWith('<') ? m : m)
    .trim();
}
`;

// Insert before the first 'export default' or 'function' that's the main component
if (src.includes('function renderMarkdown')) {
  console.log('✓ renderMarkdown already present — skipping function insert');
} else {
  // Insert before the main export default function
  src = src.replace('export default function', renderFn + '\nexport default function');
  console.log('✓ renderMarkdown function added');
}

// Replace both display lines
const old1 = `style={{ color:'#374151', lineHeight:1.8, fontSize:15, whiteSpace:'pre-wrap' }}>{result.analysis}</div>`;
const new1 = `style={{ color:'#374151', lineHeight:1.8, fontSize:15 }} dangerouslySetInnerHTML={{ __html: renderMarkdown(result.analysis) }}/></div>`;

const old2 = `style={{ fontSize:14, lineHeight:1.9, color:'#374151', whiteSpace:'pre-wrap' }}>{result && result.analysis}</div>`;
const new2 = `style={{ fontSize:14, lineHeight:1.9, color:'#374151' }} dangerouslySetInnerHTML={{ __html: renderMarkdown(result && result.analysis) }}/></div>`;

if (src.includes(old1)) {
  src = src.replace(old1, new1);
  console.log('✓ Line 786 patched');
} else {
  console.log('⚠ Line 786 pattern not matched — check manually');
}

if (src.includes(old2)) {
  src = src.replace(old2, new2);
  console.log('✓ Line 880 patched');
} else {
  console.log('⚠ Line 880 pattern not matched — check manually');
}

fs.writeFileSync(file, src);
console.log('\nDeploy:\n  cd ~/fairfield-research-tool && npx vercel --prod --yes');
