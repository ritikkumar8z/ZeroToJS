/**
 * 📘 JavaScript Browser API - Clipboard
 * Author: Ritik Kumar 
 * Date: 25 Jan 2025
 *
 * 👉 Read & write text to the clipboard using the Clipboard API
 */

// ------------------------------
// 1. Write text to clipboard
// ------------------------------
const copyBtn = document.querySelector("#copy-btn");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("Hello from Ritik 🚀");
    console.log("✅ Text copied to clipboard");
  } catch (err) {
    console.error("❌ Failed to copy:", err);
  }
});

// ------------------------------
// 2. Read text from clipboard
// ------------------------------
const pasteBtn = document.querySelector("#paste-btn");

pasteBtn.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    console.log("📋 Pasted text ->", text);
  } catch (err) {
    console.error("❌ Failed to read clipboard:", err);
  }
});

// ------------------------------
// 3. Advanced: Copy from input field
// ------------------------------
const inputField = document.querySelector("#my-input");
const copyInputBtn = document.querySelector("#copy-input-btn");

copyInputBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(inputField.value);
    console.log("✅ Input copied ->", inputField.value);
  } catch (err) {
    console.error("❌ Copy failed:", err);
  }
});

/**
 * 🎯 Key Notes:
 * - navigator.clipboard.writeText(text) → copy text
 * - navigator.clipboard.readText() → paste text
 * - Requires HTTPS (except localhost)
 * - Works only when triggered by user action (click, keypress)
 */
