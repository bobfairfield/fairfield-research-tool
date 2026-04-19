const fs = require('fs');
const path = require('path');

const outPath = path.join(process.env.HOME, 'fairfield-research-tool/lib/generateDocx.js');

const newContent = `// lib/generateDocx.js
// Generates a real .docx binary, rendering Claude's markdown output as proper Word formatting

import {
  Document, Packer, Paragraph, TextRun, HeadingLevel, BorderStyle,
  AlignmentType, LevelFormat, WidthType,
} from 'docx';

// Parse inline markdown: **bold**, *italic*, and plain text
function parseInlineRuns(text) {
  const runs = [];
  // Match **bold**, *italic*, or plain text chunks
  const regex = /\\*\\*(.+?)\\*\\*|\\*(.+?)\\*|([^*]+)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match[1] !== undefined) {
      runs.push(new TextRun({ text: match[1], bold: true, size: 24, font: 'Arial' }));
    } else if (match[2] !== undefined) {
      runs.push(new TextRun({ text: match[2], italics: true, size: 24, font: 'Arial' }));
    } else if (match[3] !== undefined) {
      runs.push(new TextRun({ text: match[3], size: 24, font: 'Arial' }));
    }
  }
  return runs.length > 0 ? runs : [new TextRun({ text, size: 24, font: 'Arial' })];
}

// Convert a markdown string to an array of docx Paragraph objects
function markdownToParagraphs(markdown) {
  const lines = markdown.split('\\n');
  const paragraphs = [];

  const bulletConfig = {
    reference: 'civic-bullets',
    levels: [{ level: 0, format: LevelFormat.BULLET, text: '\\u2022',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
  };

  const numberConfig = {
    reference: 'civic-numbers',
    levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === '' || trimmed === '---' || trimmed === '***') {
      // Horizontal rule or blank line — add a little spacing paragraph
      paragraphs.push(new Paragraph({ children: [new TextRun({ text: '', size: 20 })], spacing: { before: 80, after: 80 } }));
      continue;
    }

    // ATX headings: # ## ###
    if (/^### (.+)/.test(trimmed)) {
      const text = trimmed.replace(/^### /, '');
      paragraphs.push(new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun({ text, bold: true, size: 24, font: 'Arial' })],
        spacing: { before: 200, after: 80 },
      }));
      continue;
    }
    if (/^## (.+)/.test(trimmed)) {
      const text = trimmed.replace(/^## /, '');
      paragraphs.push(new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text, bold: true, size: 28, font: 'Arial' })],
        spacing: { before: 280, after: 100 },
      }));
      continue;
    }
    if (/^# (.+)/.test(trimmed)) {
      const text = trimmed.replace(/^# /, '');
      paragraphs.push(new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text, bold: true, size: 32, font: 'Arial' })],
        spacing: { before: 320, after: 120 },
      }));
      continue;
    }

    // Blockquote: > text
    if (/^> (.+)/.test(trimmed)) {
      const text = trimmed.replace(/^> /, '');
      paragraphs.push(new Paragraph({
        children: parseInlineRuns(text),
        indent: { left: 720 },
        border: { left: { style: BorderStyle.SINGLE, size: 8, color: '9CA3AF', space: 8 } },
        spacing: { before: 80, after: 80 },
      }));
      continue;
    }

    // Bullet list: - item or * item
    if (/^[-*] (.+)/.test(trimmed)) {
      const text = trimmed.replace(/^[-*] /, '');
      paragraphs.push(new Paragraph({
        numbering: { reference: 'civic-bullets', level: 0 },
        children: parseInlineRuns(text),
        spacing: { after: 60 },
      }));
      continue;
    }

    // Numbered list: 1. item
    if (/^\\d+\\. (.+)/.test(trimmed)) {
      const text = trimmed.replace(/^\\d+\\. /, '');
      paragraphs.push(new Paragraph({
        numbering: { reference: 'civic-numbers', level: 0 },
        children: parseInlineRuns(text),
        spacing: { after: 60 },
      }));
      continue;
    }

    // Normal paragraph
    paragraphs.push(new Paragraph({
      children: parseInlineRuns(trimmed),
      spacing: { after: 120 },
    }));
  }

  return { paragraphs, bulletConfig, numberConfig };
}

export async function downloadAsDocx(question, isSearch, analysisText) {
  const modeLabel = isSearch ? 'Search Result' : 'Civic Research Analysis';
  const generated = new Date().toLocaleString();

  const { paragraphs, bulletConfig, numberConfig } = markdownToParagraphs(analysisText);

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
      children: [new TextRun({ text: 'Question', bold: true, size: 26, font: 'Arial' })],
      spacing: { before: 240, after: 120 },
    }),

    // Question text
    new Paragraph({
      children: [new TextRun({ text: question, size: 24, font: 'Arial' })],
      spacing: { after: 280 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC', space: 1 } },
    }),

    // Analysis heading
    new Paragraph({
      children: [new TextRun({ text: modeLabel, bold: true, size: 26, font: 'Arial' })],
      spacing: { before: 240, after: 160 },
    }),

    // Rendered markdown content
    ...paragraphs,

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
    numbering: { config: [bulletConfig, numberConfig] },
    styles: {
      default: { document: { run: { font: 'Arial', size: 24 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 32, bold: true, font: 'Arial', color: '1a1a2e' },
          paragraph: { spacing: { before: 320, after: 120 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 28, bold: true, font: 'Arial', color: '1a1a2e' },
          paragraph: { spacing: { before: 280, after: 100 }, outlineLevel: 1 } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 24, bold: true, font: 'Arial', color: '374151' },
          paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
      ],
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
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

fs.writeFileSync(outPath, newContent);
console.log('✓ lib/generateDocx.js updated with markdown rendering');
console.log('\nDeploy:\n  cd ~/fairfield-research-tool && npx vercel --prod --yes');
