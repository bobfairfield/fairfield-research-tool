// diagnose-fairfieldhistoryseries.js
// Run from ~/fairfield-research-tool with: node diagnose-fairfieldhistoryseries.js

require('dotenv').config({ path: '.env.local' });
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAI = require('openai');

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.index('fairfield-civic-docs');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function embed(text) {
  const r = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return r.data[0].embedding;
}

async function main() {
  console.log('='.repeat(70));
  console.log('DIAGNOSTIC: fairfieldhistoryseries.com vectors in Pinecone');
  console.log('='.repeat(70));

  // Test 1: Total vectors from this source
  console.log('\n--- TEST 1: Count of vectors with source=fairfieldhistoryseries.com ---');
  const dummyVector = new Array(1536).fill(0);
  dummyVector[0] = 1;
  const allFromSource = await index.query({
    vector: dummyVector,
    topK: 100,
    filter: { source: 'fairfieldhistoryseries.com' },
    includeMetadata: true,
  });
  console.log(`Found ${allFromSource.matches.length} vectors from this source.`);
  if (allFromSource.matches.length === 0) {
    console.log('PROBLEM: No vectors at all from this source. Check SOURCE_CATALOG mapping.');
    console.log('Trying alternate source names...');
    for (const alt of ['fairfield-history-series', 'fairfieldhistoryseries', 'Fairfield History Series']) {
      const r = await index.query({
        vector: dummyVector, topK: 5,
        filter: { source: alt }, includeMetadata: true,
      });
      console.log(`  source="${alt}": ${r.matches.length} vectors`);
    }
  } else {
    console.log('\nFirst 3 chunks (sample of what is indexed):');
    allFromSource.matches.slice(0, 3).forEach((m, i) => {
      console.log(`\n  [${i + 1}] score=${m.score.toFixed(3)}`);
      console.log(`      text: ${(m.metadata?.text || '').slice(0, 250)}...`);
    });
  }

  // Test 2: Search for award-related content within this source
  console.log('\n\n--- TEST 2: Semantic search for "awards Emmy" within this source ---');
  const awardsVec = await embed('Fairfield History Series awards Emmy Iowa Motion Picture Association');
  const awardsHits = await index.query({
    vector: awardsVec,
    topK: 10,
    filter: { source: 'fairfieldhistoryseries.com' },
    includeMetadata: true,
  });
  console.log(`Top 10 results scored:`);
  awardsHits.matches.forEach((m, i) => {
    const text = (m.metadata?.text || '').replace(/\s+/g, ' ');
    const hasEmmy = /emmy|award|impa|motion picture/i.test(text);
    console.log(`\n  [${i + 1}] score=${m.score.toFixed(3)} ${hasEmmy ? '<<< CONTAINS AWARD WORDS' : ''}`);
    console.log(`      ${text.slice(0, 300)}`);
  });

  // Test 3: Search across ALL sources for awards mentions
  console.log('\n\n--- TEST 3: Search ALL sources for Fairfield History Series awards ---');
  const allHits = await index.query({
    vector: awardsVec,
    topK: 15,
    includeMetadata: true,
  });
  console.log(`Top 15 results across the whole index:`);
  allHits.matches.forEach((m, i) => {
    const text = (m.metadata?.text || '').replace(/\s+/g, ' ');
    const hasEmmy = /emmy|award|impa/i.test(text);
    console.log(`\n  [${i + 1}] score=${m.score.toFixed(3)} source=${m.metadata?.source} ${hasEmmy ? '<<< CONTAINS AWARD WORDS' : ''}`);
    console.log(`      ${text.slice(0, 250)}`);
  });

  // Test 4: Direct keyword grep across all chunks from this source
  console.log('\n\n--- TEST 4: Keyword grep within fairfieldhistoryseries.com chunks ---');
  const keywords = ['emmy', 'award', 'impa', 'motion picture', 'recognition', 'won'];
  const counts = Object.fromEntries(keywords.map(k => [k, 0]));
  const samples = Object.fromEntries(keywords.map(k => [k, []]));
  for (const m of allFromSource.matches) {
    const text = (m.metadata?.text || '').toLowerCase();
    for (const k of keywords) {
      if (text.includes(k)) {
        counts[k]++;
        if (samples[k].length < 2) {
          samples[k].push((m.metadata.text || '').slice(0, 200));
        }
      }
    }
  }
  for (const k of keywords) {
    console.log(`\n  "${k}": ${counts[k]} chunks contain this word`);
    samples[k].forEach((s, i) => console.log(`    sample ${i + 1}: ${s.replace(/\s+/g, ' ')}`));
  }

  console.log('\n' + '='.repeat(70));
  console.log('INTERPRETATION GUIDE:');
  console.log('  - If TEST 1 finds 0 vectors → source name mismatch (data exists under different label)');
  console.log('  - If TEST 1 finds vectors but TEST 4 shows 0 award-word chunks → scraper did not capture awards content');
  console.log('  - If TEST 4 finds award words but TEST 2 didn\'t surface them → retrieval/ranking issue');
  console.log('  - If everything looks fine → problem is in api/research.js system prompt');
  console.log('='.repeat(70));
}

main().catch(e => { console.error(e); process.exit(1); });
