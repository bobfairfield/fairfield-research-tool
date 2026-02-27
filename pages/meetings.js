import { useEffect, useState } from 'react';

export default function Meetings() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('/council_meetings.html')
      .then(res => res.text())
      .then(setHtml)
      .catch(console.error);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
}
