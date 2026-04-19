const fs = require('fs');
const file = require('path').join(process.env.HOME, 'fairfield-research-tool/pages/index.js');
let s = fs.readFileSync(file, 'utf8');

const bad1 = "style={{ color:'#374151', lineHeight:1.8, fontSize:15 }} dangerouslySetInnerHTML={{ __html: renderMarkdown(result.analysis) }}/></div>";
const good1 = "style={{ color:'#374151', lineHeight:1.8, fontSize:15 }} dangerouslySetInnerHTML={{ __html: renderMarkdown(result.analysis) }}></div>";

const bad2 = "style={{ fontSize:14, lineHeight:1.9, color:'#374151' }} dangerouslySetInnerHTML={{ __html: renderMarkdown(result && result.analysis) }}/></div>";
const good2 = "style={{ fontSize:14, lineHeight:1.9, color:'#374151' }} dangerouslySetInnerHTML={{ __html: renderMarkdown(result && result.analysis) }}></div>";

if (s.includes(bad1)) { s = s.replace(bad1, good1); console.log('✓ Fixed div 1'); }
else { console.log('  div 1 already ok or not found'); }

if (s.includes(bad2)) { s = s.replace(bad2, good2); console.log('✓ Fixed div 2'); }
else { console.log('  div 2 already ok or not found'); }

fs.writeFileSync(file, s);
console.log('\n✓ Done. Deploy:\n  cd ~/fairfield-research-tool && npx vercel --prod --yes');
