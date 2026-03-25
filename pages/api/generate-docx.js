// pages/api/generate-docx.js
// Server-side .docx generation — runs in Node.js where docx library works natively

import {
  Document, Packer, Paragraph, TextRun, HeadingLevel, BorderStyle,
  AlignmentType, LevelFormat,
} from 'docx';

function parseInlineRuns(text) {
  const runs = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|([^*]+)/g;
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

function markdownToParagraphs(markdown) {
  const lines = markdown.split('\n');
  const paragraphs = [];

  const bulletConfig = {
    reference: 'civic-bullets',
    levels: [{ level: 0, format: LevelFormat.BULLET, text: '\u2022',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
  };

  const numberConfig = {
    reference: 'civic-numbers',
    levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.',
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }],
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === '' || trimmed === '---' || trimmed === '***') {
      paragraphs.push(new Paragraph({ children: [new TextRun({ text: '', size: 20 })], spacing: { before: 80, after: 80 } }));
      continue;
    }
    if (/^### (.+)/.test(trimmed)) {
      paragraphs.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text: trimmed.replace(/^### /, ''), bold: true, size: 24, font: 'Arial' })], spacing: { before: 200, after: 80 } }));
      continue;
    }
    if (/^## (.+)/.test(trimmed)) {
      paragraphs.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: trimmed.replace(/^## /, ''), bold: true, size: 28, font: 'Arial' })], spacing: { before: 280, after: 100 } }));
      continue;
    }
    if (/^# (.+)/.test(trimmed)) {
      paragraphs.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: trimmed.replace(/^# /, ''), bold: true, size: 32, font: 'Arial' })], spacing: { before: 320, after: 120 } }));
      continue;
    }
    if (/^> (.+)/.test(trimmed)) {
      paragraphs.push(new Paragraph({ children: parseInlineRuns(trimmed.replace(/^> /, '')), indent: { left: 720 }, border: { left: { style: BorderStyle.SINGLE, size: 8, color: '9CA3AF', space: 8 } }, spacing: { before: 80, after: 80 } }));
      continue;
    }
    if (/^[-*] (.+)/.test(trimmed)) {
      paragraphs.push(new Paragraph({ numbering: { reference: 'civic-bullets', level: 0 }, children: parseInlineRuns(trimmed.replace(/^[-*] /, '')), spacing: { after: 60 } }));
      continue;
    }
    if (/^\d+\. (.+)/.test(trimmed)) {
      paragraphs.push(new Paragraph({ numbering: { reference: 'civic-numbers', level: 0 }, children: parseInlineRuns(trimmed.replace(/^\d+\. /, '')), spacing: { after: 60 } }));
      continue;
    }
    paragraphs.push(new Paragraph({ children: parseInlineRuns(trimmed), spacing: { after: 120 } }));
  }

  return { paragraphs, bulletConfig, numberConfig };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { question, isSearch, analysisText } = req.body;
  const modeLabel = isSearch ? 'Search Result' : 'Civic Research Analysis';
  const generated = new Date().toLocaleString();

  const { paragraphs, bulletConfig, numberConfig } = markdownToParagraphs(analysisText || '');

  const doc = new Document({
    numbering: { config: [bulletConfig, numberConfig] },
    styles: {
      default: { document: { run: { font: 'Arial', size: 24 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 32, bold: true, font: 'Arial', color: '1a1a2e' }, paragraph: { spacing: { before: 320, after: 120 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, bold: true, font: 'Arial', color: '1a1a2e' }, paragraph: { spacing: { before: 280, after: 100 }, outlineLevel: 1 } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, font: 'Arial', color: '374151' }, paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
      ],
    },
    sections: [{
      properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children: [
        new Paragraph({ children: [new TextRun({ text: 'Fairfield & Jefferson County Civic Intelligence Hub', bold: true, size: 36, font: 'Arial', color: '1a1a2e' })], spacing: { after: 120 } }),
        new Paragraph({ children: [new TextRun({ text: 'Generated: ' + generated + '  |  Mode: ' + modeLabel, size: 18, font: 'Arial', color: '888888' })], spacing: { after: 280 }, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC', space: 1 } } }),
        new Paragraph({ children: [new TextRun({ text: 'Question', bold: true, size: 26, font: 'Arial' })], spacing: { before: 240, after: 120 } }),
        new Paragraph({ children: [new TextRun({ text: question || '', size: 24, font: 'Arial' })], spacing: { after: 280 }, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC', space: 1 } } }),
        new Paragraph({ children: [new TextRun({ text: modeLabel, bold: true, size: 26, font: 'Arial' })], spacing: { before: 240, after: 160 } }),
        ...paragraphs,
        new Paragraph({ children: [new TextRun({ text: '', size: 20 })], spacing: { before: 400 }, border: { top: { style: BorderStyle.SINGLE, size: 4, color: 'CCCCCC', space: 1 } } }),
        new Paragraph({ children: [new TextRun({ text: 'Fairfield & Jefferson County Civic Intelligence Hub — City Council Member Bob Ferguson', size: 18, font: 'Arial', color: '888888' })] }),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.setHeader('Content-Disposition', 'attachment; filename="Fairfield_Jefferson_Research.docx"');
  res.send(buffer);
}
