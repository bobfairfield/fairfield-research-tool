// generate-wiki.js — Karpathy-style wiki compiler for Fairfield Civic Intelligence Hub
// Usage: node generate-wiki.js
// Output: wiki/ directory of compiled .md files

require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME || 'fairfield-civic-docs';
const PINECONE_HOST = `https://fairfield-civic-docs-${process.env.PINECONE_HOST_SUFFIX || '4ac61o3'}.svc.aped-4627-b74a.pinecone.io`;

const WIKI_PAGES = [
  {
    file: 'policy-issues/walton-lake-bridge.md',
    title: 'Walton Lake Golf Cart Bridge',
    queries: [
      'Walton Lake golf cart bridge construction controversy',
      'Walton Lake bridge litigation legal dispute',
      'Walton Lake bridge city council vote decision',
      'Walton Lake bridge cost funding',
    ],
    prompt: `You are compiling a wiki page for the Fairfield Civic Intelligence Hub knowledge base.
Using the source passages below, write a comprehensive, well-structured markdown wiki page about the Walton Lake Golf Cart Bridge project in Fairfield, Iowa.

Include these sections:
## Overview
## Timeline of Key Events
## Council Decisions & Votes
## Controversy & Community Response
## Legal Issues
## Current Status
## Key People & Organizations Involved
## Open Questions

Be factual and specific. Include dates, dollar amounts, vote counts, and names where available.
Cite sources inline as [Source: title/url].
End with a ## Sources section listing all sources used.`
  },
  {
    file: 'policy-issues/housing.md',
    title: 'Housing in Fairfield, Iowa',
    queries: [
      'Fairfield housing study affordable housing shortage',
      'Sunrise Trail housing development Kading',
      'Fairfield housing TIF incentive multifamily',
      'Fairfield rental vacancy rates housing costs',
    ],
    prompt: `You are compiling a wiki page for the Fairfield Civic Intelligence Hub knowledge base.
Using the source passages below, write a comprehensive, well-structured markdown wiki page about housing in Fairfield, Iowa.

Include these sections:
## Overview
## Key Findings from the 2023 Housing Study
## Current Projects & Developments
## Affordability & Vacancy Data
## City Policy & Incentives
## Challenges & Unresolved Issues
## Key People & Organizations
## Open Questions

Be factual and specific. Include dates, dollar amounts, and names where available.
Cite sources inline as [Source: title/url].
End with a ## Sources section listing all sources used.`
  },
  {
    file: 'economic-development/traction-thursdays.md',
    title: 'Traction Thursdays — Fairfield CoLab',
    queries: [
      'Traction Thursday Fairfield CoLab entrepreneur presentation',
      'Traction Thursday business pitch local economy',
      'Fairfield CoLab weekly entrepreneurship gathering',
      'Traction Thursday speaker business development',
    ],
    prompt: `You are compiling a wiki page for the Fairfield Civic Intelligence Hub knowledge base.
Using the source passages below, write a comprehensive, well-structured markdown wiki page about Traction Thursdays at the Fairfield CoLab.

Include these sections:
## Overview
## Format & Structure
## Notable Speakers & Businesses Featured
## Recurring Themes
## Impact on Local Economy
## Connection to Broader Ecosystem (FEDA, Grow Fairfield, NewBoCo)
## Open Questions

Be factual and specific. Include business names, speaker names, and dates where available.
Cite sources inline as [Source: title/url].
End with a ## Sources section listing all sources used.`
  },
];

async function embed(text) {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({ model: 'text-embedding-3-small', input: text })
  });
  const data = await res.json();
  return data.data[0].embedding;
}

async function queryPinecone(vector, topK = 40) {
  const res = await fetch(`${PINECONE_HOST}/query`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Api-Key': PINECONE_API_KEY },
    body: JSON.stringify({ vector, topK, includeMetadata: true })
  });
  const data = await res.json();
  return data.matches || [];
}

async function compilePage(page) {
  console.log(`\n📄 Compiling: ${page.title}`);

  // Gather chunks from all queries
  const allChunks = new Map();
  for (const q of page.queries) {
    console.log(`  🔍 Querying: "${q}"`);
    const vector = await embed(q);
    const matches = await queryPinecone(vector, 40);
    for (const m of matches) {
      if (m.score > 0.35 && m.metadata?.text) {
        allChunks.set(m.id, {
          text: m.metadata.text,
          source: m.metadata.source || 'unknown',
          title: m.metadata.title || '',
          score: m.score,
        });
      }
    }
  }

  console.log(`  ✅ ${allChunks.size} unique chunks gathered`);

  // Sort by score and take top 60
  const sorted = [...allChunks.values()].sort((a, b) => b.score - a.score).slice(0, 60);
  const context = sorted.map(c =>
    `[Source: ${c.source}${c.title ? ' — ' + c.title : ''}]\n${c.text}`
  ).join('\n\n---\n\n');

  // Compile with Claude
  console.log(`  🤖 Compiling with Claude...`);
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-opus-4-6',
      max_tokens: 4000,
      system: page.prompt,
      messages: [{ role: 'user', content: `SOURCE PASSAGES:\n\n${context}\n\nNow compile the wiki page.` }]
    })
  });

  const data = await res.json();
  if (!data.content) { console.error("Claude error:", JSON.stringify(data)); throw new Error("No content"); }
  const content = data.content[0].text;

  // Add metadata header
  const now = new Date().toISOString().split('T')[0];
  const fullPage = `---
title: ${page.title}
compiled: ${now}
sources_queried: ${page.queries.length}
chunks_used: ${sorted.length}
---

# ${page.title}

> *This page was compiled by Claude from ${sorted.length} source passages in the Fairfield Civic Intelligence Hub knowledge base. Last updated: ${now}.*

${content}
`;

  // Write file
  const filePath = path.join(process.cwd(), 'wiki', page.file);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, fullPage);
  console.log(`  💾 Saved: wiki/${page.file}`);
  return { file: page.file, chunks: sorted.length };
}

async function main() {
  console.log('🏛️  Fairfield Civic Wiki Compiler');
  console.log('=====================================');

  fs.mkdirSync(path.join(process.cwd(), 'wiki'), { recursive: true });

  const results = [];
  for (const page of WIKI_PAGES) {
    const result = await compilePage(page);
    results.push(result);
  }

  // Generate INDEX.md
  const indexContent = `# Fairfield Civic Wiki — Index

*Auto-compiled from Pinecone knowledge base. Last updated: ${new Date().toISOString().split('T')[0]}*

## Pages

${results.map(r => `- [${r.file}](${r.file}) — ${r.chunks} source chunks`).join('\n')}

## About This Wiki

This wiki is compiled by Claude using the Karpathy LLM Knowledge Base pattern.
Raw sources live in Pinecone (17,713 vectors). This wiki synthesizes them into
persistent, human-readable markdown that grows richer over time.

Each page can be regenerated by running: \`node generate-wiki.js\`
`;

  fs.writeFileSync(path.join(process.cwd(), 'wiki', 'INDEX.md'), indexContent);

  console.log('\n✅ Wiki compiled!');
  console.log('📁 Output: wiki/');
  results.forEach(r => console.log(`   - ${r.file} (${r.chunks} chunks)`));
}

main().catch(console.error);
