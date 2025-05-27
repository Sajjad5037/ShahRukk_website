import { useState } from "react";

export default function ImageTextExtractor() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setText("");
  };

  const handleExtractText = async () => {
    if (!image) {
      console.warn("No image selected");
      return;
    }

    setLoading(true);
    setText("");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("https://usefulapis-production.up.railway.app/extract_text", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to extract text.Ensure the image only contains handwritten/printed text only");

      const data = await response.json();

      if (data && data.text) {
        setText(data.text.trim());
      } else {
        setText("No text found in the image.");
      }
    } catch (err) {
      console.error("Text extraction error:", err);
      setText("Failed to extract text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-2">Image Text Extractor</h2>
      <h3 className="text-lg text-gray-600 font-normal mb-6">Works in cases where image contains handwritten/printed texts only</h3>
      {/* 1) File input at the top */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full"
        />
      </div>

      {/* 2) Preview (if an image is selected) */}
      {previewUrl && (
        <div className="mb-4">
          <img
            src={previewUrl}
            alt="Uploaded preview"
            className="w-full max-h-96 object-contain rounded-md border"
          />
        </div>
      )}

      {/* 3) Extract Text button */}
      <div className="mb-6">
        <button
          onClick={handleExtractText}
          disabled={loading || !image}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Extracting..." : "Extract Text"}
        </button>
      </div>

      {/* 4) Extracted Text area (now 4× wider) */}
      {text && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Extracted Text:</h3>
          <textarea
            value={text}
            readOnly
            rows={10}
            style={{ width: "100%" }}
            className="p-3 border rounded resize-none"
          />
        </div>
      )}
    </div>
  );
}
