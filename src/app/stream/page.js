'use client';

import { throwIfDisallowedDynamic } from 'next/dist/server/app-render/dynamic-rendering';
import { useState, useRef } from 'react';

// function parseChat(output){
//   const lines = output.split('\n')

//   for(let line of lines){

//       if (/^###/.test(line)){
//           line = line.replace("###", "<h1>")
//           line += "</h1>"
//           console.log(line, "||||||||||||||||||")
//       }
//   }
// }
export default function StreamPage() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const controllerRef = useRef(null);

  const handleSendMessage = async () => {
    setIsLoading(true);
    setResponse('');
    controllerRef.current = new AbortController();

    const res = await fetch('/api/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: message }],
      }),
      signal: controllerRef.current.signal,
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let currentSubtitle = null;
    let titleSet = false;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      
      for (let line of lines) {
        if (line.trim().startsWith('data:')) {
          try {
            const data = JSON.parse(line.replace('data: ', ''));
            let delta = data.choices?.[0]?.delta?.content;
            if (delta) setResponse(prev => prev + delta);
            const text = delta.trim();

            if (!titleSet && (/^### /.test(text) || /^[A-Z\s]{5,}$/.test(text))) {
              titleSet = true;
              console.log('🔵 Title:', text.replace(/^# /, '').trim());
              continue;
            }
    
            // Subtitle detection
            // if (/^## /.test(text) || /^\d+\.\s/.test(text) || /^\*\*.+\*\*/.test(text)) {
            //   currentSubtitle = text.replace(/^## /, '').replace(/^\*\*(.+)\*\*$/, '$1').trim();
            //   console.log('🟣 Subtitle:', currentSubtitle);
            //   continue;
            // }
          } catch (err) {
            throw new Error(err)
          }
        }
      }

      buffer = lines[lines.length - 1] || '';
    }

    setIsLoading(false);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>🧠 Qwen Streaming Chat</h2>

      <textarea
        rows="3"
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        disabled={isLoading}
        style={{ width: '100%' }}
      />

      <button
        onClick={handleSendMessage}
        disabled={!message.trim() || isLoading}
        style={{ marginTop: '10px' }}
      >
        {isLoading ? 'Streaming...' : 'Send'}
      </button>

      <div style={{
        padding: '1rem',
        marginTop: '1rem',
        borderRadius: '8px',
        whiteSpace: 'pre-wrap'
      }}>
        {response || '(Streaming will appear here)'}
      </div>

      {isLoading && (
        <button onClick={() => controllerRef.current?.abort()} style={{ marginTop: '10px', color: 'red' }}>
          Cancel Stream
        </button>
      )}
    </div>
  );
}
