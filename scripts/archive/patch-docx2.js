// patch-docx2.js
// Run from ~/fairfield-research-tool/
// Fixes the variable name (result → result.analysis) and updates generateDocx.js
// to include the question and mode label in the Word doc

const fs = require('fs');
const path = require('path');

// ── 1. Fix the call in index.js ──────────────────────────────────────────────
const indexPath = path.join(__dirname, 'pages/index.js');
let src = fs.readFileSync(indexPath, 'utf8');

const oldCall = `await downloadAsDocx('Fairfield / Jefferson County Civic Research', result);`;
const newCall = `await downloadAsDocx(question, isSearch, result.analysis);`;

if (!src.includes(oldCall)) {
  console.log('⚠️  Call line not found as expected — check index.js manually.');
} else {
  src = src.replace(oldCall, newCall);
  fs.writeFileSync(indexPath, src, 'utf8');
  console.log('✓  index.js call updated to pass question + mode + result.analysis');
}

// ── 2. Rewrite generateDocx.js with full structure ───────────────────────────
const utilPath = path.join(__dirname, 'lib/generateDocx.js');

const utilContent = `// lib/generateDocx.js
// Generates a real .docx binary from civic hub analysis results

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  BorderStyle,
} from 'docx';

export async function downloadAsDocx(question, isSearch, analysisText) {
  const modeLabel = isSearch ? 'Search Result' : 'Civic Research Analysis';
  const generated = new Date().toLocaleString();

  const border = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };

  const children = [
    // Hub title
    new Paragraph({
      children: [new TextRun({
        text: 'Fairfield & Jefferson County Civic Intelligence Hub',
        bold: true, size: 36, font: 'Arial', color: '1a1a2e',
      })],
      spacing: { after: 120 },
    }),

    // Metadata line
    new Paragraph({
      children: [new TextRun({
        text: 'Generated: ' + generated + '  |  Mode: ' + modeLabel,
        size: 18, font: 'Arial', color: '888888',
      })],
      spacing: { after: 280 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC', space: 1 } },
    }),

    // Question heading
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun({ text: 'Question', bold: true, size: 26, font: 'Arial' })],
      spacing: { before: 240, after: 120 },
    }),

    // Question text
    new Paragraph({
      children: [new TextRun({ text: question, size: 24, font: 'Arial' })],
      spacing: { after: 280 },
    }),

    // Analysis heading
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun({ text: modeLabel, bold: true, size: 26, font: 'Arial' })],
      spacing: { before: 240, after: 120 },
    }),

    // Analysis body — split on newlines into separate paragraphs
    ...analysisText
      .split(/\\n+/)
      .filter(l => l.trim().length > 0)
      .map(line => new Paragraph({
        children: [new TextRun({ text: line, size: 24, font: 'Arial' })],
        spacing: { after: 120 },
      })),

    // Footer rule
    new Paragraph({
      children: [new TextRun({ text: '', size: 20 })],
      spacing: { before: 400 },
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC', space: 1 } },
    }),

    // Footer text
    new Paragraph({
      children: [new TextRun({
        text: 'Fairfield & Jefferson County Civic Intelligence Hub — City Council Member Bob Ferguson',
        size: 18, font: 'Arial', color: '888888',
      })],
    }),
  ];

  const doc = new Document({
    styles: {
      default: { document: { run: { font: 'Arial', size: 24 } } },
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 }, // US Letter
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children,
    }],
  });

  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Fairfield_Jefferson_Research.docx';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
`;

fs.writeFileSync(utilPath, utilContent, 'utf8');
console.log('✓  lib/generateDocx.js updated with full document structure');
console.log('\nReady to deploy:');
console.log('  cd ~/fairfield-research-tool && npx vercel --prod --yes');
