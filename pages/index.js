import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';

const SEARCH_EXAMPLES = [
  'What are the rules for junked or inoperable vehicles on private property?',
  "What's the process to apply for a building permit in Fairfield?",
  'What are the zoning rules for operating a home business?',
  'What services does the Fairfield Public Library offer?',
];

const RESEARCH_EXAMPLES = [
  "I'm wondering about the new development proposed near my neighborhood — what should I know and how can I get involved?",
  'What are the pros and cons of converting downtown to two-way traffic?',
  'How might the new fire station impact our property taxes?',
  'What options exist for affordable housing development in Fairfield?',
];

const KB = [
  {
    id:'k01', num:'01', label:'Government and Policy',
    rationale:'The legal and regulatory foundation of Fairfield — ordinances, zoning, city plans, financial records, and the official city website.',
    sections:[
      { title:'City of Fairfield', links:[
        { text:'City of Fairfield Website', url:'https://cityoffairfieldiowa.com' },
        { text:'City Council', url:'https://cityoffairfieldiowa.com/114/City-Council' },
        { text:'City Departments', url:'https://cityoffairfieldiowa.com/8/Departments' },
        { text:'Planning & Zoning', url:'https://cityoffairfieldiowa.com/88/Planning-Zoning' },
      ]},
      { title:'Jefferson County', links:[
        { text:'Jefferson County Government', url:'https://jeffersoncounty.iowa.gov' },
        { text:'Board of Supervisors', url:'https://jeffersoncounty.iowa.gov/supervisors/' },
        { text:'County Departments', url:'https://jeffersoncounty.iowa.gov/departments/' },
        { text:'Jefferson County Conservation', url:'https://jeffersoncountyconservation.com' },
      ]},
    ],
    dropdown:{ label:'City Council Agendas & Minutes by Year', items:[
      { text:'2025', url:'https://cityoffairfieldiowa.com/231/City-Council-Meeting-Agenda-PDF' },
      { text:'2024', url:'https://cityoffairfieldiowa.com/231/City-Council-Meeting-Agenda-PDF' },
      { text:'2023', url:'https://cityoffairfieldiowa.com/231/City-Council-Meeting-Agenda-PDF' },
      { text:'2022', url:'https://cityoffairfieldiowa.com/231/City-Council-Meeting-Agenda-PDF' },
      { text:'Full Archive', url:'https://cityoffairfieldiowa.com/ArchiveCenter/' },
    ]},
    local:true, localNote:'Indexed in Pinecone (FULL text, every section): Code of Ordinances, Title 20 Zoning Ordinance, 2020 Comprehensive Plan, WhatsthePlan engagement site, city legal documents, audit reports, budget materials, brand guidelines, City of Fairfield website. Also indexed: Jefferson County Assessor, Treasurer, Auditor, and Recorder department PDFs.'
  },
  {
    id:'k02', num:'02', label:'Economic and Community Development',
    rationale:"Organizations and plans driving Fairfield's economic growth, downtown vitality, and entrepreneurial community.",
    sections:[
      { title:'Development Organizations', links:[
        { text:'Grow Fairfield', url:'https://growfairfield.com' },
        { text:'Fairfield Area Chamber of Commerce', url:'https://www.fairfieldiowa.com' },
        { text:'Mainstreet Fairfield', url:'https://www.fairfieldiowa.com/page/Main-Street/' },
        { text:'Greater Jefferson County Foundation', url:'https://www.greaterjeffersoncountyfoundation.org' },
        { text:'Iowa Economic Development Authority', url:'https://www.iowaeda.com' },
      ]},
      { title:'Tourism and Visitor Services', links:[
        { text:'Visit Fairfield Iowa (CVB)', url:'https://www.visitfairfieldiowa.com' },
      ]},
      { title:'Agriculture and Local Economy', links:[
        { text:'ISU Extension — Jefferson County', url:'https://www.extension.iastate.edu/jefferson' },
        { text:'Jefferson County Fair', url:'https://www.jeffersoncofair.com' },
        { text:'Pathfinders RC&D', url:'https://pathfindersrcd.org' },
        { text:'Pathfinders Community Resource Guide', url:'https://pathfindersrcd.org/what-we-do/community-development/communityresourceguide/' },
        { text:'Fairfield Farmers Market', url:'https://fairfieldiowafarmersmarket.farm' },
      ]},
    ],
    local:true, localNote:'Indexed in Pinecone: Grow Fairfield website; 2024 Downtown Assessment (FULL text); Fairfield Area Chamber of Commerce website (116 pages, 325 chunks); Visit Fairfield Iowa CVB website (62 pages, 97 chunks); Greater Jefferson County Foundation (25 pages, 40 chunks); ISU Extension Jefferson County (54 pages, 87 chunks); Pathfinders RC&D (79 pages, 105 chunks); Pathfinders Community Resource Guide (322 pages, 274 chunks); Fairfield Farmers Market (9 pages, 16 chunks).'
  },
  {
    id:'k03', num:'03', label:'Education and Institutions',
    rationale:'Public and private educational institutions — major civic actors that shape workforce, culture, and community identity.',
    sections:[
      { title:'Schools and University', links:[
        { text:'Fairfield Community School District', url:'https://www.fairfieldsfuture.org' },
        { text:'Maharishi International University', url:'https://www.miu.edu' },
        { text:'Maharishi School', url:'https://www.maharishischool.org' },
        { text:'Fairfield Education Foundation', url:'https://fairfieldeducationfoundation.com' },
        { text:'ISU Extension — Jefferson County', url:'https://www.extension.iastate.edu/jefferson' },
      ]},
    ],
    local:true, localNote:'Indexed in Pinecone: Maharishi International University website (74 pages, 518 chunks); Fairfield Community School District website (surface — JS-rendered CMS, 6 chunks); Maharishi School website (3 pages, 7 chunks); Fairfield Education Foundation (9 pages, 13 chunks).'
  },
  {
    id:'k04', num:'04', label:'History, Arts and Culture',
    rationale:"Fairfield's historical record, cultural institutions, performing arts, and local media — essential context for civic identity.",
    sections:[
      { title:'History', links:[
        { text:'Jefferson County Heritage Foundation', url:'https://jeffersoncountyheritage.org' },
        { text:'Carnegie Museum', url:'https://cityoffairfieldiowa.com/101/Carnegie-Museum' },
        { text:'Maasdam Barns', url:'https://jeffersoncounty.iowa.gov/barns/' },
      ]},
      { title:'Arts, Culture and Media', links:[
        { text:'Fairfield Arts & Convention Center', url:'https://www.fairfieldacc.com' },
        { text:'Fairfield Media Center', url:'https://www.fairfieldmediacenter.com' },
        { text:'Iowa Source', url:'https://www.iowasource.com' },
        { text:'Iowa Dance Collective', url:'https://iowadancecollective.com' },
        { text:'Fairfield Cultural District', url:'http://www.fairfieldculturaldistrict.org' },
        { text:'Fairfield First Fridays', url:'https://fairfieldfirstfridays.org' },
        { text:'ICON — Iowa Contemporary Art', url:'https://www.icon-art.org' },
        { text:'Wege Center for the Arts', url:'https://www.wegecenter.org' },
        { text:'Kufner Art Gallery', url:'https://www.kufnerart.com' },
      ]},
    ],
    local:true, localNote:'Indexed in Pinecone: Iowa Dance Collective (126 chunks); Iowa Source newspaper (76 pages, 217 chunks; 2012–2026); Fairfield Media Center website (14 pages, 30 chunks); Fairfield Cultural Alliance website (48 pages, 138 chunks); ICON — Iowa Contemporary Art (23 pages, 54 chunks); Wege Center for the Arts (30 pages, 34 chunks); Kufner Art Gallery (22 pages, 24 chunks).'
  },
  {
    id:'k05', num:'05', label:'Community Services and Environment',
    rationale:"Organizations serving residents' daily needs — library, health, food security, youth sports, faith communities, and conservation.",
    sections:[
      { title:'Library and Health', links:[
        { text:'Fairfield Public Library', url:'https://fairfieldpubliclibrary.org' },
        { text:'Jefferson County Health Center', url:'https://www.jeffersoncountyhealthcenter.org' },
        { text:'Optimae LifeServices', url:'https://www.optimaelifeservices.com' },
        { text:'Iowa DHS — Jefferson County', url:'https://hhs.iowa.gov/locations/jefferson-county-dhs' },
      ]},
      { title:'Human Services and Food Security', links:[
        { text:'Carry On Bags', url:'https://www.carryonbags.org' },
        { text:'Fairfield Habitat for Humanity', url:'https://www.fairfieldhabitat.org' },
      ]},
      { title:'Youth Sports', links:[
        { text:'Fairfield National Little League', url:'https://www.fnll.org' },
        { text:'Fairfield Atlantic Little League', url:'https://www.fairfieldatlanticlittleleague.org' },
        { text:'Jefferson County Little League', url:'https://www.jeffersoncountylittleleague.com' },
      ]},
      { title:'Faith and Community', links:[
        { text:'First United Methodist Church', url:'https://www.fairfieldmethodistchurch.org' },
        { text:'Fairfield Friends Church', url:'https://www.fairfieldfriendschurch.org' },
      ]},
      { title:'Environment and Conservation', links:[
        { text:'Jefferson County Conservation', url:'https://jeffersoncountyconservation.com' },
        { text:'Jefferson County Trails Council', url:'https://www.jeffersoncountytrails.org' },
        { text:'Iowa DNR', url:'https://www.iowadnr.gov' },
      ]},
    ],
    local:true, localNote:'Indexed in Pinecone: Fairfield Public Library website; Jefferson County Health Center (58 pages, 97 chunks); Carry On Bags (6 pages, 8 chunks); Little League orgs (surface); First United Methodist Church (37 pages, 26 chunks); Fairfield Friends Church (7 pages, 7 chunks); Jefferson County Conservation (78 pages, 92 chunks); Jefferson County Trails Council (91 pages, 187 chunks).'
  },
  {
    id:'k06', num:'06', label:'Housing, Planning and Research',
    rationale:'Studies, frameworks, and reference data that inform how Fairfield thinks about growth, housing, and its future.',
    sections:[
      { title:'Planning Frameworks', links:[
        { text:'Intelligent Community Forum — Fairfield Profile', url:'https://www.intelligentcommunity.org/fairfield_jefferson_county_iowa' },
        { text:'Strong Towns', url:'https://www.strongtowns.org' },
        { text:'Iowa League of Cities', url:'https://www.iowaleague.org' },
        { text:'National League of Cities', url:'https://www.nlc.org' },
      ]},
      { title:'Reference and Data', links:[
        { text:'U.S. Census — Fairfield Iowa', url:'https://data.census.gov/profile/Fairfield_city,_Iowa?g=160XX00US1922335' },
        { text:'HUD (Housing & Urban Development)', url:'https://www.hud.gov' },
        { text:'Iowa Economic Development Authority', url:'https://www.iowaeda.com' },
      ]},
    ],
    local:true, localNote:'Indexed in Pinecone (FULL text): 2023 Fairfield Housing Study (indexed twice for redundancy); 2024 Downtown Assessment.'
  },
];

function KBTree() {
  const [open, setOpen] = useState({});
  const [drop, setDrop] = useState({});
  const tog = id => setOpen(p => ({ ...p, [id]: !p[id] }));
  const togD = id => setDrop(p => ({ ...p, [id]: !p[id] }));
  return (
    <div>
      <p style={{ fontSize:13, color:'#555', lineHeight:1.6, marginBottom:16 }}>Six categories covering Fairfield and Jefferson County — green badges show categories with documents indexed in Pinecone. Click any category to expand its sources and live links.</p>
      {KB.map(cat => (
        <div key={cat.id} style={{ marginBottom:4 }}>
          <button onClick={() => tog(cat.id)} style={{ width:'100%', textAlign:'left', background: open[cat.id] ? '#eef4ff' : 'white', border:'1px solid '+(open[cat.id] ? '#c7d9fa' : '#e2e8f0'), padding:'12px 14px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between', borderRadius: open[cat.id] ? '8px 8px 0 0' : 8 }}>
            <span style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
              <span style={{ fontSize:12, fontWeight:700, color:'white', backgroundColor:'#3B4FC4', borderRadius:4, padding:'2px 7px', fontFamily:'monospace' }}>{cat.num}</span>
              <span style={{ fontSize:14, fontWeight:600, color:'#1a1a2e' }}>{cat.label}</span>
              {cat.local && <span style={{ fontSize:11, backgroundColor:'#f0fdf4', color:'#15803d', border:'1px solid #bbf7d0', borderRadius:4, padding:'1px 6px' }}>+ Local files</span>}
            </span>
            <span style={{ color:'#3B4FC4', fontSize:14, flexShrink:0 }}>{open[cat.id] ? '▲' : '▼'}</span>
          </button>
          {open[cat.id] && (
            <div style={{ backgroundColor:'#f8f9ff', border:'1px solid #c7d9fa', borderTop:'none', borderRadius:'0 0 8px 8px', padding:'14px 16px 16px' }}>
              <p style={{ fontSize:13, color:'#555', fontStyle:'italic', margin:'0 0 14px 0' }}>{cat.rationale}</p>
              {cat.local && <div style={{ backgroundColor:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:6, padding:'8px 12px', marginBottom:14, fontSize:13, color:'#15803d' }}>📁 {cat.localNote}</div>}
              {cat.sections && cat.sections.map((sec, si) => (
                <div key={si} style={{ marginBottom:12 }}>
                  <p style={{ fontSize:11, fontWeight:700, textTransform:'uppercase', letterSpacing:1, color:'#888', margin:'0 0 8px 0' }}>{sec.title}</p>
                  {sec.links.map((lnk, li) => (
                    <a key={li} href={lnk.url} target="_blank" rel="noopener noreferrer" style={{ display:'block', fontSize:13, color:'#3B4FC4', textDecoration:'none', padding:'5px 0', borderBottom: li < sec.links.length-1 ? '1px solid #e8ecff' : 'none' }}>🔗 {lnk.text}</a>
                  ))}
                </div>
              ))}
              {cat.dropdown && (
                <div style={{ marginTop:4 }}>
                  <button onClick={() => togD(cat.id)} style={{ width:'100%', textAlign:'left', backgroundColor:'#eef4ff', border:'1px solid #c7d9fa', borderRadius:6, padding:'9px 12px', cursor:'pointer', fontSize:13, fontWeight:600, color:'#1E3A8A', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span>📅 {cat.dropdown.label}</span>
                    <span>{drop[cat.id] ? '▲' : '▼'}</span>
                  </button>
                  {drop[cat.id] && (
                    <div style={{ backgroundColor:'white', border:'1px solid #c7d9fa', borderTop:'none', borderRadius:'0 0 6px 6px', padding:'8px 12px' }}>
                      {cat.dropdown.items.map((item, i) => (
                        <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={{ display:'block', fontSize:13, color:'#3B4FC4', textDecoration:'none', padding:'5px 0', borderBottom: i < cat.dropdown.items.length-1 ? '1px solid #f0f0f0' : 'none' }}>📄 {item.text}</a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function FollowUp({ onSubmit, appMode }) {
  const [val, setVal] = useState('');
  const handle = (e) => {
    e.preventDefault();
    if (!val.trim()) return;
    onSubmit(val);
    setVal('');
  };
  const placeholder = appMode === 'search'
    ? 'Ask a follow-up about this answer, or look up something related...'
    : 'e.g. Can you explain the tax impact in more detail? / What would Strong Towns say about this? / What have other Iowa cities done?';
  return (
    <form onSubmit={handle}>
      <textarea value={val} onChange={e => setVal(e.target.value)}
        placeholder={placeholder}
        rows={3}
        style={{ width:'100%', padding:12, fontSize:13, border:'1px solid #c7d9fa', borderRadius:8, resize:'vertical', boxSizing:'border-box', outline:'none', color:'#374151', fontFamily:'inherit', lineHeight:1.6, backgroundColor:'white' }} />
      <button type="submit" style={{ marginTop:10, backgroundColor: appMode === 'search' ? '#0f766e' : '#3b4fc4', color:'white', border:'none', padding:'11px 22px', fontSize:14, fontWeight:600, borderRadius:8, cursor:'pointer' }}>
        {appMode === 'search' ? 'Search Again →' : 'Ask Follow-Up →'}
      </button>
    </form>
  );
}

// File helper functions
function getFileIcon(fileType) {
  if (fileType === 'pdf') return '📄';
  if (fileType === 'image') return '🖼️';
  if (fileType === 'spreadsheet') return '📊';
  return '📝';
}

function getFileType(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith('.pdf')) return 'pdf';
  if (name.match(/\.(jpg|jpeg|png|gif|webp)$/)) return 'image';
  if (name.match(/\.(xlsx|xls)$/)) return 'spreadsheet';
  return 'text';
}

function getMimeType(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith('.png')) return 'image/png';
  if (name.match(/\.(jpg|jpeg)$/)) return 'image/jpeg';
  if (name.endsWith('.gif')) return 'image/gif';
  if (name.endsWith('.webp')) return 'image/webp';
  return file.type || 'application/octet-stream';
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

async function readSpreadsheetAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const wb = XLSX.read(e.target.result, { type: 'array' });
        const sheets = wb.SheetNames.map(name => {
          const csv = XLSX.utils.sheet_to_csv(wb.Sheets[name]);
          return `Sheet: ${name}\n${csv}`;
        });
        resolve(sheets.join('\n\n'));
      } catch (err) { reject(err); }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export default function Home() {
  const [appMode, setAppMode] = useState(null);
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [improving, setImproving] = useState(false);
  const [history, setHistory] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showConstitution, setShowConstitution] = useState(false);
  const [showKB, setShowKB] = useState(false);
  const [conTab, setConTab] = useState('articles');
  const [emailing, setEmailing] = useState(false);
  const [emailStatus, setEmailStatus] = useState('');
  const [constituentComment, setConstituentComment] = useState('');
  const [summarizing, setSummarizing] = useState(false);
  const [councilSummary, setCouncilSummary] = useState('');
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [fileError, setFileError] = useState('');
  const [selfEmail, setSelfEmail] = useState('');
  const [showSelfEmailForm, setShowSelfEmailForm] = useState(false);
  const [selfEmailing, setSelfEmailing] = useState(false);
  const [selfEmailStatus, setSelfEmailStatus] = useState('');
  const fileInputRef = useRef(null);

  const isSearch = appMode === 'search';
  const accentColor = isSearch ? '#0f766e' : '#3b4fc4';
  const accentLight = isSearch ? '#f0fdfa' : '#eef4ff';
  const accentBorder = isSearch ? '#99f6e4' : '#c7d9fa';
  const examples = isSearch ? SEARCH_EXAMPLES : RESEARCH_EXAMPLES;
  const apiMode = isSearch ? 'search' : 'research';

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    setFileError('');
    if (attachedFiles.length + files.length > 5) {
      setFileError('Maximum 5 files allowed.');
      return;
    }
    const tooBig = files.find(f => f.size > 10 * 1024 * 1024);
    if (tooBig) {
      setFileError(`${tooBig.name} exceeds the 10MB limit.`);
      return;
    }
    const processed = await Promise.all(files.map(async (file) => {
      const fileType = getFileType(file);
      let data, mimeType;
      if (fileType === 'pdf' || fileType === 'image') {
        data = await readFileAsBase64(file);
        mimeType = getMimeType(file);
      } else if (fileType === 'spreadsheet') {
        data = await readSpreadsheetAsText(file);
        mimeType = null;
      } else {
        data = await readFileAsText(file);
        mimeType = null;
      }
      return { name: file.name, fileType, data, mimeType };
    }));
    setAttachedFiles(prev => [...prev, ...processed]);
    e.target.value = '';
  };

  const removeFile = (idx) => setAttachedFiles(prev => prev.filter((_, i) => i !== idx));

  const callAPI = async (q, mode) => {
    const body = { question: q, mode, history };
    if (attachedFiles.length > 0 && mode === 'research') body.files = attachedFiles;
    const r = await fetch('/api/research', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(body) });
    return r.json();
  };

  const handleFollowUp = async (q) => {
    setLoading(true); setResult(null);
    try {
      const data = await callAPI(q, apiMode);
      setResult(data);
      if (!data.error) {
        setHistory(prev => [...prev, { role:'user', content:q }, { role:'assistant', content:data.analysis }]);
        setSessions(prev => [{ question:q, analysis:data.analysis, date: new Date().toLocaleString(), mode: appMode }, ...prev]);
      }
    } catch { setResult({ error:'Failed to get response. Please try again.' }); }
    finally { setLoading(false); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    setLoading(true); setResult(null);
    try {
      const data = await callAPI(question, apiMode);
      setResult(data);
      if (!data.error) {
        setHistory(prev => [...prev, { role:'user', content:question }, { role:'assistant', content:data.analysis }]);
        setSessions(prev => [{ question, analysis:data.analysis, date: new Date().toLocaleString(), mode: appMode }, ...prev]);
        setAttachedFiles([]);
      }
    } catch { setResult({ error:'Failed to get response. Please try again.' }); }
    finally { setLoading(false); }
  };

  const handleImprove = async () => {
    if (!question.trim()) return;
    setImproving(true);
    try { const data = await callAPI(question, 'improve'); if (data.analysis) setQuestion(data.analysis); } catch {}
    finally { setImproving(false); }
  };

  const handleEmailReport = async () => {
    if (!result || !result.analysis) return;
    setEmailing(true); setEmailStatus('');
    try {
      let summaryText = councilSummary;
      if (!summaryText) {
        const sr = await fetch('/api/summarize-council', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ question, analysis: result.analysis }) });
        const sd = await sr.json();
        summaryText = sd.summary || '';
        if (summaryText) setCouncilSummary(summaryText);
      }
      const res = await fetch('/api/email-report', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ question, analysis: result.analysis, mode: result.mode, comment: constituentComment, summary: summaryText }) });
      const data = await res.json();
      setEmailStatus(data.success ? '✅ Sent!' : '❌ Failed');
    } catch { setEmailStatus('❌ Error'); }
    setEmailing(false);
    setTimeout(() => setEmailStatus(''), 4000);
  };

  const handleSelfEmail = async () => {
    setSelfEmailing(true); setSelfEmailStatus('');
    try {
      const res = await fetch('/api/email-report', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ question, analysis: result.analysis, mode: result.mode, userEmail: selfEmail.trim() }) });
      const data = await res.json();
      setSelfEmailStatus(data.success ? '✅ Sent to ' + selfEmail : '❌ Failed');
    } catch { setSelfEmailStatus('❌ Error'); }
    setSelfEmailing(false);
    setTimeout(() => { setSelfEmailStatus(''); setShowSelfEmailForm(false); }, 4000);
  };

  const handleSummarizeCouncil = async () => {
    if (!result || !result.analysis) return;
    setSummarizing(true); setCouncilSummary('');
    try {
      const res = await fetch('/api/summarize-council', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify({ question, analysis: result.analysis }) });
      const data = await res.json();
      setCouncilSummary(data.summary || '');
    } catch { setCouncilSummary('Error generating summary.'); }
    setSummarizing(false);
  };

  const handleExportWord = () => {
    if (!result || result.error) return;
    const bom = '\uFEFF';
    const modeLabel = isSearch ? 'Search Result' : 'Civic Research Analysis';
    const html = '<html><head><meta charset="UTF-8"></head><body>'
      + '<h1 style="color:#1a1a2e;font-family:Arial,sans-serif;">Fairfield & Jefferson County Civic Intelligence Hub</h1>'
      + '<p style="color:#888;font-size:12px;">Generated: ' + new Date().toLocaleString() + ' | Mode: ' + modeLabel + '</p>'
      + '<h2 style="font-family:Arial,sans-serif;">Question</h2><p>' + question + '</p>'
      + '<h2 style="font-family:Arial,sans-serif;">' + modeLabel + '</h2><p style="line-height:1.7;">' + result.analysis.replace(/\n/g,'<br>') + '</p>'
      + '<hr><p style="color:#888;font-size:11px;">Fairfield & Jefferson County Civic Intelligence Hub — City Council Member Bob Ferguson</p></body></html>';
    const blob = new Blob([bom + html], { type:'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'Fairfield_Jefferson_Research.doc'; a.click();
    URL.revokeObjectURL(url);
  };

  const resetMode = () => { setAppMode(null); setQuestion(''); setResult(null); setHistory([]); setAttachedFiles([]); setFileError(''); setCouncilSummary(''); setConstituentComment(''); };

  const Modal = ({ onClose, children }) => (
    <div style={{ position:'fixed', top:0, left:0, right:0, bottom:0, backgroundColor:'rgba(0,0,0,0.5)', zIndex:1000, overflowY:'auto', padding:'40px 16px' }}>
      <div style={{ backgroundColor:'white', borderRadius:12, maxWidth:700, margin:'0 auto', padding:'36px 40px', position:'relative' }}>
        <button onClick={onClose} style={{ position:'absolute', top:16, right:16, backgroundColor:'#f1f5f9', border:'none', borderRadius:'50%', width:32, height:32, fontSize:16, cursor:'pointer', color:'#555' }}>x</button>
        {children}
        <button onClick={onClose} style={{ marginTop:24, width:'100%', backgroundColor:'#3B4FC4', color:'white', border:'none', padding:'12px', fontSize:14, fontWeight:600, borderRadius:8, cursor:'pointer' }}>Close</button>
      </div>
    </div>
  );

  // LANDING
  if (!appMode) {
    return (
      <div style={{ backgroundColor:'#f8f9fa', minHeight:'100vh', fontFamily:'system-ui, -apple-system, sans-serif' }}>
        <div style={{ maxWidth:680, margin:'0 auto', padding:'48px 24px 80px' }}>

          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:12 }}>
            <div style={{ width:40, height:40, borderRadius:'50%', backgroundColor:'#eef0fd', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <span style={{ fontSize:22 }}>💬</span>
            </div>
            <h1 style={{ fontSize:28, fontWeight:700, color:'#1a1a2e', margin:0 }}>Fairfield & Jefferson County Civic Intelligence Hub</h1>
          </div>

          <p style={{ color:'#555', fontSize:15, lineHeight:1.6, marginBottom:32 }}>A community knowledge tool built for Fairfield residents. Choose what you need:</p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:32 }}>
            <button onClick={() => setAppMode('search')} style={{ backgroundColor:'white', border:'2px solid #99f6e4', borderRadius:14, padding:'28px 20px', cursor:'pointer', textAlign:'left', transition:'all 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor='#0f766e'}
              onMouseLeave={e => e.currentTarget.style.borderColor='#99f6e4'}>
              <div style={{ fontSize:36, marginBottom:12 }}>🔎</div>
              <p style={{ margin:'0 0 6px 0', fontSize:18, fontWeight:700, color:'#0f766e' }}>Search Fairfield</p>
              <p style={{ margin:0, fontSize:13, color:'#555', lineHeight:1.6 }}>Fast, sourced answers from city ordinances, codes, zoning, services, and local organizations. Get the facts.</p>
              <div style={{ marginTop:14, display:'flex', flexWrap:'wrap', gap:6 }}>
                {['Ordinances','Permits','Services','Zoning'].map(t => (
                  <span key={t} style={{ fontSize:11, backgroundColor:'#f0fdfa', color:'#0f766e', border:'1px solid #99f6e4', borderRadius:4, padding:'2px 8px' }}>{t}</span>
                ))}
              </div>
            </button>

            <button onClick={() => setAppMode('research')} style={{ backgroundColor:'white', border:'2px solid #c7d9fa', borderRadius:14, padding:'28px 20px', cursor:'pointer', textAlign:'left', transition:'all 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor='#3b4fc4'}
              onMouseLeave={e => e.currentTarget.style.borderColor='#c7d9fa'}>
              <div style={{ fontSize:36, marginBottom:12 }}>🧠</div>
              <p style={{ margin:'0 0 6px 0', fontSize:18, fontWeight:700, color:'#3b4fc4' }}>Civic Research</p>
              <p style={{ margin:0, fontSize:13, color:'#555', lineHeight:1.6 }}>Deep analysis of policy questions, tradeoffs, and community decisions. Stress-test ideas, explore perspectives.</p>
              <div style={{ marginTop:14, display:'flex', flexWrap:'wrap', gap:6 }}>
                {['Policy','Tradeoffs','Planning','Ideas'].map(t => (
                  <span key={t} style={{ fontSize:11, backgroundColor:'#eef4ff', color:'#3b4fc4', border:'1px solid #c7d9fa', borderRadius:4, padding:'2px 8px' }}>{t}</span>
                ))}
              </div>
            </button>
          </div>

          {/* Council Meetings Archive Callout */}
          <div style={{ display:'flex', alignItems:'center', gap:14, backgroundColor:'#f0f4ff', border:'1px solid #d0d9f5', borderLeft:'4px solid #3b82f6', borderRadius:10, padding:'14px 18px', marginBottom:20, cursor:'pointer' }} onClick={() => window.location.href='/meetings'}>
            <span style={{ fontSize:22, flexShrink:0 }}>🎬</span>
            <div style={{ flex:1 }}>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:3 }}>
                <span style={{ backgroundColor:'#dbeafe', color:'#1e40af', fontSize:10, fontWeight:800, letterSpacing:'.08em', textTransform:'uppercase', padding:'2px 7px', borderRadius:6 }}>Archive</span>
                <span style={{ fontSize:14, fontWeight:700, color:'#1a1a2e' }}>14 Years of City Council Meetings — Fully Searchable</span>
              </div>
              <p style={{ margin:0, fontSize:12, color:'#555', lineHeight:1.5 }}>Every word from 338 meetings (2012–2026) is indexed in this tool. Ask anything about past council discussions, or browse the full archive.</p>
            </div>
            <span style={{ fontSize:12, fontWeight:600, color:'#3b82f6', whiteSpace:'nowrap', flexShrink:0 }}>Browse →</span>
          </div>

          <div style={{ display:'flex', gap:10, marginBottom:24 }}>
            <button onClick={() => { setShowConstitution(true); setConTab('articles'); }}
              style={{ flex:1, backgroundColor:'white', border:'1px solid #e2e8f0', borderRadius:10, padding:'12px 16px', cursor:'pointer', textAlign:'left', display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ fontSize:18 }}>📜</span>
              <div>
                <p style={{ margin:'0 0 1px 0', fontSize:13, fontWeight:600, color:'#1a1a2e' }}>Read the Constitution</p>
                <p style={{ margin:0, fontSize:11, color:'#888' }}>Purpose, sources, and how this tool works</p>
              </div>
            </button>
            <button onClick={() => setShowKB(true)}
              style={{ flex:1, backgroundColor:'white', border:'1px solid #e2e8f0', borderRadius:10, padding:'12px 16px', cursor:'pointer', textAlign:'left', display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ fontSize:18 }}>🗂</span>
              <div>
                <p style={{ margin:'0 0 1px 0', fontSize:13, fontWeight:600, color:'#1a1a2e' }}>Knowledge Base</p>
                <p style={{ margin:0, fontSize:11, color:'#888' }}>6 categories — 5 with Pinecone-indexed documents</p>
              </div>
            </button>
          </div>

          {sessions.length > 0 && (
            <button onClick={() => setShowHistory(v => !v)} style={{ width:'100%', backgroundColor:'white', border:'1px solid #e2e8f0', borderRadius:10, padding:'12px 16px', cursor:'pointer', textAlign:'left', display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ fontSize:18 }}>🗂</span>
              <span style={{ fontSize:13, fontWeight:600, color:'#374151' }}>Session History ({sessions.length})</span>
            </button>
          )}

          {showHistory && sessions.length > 0 && (
            <div style={{ backgroundColor:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:20, marginTop:10 }}>
              {sessions.map((s, i) => (
                <div key={i} style={{ borderBottom: i < sessions.length-1 ? '1px solid #f0f0f0' : 'none', paddingBottom:12, marginBottom:12 }}>
                  <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                    <span style={{ fontSize:11, backgroundColor: s.mode === 'search' ? '#f0fdfa' : '#eef4ff', color: s.mode === 'search' ? '#0f766e' : '#3b4fc4', border:'1px solid', borderColor: s.mode === 'search' ? '#99f6e4' : '#c7d9fa', borderRadius:4, padding:'1px 6px' }}>{s.mode === 'search' ? '🔎 Search' : '🧠 Research'}</span>
                    <span style={{ fontSize:11, color:'#888' }}>{s.date}</span>
                  </div>
                  <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:13, margin:'0 0 4px 0' }}>{s.question}</p>
                  <p style={{ fontSize:12, color:'#555', lineHeight:1.5, margin:0 }}>{s.analysis.slice(0,150)}{s.analysis.length > 150 ? '...' : ''}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer style={{ borderTop:'1px solid #e2e8f0', backgroundColor:'white', textAlign:'center', padding:'20px 24px' }}>
          <p style={{ margin:'0 0 6px 0', fontSize:13, color:'#555' }}>Powered by Claude AI | For City Council At-Large Member Bob Ferguson</p>
          <a href="https://www.fairfieldiowa.com" target="_blank" rel="noopener noreferrer" style={{ fontSize:13, color:'#3b4fc4', textDecoration:'none' }}>Visit Official Fairfield City Website ↗</a>
        </footer>

        {showKB && (
          <Modal onClose={() => setShowKB(false)}>
            <p style={{ margin:'0 0 4px 0', fontSize:11, fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#3B4FC4' }}>Source Library</p>
            <h2 style={{ margin:'0 0 16px 0', fontSize:22, fontWeight:700, color:'#1a1a2e' }}>Knowledge Base</h2>
            <hr style={{ border:'none', borderTop:'2px solid #3B4FC4', marginBottom:20 }} />
            <KBTree />
          </Modal>
        )}

        {showConstitution && (
          <Modal onClose={() => setShowConstitution(false)}>
            <p style={{ margin:'0 0 4px 0', fontSize:11, fontWeight:700, letterSpacing:2, textTransform:'uppercase', color:'#3B4FC4' }}>Governing Document</p>
            <h2 style={{ margin:'0 0 4px 0', fontSize:22, fontWeight:700, color:'#1a1a2e' }}>Fairfield & Jefferson County Civic Intelligence Hub</h2>
            <p style={{ margin:'0 0 20px 0', fontSize:14, color:'#3B4FC4', fontWeight:600 }}>Constitution and Knowledge Base Disclosure — February 2026</p>
            <div style={{ display:'flex', gap:8, marginBottom:24 }}>
              {['articles','sources'].map(tab => (
                <button key={tab} onClick={() => setConTab(tab)} style={{ flex:1, padding:'10px', fontSize:13, fontWeight:600, borderRadius:8, cursor:'pointer', border: conTab === tab ? 'none' : '1px solid #d1d5db', backgroundColor: conTab === tab ? '#3B4FC4' : 'white', color: conTab === tab ? 'white' : '#374151' }}>
                  {tab === 'articles' ? 'Articles I–VI' : 'Knowledge Base'}
                </button>
              ))}
            </div>
            <hr style={{ border:'none', borderTop:'2px solid #3B4FC4', marginBottom:20 }} />
            {conTab === 'articles' && (
              <div>
                {[
                  { title:'Article I: Purpose and Origin', paras:[
                    'The Fairfield & Jefferson County Civic Intelligence Hub is a public service created by City Council At-Large Member Bob Ferguson for the benefit of all Fairfield and Jefferson County residents. It is offered freely to any citizen who wishes to look up local information, explore civic questions, research local issues, or evaluate policies and ideas.',
                    "This tool is not a political instrument and does not promote the personal policy positions of Council Member Ferguson. It is designed to make Fairfield's civic information more accessible and our civic conversation more informed.",
                  ]},
                  { title:'Article II: Two Functions', paras:[
                    "Search Fairfield gives residents fast, sourced answers drawn from a continuously growing index of Fairfield-specific information — city ordinances, municipal codes, zoning regulations, planning documents, audit reports, and the public-facing websites of local organizations, businesses, and institutions.",
                    "Civic Research is a space for deeper inquiry. It's designed for residents, advocates, and officials who want to think rigorously about local issues — stress-testing a proposal, exploring tradeoffs in a policy decision, or understanding how Fairfield's situation compares to best practices elsewhere.",
                  ]},
                  { title:'Article III: Analytical Engine', paras:[
                    'This tool is powered by Claude, an AI assistant developed by Anthropic — a public benefit corporation legally structured to prioritize the long-term benefit of humanity over commercial profit.',
                    'Claude is designed to be free of political bias, does not favor any viewpoint or party, and does not reflect the personal views of Council Member Ferguson. On any civic question, Claude presents multiple perspectives including competing interests, stakeholder viewpoints, and relevant tradeoffs.',
                  ]},
                  { title:'Article IV: How the Knowledge Base Is Built', paras:[
                    'The knowledge base is built from two types of sources. Official city and county documents — ordinances, codes, zoning regulations, planning studies, budget reports, and council minutes — form the foundation. These are supplemented by the publicly available websites of local organizations.',
                    'Sources are not simply retrieved and quoted — they inform Claude\'s synthesis, enabling responses that connect information across documents in ways no single source could provide.',
                  ]},
                  { title:'Article V: Privacy', paras:[
                    'Your questions and analysis results are stored only on your device during your session. Council Member Bob Ferguson cannot see what you ask or what analysis you receive.',
                  ]},
                  { title:'Article VI: Limitations and Disclosures', bullets:[
                    'This tool does not represent the official position of the City of Fairfield, any city department, or any elected body.',
                    'Analyses are AI-assisted and for informational purposes only. They do not constitute legal, financial, or professional advice.',
                    'Users are encouraged to verify information with city staff or qualified professionals before making decisions.',
                    'The knowledge base reflects sources available at time of development and may not capture the most recent changes.',
                  ]},
                ].map((sec, i) => (
                  <div key={i}>
                    <h3 style={{ fontSize:15, fontWeight:700, color:'#1E3A8A', margin:'0 0 10px 0' }}>{sec.title}</h3>
                    {sec.paras && sec.paras.map((p, pi) => <p key={pi} style={{ fontSize:14, color:'#374151', lineHeight:1.75, margin:'0 0 10px 0' }}>{p}</p>)}
                    {sec.bullets && <ul style={{ paddingLeft:24, margin:'0 0 16px 0' }}>{sec.bullets.map((b, bi) => <li key={bi} style={{ fontSize:14, color:'#374151', lineHeight:1.75, marginBottom:6 }}>{b}</li>)}</ul>}
                    <hr style={{ border:'none', borderTop:'1px solid #e2e8f0', margin:'16px 0' }} />
                  </div>
                ))}
                <div style={{ backgroundColor:'#eef4ff', border:'1px solid #c7d9fa', borderRadius:8, padding:'14px 18px', textAlign:'center' }}>
                  <p style={{ margin:'0 0 2px 0', fontSize:13, fontWeight:700, color:'#1E3A8A' }}>Fairfield & Jefferson County Civic Intelligence Hub</p>
                  <p style={{ margin:'0 0 2px 0', fontSize:12, color:'#555', fontStyle:'italic' }}>A public service of City Council At-Large Member Bob Ferguson</p>
                  <p style={{ margin:0, fontSize:12, color:'#3B4FC4' }}>civicintelligencehub.com</p>
                </div>
              </div>
            )}
            {conTab === 'sources' && <KBTree />}
          </Modal>
        )}
      </div>
    );
  }

  // ACTIVE MODE
  return (
    <div style={{ backgroundColor: isSearch ? '#f0fdfa' : '#f8f9fa', minHeight:'100vh', fontFamily:'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth:680, margin:'0 auto', padding:'32px 24px 80px' }}>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ fontSize:24 }}>{isSearch ? '🔎' : '🧠'}</span>
            <div>
              <h1 style={{ fontSize:22, fontWeight:700, color:'#1a1a2e', margin:0 }}>{isSearch ? 'Search Fairfield' : 'Civic Research'}</h1>
              <p style={{ margin:0, fontSize:12, color: accentColor }}>{isSearch ? 'Fast answers from local documents and sources' : 'Deep analysis · multiple perspectives · stress-test ideas'}</p>
            </div>
          </div>
          <button onClick={resetMode} style={{ backgroundColor:'white', border:'1px solid #e2e8f0', borderRadius:8, padding:'8px 14px', fontSize:13, cursor:'pointer', color:'#555' }}>← Switch Mode</button>
        </div>

        {!isSearch && (
          <div style={{ backgroundColor:'#eef4ff', border:'1px solid #c7d9fa', borderRadius:10, padding:'12px 16px', marginBottom:16 }}>
            <p style={{ margin:0, fontSize:13, color:'#1e3a8a', lineHeight:1.6 }}>Powered by <strong>Claude</strong> (Anthropic) — designed to be <strong>free of political bias</strong>. Every issue gets <strong>multiple perspectives</strong> so you can form your own opinion. Does not reflect the personal views of Council Member Ferguson.</p>
          </div>
        )}

        {!isSearch && (
          <div style={{ backgroundColor:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:10, padding:'10px 16px', marginBottom:20, display:'flex', gap:10, alignItems:'center' }}>
            <span style={{ fontSize:16, flexShrink:0 }}>🛡️</span>
            <p style={{ margin:0, fontSize:13, color:'#14532d' }}>Your questions are stored only on your device. Council Member Ferguson cannot see what you ask.</p>
          </div>
        )}

        <div style={{ marginBottom:20 }}>
          <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:13, margin:'0 0 8px 0' }}>Example {isSearch ? 'searches' : 'questions'}:</p>
          <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
            {examples.map((ex, i) => (
              <button key={i} onClick={() => setQuestion(ex)} style={{ textAlign:'left', backgroundColor:'white', border:'1px solid', borderColor: accentBorder, borderRadius:8, padding:'9px 14px', fontSize:13, color:'#374151', cursor:'pointer', fontFamily:'inherit', lineHeight:1.5 }}>{ex}</button>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor:'white', border:'1px solid', borderColor: accentBorder, borderRadius:12, padding:'20px', marginBottom:20 }}>
          {!isSearch && (
            <div style={{ marginBottom:10 }}>
              <button onClick={handleImprove} disabled={improving} style={{ backgroundColor:'#f8f9fa', color:'#374151', border:'1px solid #d1d5db', padding:'7px 14px', fontSize:12, borderRadius:8, cursor: improving ? 'not-allowed' : 'pointer', fontFamily:'inherit' }}>
                {improving ? '✨ Improving...' : '✨ Sharpen My Question'}
              </button>
              <span style={{ fontSize:11, color:'#888', marginLeft:8 }}>Type first, then click to refine</span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)}
              placeholder={isSearch ? 'What do you want to look up? (ordinance, service, rule, contact...)' : 'What civic question or policy issue would you like to explore?'}
              rows={isSearch ? 3 : 5}
              style={{ width:'100%', padding:12, fontSize:14, border:'1px solid #d1d5db', borderRadius:8, resize:'vertical', minHeight: isSearch ? 80 : 120, boxSizing:'border-box', outline:'none', color:'#374151', fontFamily:'inherit', lineHeight:1.6 }} />

            {/* File attachment — Civic Research only */}
            {!isSearch && (
              <div style={{ marginTop:10 }}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  multiple
                  accept=".pdf,.png,.jpg,.jpeg,.gif,.webp,.txt,.csv,.xlsx,.xls"
                  style={{ display:'none' }}
                />
                <button type="button" onClick={() => fileInputRef.current && fileInputRef.current.click()}
                  style={{ backgroundColor:'#f8f9fa', color:'#374151', border:'1px solid #d1d5db', padding:'6px 12px', fontSize:12, borderRadius:8, cursor:'pointer', fontFamily:'inherit' }}>
                  📎 Add Files
                </button>
                <span style={{ fontSize:11, color:'#888', marginLeft:8 }}>PDF, image, spreadsheet, or text (up to 5 files, 10MB each)</span>
                {fileError && <p style={{ fontSize:12, color:'#dc2626', margin:'6px 0 0 0' }}>{fileError}</p>}
                {attachedFiles.length > 0 && (
                  <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:8 }}>
                    {attachedFiles.map((f, i) => (
                      <span key={i} style={{ display:'inline-flex', alignItems:'center', gap:4, backgroundColor:'#eef4ff', border:'1px solid #c7d9fa', borderRadius:6, padding:'4px 8px', fontSize:12, color:'#1e3a8a' }}>
                        {getFileIcon(f.fileType)} {f.name}
                        <button type="button" onClick={() => removeFile(i)} style={{ background:'none', border:'none', cursor:'pointer', color:'#888', fontSize:14, lineHeight:1, padding:'0 0 0 2px' }}>×</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div style={{ display:'flex', gap:10, marginTop:12, flexWrap:'wrap' }}>
              <button type="submit" disabled={loading} style={{ flex:1, minWidth:180, backgroundColor: loading ? '#aaa' : accentColor, color:'white', border:'none', padding:'12px 20px', fontSize:14, fontWeight:600, borderRadius:8, cursor: loading ? 'not-allowed' : 'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                <span>{isSearch ? '🔎' : '🧠'}</span>
                <span>{loading ? (isSearch ? 'Searching...' : 'Researching...') : (isSearch ? 'Search Fairfield' : 'Research This Issue')}</span>
              </button>
              <button type="button" onClick={() => setShowHistory(v => !v)} style={{ backgroundColor:'white', color:'#374151', border:'1px solid #d1d5db', padding:'12px 16px', fontSize:13, borderRadius:8, cursor:'pointer' }}>
                History ({sessions.length})
              </button>
            </div>
            {result && <button type="button" onClick={() => { setHistory([]); setQuestion(''); setResult(null); setAttachedFiles([]); setFileError(''); setCouncilSummary(''); setConstituentComment(''); }} style={{ marginTop:8, backgroundColor:'white', color:'#888', border:'1px solid #e2e8f0', padding:'8px 14px', fontSize:12, borderRadius:8, cursor:'pointer' }}>🔄 Clear</button>}
          </form>
        </div>

        {loading && (
          <div style={{ backgroundColor:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:24, textAlign:'center', color:'#555', fontSize:15 }}>
            {isSearch ? 'Searching local documents...' : 'Researching your question...'}
          </div>
        )}

        {result && !loading && (
          <div style={{ marginBottom:16 }}>
            <div style={{ backgroundColor:'white', border:'1px solid #e2e8f0', borderLeft:`4px solid ${accentColor}`, borderRadius:12, padding:24, marginBottom:10 }}>
              <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:12, textTransform:'uppercase', letterSpacing:1, margin:'0 0 12px 0' }}>{isSearch ? 'Search Result' : 'Analysis'}</p>
              {result.error ? <p style={{ color:'#dc2626', fontSize:15 }}>{result.error}</p> : (
                <>
                  <div style={{ color:'#374151', lineHeight:1.8, fontSize:15, whiteSpace:'pre-wrap' }}>{result.analysis}</div>
                  {isSearch && result.sources && result.sources.length > 0 && (
                    <div style={{ marginTop:16, paddingTop:12, borderTop:'1px solid #f0f0f0' }}>
                      <p style={{ fontSize:12, color:'#888', margin:'0 0 6px 0', fontWeight:600 }}>SOURCES</p>
                      {result.sources.map((s, i) => <p key={i} style={{ fontSize:12, color:'#555', margin:'2px 0' }}>📄 {s}</p>)}
                    </div>
                  )}
                  <div style={{ marginTop:16, display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
                    <textarea
                      value={constituentComment}
                      onChange={e => setConstituentComment(e.target.value)}
                      placeholder="Add a note for Councilman Ferguson (optional) — describe your concern or idea..."
                      style={{ width:'100%', padding:'10px 12px', fontSize:13, borderRadius:8, border:'1px solid #d1d5db', color:'#374151', resize:'vertical', minHeight:72, marginBottom:10, fontFamily:'Georgia,serif', boxSizing:'border-box' }}
                    />
                    <button onClick={handleExportWord} style={{ backgroundColor:'white', color:'#374151', border:'1px solid #d1d5db', padding:'9px 14px', fontSize:12, borderRadius:8, cursor:'pointer' }}>📄 Save as Word Doc</button>
                    <button onClick={handleSummarizeCouncil} disabled={summarizing} style={{ backgroundColor:'white', color:'#1a3a5c', border:'1px solid #1a3a5c', padding:'9px 14px', fontSize:12, borderRadius:8, cursor: summarizing ? 'not-allowed' : 'pointer' }}>{summarizing ? '⏳ Summarizing...' : '🏛️ Summarize for Councilman Ferguson'}</button>
                    <button onClick={handleEmailReport} disabled={emailing} style={{ backgroundColor:'white', color:'#1a3a5c', border:'1px solid #1a3a5c', padding:'9px 14px', fontSize:12, borderRadius:8, cursor: emailing ? 'not-allowed' : 'pointer' }}>{emailing ? '⏳ Sending...' : '📧 Email Councilman Ferguson'}</button>
                    <button onClick={() => setShowSelfEmailForm(v => !v)} style={{ backgroundColor:'white', color:'#0f766e', border:'1px solid #0f766e', padding:'9px 14px', fontSize:12, borderRadius:8, cursor:'pointer' }}>📬 Email This to Myself</button>
                    {emailStatus && <span style={{ fontSize:12, color: emailStatus.startsWith('✅') ? '#0f766e' : '#dc2626' }}>{emailStatus}</span>}
                    {showSelfEmailForm && (
                      <div style={{ width:'100%', backgroundColor:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:8, padding:'12px 14px', marginTop:4 }}>
                        <p style={{ margin:'0 0 8px 0', fontSize:12, fontWeight:600, color:'#14532d' }}>Send a copy of this analysis to your email:</p>
                        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                          <input type="email" value={selfEmail} onChange={e => setSelfEmail(e.target.value)} placeholder="your@email.com"
                            style={{ flex:1, minWidth:180, padding:'8px 10px', fontSize:13, border:'1px solid #86efac', borderRadius:6, outline:'none', fontFamily:'inherit' }} />
                          <button onClick={handleSelfEmail} disabled={selfEmailing || selfEmail.trim() === ''}
                            style={{ backgroundColor:'#0f766e', color:'white', border:'none', padding:'8px 14px', fontSize:12, fontWeight:600, borderRadius:6, cursor: selfEmailing || selfEmail.trim() === '' ? 'not-allowed' : 'pointer' }}>
                            {selfEmailing ? '⏳ Sending...' : 'Send →'}
                          </button>
                        </div>
                        {selfEmailStatus && <p style={{ margin:'6px 0 0 0', fontSize:12, color: selfEmailStatus.startsWith('✅') ? '#0f766e' : '#dc2626' }}>{selfEmailStatus}</p>}
                      </div>
                    )}
                  </div>
                  {councilSummary && (
                    <div style={{ marginTop:16, backgroundColor:'#f0f4ff', border:'1px solid #c7d9fa', borderLeft:'4px solid #1a3a5c', borderRadius:8, padding:16 }}>
                      <p style={{ margin:'0 0 8px 0', fontSize:12, fontWeight:600, color:'#1a3a5c', textTransform:'uppercase', letterSpacing:1 }}>🏛️ Briefing for Councilman Ferguson</p>
                      <div style={{ fontSize:14, lineHeight:1.7, color:'#374151', whiteSpace:'pre-wrap' }}>{councilSummary}</div>
                    </div>
                  )}
                </>
              )}
            </div>

            {!result.error && (
              <div style={{ backgroundColor:'white', border:'1px solid', borderColor: accentBorder, borderRadius:12, padding:18, marginBottom:10 }}>
                <p style={{ margin:'0 0 10px 0', fontSize:14, fontWeight:600, color: accentColor }}>
                  {isSearch ? 'Need more detail or a related lookup?' : 'Want to go deeper?'}
                </p>
                <FollowUp onSubmit={handleFollowUp} appMode={appMode} />
              </div>
            )}

            <button onClick={() => { setHistory([]); setQuestion(''); setResult(null); setAttachedFiles([]); setFileError(''); setCouncilSummary(''); setConstituentComment(''); }} style={{ backgroundColor:'white', color:'#999', border:'1px solid #e2e8f0', padding:'7px 12px', fontSize:12, borderRadius:8, cursor:'pointer' }}>
              🔄 Start over
            </button>
          </div>
        )}

        {showHistory && (
          <div style={{ backgroundColor:'white', border:'1px solid #e2e8f0', borderRadius:12, padding:20, marginBottom:16 }}>
            <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:12, textTransform:'uppercase', letterSpacing:1, margin:'0 0 12px 0' }}>Session History</p>
            {sessions.length === 0 && <p style={{ color:'#888', fontSize:13, textAlign:'center' }}>No history yet.</p>}
            {sessions.map((s, i) => (
              <div key={i} style={{ borderBottom: i < sessions.length-1 ? '1px solid #f0f0f0' : 'none', paddingBottom:12, marginBottom:12 }}>
                <div style={{ display:'flex', gap:8, marginBottom:4 }}>
                  <span style={{ fontSize:11, backgroundColor: s.mode === 'search' ? '#f0fdfa' : '#eef4ff', color: s.mode === 'search' ? '#0f766e' : '#3b4fc4', borderRadius:4, padding:'1px 6px', border:'1px solid', borderColor: s.mode === 'search' ? '#99f6e4' : '#c7d9fa' }}>{s.mode === 'search' ? '🔎' : '🧠'}</span>
                  <span style={{ fontSize:11, color:'#888' }}>{s.date}</span>
                </div>
                <p style={{ fontWeight:600, color:'#1a1a2e', fontSize:13, margin:'0 0 4px 0' }}>{s.question}</p>
                <p style={{ fontSize:12, color:'#555', lineHeight:1.5, margin:0 }}>{s.analysis.slice(0,180)}{s.analysis.length > 180 ? '...' : ''}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer style={{ borderTop:'1px solid #e2e8f0', backgroundColor:'white', textAlign:'center', padding:'18px 24px' }}>
        <p style={{ margin:'0 0 4px 0', fontSize:12, color:'#888' }}>Fairfield & Jefferson County Civic Intelligence Hub · Powered by Claude AI</p>
        <p style={{ margin:'0 0 4px 0', fontSize:12, color:'#888' }}>For City Council At-Large Member Bob Ferguson</p>
        <a href="https://www.fairfieldiowa.com" target="_blank" rel="noopener noreferrer" style={{ fontSize:12, color:'#3b4fc4', textDecoration:'none' }}>Visit Official Fairfield City Website ↗</a>
      </footer>
    </div>
  );
}
