export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' }); }

  try {
    const { question, mode, history = [] } = req.body;
    if (!question) { return res.status(400).json({ error: 'Question is required' }); }

    const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
    const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME || 'fairfield-civic-docs';

    if (!ANTHROPIC_API_KEY) { return res.status(500).json({ error: 'Anthropic API key not configured' }); }

    // Improve prompt mode
    if (mode === 'improve') {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 300, system: 'You are a civic research question specialist. Rewrite the user question to be more specific, actionable, and well-framed for researching Fairfield, Iowa city documents, policy, and governance. Return ONLY the improved question, nothing else.', messages: [{ role: 'user', content: question }] })
      });
      const data = await response.json();
      return res.status(200).json({ analysis: data.content[0].text, sources: [], documentCount: 0, mode: 'improve', hasRAGResults: false });
    }

    // RAG retrieval (shared by both search and research modes)
    let ragContext = '';
    let sources = [];
    let documentCount = 0;
    let hasRAGResults = false;

    if (OPENAI_API_KEY && PINECONE_API_KEY) {
      try {
        let queryVariants = [question];
        try {
          const expansionResponse = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
            body: JSON.stringify({ model: 'claude-haiku-4-5-20251001', max_tokens: 200, system: 'You help improve document retrieval for a Fairfield, Iowa civic knowledge tool. Given a user question, return 3 alternative phrasings that might match different ways the same information could appear in legal, planning, or ordinance documents. Use varied vocabulary including formal legal terms, plain language, and chapter/section references if applicable. Return ONLY a JSON array of 3 strings, nothing else.', messages: [{ role: 'user', content: question }] })
          });
          const expansionData = await expansionResponse.json();
          const raw = expansionData.content[0].text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
          const variants = JSON.parse(raw);
          if (Array.isArray(variants) && variants.length > 0) queryVariants = [question, ...variants];
        } catch (e) { console.error('Query expansion failed:', e); }

        const embedPromises = queryVariants.map(q =>
          fetch('https://api.openai.com/v1/embeddings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` },
            body: JSON.stringify({ model: 'text-embedding-3-small', input: q })
          }).then(r => r.json()).then(d => d.data[0].embedding)
        );
        const queryVectors = await Promise.all(embedPromises);

        const pineconeUrl = `https://${PINECONE_INDEX_NAME}-4ac61o3.svc.aped-4627-b74a.pinecone.io/query`;
        const pineconePromises = queryVectors.map(vector =>
          fetch(pineconeUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Api-Key': PINECONE_API_KEY },
            body: JSON.stringify({ vector, topK: 12, includeMetadata: true })
          }).then(r => r.json())
        );
        const pineconeResults = await Promise.all(pineconePromises);

        const matchMap = new Map();
        for (const result of pineconeResults) {
          if (result.matches) {
            for (const match of result.matches) {
              const existing = matchMap.get(match.id);
              if (!existing || match.score > existing.score) matchMap.set(match.id, match);
            }
          }
        }

        const mergedMatches = Array.from(matchMap.values()).sort((a, b) => b.score - a.score).slice(0, 12);

        if (mergedMatches.length > 0) {
          hasRAGResults = true;
          documentCount = mergedMatches.length;
          sources = [...new Set(mergedMatches.map(m => m.metadata?.file).filter(Boolean))];
          ragContext = mergedMatches.map(match => {
            const file = match.metadata?.file || 'Unknown document';
            const type = match.metadata?.type || 'document';
            const text = match.metadata?.text || '';
            return `[Source: ${file} | Type: ${type}]\n${text}`;
          }).join('\n\n---\n\n');
        }
      } catch (ragError) { console.error('RAG error:', ragError); }
    }

    // System prompts for each mode
    const SEARCH_SYSTEM = `You are a fast, precise local information assistant for Fairfield, Iowa and Jefferson County.

Your job is to answer factual questions using the indexed documents and sources provided. Be direct and concise. Lead with the answer. Cite the source document. If multiple sources say the same thing, consolidate.

Rules:
- Answer the question directly in the first sentence
- Keep responses brief and scannable — use short paragraphs or a numbered list only if there are multiple distinct steps or items
- Always cite which document or source the answer comes from
- If the answer is not found in the provided context, say clearly: "This wasn't found in the local knowledge base — you may want to contact [relevant city department] or check [relevant website]."
- Do not editorialize, add background history, or present multiple perspectives unless specifically asked
- Do not add caveats about AI limitations

You are searching a curated knowledge base of Fairfield-specific documents including: Code of Ordinances, Title 20 Zoning, planning documents, housing studies, audit reports, and the websites of local organizations.`;

    const RESEARCH_SYSTEM = `You are a rigorous civic research analyst for Fairfield, Iowa and Jefferson County.

Your job is to help residents, advocates, and officials think carefully about civic questions — policy decisions, community tradeoffs, development proposals, budget priorities, and ideas for improving Fairfield. You draw on indexed local documents as primary context, combined with your broader knowledge of urban planning, municipal governance, Iowa law, and civic best practices.

Approach every question by:
1. Framing what's actually at stake — the real question underneath the question
2. Drawing on any relevant Fairfield-specific documents, plans, or precedents from the provided context
3. Presenting multiple legitimate perspectives, including those the user may not have considered or may disagree with
4. Identifying tradeoffs, not just pros and cons — what does each path give up?
5. Referencing relevant frameworks, comparable cases from other Iowa cities, or best practices where useful
6. Ending with what a thoughtful person would want to know before forming an opinion

Do not flatten complexity. Do not tell people what to think. Help them think better. Challenge assumptions where warranted — including the assumption embedded in the question itself. Write in clear, substantive prose appropriate for an informed adult citizen.`;

    const systemPrompt = mode === 'search' ? SEARCH_SYSTEM : RESEARCH_SYSTEM;

    const contextBlock = hasRAGResults
      ? `\n\nRELEVANT LOCAL DOCUMENTS (${documentCount} passages from Fairfield knowledge base):\n\n${ragContext}`
      : '\n\n[No matching documents found in local knowledge base — responding from general knowledge]';

    const messages = [
      ...history,
      { role: 'user', content: question + contextBlock }
    ];

    const maxTokens = mode === 'search' ? 600 : 1200;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-opus-4-5', max_tokens: maxTokens, system: systemPrompt, messages })
    });

    const data = await response.json();
    if (data.error) { return res.status(500).json({ error: data.error.message || 'Claude API error' }); }

    const analysis = data.content[0].text;
    const responseMode = hasRAGResults ? mode : 'general_knowledge';

    return res.status(200).json({ analysis, sources, documentCount, mode: responseMode, hasRAGResults });

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Internal server error: ' + error.message });
  }
}
