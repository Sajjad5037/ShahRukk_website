import React, { useState } from "react";
import Layout from '../Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);
  
      const response = await fetch("https://usefulapis-production.up.railway.app/api/send-email-rafis-kitchen", {
        method: "POST",
        body: formPayload // No need to set Content-Type manually
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message.");
      }
  
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };
  

  return (
    <Layout>
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Me</h1>

      <div style={styles.content}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2>Send us a message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Send</button>
        </form>

        
      </div>
    </div>
    </Layout>
  );

};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#ffffff",
    color: "#333"
  },
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "40px"
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "960px",
    margin: "0 auto"
  },
  form: {
    flex: 1,
    minWidth: "300px",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem"
  },
  textarea: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    resize: "vertical"
  },
  button: {
    padding: "12px",
    backgroundColor: "#b22222",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem"
  },
  details: {
    flex: 1,
    minWidth: "300px"
  }
};

export default Contact;
