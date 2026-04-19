const fs = require('fs');
const path = require('path');
const file = path.join(process.env.HOME, 'fairfield-research-tool/pages/api/research.js');
let src = fs.readFileSync(file, 'utf8');

const exportLine = 'export default async function handler';
if (src.includes('export const config')) {
  console.log('✓ Body size config already present — no change needed.');
  process.exit(0);
}

const insert = `export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

`;

src = src.replace(exportLine, insert + exportLine);
fs.writeFileSync(file, src);
console.log('✓ Body size limit set to 10mb in research.js');
console.log('\nDeploy:\n  cd ~/fairfield-research-tool && npx vercel --prod --yes');
