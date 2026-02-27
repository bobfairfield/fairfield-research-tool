const { Pinecone } = require('@pinecone-database/pinecone');
require('dotenv').config({ path: '.env.local' });

async function deleteStrayVectors() {
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const index = pc.index('fairfield-civic-docs');

  console.log('Deleting all conservation-tagged vectors...');
  await index.deleteMany({
    filter: { subcategory: { '$eq': 'conservation' } }
  });
  console.log('Done. Now re-upload the 3 legitimate conservation PDFs.');
}

deleteStrayVectors().catch(console.error);
