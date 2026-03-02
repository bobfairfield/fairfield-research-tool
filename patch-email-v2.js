const fs = require('fs');
let code = fs.readFileSync('pages/index.js', 'utf8');

// 1. Add constituentComment state
code = code.replace(
  "const [emailStatus, setEmailStatus] = useState('');",
  "const [emailStatus, setEmailStatus] = useState('');\n  const [constituentComment, setConstituentComment] = useState('');"
);

// 2. Replace handleEmailReport
code = code.replace(
  `const handleEmailReport = async () => {
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
  };`,
  `const handleEmailReport = async () => {
    if (!result || !result.analysis) return;
    setEmailing(true);
    setEmailStatus('');
    try {
      let summaryText = councilSummary;
      if (!summaryText) {
        const sr = await fetch('/api/summarize-council', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question, analysis: result.analysis })
        });
        const sd = await sr.json();
        summaryText = sd.summary || '';
        if (summaryText) setCouncilSummary(summaryText);
      }
      const res = await fetch('/api/email-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, analysis: result.analysis, mode: result.mode, comment: constituentComment, summary: summaryText })
      });
      const data = await res.json();
      setEmailStatus(data.success ? '✅ Sent!' : '❌ Failed');
    } catch (e) {
      setEmailStatus('❌ Error');
    }
    setEmailing(false);
    setTimeout(() => setEmailStatus(''), 4000);
  };`
);

// 3. Add comment textarea before the buttons row
code = code.replace(
  `<button onClick={handleExportWord}`,
  `<textarea
                      value={constituentComment}
                      onChange={e => setConstituentComment(e.target.value)}
                      placeholder="Add a note for Councilman Ferguson (optional) — describe your concern or idea..."
                      style={{ width:'100%', padding:'10px 12px', fontSize:13, borderRadius:8, border:'1px solid #d1d5db', color:'#374151', resize:'vertical', minHeight:72, marginBottom:10, fontFamily:'Georgia,serif', boxSizing:'border-box' }}
                    /><button onClick={handleExportWord}`
);

fs.writeFileSync('pages/index.js', code);
console.log('Verifying...');
console.log('constituentComment state:', code.includes('constituentComment') ? '✅' : '❌');
console.log('Auto-summary in handleEmailReport:', code.includes('summaryText = councilSummary') ? '✅' : '❌');
console.log('Comment textarea:', code.includes('describe your concern or idea') ? '✅' : '❌');
