#!/bin/bash
# setup-crawler.sh
# Run this once to install dependencies and set up the crawler system
# Usage: chmod +x setup-crawler.sh && ./setup-crawler.sh

CRAWLER_DIR="$HOME/fairfield-research-tool/crawler"
TOOL_DIR="$HOME/fairfield-research-tool"

echo "Setting up Fairfield RAG Crawler System..."

# Create crawler directory inside fairfield-research-tool
mkdir -p "$CRAWLER_DIR"
mkdir -p "$TOOL_DIR/logs"

# Copy all crawler scripts there
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cp "$SCRIPT_DIR"/*.js "$CRAWLER_DIR/"

# Install dependencies
cd "$CRAWLER_DIR"
cat > package.json << 'EOF'
{
  "name": "fairfield-rag-crawler",
  "version": "1.0.0",
  "description": "Fairfield civic digital twin crawler",
  "dependencies": {
    "puppeteer": "^21.0.0",
    "pdf-parse": "^1.1.1",
    "@pinecone-database/pinecone": "^2.2.2",
    "openai": "^4.0.0",
    "dotenv": "^16.0.0"
  }
}
EOF

echo "Installing Node dependencies..."
npm install

echo ""
echo "✓ Setup complete!"
echo ""
echo "═══════════════════════════════════════════════════════"
echo "  Fairfield RAG Crawler - Quick Start Guide"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "STEP 1: Capture Chamber's own website pages"
echo "  cd ~/fairfield-research-tool/crawler"
echo "  node chamber-crawler.js --chamber-only"
echo ""
echo "STEP 2: Extract member directory"
echo "  node extract-members.js"
echo "  (Opens browser, loads member directory, saves members.json)"
echo ""
echo "STEP 3: Review members.json to confirm it extracted correctly"
echo "  cat members.json | python3 -m json.tool | head -50"
echo ""
echo "STEP 4: Crawl all member websites (takes 30-60 min)"
echo "  node chamber-crawler.js --members-only"
echo ""
echo "STEP 5: Check status"
echo "  node status.js"
echo ""
echo "WEEKLY UPDATES (run this every Sunday morning):"
echo "  node weekly-update.js"
echo ""
echo "To automate weekly updates, add to crontab:"
echo "  crontab -e"
echo "  Add: 0 7 * * 0 cd ~/fairfield-research-tool/crawler && source ~/.env.sh && node weekly-update.js"
echo ""
