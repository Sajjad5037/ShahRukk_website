import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: 'user', text: input };
  setMessages((prevMessages) => [...prevMessages, userMessage]);
  setInput('');

  try {
    const response = await fetch('https://usefulapis-production.up.railway.app/api/chatwebsite_ShahRukh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const botMessage = {
      sender: 'bot',
      text: data.reply || 'Sorry, no response received.',
    };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
  } catch (error) {
    console.error('Error fetching chatbot response:', error);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'bot', text: 'Oops! Something went wrong. Please try again.' },
    ]);
  }
};

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender === 'user' ? '#dcf8c6' : '#e6e6e6',
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
          placeholder="Type a message..."
        />
        <button onClick={handleSend} style={styles.button}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    height: '500px',
    margin: '20px auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
  },
  chatBox: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
  },
  message: {
    padding: '10px',
    borderRadius: '10px',
    margin: '5px 0',
    maxWidth: '80%',
  },
  inputArea: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ccc',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Chatbot;
