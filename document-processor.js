const fs = require("fs");
const path = require("path");

// Load .env.local FIRST before anything else
const envPath = path.join(__dirname, ".env.local");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8").split("\n").forEach(line => {
    const m = line.match(/^([^#=]+)=["']?(.+?)["']?\s*$/);
    if (m) process.env[m[1].trim()] = m[2].trim();
  });
}

const pdf = require("pdf-parse");
const { Pinecone } = require("@pinecone-database/pinecone");
const OpenAI = require("openai");

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const INDEX_NAME = process.env.PINECONE_INDEX_NAME || "fairfield-civic-docs";

function chunkText(text, size = 1000, overlap = 200) {
  const chunks = [];
  let i = 0;
  while (i < text.length) { chunks.push(text.slice(i, i + size)); i += size - overlap; }
  return chunks.filter(c => c.trim().length > 0);
}

async function processFile(filePath, metadata = {}) {
  console.log("Processing:", filePath);
  const buffer = fs.readFileSync(filePath);
  const data = await pdf(buffer);
  const chunks = chunkText(data.text);
  console.log("Split into", chunks.length, "chunks");
  const index = pinecone.index(INDEX_NAME);
  const fileName = path.basename(filePath);
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    if (!chunk || chunk.length === 0) continue;
    const embedding = await openai.embeddings.create({ model: "text-embedding-3-small", input: chunk });
    await index.upsert([{ id: `${fileName}-chunk-${i}`, values: embedding.data[0].embedding, metadata: { ...metadata, text: chunk, file: fileName } }]);
    process.stdout.write(`  Uploaded chunk ${i + 1}/${chunks.length}\r`);
  }
  console.log(`\n  Done: ${fileName}`);
}

open -a TextEdit ~/fairfield-research-tool/document-processor.js

