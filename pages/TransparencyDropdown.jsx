import { useState } from 'react';

const styles = {
  wrapper: {
    marginBottom: '24px',
    fontFamily: '"Georgia", "Times New Roman", serif',
  },
  toggleButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#1a3a5c',
    color: '#e8d5a3',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 16px',
    fontSize: '14px',
    fontFamily: '"Georgia", "Times New Roman", serif',
    cursor: 'pointer',
    letterSpacing: '0.04em',
    transition: 'background-color 0.2s ease',
  },
  toggleButtonHover: {
    backgroundColor: '#0f2540',
  },
  chevron: {
    display: 'inline-block',
    transition: 'transform 0.25s ease',
    fontSize: '12px',
  },
  panel: {
    marginTop: '8px',
    border: '1px solid #c8b88a',
    borderRadius: '6px',
    backgroundColor: '#fdfaf4',
    overflow: 'hidden',
    animation: 'slideDown 0.25s ease',
  },
  header: {
    backgroundColor: '#1a3a5c',
    color: '#e8d5a3',
    padding: '16px 20px',
    borderBottom: '2px solid #c8b88a',
  },
  headerTitle: {
    margin: '0 0 4px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  },
  headerSub: {
    margin: 0,
    fontSize: '12px',
    opacity: 0.8,
    letterSpacing: '0.03em',
  },
  body: {
    padding: '20px',
  },
  section: {
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e0d5bc',
  },
  sectionLast: {
    marginBottom: 0,
    paddingBottom: 0,
    borderBottom: 'none',
  },
  sectionTitle: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#1a3a5c',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '13px',
  },
  th: {
    backgroundColor: '#1a3a5c',
    color: '#e8d5a3',
    padding: '8px 12px',
    textAlign: 'left',
    fontWeight: 'normal',
    letterSpacing: '0.04em',
    fontSize: '12px',
  },
  td: {
    padding: '8px 12px',
    borderBottom: '1px solid #e8dcc8',
    color: '#333',
    fontSize: '13px',
  },
  tdAlt: {
    backgroundColor: '#f5efe0',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#2d6a2d',
    color: '#fff',
    borderRadius: '3px',
    padding: '2px 7px',
    fontSize: '11px',
    letterSpacing: '0.03em',
  },
  list: {
    margin: '0',
    paddingLeft: '18px',
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.7',
  },
  prose: {
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.7',
    margin: '0 0 8px 0',
  },
  versionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#888',
    marginTop: '12px',
    borderTop: '1px solid #e0d5bc',
    paddingTop: '12px',
  },
  link: {
    color: '#1a3a5c',
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  notIncluded: {
    color: '#8b0000',
    fontSize: '12px',
  },
  notIncludedBadge: {
    display: 'inline-block',
    backgroundColor: '#8b0000',
    color: '#fff',
    borderRadius: '3px',
    padding: '2px 7px',
    fontSize: '11px',
  },
};

const dataSources = [
  { type: 'City Council Transcripts', source: 'YouTube archived meetings', status: 'Public' },
  { type: 'City Ordinances', source: 'Official city website', status: 'Public' },
  { type: 'Planning Documents', source: 'City planning department', status: 'Public' },
];

const notIncluded = [
  'Private citizen information or communications',
  'Confidential city business or executive sessions',
  'External databases or third-party sources',
  'Social media content or public comments',
  'Any document not explicitly approved by city government',
];

const guidelines = [
  'Cite all information with specific document sources and dates',
  'Present balanced information without political bias or advocacy',
  'Clearly distinguish between factual reporting and interpretation',
  'Acknowledge uncertainty when information is incomplete or unclear',
  'Refuse to answer questions about private individuals or confidential matters',
];

const limitations = [
  'AI systems can misinterpret context or nuance in documents',
  'Responses are only as accurate as the source documents provided',
  'Cannot provide legal advice or official city interpretations',
  'May not capture the most recent city decisions or changes',
];

export default function TransparencyDropdown() {
  const [open, setOpen] = useState(false);
  const [hovering, setHovering] = useState(false);

  return (
    <div style={styles.wrapper}>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          ...styles.toggleButton,
          ...(hovering ? styles.toggleButtonHover : {}),
        }}
        aria-expanded={open}
        aria-controls="transparency-panel"
      >
        <span>🔍</span>
        <span>AI Transparency & Data Sources</span>
        <span style={{ ...styles.chevron, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
      </button>

      {open && (
        <div id="transparency-panel" style={styles.panel} role="region" aria-label="AI Transparency Information">
          
          {/* Header */}
          <div style={styles.header}>
            <p style={styles.headerTitle}>Fairfield Civic Research Tool — AI Transparency Constitution</p>
            <p style={styles.headerSub}>Version 1.0 · February 17, 2026 · Developed by City Council Member Bob Ferguson</p>
          </div>

          <div style={styles.body}>

            {/* What's loaded */}
            <div style={styles.section}>
              <p style={styles.sectionTitle}>📄 Documents Searched</p>
              <p style={styles.prose}>
                This tool searches only official Fairfield city documents explicitly loaded by authorized developers. No external data sources or private information are included.
              </p>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Document Type</th>
                    <th style={styles.th}>Source</th>
                    <th style={styles.th}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSources.map((row, i) => (
                    <tr key={i} style={i % 2 === 1 ? { backgroundColor: '#f5efe0' } : {}}>
                      <td style={styles.td}>{row.type}</td>
                      <td style={styles.td}>{row.source}</td>
                      <td style={styles.td}><span style={styles.badge}>✅ {row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Not included */}
            <div style={styles.section}>
              <p style={styles.sectionTitle}>🚫 What We Do NOT Include</p>
              <ul style={styles.list}>
                {notIncluded.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* AI guidelines */}
            <div style={styles.section}>
              <p style={styles.sectionTitle}>🤖 AI Behavioral Guidelines</p>
              <p style={styles.prose}>
                This tool uses Claude by Anthropic under strict instructions designed to ensure accuracy, neutrality, and appropriate civic discourse:
              </p>
              <ul style={styles.list}>
                {guidelines.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Technical safeguards */}
            <div style={styles.section}>
              <p style={styles.sectionTitle}>🔒 Technical Safeguards</p>
              <ul style={styles.list}>
                <li>RAG system limits responses to loaded documents only — no live internet access during response generation</li>
                <li>Vector database search ensures relevance scoring and full source traceability</li>
                <li>All responses include source document identification and relevance scores</li>
                <li>Document loading requires authorization from City Council Member Bob Ferguson or designated partner</li>
              </ul>
            </div>

            {/* Limitations */}
            <div style={styles.section}>
              <p style={styles.sectionTitle}>⚠️ Known Limitations</p>
              <ul style={styles.list}>
                {limitations.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact & full doc */}
            <div style={styles.sectionLast}>
              <p style={styles.sectionTitle}>📬 Accountability & Contact</p>
              <p style={styles.prose}>
                Questions, concerns, or document requests: contact <strong>City Council Member Bob Ferguson</strong>.
              </p>
              <p style={styles.prose}>
                {/* Update href below once PDF is hosted in /public */}
                <a href="/AI_Transparency_Constitution.pdf" target="_blank" rel="noopener noreferrer" style={styles.link}>
                  📄 View Full AI Transparency Constitution (PDF) →
                </a>
              </p>
              <div style={styles.versionRow}>
                <span>Version 1.0</span>
                <span>Generated 2/17/2026</span>
                <span>Fairfield Civic Research Tool</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
