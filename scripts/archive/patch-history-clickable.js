/**
 * patch-history-clickable.js
 * Makes session history items clickable — clicking any past result
 * restores it as the active view with all action buttons live.
 *
 * Run from: ~/fairfield-research-tool/
 */

const fs   = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const indexPath = path.join(__dirname, 'pages', 'index.js');
let src = fs.readFileSync(indexPath, 'utf8');

// ── 1. Add restoreSession helper after handleExportWord ──────────────────────
const restoreAnchor = `  const handleExportWord = async () => {`;
const restoreNew = `  const restoreSession = (s) => {
    setAppMode(s.mode);
    setQuestion(s.question);
    setResult({ analysis: s.analysis, sources: s.sources || [], error: null });
    setShowHistory(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExportWord = async () => {`;

if (!src.includes(restoreAnchor)) {
  console.error('FAIL: handleExportWord anchor not found');
  process.exit(1);
}
src = src.replace(restoreAnchor, restoreNew);
console.log('✓ Added restoreSession helper');

// ── 2. Make sidebar history items clickable (lines ~610) ─────────────────────
const sidebarItemOld = `              {sessions.map((s, i) => (
                <div key={i} style={{ borderBottom: i < sessions.length-1 ? '1px solid #f0f0f0' : 'none', paddingBottom:12, marginBottom:12 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                    <span style={{ fontSize:11, backgroundColor: s.mode === 'search' ? '#f0fdfa' : '#eef4ff', color: s.mode === 'search' ? '#0f766e' : '#3b4fc4', border:'1px solid', borderColor: s.mode === 'search' ? '#99f6e4' : '#c7d9fa', borderRadius:4, padding:'1px 6px' }}>{s.mode === 'search' ? '🔎 Search' : '🧠 Research'}</span>
                    <span style={{ fontSize:11, color:'#888' }}>{s.date}</span>
                  </div>
                  <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:13, margin:'0 0 4px 0' }}>{s.question}</p>
                  <p style={{ fontSize:12, color:'#555', lineHeight:1.5, margin:0 }}>{s.analysis.slice(0,150)}{s.analysis.length > 150 ? '...' : ''}</p>
                </div>
              ))}`;

const sidebarItemNew = `              {sessions.map((s, i) => (
                <div key={i} onClick={() => restoreSession(s)} style={{ borderBottom: i < sessions.length-1 ? '1px solid #f0f0f0' : 'none', paddingBottom:12, marginBottom:12, cursor:'pointer', borderRadius:6, padding:'8px', margin:'-4px', transition:'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor='#f8faff'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                    <span style={{ fontSize:11, backgroundColor: s.mode === 'search' ? '#f0fdfa' : '#eef4ff', color: s.mode === 'search' ? '#0f766e' : '#3b4fc4', border:'1px solid', borderColor: s.mode === 'search' ? '#99f6e4' : '#c7d9fa', borderRadius:4, padding:'1px 6px' }}>{s.mode === 'search' ? '🔎 Search' : '🧠 Research'}</span>
                    <span style={{ fontSize:11, color:'#888' }}>{s.date}</span>
                    <span style={{ fontSize:10, color:'#aaa', marginLeft:'auto' }}>click to restore →</span>
                  </div>
                  <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:13, margin:'0 0 4px 0' }}>{s.question}</p>
                  <p style={{ fontSize:12, color:'#555', lineHeight:1.5, margin:0 }}>{s.analysis.slice(0,150)}{s.analysis.length > 150 ? '...' : ''}</p>
                </div>
              ))}`;

if (!src.includes(sidebarItemOld)) {
  console.error('FAIL: sidebar history item anchor not found');
  process.exit(1);
}
src = src.replace(sidebarItemOld, sidebarItemNew);
console.log('✓ Made sidebar history items clickable');

// ── 3. Make main history items clickable (lines ~874) ────────────────────────
const mainItemOld = `            {sessions.map((s, i) => (
              <div key={i} style={{ borderBottom: i < sessions.length-1 ? '1px solid #f0f0f0' : 'none', paddingBottom:12, marginBottom:12 }}>
                <div style={{ display:'flex', gap:8, marginBottom:4 }}>
                  <span style={{ fontSize:11, backgroundColor: s.mode === 'search' ? '#f0fdfa' : '#eef4ff', color: s.mode === 'search' ? '#0f766e' : '#3b4fc4', borderRadius:4, padding:'1px 6px', border:'1px solid', borderColor: s.mode === 'search' ? '#99f6e4' : '#c7d9fa' }}>{s.mode === 'search' ? '🔎' : '🧠'}</span>
                  <span style={{ fontSize:11, color:'#888' }}>{s.date}</span>
                </div>
                <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:13, margin:'0 0 4px 0' }}>{s.question}</p>
                <p style={{ fontSize:12, color:'#555', lineHeight:1.5, margin:0 }}>{s.analysis.slice(0,180)}{s.analysis.length > 180 ? '...' : ''}</p>
              </div>
            ))}`;

const mainItemNew = `            {sessions.map((s, i) => (
              <div key={i} onClick={() => restoreSession(s)} style={{ borderBottom: i < sessions.length-1 ? '1px solid #f0f0f0' : 'none', paddingBottom:12, marginBottom:12, cursor:'pointer', borderRadius:6, padding:'8px', margin:'-4px', transition:'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor='#f8faff'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor='transparent'}>
                <div style={{ display:'flex', gap:8, marginBottom:4, alignItems:'center' }}>
                  <span style={{ fontSize:11, backgroundColor: s.mode === 'search' ? '#f0fdfa' : '#eef4ff', color: s.mode === 'search' ? '#0f766e' : '#3b4fc4', borderRadius:4, padding:'1px 6px', border:'1px solid', borderColor: s.mode === 'search' ? '#99f6e4' : '#c7d9fa' }}>{s.mode === 'search' ? '🔎' : '🧠'}</span>
                  <span style={{ fontSize:11, color:'#888' }}>{s.date}</span>
                  <span style={{ fontSize:10, color:'#aaa', marginLeft:'auto' }}>click to restore →</span>
                </div>
                <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:13, margin:'0 0 4px 0' }}>{s.question}</p>
                <p style={{ fontSize:12, color:'#555', lineHeight:1.5, margin:0 }}>{s.analysis.slice(0,180)}{s.analysis.length > 180 ? '...' : ''}</p>
              </div>
            ))}`;

if (!src.includes(mainItemOld)) {
  console.error('FAIL: main history item anchor not found');
  process.exit(1);
}
src = src.replace(mainItemOld, mainItemNew);
console.log('✓ Made main history items clickable');

// ── 4. Save sources into session history so they restore correctly ────────────
// Currently sessions store {question, analysis, date, mode} but not sources.
// Patch both setSessions calls to also store sources.
const setSessionsOld1 = `setSessions(prev => [{ question:q, analysis:data.analysis, date: new Date().toLocaleString(), mode: appMode }, ...prev]);`;
const setSessionsNew1 = `setSessions(prev => [{ question:q, analysis:data.analysis, sources: data.sources || [], date: new Date().toLocaleString(), mode: appMode }, ...prev]);`;

const setSessionsOld2 = `setSessions(prev => [{ question, analysis:data.analysis, date: new Date().toLocaleString(), mode: appMode }, ...prev]);`;
const setSessionsNew2 = `setSessions(prev => [{ question, analysis:data.analysis, sources: data.sources || [], date: new Date().toLocaleString(), mode: appMode }, ...prev]);`;

if (!src.includes(setSessionsOld1) || !src.includes(setSessionsOld2)) {
  console.error('FAIL: setSessions anchor(s) not found');
  process.exit(1);
}
src = src.replace(setSessionsOld1, setSessionsNew1);
src = src.replace(setSessionsOld2, setSessionsNew2);
console.log('✓ Added sources to session history storage');

// ── 5. Write and deploy ───────────────────────────────────────────────────────
fs.writeFileSync(indexPath, src);
console.log('✓ index.js saved\n');

execSync('node deploy.js "Make history items clickable — restore full result with all action buttons"', {
  stdio: 'inherit',
  cwd: __dirname,
});
