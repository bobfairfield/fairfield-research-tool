// lib/generateDocx.js
// Client-side wrapper — calls the server-side API to generate a real .docx

export async function downloadAsDocx(question, isSearch, analysisText) {
  const response = await fetch('/api/generate-docx', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, isSearch, analysisText }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate Word document: ' + response.statusText);
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Fairfield_Jefferson_Research.docx';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
