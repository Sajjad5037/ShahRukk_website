import React, { useState } from "react";

export default function EssayChecker() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [assessmentResult, setAssessmentResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setAssessmentResult("");
    setMessage("");
  };

  const handleEvaluate = async () => {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);
    setAssessmentResult("");
    setMessage("");

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await fetch(
        "http://127.0.0.1:8001/extract_text_essayChecker",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setAssessmentResult(data.message || "Assessment completed.");
        setMessage(`Email sent to: ${data.email_sent_to}`);
      } else {
        setAssessmentResult("");
        setMessage(
          data.message || "Failed to extract or evaluate essay. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during upload:", error);
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h2>CSS Essay Checker</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button
        onClick={handleEvaluate}
        disabled={!selectedImage || loading}
        style={{ marginLeft: 10, padding: "6px 12px", cursor: "pointer" }}
      >
        {loading ? "Evaluating..." : "Evaluate Your Essay"}
      </button>

      {message && (
        <p
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "#f0f0f0",
            borderRadius: 4,
          }}
        >
          {message}
        </p>
      )}

      {assessmentResult && (
        <textarea
          readOnly
          value={assessmentResult}
          style={{
            width: "100%",
            height: 350,
            marginTop: 20,
            fontSize: 16,
            padding: 10,
            borderRadius: 4,
            border: "1px solid #ccc",
            whiteSpace: "pre-wrap",
          }}
        />
      )}
    </div>
  );
}
