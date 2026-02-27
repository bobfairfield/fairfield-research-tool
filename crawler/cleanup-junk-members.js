/**
 * cleanup-junk-members.js (v2 - structure-aware)
 * Inspects manifest structure, then removes junk entries
 */

const fs = require('fs');
const path = require('path');
const { Pinecone } = require('@pinecone-database/pinecone');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const MANIFEST_PATH = path.join(__dirname, 'capture-manifest.json');

const JUNK_NAMES = [
  'Werner Elmker Audio-Visual Studio',
  'powered by',
  'Nominate winners for the Annual Award Banquet!Click Here'
];

async function cleanup() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error('Manifest not found at:', MANIFEST_PATH);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  
  // Show top-level structure
  console.log('Manifest top-level keys:', Object.keys(manifest));
  
  const allKeys = Object.keys(manifest);
  if (allKeys.length > 0) {
    const sample = allKeys[0];
    console.log(`\nSample entry key: "${sample}"`);
    console.log('Sample entry value:', JSON.stringify(manifest[sample], null, 2).slice(0, 500));
  }

  // Search for junk entries regardless of structure
  const junkKeys = [];
  for (const key of Object.keys(manifest)) {
    const entry = manifest[key];
    const entryStr = JSON.stringify(entry);
    for (const junk of JUNK_NAMES) {
      if (key.includes(junk) || entryStr.includes(junk)) {
        junkKeys.push(key);
        break;
      }
    }
  }

  console.log(`\nJunk entries found: ${junkKeys.length}`);
  junkKeys.forEach(k => console.log(' -', k));

  if (junkKeys.length === 0) {
    console.log('\nNo junk found at top level. Full manifest keys:');
    Object.keys(manifest).forEach(k => console.log(' -', k));
    return;
  }

  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index(process.env.PINECONE_INDEX || 'fairfield-civic-docs');

  let totalDeleted = 0;
  for (const key of junkKeys) {
    const entry = manifest[key];
    const vectorIds = entry.pinecone_ids || entry.vector_ids || [];
    
    console.log(`\nRemoving: "${key}" (${vectorIds.length} vectors)`);
    
    if (vectorIds.length > 0) {
      try {
        await index.deleteMany(vectorIds);
        totalDeleted += vectorIds.length;
        console.log(`  ✓ Deleted ${vectorIds.length} vectors`);
      } catch (e) {
        console.log(`  ⚠ Error: ${e.message}`);
      }
    }
    
    delete manifest[key];
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\n✓ Done. Removed ${junkKeys.length} entries, deleted ${totalDeleted} vectors.`);
  console.log(`Remaining entries: ${Object.keys(manifest).length}`);
}

cleanup().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
