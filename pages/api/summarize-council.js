export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { question, analysis } = req.body;
    if (!analysis) return res.status(400).json({ error: 'No analysis to summarize' });
    const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        system: `You are a policy communications specialist. Rewrite civic research into a clear, concise briefing for Councilman Ferguson — an elected Fairfield, Iowa City Council member. Format: Start with a one-sentence bottom line. 2-3 short bullet points of key facts. One sentence on what action or decision this might inform. Tone: Professional, direct, no jargon. No more than 200 words total.`,
        messages: [{ role: 'user', content: `Original question: ${question}\n\nFull analysis:\n${analysis}` }]
      })
    });
    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });
    return res.status(200).json({ summary: data.content[0].text });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
