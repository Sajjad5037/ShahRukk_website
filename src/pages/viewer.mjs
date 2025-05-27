// Prevent execution on the server
if (typeof window === 'undefined') {
  console.log('viewer.js is running on the server, skipping execution');
  module.exports = {}; // Return an empty module for the server
} else {
  debugger;
    
// Extract query parameters from the URL
const params = new URLSearchParams(window.location.search);
const pdfUrl = params.get("pdfUrl");
const pdfPage = Number(params.get("pdfPage")) || 1;
const searchTerms = params.get("searchTerms") ? params.get("searchTerms").split(",") : [];
console.log("📄 PDF URL:", pdfUrl);
console.log("🔢 Page:", pdfPage);
console.log("🔍 Search Terms:", searchTerms);

// Wait for the document to fully load before proceeding
window.onload = function () {
    const canvas = document.getElementById("pdf-canvas");

    if (!canvas) {
        console.error("❌ Canvas element not found! Make sure your HTML includes: <canvas id='pdf-canvas'></canvas>");
        return;
    }

    const ctx = canvas.getContext("2d");

    // Ensure the PDF.js library is loaded
    if (!window.pdfjsLib) {
        console.error("❌ PDF.js library is not loaded! Ensure it's included in the HTML.");
        return;
    }

    console.log("📄 Attempting to load PDF from:", pdfUrl);
    console.log("🔢 Target Page Number:", pdfPage);

    // Load the PDF using PDF.js
    pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
        console.log("✅ PDF Loaded! Total Pages:", pdf.numPages);
        
        if (pdfPage > pdf.numPages || pdfPage < 1) {
            console.error("❌ Invalid page number:", pdfPage);
            return;
        }

        // Get the desired page
        return pdf.getPage(pdfPage);
    }).then(function (page) {
        if (!page) return;
        console.log("🎯 Rendering Page:", pdfPage);
        
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render the page onto the canvas
        return page.render({
            canvasContext: ctx,
            viewport: viewport
        }).promise.then(function () {
            console.log("✅ Page Rendered Successfully!");

            // Extract text content for highlighting
            return page.getTextContent();
        }).then(function (textContent) {
            console.log("📝 Extracted text content:", textContent.items.map(item => item.str).join(" "));

            // Highlight the search terms in the page
            highlightText(ctx, textContent, searchTerms, viewport, canvas);
        });
    }).catch(function (error) {
        console.error("❌ Error loading or rendering PDF:", error);
    });
};

// Function to highlight matching text
function highlightText(ctx, textContent, searchTerms, viewport, canvas) {
    let wordPositions = [];
    let previousText = '';
    let combinedText = '';

    const gapThreshold = 2; // Adjust as needed based on your PDF's coordinate units

    // Create a mapping of text positions to wordPositions
    let wordMapping = [];
    let currentIndex = 0;

    textContent.items.forEach((item, index) => {
        // Clean up the text:
        let itemText = item.str
            .replace(/[\s\u00A0]*[-–—][\s\u00A0]*/g, '-')  // Normalize hyphens/dashes.
            .replace(/<[^>]+>/g, '')                        // Remove HTML-like tags.
            .replace(/\s+/g, ' ')                           // Normalize whitespace.
            .trim();

        // Decide whether to add a trailing space.
        let addTrailingSpace = false;

        if (index + 1 < textContent.items.length) {
            let nextItem = textContent.items[index + 1];
            if (item.transform[5] !== nextItem.transform[5]) {
                addTrailingSpace = true;
            } else {
                let currentXEnd = item.transform[4] + item.width;
                let nextXStart = nextItem.transform[4];
                let gap = nextXStart - currentXEnd;
                let fontChanged = false;
                if (item.fontName && nextItem.fontName && item.fontName !== nextItem.fontName) {
                    fontChanged = true;
                }

                if (gap > gapThreshold || fontChanged) {
                    addTrailingSpace = true;
                }
            }
        } else {
            addTrailingSpace = true;
        }

        const appendedText = itemText + (addTrailingSpace ? ' ' : '');
        combinedText += appendedText;

        wordPositions.push({
            text: appendedText,
            transform: item.transform,
            width: item.width,
            height: item.height,
            fontName: item.fontName || null
        });

        // Create the wordMapping for later use
        wordMapping.push({
            startIndex: currentIndex,
            endIndex: currentIndex + itemText.length,
            text: appendedText,
            transform: item.transform,
            width: item.width,
            height: item.height
        });

        currentIndex += appendedText.length;
        previousText = itemText;
    });

    console.log("📌 Full extracted text:", combinedText);
    console.log("🔍 Word Positions:", wordPositions);

    searchTerms.forEach(term => {
        let combinedTermIndex = combinedText.indexOf(term);
        if (combinedTermIndex !== -1) {
            console.log("✅ Found match for term:", term);

            // Loop through wordMapping to match the term's start index
            wordMapping.forEach(({ startIndex, endIndex, text, transform, width, height }) => {
                if (combinedTermIndex >= startIndex && combinedTermIndex < endIndex) {
                    const [x, y] = viewport.convertToViewportPoint(transform[4], transform[5]);

                    const adjustedWidth = width * viewport.scale;
                    const adjustedHeight = height * viewport.scale;

                    ctx.save();
                    ctx.beginPath();
                    ctx.rect(x, y - adjustedHeight, adjustedWidth, adjustedHeight);
                    ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
                    ctx.fill();
                    ctx.restore();

                    console.log("✅ Highlighting word:", text, "at (x,y):", x, y - adjustedHeight);
                }
            });
        }
    });
}
}
