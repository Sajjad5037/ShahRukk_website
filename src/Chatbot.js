import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]); // Store messages here

  const sendMessage = async () => {
    if (!input.trim()) return; // Ignore if message is empty

    // Add user message to the chat
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput(''); // Clear the input field

    try {
      const response = await fetch('https://usefulapis-production.up.railway.app/api/chatwebsite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response from backend:', data);

        // Add chatbot response to the chat
        setMessages([...messages, { sender: 'user', text: input }, { sender: 'chatbot', text: data.reply }]);
      } else {
        console.error('Failed to send message:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <div
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: '#007bff',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        }}
      >
        💬
      </div>

      {isOpen && (
        <div
          className="chatbot-window"
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '300px',
            height: '400px',
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            padding: '10px',
            zIndex: 999,
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Chatbot</div>
          <div
            style={{
              height: '80%',
              overflowY: 'auto',
              background: '#f8f9fa',
              padding: '5px',
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
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
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()} // Send on Enter key press
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <button
            onClick={sendMessage}
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '10px',
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
      )}
    </>
  );
}
