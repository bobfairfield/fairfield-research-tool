import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { question, analysis, mode } = req.body;
    if (!analysis) return res.status(400).json({ error: 'No analysis to send' });
    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.REPORT_EMAIL;
    const modeLabel = mode === 'search' ? 'Search Result' : 'Civic Research Analysis';
    const date = new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
    await resend.emails.send({
      from: 'Civic Intelligence Hub <noreply@fergleads.com>',
      to,
      subject: `Civic Intelligence Hub — ${modeLabel} — ${date}`,
      html: `<div style="font-family:Georgia,serif;max-width:680px;margin:0 auto;color:#1a1a2e"><div style="background:#1a3a5c;padding:24px 32px;border-radius:8px 8px 0 0"><h1 style="color:white;margin:0;font-size:20px">Fairfield Civic Intelligence Hub</h1><p style="color:#a8c4e0;margin:4px 0 0 0;font-size:13px">${modeLabel} · ${date}</p></div><div style="background:#f8fafc;padding:20px 32px;border-left:4px solid #1a3a5c"><p style="margin:0;font-size:13px;color:#666;font-weight:600;text-transform:uppercase;letter-spacing:1px">Question</p><p style="margin:8px 0 0 0;font-size:16px;color:#1a1a2e;font-weight:600">${question}</p></div><div style="background:white;padding:28px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px"><p style="margin:0 0 16px 0;font-size:13px;color:#666;font-weight:600;text-transform:uppercase;letter-spacing:1px">${modeLabel}</p><div style="font-size:15px;line-height:1.8;color:#374151;white-space:pre-wrap">${analysis}</div></div><p style="text-align:center;font-size:11px;color:#aaa;margin-top:20px">Fairfield & Jefferson County Civic Intelligence Hub · civicintelligencehub.com</p></div>`
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
