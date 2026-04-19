const fs = require('fs');
const path = '/Users/mac/fairfield-research-tool/pages/index.js';
let s = fs.readFileSync(path, 'utf8');

if (s.includes('handleEmailReport')) {
  console.log('✅ Already patched — no changes needed.');
  process.exit(0);
}

const newHandlers = `
  const [emailing, setEmailing] = React.useState(false);
  const [emailStatus, setEmailStatus] = React.useState('');
  const [summarizing, setSummarizing] = React.useState(false);
  const [councilSummary, setCouncilSummary] = React.useState('');

  const handleEmailReport = async () => {
    if (!result || !result.analysis) return;
    setEmailing(true);
    setEmailStatus('');
    try {
      const res = await fetch('/api/email-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, analysis: result.analysis, mode: result.mode })
      });
      const data = await res.json();
      setEmailStatus(data.success ? '✅ Sent!' : '❌ Failed');
    } catch (e) {
      setEmailStatus('❌ Error');
    }
    setEmailing(false);
    setTimeout(() => setEmailStatus(''), 4000);
  };

  const handleSummarizeCouncil = async () => {
    if (!result || !result.analysis) return;
    setSummarizing(true);
    setCouncilSummary('');
    try {
      const res = await fetch('/api/summarize-council', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, analysis: result.analysis })
      });
      const data = await res.json();
      setCouncilSummary(data.summary || '');
    } catch (e) {
      setCouncilSummary('Error generating summary.');
    }
    setSummarizing(false);
  };

`;

s = s.replace(/(\s*const handleExportWord)/, newHandlers + '$1');

const oldButtons = `                  <div style={{ marginTop:16 }}>
                    <button onClick={handleExportWord} style={{ backgroundColor:'white', color:'#374151', border:'1px solid #d1d5db', padding:'9px 14px', fontSize:12, borderRadius:8, cursor:'pointer' }}>📄 Save as Word Doc</button>
                  </div>`;

const newButtons = `                  <div style={{ marginTop:16, display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
                    <button onClick={handleExportWord} style={{ backgroundColor:'white', color:'#374151', border:'1px solid #d1d5db', padding:'9px 14px', fontSize:12, borderRadius:8, cursor:'pointer' }}>📄 Save as Word Doc</button>
                    <button onClick={handleSummarizeCouncil} disabled={summarizing} style={{ backgroundColor:'white', color:'#1a3a5c', border:'1px solid #1a3a5c', padding:'9px 14px', fontSize:12, borderRadius:8, cursor: summarizing ? 'not-allowed' : 'pointer' }}>{summarizing ? '⏳ Summarizing...' : '🏛️ Summarize for Councilman Ferguson'}</button>
                    <button onClick={handleEmailReport} disabled={emailing} style={{ backgroundColor:'white', color:'#0f766e', border:'1px solid #0f766e', padding:'9px 14px', fontSize:12, borderRadius:8, cursor: emailing ? 'not-allowed' : 'pointer' }}>{emailing ? '⏳ Sending...' : '📧 Email Me This Report'}</button>
                    {emailStatus && <span style={{ fontSize:12, color: emailStatus.startsWith('✅') ? '#0f766e' : '#dc2626' }}>{emailStatus}</span>}
                  </div>
                  {councilSummary && (
                    <div style={{ marginTop:16, backgroundColor:'#f0f4ff', border:'1px solid #c7d9fa', borderLeft:'4px solid #1a3a5c', borderRadius:8, padding:16 }}>
                      <p style={{ margin:'0 0 8px 0', fontSize:12, fontWeight:600, color:'#1a3a5c', textTransform:'uppercase', letterSpacing:1 }}>🏛️ Briefing for Councilman Ferguson</p>
                      <div style={{ fontSize:14, lineHeight:1.7, color:'#374151', whiteSpace:'pre-wrap' }}>{councilSummary}</div>
                    </div>
                  )}`;

if (!s.includes(oldButtons)) {
  console.log('❌ Could not find button target — index.js may have changed.');
  process.exit(1);
}

s = s.replace(oldButtons, newButtons);
fs.writeFileSync(path, s);

console.log('Verifying...');
console.log('handleEmailReport:', s.includes('handleEmailReport') ? '✅' : '❌');
console.log('handleSummarizeCouncil:', s.includes('handleSummarizeCouncil') ? '✅' : '❌');
console.log('Email button:', s.includes('Email Me This Report') ? '✅' : '❌');
console.log('Council button:', s.includes('Summarize for Councilman Ferguson') ? '✅' : '❌');
console.log('Council summary display:', s.includes('Briefing for Councilman Ferguson') ? '✅' : '❌');
