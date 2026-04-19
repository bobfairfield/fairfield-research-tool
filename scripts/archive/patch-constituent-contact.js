/**
 * patch-constituent-contact.js
 * Adds optional contact info (name, email, phone) to the
 * "Email Councilman Ferguson" flow so constituents can choose
 * to be known or remain anonymous.
 *
 * Run from ~/fairfield-research-tool/
 * Usage: node patch-constituent-contact.js
 */

const fs   = require('fs');
const path = require('path');

// ── 1. Patch index.js ─────────────────────────────────────────────────────

const indexPath = path.join(__dirname, 'pages', 'index.js');
let index = fs.readFileSync(indexPath, 'utf8');

// Add state variables after selfEmailStatus state
const stateAnchor = `const [selfEmailStatus, setSelfEmailStatus] = useState('');`;
const newState = `const [selfEmailStatus, setSelfEmailStatus] = useState('');
  const [constituentName, setConstituentName] = useState('');
  const [constituentEmail, setConstituentEmail] = useState('');
  const [constituentPhone, setConstituentPhone] = useState('');`;

if (index.includes(stateAnchor) && !index.includes('constituentName')) {
  index = index.replace(stateAnchor, newState);
  console.log('✓ Added contact state variables');
} else {
  console.log('⚠ State variables already present or anchor not found — skipping');
}

// Pass contact info in handleEmailReport fetch body
const emailBodyAnchor = `body: JSON.stringify({ question, analysis: result.analysis, mode: result.mode, comment: constituentComment, summary: summaryText })`;
const emailBodyNew    = `body: JSON.stringify({ question, analysis: result.analysis, mode: result.mode, comment: constituentComment, summary: summaryText, constituentName: constituentName.trim(), constituentEmail: constituentEmail.trim(), constituentPhone: constituentPhone.trim() })`;

if (index.includes(emailBodyAnchor)) {
  index = index.replace(emailBodyAnchor, emailBodyNew);
  console.log('✓ Patched handleEmailReport fetch body');
} else {
  console.log('⚠ handleEmailReport body anchor not found — skipping');
}

// Also reset contact fields in resetMode and Clear handlers
const resetAnchor = `setConstituentComment(''); };`;
const resetNew    = `setConstituentComment(''); setConstituentName(''); setConstituentEmail(''); setConstituentPhone(''); };`;
if (index.includes(resetAnchor)) {
  index = index.replace(resetAnchor, resetNew);
  console.log('✓ Patched resetMode to clear contact fields');
} else {
  console.log('⚠ resetMode anchor not found — skipping');
}

// Add contact info UI after the constituentComment textarea
const textareaAnchor = `placeholder="Add a note for Councilman Ferguson (optional) — describe your concern or idea..."
                  style={{ width:'100%', padding:'10px 12px', fontSize:13, borderRadius:8, border:'1px solid #d1d5db', color:'#374151', resize:'vertical', minHeight:72, marginBottom:10, fontFamily:'Georgia,serif', boxSizing:'border-box' }}
                />`;

const textareaNew = `placeholder="Add a note for Councilman Ferguson (optional) — describe your concern or idea..."
                  style={{ width:'100%', padding:'10px 12px', fontSize:13, borderRadius:8, border:'1px solid #d1d5db', color:'#374151', resize:'vertical', minHeight:72, marginBottom:10, fontFamily:'Georgia,serif', boxSizing:'border-box' }}
                />
                <div style={{ backgroundColor:'#f8f9fa', border:'1px solid #e2e8f0', borderRadius:8, padding:'12px 14px', marginBottom:10 }}>
                  <p style={{ margin:'0 0 8px 0', fontSize:12, fontWeight:700, color:'#374151' }}>Your contact info <span style={{ fontWeight:400, color:'#888' }}>(optional — leave blank to remain anonymous)</span></p>
                  <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                    <input type="text" value={constituentName} onChange={e => setConstituentName(e.target.value)} placeholder="Your name"
                      style={{ flex:'1 1 160px', padding:'7px 10px', fontSize:13, border:'1px solid #d1d5db', borderRadius:6, outline:'none', fontFamily:'inherit', color:'#374151' }} />
                    <input type="email" value={constituentEmail} onChange={e => setConstituentEmail(e.target.value)} placeholder="Your email"
                      style={{ flex:'1 1 180px', padding:'7px 10px', fontSize:13, border:'1px solid #d1d5db', borderRadius:6, outline:'none', fontFamily:'inherit', color:'#374151' }} />
                    <input type="tel" value={constituentPhone} onChange={e => setConstituentPhone(e.target.value)} placeholder="Your phone (optional)"
                      style={{ flex:'1 1 150px', padding:'7px 10px', fontSize:13, border:'1px solid #d1d5db', borderRadius:6, outline:'none', fontFamily:'inherit', color:'#374151' }} />
                  </div>
                </div>`;

if (index.includes(textareaAnchor) && !index.includes('constituentName')) {
  index = index.replace(textareaAnchor, textareaNew);
  console.log('✓ Added contact info UI fields');
} else if (index.includes('constituentName')) {
  console.log('⚠ Contact UI already present — skipping');
} else {
  console.log('⚠ Textarea anchor not found — skipping');
}

fs.writeFileSync(indexPath, index);
console.log('✓ index.js saved');

// ── 2. Patch email-report.js ───────────────────────────────────────────────

const emailPath = path.join(__dirname, 'pages', 'api', 'email-report.js');
let email = fs.readFileSync(emailPath, 'utf8');

// Extract constituentName/Email/Phone from req.body
const bodyAnchor = `const { question, analysis, mode, comment, summary, userEmail } = req.body;`;
const bodyNew    = `const { question, analysis, mode, comment, summary, userEmail, constituentName, constituentEmail, constituentPhone } = req.body;`;

if (email.includes(bodyAnchor)) {
  email = email.replace(bodyAnchor, bodyNew);
  console.log('✓ Patched email-report.js req.body destructure');
} else {
  console.log('⚠ email-report.js body anchor not found — skipping');
}

// Add contact section HTML after commentSection
const contactAnchor = `const summarySection = summary ? \``;
const contactNew = `const hasContact = constituentName || constituentEmail || constituentPhone;
    const contactSection = hasContact ? \`
      <div style="background:#f0fdf4;padding:20px 32px;border-left:4px solid #16a34a;margin-bottom:0">
        <p style="margin:0;font-size:13px;color:#666;font-weight:600;text-transform:uppercase;letter-spacing:1px">Constituent Contact Info</p>
        \${constituentName ? \`<p style="margin:6px 0 2px 0;font-size:15px;color:#374151;font-weight:600">\${constituentName}</p>\` : ''}
        \${constituentEmail ? \`<p style="margin:2px 0;font-size:14px;color:#1d5fa8"><a href="mailto:\${constituentEmail}" style="color:#1d5fa8">\${constituentEmail}</a></p>\` : ''}
        \${constituentPhone ? \`<p style="margin:2px 0;font-size:14px;color:#374151">\${constituentPhone}</p>\` : ''}
      </div>\` : '';

    const summarySection = summary ? \``;

if (email.includes(contactAnchor) && !email.includes('constituentName')) {
  email = email.replace(contactAnchor, contactNew);
  console.log('✓ Added contactSection HTML to email-report.js');
} else if (email.includes('constituentName')) {
  console.log('⚠ Contact section already present — skipping');
} else {
  console.log('⚠ email-report.js contactSection anchor not found — skipping');
}

// Insert ${contactSection} into the email HTML after ${commentSection}
const htmlAnchor = `\${commentSection}`;
const htmlNew    = `\${commentSection}\n        \${contactSection}`;

if (email.includes(htmlAnchor) && !email.includes('${contactSection}')) {
  email = email.replace(htmlAnchor, htmlNew);
  console.log('✓ Inserted contactSection into email HTML');
} else {
  console.log('⚠ contactSection HTML insertion already done or anchor not found');
}

fs.writeFileSync(emailPath, email);
console.log('✓ email-report.js saved');

// ── 3. Deploy ──────────────────────────────────────────────────────────────

const { execSync } = require('child_process');
execSync('node deploy.js "Add optional constituent contact info to email flow"', {
  stdio: 'inherit',
  cwd: __dirname,
});
