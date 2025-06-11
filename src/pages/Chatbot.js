import { useState } from 'react';

export default function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('http://127.0.0.1:8001/api/chatwebsite_ShahRukh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        console.error('Failed to send message:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'white',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc',
      }}
    >
      <div style={{ padding: '10px', fontWeight: 'bold', background: '#343a40', color: 'white' }}>
        Chatbot
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          background: '#f8f9fa',
          padding: '10px',
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                background: msg.sender === 'user' ? '#007bff' : '#ccc',
                color: msg.sender === 'user' ? 'white' : 'black',
                borderRadius: '10px',
                padding: '8px 12px',
                maxWidth: '80%',
                whiteSpace: 'pre-wrap', // 🔥 This ensures line breaks are shown
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginTop: '10px',
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
