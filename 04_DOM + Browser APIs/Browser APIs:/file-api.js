/**
 * 📘 JavaScript Browser API - File API
 * Author: Ritik Kumar
 * Date: 27 Jan 2025
 *
 * 👉 Handle file inputs, read contents, preview images
 */

// ------------------------------
// 1. Select file input
// ------------------------------
const fileInput = document.querySelector("#file-input");
const preview = document.querySelector("#preview");

// ------------------------------
// 2. Listen for file selection
// ------------------------------
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0]; // single file
  if (!file) return;

  console.log("📄 File Info:");
  console.log("Name:", file.name);
  console.log("Size:", file.size, "bytes");
  console.log("Type:", file.type);

  // ------------------------------
  // 3. Read file content
  // ------------------------------
  const reader = new FileReader();

  // Example: if text file, read as text
  if (file.type.startsWith("text/")) {
    reader.readAsText(file);
    reader.onload = () => {
      console.log("📜 File Content:", reader.result);
    };
  }

  // Example: if image, show preview
  if (file.type.startsWith("image/")) {
    reader.readAsDataURL(file); // base64 encoding
    reader.onload = () => {
      preview.src = reader.result; // show image
    };
  }
});

/**
 * 🎯 Key Notes:
 * - Input type="file" lets users pick files.
 * - FileReader API → readAsText(), readAsDataURL(), readAsArrayBuffer()
 * - e.target.files → FileList object (can handle multiple files).
 * - Great for previews before upload.
 */



//📌 Example HTML for testing:

```
<input type="file" id="file-input" />
<br />
<img id="preview" style="max-width:200px; margin-top:10px;" />
```




