#!/bin/bash
# fix-docx-download.sh
# Run from ~/fairfield-research-tool/
# Fixes the Word doc download so it produces a real .docx, not an HTML file

set -e

PROJECT_DIR=~/fairfield-research-tool
INDEX_FILE="$PROJECT_DIR/pages/index.js"
BACKUP_FILE="$PROJECT_DIR/pages/index.js.backup-$(date +%Y%m%d-%H%M%S)"

echo ""
echo "=== Civic Hub: Fix Word Doc Download ==="
echo ""

# Step 1: Confirm we're in the right place
if [ ! -f "$INDEX_FILE" ]; then
  echo "ERROR: Cannot find pages/index.js"
  echo "Make sure you're running this from ~/fairfield-research-tool/"
  exit 1
fi

# Step 2: Show what the current download code looks like
echo "--- Current download-related lines in index.js ---"
grep -n -i "blob\|msword\|download\|saveAs\|\.doc" "$INDEX_FILE" | head -30
echo ""
echo "---------------------------------------------------"
echo ""

# Step 3: Check if docx library is already installed
echo "Checking for 'docx' npm package..."
if ! grep -q '"docx"' "$PROJECT_DIR/package.json" 2>/dev/null; then
  echo "Installing 'docx' package..."
  cd "$PROJECT_DIR" && npm install docx
  echo "Done."
else
  echo "'docx' already in package.json — skipping install."
fi

# Step 4: Back up index.js
cp "$INDEX_FILE" "$BACKUP_FILE"
echo "Backup saved: $BACKUP_FILE"
echo ""

# Step 5: Write the real docx utility function
UTIL_FILE="$PROJECT_DIR/lib/generateDocx.js"
mkdir -p "$PROJECT_DIR/lib"

cat > "$UTIL_FILE" << 'UTIL'
// lib/generateDocx.js
// Generates a real .docx file (not HTML) from text content
// Usage: import { downloadAsDocx } from '../lib/generateDocx';
//        downloadAsDocx(title, bodyText)

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
} from 'docx';

export async function downloadAsDocx(title, bodyText) {
  // Split body text into paragraphs on blank lines or newlines
  const lines = bodyText.split(/\n+/).filter(l => l.trim().length > 0);

  const children = [
    // Title
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: title, bold: true, size: 32, font: 'Arial' })],
      spacing: { after: 240 },
    }),
  ];

  // Body paragraphs
  for (const line of lines) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: line, size: 24, font: 'Arial' })],
        spacing: { after: 120 },
      })
    );
  }

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
  a.download = `${title.replace(/[^a-z0-9]/gi, '_')}.docx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
UTIL

echo "Created: lib/generateDocx.js"
echo ""

# Step 6: Report what the developer needs to do in index.js
echo "=== ONE MANUAL STEP REQUIRED ==="
echo ""
echo "Open pages/index.js and make these two changes:"
echo ""
echo "1. At the TOP of the file, add this import:"
echo "   import { downloadAsDocx } from '../lib/generateDocx';"
echo ""
echo "2. Find the function that handles the Word doc download."
echo "   It likely contains a Blob with 'msword' or builds an HTML string."
echo "   Replace the ENTIRE body of that function with:"
echo ""
echo "   await downloadAsDocx(title, analysisText);"
echo ""
echo "   Where 'title' and 'analysisText' are whatever variables hold"
echo "   the document title and the main analysis content."
echo ""
echo "   If you're not sure which variable names to use, paste the"
echo "   function here and I'll write the exact replacement."
echo ""
echo "=== Done. Backup is at: ==="
echo "   $BACKUP_FILE"
