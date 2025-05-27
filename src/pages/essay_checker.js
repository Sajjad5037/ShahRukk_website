import React, { useState } from 'react';

export default function ImageToTextExtractor() {
  const [image, setImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setExtractedText(''); // Clear previous result
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please upload an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    setLoading(true);

    try {
      const response = await fetch('https://your-backend-url.com/api/extract-text', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setExtractedText(data.text); // assuming backend responds with { text: "..." }
      } else {
        console.error('Failed to extract text:', await response.text());
        alert('Error extracting text from image.');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Image to Text Extractor</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button
        onClick={handleUpload}
        style={{ marginLeft: '10px', padding: '5px 10px' }}
        disabled={loading}
      >
        {loading ? 'Extracting...' : 'Extract Text'}
      </button>

      {extractedText && (
        <div style={{ marginTop: '20px' }}>
          <h3>Extracted Text:</h3>
          <textarea
            rows="10"
            style={{ width: '100%' }}
            value={extractedText}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
