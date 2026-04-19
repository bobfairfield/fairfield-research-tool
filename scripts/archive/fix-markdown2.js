const fs = require('fs');
const file = require('path').join(process.env.HOME, 'fairfield-research-tool/pages/index.js');
let s = fs.readFileSync(file, 'utf8');

// Remove any existing renderMarkdown block
const start = s.indexOf('\nfunction renderMarkdown');
if (start !== -1) {
  let depth = 0, i = start, foundOpen = false;
  while (i < s.length) {
    if (s[i] === '{') { depth++; foundOpen = true; }
    if (s[i] === '}') depth--;
    if (foundOpen && depth === 0) { i++; break; }
    i++;
  }
  s = s.slice(0, start) + s.slice(i);
  console.log('✓ Removed old renderMarkdown');
}

// Build the function as an array of lines to avoid escape issues
const lines = [
  '',
  'function renderMarkdown(t) {',
  '  if (!t) return \'\';',
  '  var h = t.replace(/&/g,\'&amp;\').replace(/</g,\'&lt;\').replace(/>/g,\'&gt;\');',
  '  h = h.replace(/^### (.+)$/gm,\'<h3 style="font-size:15px;font-weight:700;margin:18px 0 6px;color:#1a1a2e">$1</h3>\');',
  '  h = h.replace(/^## (.+)$/gm,\'<h2 style="font-size:17px;font-weight:700;margin:22px 0 8px;color:#1a1a2e;border-bottom:1px solid #e5e7eb;padding-bottom:4px">$1</h2>\');',
  '  h = h.replace(/^# (.+)$/gm,\'<h1 style="font-size:20px;font-weight:700;margin:24px 0 10px;color:#1a1a2e">$1</h1>\');',
  '  h = h.replace(/^---+$/gm,\'<hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>\');',
  '  h = h.replace(/[*][*](.+?)[*][*]/g,\'<strong>$1</strong>\');',
  '  h = h.replace(/[*](.+?)[*]/g,\'<em>$1</em>\');',
  '  h = h.replace(/^&gt; (.+)$/gm,\'<blockquote style="border-left:3px solid #9ca3af;margin:8px 0;padding:4px 12px;color:#4b5563">$1</blockquote>\');',
  '  h = h.replace(/^- (.+)$/gm,\'<li style="margin:3px 0 3px 20px;list-style:disc">$1</li>\');',
  '  h = h.replace(/^\\d+[.] (.+)$/gm,\'<li style="margin:3px 0 3px 20px;list-style:decimal">$1</li>\');',
  '  h = h.split(\'\\n\\n\').join(\'</p><p style="margin:8px 0">\');',
  '  return h.trim();',
  '}',
  '',
];

const cleanFn = lines.join('\n');
s = s.replace('export default function', cleanFn + 'export default function');
console.log('✓ Clean renderMarkdown inserted');

// Fix display divs if still using pre-wrap
const old1 = "style={{ color:'#374151', lineHeight:1.8, fontSize:15, whiteSpace:'pre-wrap' }}>{result.analysis}</div>";
const new1 = "style={{ color:'#374151', lineHeight:1.8, fontSize:15 }} dangerouslySetInnerHTML={{ __html: renderMarkdown(result.analysis) }}/></div>";
const old2 = "style={{ fontSize:14, lineHeight:1.9, color:'#374151', whiteSpace:'pre-wrap' }}>{result && result.analysis}</div>";
const new2 = "style={{ fontSize:14, lineHeight:1.9, color:'#374151' }} dangerouslySetInnerHTML={{ __html: renderMarkdown(result && result.analysis) }}/></div>";

if (s.includes(old1)) { s = s.replace(old1, new1); console.log('✓ Display div 1 patched'); }
else { console.log('  (div 1 already patched)'); }
if (s.includes(old2)) { s = s.replace(old2, new2); console.log('✓ Display div 2 patched'); }
else { console.log('  (div 2 already patched)'); }

fs.writeFileSync(file, s);
console.log('\n✓ Done. Deploy:\n  cd ~/fairfield-research-tool && npx vercel --prod --yes');
