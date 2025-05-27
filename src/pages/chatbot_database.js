import React, { useState, useRef, useEffect } from "react";

export default function ChatbotPage() {
  const [entries, setEntries] = useState([]);
  const [tableId, setTableId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [status, setStatus] = useState("confirmed");
  const [chatInput, setChatInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const chatEndRef = useRef(null);
  const [faqs, setFaqs] = useState([]);

  // Scroll to bottom when chatLog updates
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatLog]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch("https://usefulapis-production.up.railway.app/api/faqs");
        if (!response.ok) throw new Error("Failed to fetch FAQs");
        const data = await response.json();
        setFaqs(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFAQs();
  }, []);

  const addEntry = async (e) => {
  e.preventDefault();
  if (!tableId || !customerName || !date || !timeSlot) {
    alert("Please fill in all required fields");
    return;
  }
  
  
  const newEntry = {
    table_id: tableId,
    customer_name: customerName,
    customer_contact: customerContact,
    date,
    time_slot: timeSlot,
    status,
  };

  try {
      const response = await fetch("https://usefulapis-production.up.railway.app/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert("Failed to add reservation: " + (errorData.message || response.statusText));
      return;
    }

    const savedEntry = await response.json();

    // Update local state with the saved entry from backend (which might include an ID)
    setEntries((prevEntries) => [...prevEntries, savedEntry]);

    // Clear form fields
    setTableId("");
    setCustomerName("");
    setCustomerContact("");
    setDate("");
    setTimeSlot("");
    alert("reservation added successfully!!!");
    setStatus("confirmed");
  } catch (error) {
    alert("Error adding reservation: " + error.message);
  }
};

  const handleChatSubmit = async (e) => {
  e.preventDefault();
  if (!chatInput.trim()) return;

  const userMessage = chatInput.trim();
  setChatLog((prev) => [...prev, { sender: "user", message: userMessage }]);

  try {
    const response = await fetch("https://usefulapis-production.up.railway.app/api/chat_database", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    const botResponse = data.reply || "Sorry, I didn’t understand that.";

    setChatLog((prev) => [...prev, { sender: "bot", message: botResponse }]);
  } catch (error) {
    console.error("Chat API error:", error);
    setChatLog((prev) => [
      ...prev,
      { sender: "bot", message: "Oops! Something went wrong. Please try again." },
    ]);
  }

  setChatInput("");
};

  return (
    <div
      className="container my-5 p-4 shadow rounded"
      style={{ maxWidth: "900px", backgroundColor: "#fff", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      <h2 className="mb-4 text-center text-primary" style={{ fontWeight: "700" }}>
        Reservation Manager & Chatbot
      </h2>

      <form onSubmit={addEntry} className="mb-5">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card border-primary shadow-lg rounded-4 overflow-hidden">
            
            {/* Card Header */}
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-0">➕ Add Reservation(entry will be saved in the database)</h4>
            </div>
            
            {/* Card Body */}
            <div className="card-body bg-light p-4">
              <div className="row g-3">
                
                {/* Table ID */}
                <div className="col-sm-4">
                  <div className="form-floating position-relative">
                    <i className="bi bi-table position-absolute" 
                      style={{ top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#0d6efd' }} />
                    <input
                      type="number"
                      className="form-control form-control-lg ps-5 shadow-sm"
                      id="tableId"
                      placeholder="Table ID"
                      value={tableId}
                      onChange={e => setTableId(e.target.value)}
                      required
                      style={{ borderRadius: '12px' }}
                    />
                    <label htmlFor="tableId">Table ID (integer)</label>
                  </div>
                </div>

                {/* Customer Name */}
                <div className="col-sm-8">
                  <div className="form-floating position-relative">
                    <i className="bi bi-person-fill position-absolute"
                      style={{ top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#0d6efd' }} />
                    <input
                      type="text"
                      className="form-control form-control-lg ps-5 shadow-sm"
                      id="customerName"
                      placeholder="Customer Name"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      required
                      style={{ borderRadius: '12px' }}
                    />
                    <label htmlFor="customerName">Customer Name</label>
                  </div>
                </div>

                {/* Customer Contact */}
                <div className="col-sm-6">
                  <div className="form-floating position-relative">
                    <i className="bi bi-telephone-fill position-absolute"
                      style={{ top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#0d6efd' }} />
                    <input
                      type="tel"
                      className="form-control form-control-lg ps-5 shadow-sm"
                      id="customerContact"
                      placeholder="Customer Contact"
                      value={customerContact}
                      onChange={e => setCustomerContact(e.target.value)}
                      style={{ borderRadius: '12px' }}
                    />
                    <label htmlFor="customerContact">Customer Contact</label>
                  </div>
                </div>

                {/* Date */}
                <div className="col-sm-3">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control form-control-lg shadow-sm"
                      id="reservationDate"
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      required
                      style={{ borderRadius: '12px' }}
                    />
                    <label htmlFor="reservationDate">Date</label>
                  </div>
                </div>

                {/* Time Slot */}
                <div className="col-sm-3">
                  <div className="form-floating">
                    <input
                      type="time"
                      className="form-control form-control-lg shadow-sm"
                      id="timeSlot"
                      value={timeSlot}
                      onChange={e => setTimeSlot(e.target.value)}
                      required
                      style={{ borderRadius: '12px' }}
                    />
                    <label htmlFor="timeSlot">Time Slot</label>
                  </div>
                </div>

                {/* Status */}
                <div className="col-sm-6 d-flex align-items-center">
                  <select
                    className="form-select form-select-lg shadow-sm"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    required
                    style={{ borderRadius: '12px' }}
                  >
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="card-footer bg-white text-center py-3">
              <button
                type="submit"
                className="btn btn-primary btn-lg px-5 shadow"
                style={{ borderRadius: '30px', fontWeight: '600' }}
              >
                Add Reservation
              </button>
            </div>

          </div>
        </div>
      </form>
      <div>
        <h2>Model Knowledge Base (data from database is fed to the model in natural language so it can answer user quries)</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>
              <strong>Q:</strong> {faq.question}<br />
              <strong>A:</strong> {faq.answer}
            </li>
          ))}
        </ul>
      </div>     

      <h2 className="mb-3 text-center text-secondary" style={{ fontWeight: "600" }}>
        Business Chatbot (Ask only those questions that we have fed to the model. we can alter the logic to fed all different kinds of questions to the model that a user is likely to ask so the chatbot responds accordingly... for the time being stick to the questions fed to the model for accurate results)
      </h2>

      <div
        style={{
          border: "1.5px solid #007bff",
          borderRadius: "15px",
          padding: "1.5rem",
          maxHeight: "400px",
          overflowY: "auto",
          background: "#f0f8ff",
          boxShadow: "0 4px 8px rgba(0,123,255,0.15)",
          fontSize: "1rem",
          lineHeight: "1.4",
        }}
      >
        {chatLog.length === 0 && (
          <p style={{ color: "#555", fontStyle: "italic", textAlign: "center" }}>
            Ask me about customer reservations!
          </p>
        )}

        {chatLog.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "0.9rem",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                backgroundColor: msg.sender === "user" ? "#007bff" : "#e1e7f0",
                color: msg.sender === "user" ? "white" : "#1b1b1b",
                padding: "12px 18px",
                borderRadius: msg.sender === "user" ? "25px 25px 5px 25px" : "25px 25px 25px 5px",
                whiteSpace: "pre-wrap",
                fontWeight: "500",
                boxShadow:
                  msg.sender === "user"
                    ? "0 2px 6px rgba(0,123,255,0.6)"
                    : "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              {msg.message}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form
        onSubmit={handleChatSubmit}
        className="mt-4 d-flex gap-2 w-100"
        style={{ maxWidth: "900px" }}   // match the chatLog container
      >
        <textarea
          className="form-control form-control-lg"
          placeholder="Ask a question..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          required
          rows={3}
          style={{
            width: "600px",
            borderRadius: "25px",
            borderColor: "#007bff",
            paddingLeft: "15px",  // Add space inside
            resize: "none"
          }}
        />
        <button
          className="btn btn-primary btn-lg px-4"
          type="submit"
          style={{ borderRadius: "25px", fontWeight: "600" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}




