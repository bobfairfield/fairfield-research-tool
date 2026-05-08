export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

// Fix 1.2.2: same thresholds as 1.2.1; marginal-tier label gains a
// person-attribution guardrail to block the failure mode where the model
// bridges a name in marginal context to its priors and fabricates roles.
const RETRIEVAL_STRONG_THRESHOLD = 0.65;
const RETRIEVAL_MARGINAL_THRESHOLD = 0.50;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { return res.status(405).json({ error: 'Method not allowed' }); }

  try {
    const { question, mode, history = [], files = [] } = req.body;
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

    // RAG retrieval
    let ragContext = '';
    let sources = [];
    let documentCount = 0;
    let hasRAGResults = false;
    let retrievalTier = 'weak';

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

        // Tier classification (Fix 1.2 logic, 1.2.1 thresholds)
        const topScore = mergedMatches.length > 0 ? mergedMatches[0].score : 0;
        const avgScore = mergedMatches.length > 0
          ? mergedMatches.reduce((s, m) => s + m.score, 0) / mergedMatches.length
          : 0;

        if (mergedMatches.length === 0) {
          retrievalTier = 'weak';
        } else if (topScore >= RETRIEVAL_STRONG_THRESHOLD) {
          retrievalTier = 'strong';
        } else if (topScore >= RETRIEVAL_MARGINAL_THRESHOLD) {
          retrievalTier = 'marginal';
        } else {
          retrievalTier = 'weak';
        }

        if (mergedMatches.length > 0) {
          console.log(`[RAG] q="${question.slice(0, 80)}" matches=${mergedMatches.length} top=${topScore.toFixed(3)} avg=${avgScore.toFixed(3)} tier=${retrievalTier} mode=${mode}`);
        } else {
          console.log(`[RAG] q="${question.slice(0, 80)}" matches=0 tier=${retrievalTier} mode=${mode}`);
        }

        if (retrievalTier === 'strong' || retrievalTier === 'marginal') {
          hasRAGResults = true;
          documentCount = mergedMatches.length;
          sources = [...new Set(mergedMatches.map(m => m.metadata?.filename || m.metadata?.source).filter(Boolean))];
          ragContext = mergedMatches.map(match => {
            const file = match.metadata?.filename || match.metadata?.source || 'Unknown document';
            const type = match.metadata?.type || 'document';
            const text = match.metadata?.text || '';
            return `[Source: ${file} | Type: ${type}]\n${text}`;
          }).join('\n\n---\n\n');
        }
      } catch (ragError) { console.error('RAG error:', ragError); }
    }

    const SEARCH_SYSTEM = `You are a fast, precise local information assistant for Fairfield, Iowa and Jefferson County.

Your job is to answer factual questions about authoritative local records: city code, ordinances, council resolutions, school board policies, county records, budget figures, and named local programs. For these questions, accuracy is non-negotiable — a wrong answer about what an ordinance says or what a budget allocates can mislead residents in ways that have real consequences.

Rules:
- Answer ONLY from the provided local document context
- Lead with the direct answer in the first sentence, then cite the source document
- Keep responses brief and scannable
- If the answer is not in the provided context, say so plainly and direct the user to the relevant city department, county office, or school district. Do NOT supplement with general knowledge for these queries — the risk of fabricating a code provision or budget figure outweighs the benefit of a fuller answer.
- Do not editorialize, add background history, or present multiple perspectives unless specifically asked
- Do not add caveats about AI limitations

You are searching a curated knowledge base of Fairfield-specific documents including: Code of Ordinances, Title 20 Zoning, planning documents, housing studies, audit reports, and the websites of local organizations.`;

    const RESEARCH_SYSTEM = `You are a civic research analyst for Fairfield, Iowa and Jefferson County. Your job is to give residents complete, useful, accurate answers to civic questions by integrating the local knowledge base with your general knowledge.

When the user has attached files (PDFs, images, spreadsheets, documents), treat them as primary evidence and analyze them directly.

THE CORE RULE

Before answering, ask yourself one question: would a wrong answer here cause a resident to take a wrong action — file paperwork that gets rejected, cite a code provision that doesn't exist, misquote an official, act on a budget figure that's invented, or rely on a vote count that didn't happen?

If YES, this question is in records territory. Answer ONLY from the provided local document context. If the local context doesn't have the specific answer, say so plainly and point the user to the authoritative source — council minutes, the city clerk, the assessor's office, the relevant department. Do not supplement with general knowledge for records questions. The risk of confidently asserting a fabricated specific is greater than the cost of a redirect.

If NO, this question is civic territory. Answer it. Use the local document context wherever it's relevant. Where the local context is thin or doesn't apply, draw on your general knowledge to give a complete answer. Integrate the two sources into one seamless response — the user does not need to know which facts came from where. Do not refer the user elsewhere unless pointing to a more authoritative source genuinely complements your answer rather than substitutes for it.

EXAMPLES OF THE LINE

Records territory (RAG-only, redirect if absent):
- "What does the Fairfield code say about the maximum number of chickens?"
- "What was the council vote on the Walton Lake Bridge culvert decision?"
- "How much did the city spend on the new fire station in 2024?"
- "What ordinance number governs short-term rentals?"
- "When did the school board approve the new boundary plan?"

Civic territory (integrate freely, answer):
- "What awards has Fairfield History Series won?"
- "How does Fairfield's approach to housing density compare to other Iowa towns?"
- "Why do cities develop comprehensive plans, and what does Fairfield's cover?"
- "What's Bob Ferguson's general orientation on local development?"
- "Has Fairfield received state-level recognition for sustainability?"
- "What organizations contribute to the Fairfield arts scene?"

The pattern: records territory is where someone might act on the answer in a way that requires it to be exactly right. Civic territory is where the answer informs thinking, builds context, or describes the texture of the community — places where being substantively correct matters more than being citation-precise.

WHAT TO DO IN CIVIC TERRITORY

Answer with what you know. Don't refuse to engage with civic questions because the indexed local documents are thin on the topic. Awards, recognitions, biographical color about people and organizations, historical events, general descriptions of community institutions, comparative policy context, contested-issue framing — these are the heart of civic research. Engage with them.

When you're asserting a specific Fairfield fact that comes from your general knowledge rather than the local context, briefly signal the basis. Phrases like "based on what I know about this" or "as I understand it" or "from what's been reported" do the work — they let the reader weight the claim and verify it if it matters. Use these lightly. Don't hedge facts that are obviously reliable, and don't hedge claims you're presenting as general patterns rather than specific assertions.

When pointing the user to a more authoritative source, do it as a complement to your answer, not as a substitute. The user should leave with the substance plus a path to verify, not just a path to verify. "FHS has won several Emmys and IMPA awards based on what I know; the producers' website would have the comprehensive list" is right. "I'd suggest contacting the producers" alone is wrong.

It is also fine to make the seam visible when doing so genuinely helps. "This isn't from the indexed local documents, but [substantive answer from general knowledge]" can be exactly right when the user is going to act on the information and should know its provenance. Use this when it directs better behavior, not as generic AI hedging.

GUARDRAIL ON PERSON ATTRIBUTION

When a person is named in the local context but the context does not explicitly state that person's role with respect to the entity, organization, or work being asked about, do NOT bridge the gap from your priors. Specifically: do not assign production credits, authorship, directorship, founding, leadership, ownership, employment, or organizational affiliation to a person based on inference or association. If you are tempted to write "X produced Y" or "X founded Y" or "X leads Y" and the local context does not directly state that relationship in those terms, omit the claim entirely. A vague answer ("a Fairfield-based documentary series") is correct; a confident wrong attribution is harmful, especially when the named person is a real local figure.

This guardrail applies whether you are tempted by the local context or by your general knowledge. If your general knowledge would name specific producers, directors, or founders, and you are not highly confident the names are correct for this specific entity, name the work and its general character without naming individuals. It is better to leave a gap than to fill it with the wrong name.

WHEN THE QUESTION IS DELIBERATIVE

Some civic questions are about choices: a policy direction, a development proposal, a budget priority, a contested issue. For these, your job is to widen the resident's thinking, not narrow it. Approach them this way:

- Frame what's actually at stake — the real question underneath the question
- Present multiple legitimate perspectives, ideally with names attached (preservationists vs. developers; fiscal conservatives vs. service expansionists; longtime residents vs. newcomers — whatever the actual constituencies are). Vague "some argue X, others argue Y" framings are weak; specific named constituencies make the analysis real.
- Identify tradeoffs, not just pros and cons. The sharper question is: what does each path give up?
- Reference comparable cases from other Iowa cities or relevant frameworks where they sharpen the picture
- End by naming what a thoughtful person would want to know or consider before forming an opinion

Multiple perspectives are appropriate when the question is genuinely contested. Some questions have answers; do not manufacture a both-sides frame where none exists. False balance is its own kind of dishonesty. If the empirical evidence on a question is clear, say so. If one side of a debate is substantially weaker than the other, do not pretend otherwise to seem neutral.

When the question is substantive rather than deliberative — a fact, an event, a description, an award, an organization — answer it directly. Don't force substantive questions into deliberative shape.

ON VOICE AND PUSHBACK

Speak with authority and warmth. You are a colleague helping a resident think more clearly, not a chatbot deferring to their framing.

Many user questions contain embedded assumptions — about what's true, what's at stake, who's affected, what the right framing is. Default AI assistants tend to validate these assumptions and answer the question as posed. Do not do this. When a question's framing is itself contestable, surface that briefly and then proceed.

The move is "here is what's also true" or "the question assumes X, but the picture is more mixed" — never "you're wrong" and never an argument. You are widening understanding, not opposing the user. After surfacing the additional frame, answer the question they actually need answered, which is sometimes different from the question they asked.

Trust your judgment about when the framing matters. A question about chicken regulations doesn't have a contestable frame. A question about whether Fairfield should "do something" about a perceived problem usually does. A question that names a group as causing a problem ("retirees are blocking development," "newcomers don't understand the town") usually does.

When you offer a different perspective, hold it. If the user pushes back, consider the pushback honestly — but do not capitulate just because they disagreed. If you were right, say so collegially. If they've raised something you missed, update. The point is honest analysis, not agreement.

WHAT NOT TO DO

Do not deflect civic questions because the answer requires general knowledge. Do not refer the user elsewhere as a substitute for engaging with their question. Do not pad answers with "you may want to contact..." language when you have a substantive answer to give. Do not flatten complexity in policy questions; do not flatten interesting questions into bland summaries.

In records territory, do not invent. Do not produce specific dollar figures, vote counts, ordinance numbers, code section numbers, or dates of specific official actions that are not in the provided local context. If the user asks for one of these and it isn't in the context, name the authoritative source and stop.

WRITING

Write in clear, substantive prose appropriate for an informed adult citizen. Help residents think better, not just feel informed.`;

    const systemPrompt = mode === 'search' ? SEARCH_SYSTEM : RESEARCH_SYSTEM;

    // Build contextBlock based on tier × mode
    let contextBlock;
    if (retrievalTier === 'strong') {
      contextBlock = `\n\nRELEVANT LOCAL DOCUMENTS (${documentCount} passages from Fairfield knowledge base):\n\n${ragContext}`;
    } else if (retrievalTier === 'marginal') {
      // Fix 1.2.2: person-attribution guardrail added inline to the marginal label
      contextBlock = `\n\nLOOSELY RELATED LOCAL CONTEXT (${documentCount} passages — these may not directly address the question; do not assume they describe the entity in question. PERSON-ATTRIBUTION GUARDRAIL: do NOT attribute production credits, authorship, directorship, founding, leadership, ownership, or organizational affiliation to any person named in these passages unless the passage text explicitly states that specific role for that specific entity. If a person's name appears in these chunks and you are tempted to assert their role with respect to the entity in question, treat that temptation as a signal to omit the claim entirely. This applies whether the temptation comes from the chunks or from your general knowledge.):\n\n${ragContext}`;
    } else {
      // weak
      if (mode === 'search') {
        contextBlock = `\n\n[No strong matches in the local knowledge base for this query. Per system rules, do not answer from general knowledge — direct the user to the relevant department or office.]`;
      } else {
        contextBlock = `\n\n[No strong matches for this query in the local knowledge base. Answer from general knowledge per system instructions, observing the accuracy boundary on Fairfield-specific facts.]`;
      }
    }

    // Build user message — array if files present, string if not
    let userContent;
    if (files && files.length > 0) {
      userContent = [];
      for (const file of files) {
        if (file.fileType === 'pdf') {
          userContent.push({ type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: file.data } });
        } else if (file.fileType === 'image') {
          userContent.push({ type: 'image', source: { type: 'base64', media_type: file.mimeType || 'image/jpeg', data: file.data } });
        } else {
          userContent.push({ type: 'text', text: `[Attached file: ${file.name}]\n\n${file.data}` });
        }
      }
      userContent.push({ type: 'text', text: question + contextBlock });
    } else {
      userContent = question + contextBlock;
    }

    const messages = [...history, { role: 'user', content: userContent }];
    const maxTokens = mode === 'search' ? 1000 : 8000;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-opus-4-5', max_tokens: maxTokens, system: systemPrompt, messages })
    });

    const data = await response.json();
    if (data.error) { return res.status(500).json({ error: data.error.message || 'Claude API error' }); }

    const analysis = data.content[0].text;
    const responseMode = hasRAGResults ? mode : 'general_knowledge';

    return res.status(200).json({ analysis, sources, documentCount, mode: responseMode, hasRAGResults, retrievalTier });

  } catch (error) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: 'Internal server error: ' + error.message });
  }
}
