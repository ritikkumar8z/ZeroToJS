/**
 * 📘 JavaScript Browser API - Drag & Drop
 * Author: Ritik Kumar
 * Date: 26 Jan 2025
 *
 * 👉 Native drag & drop events in the browser
 */

// ------------------------------
// 1. Make element draggable
// ------------------------------
const draggable = document.querySelector("#drag-me");
draggable.setAttribute("draggable", true);

// ------------------------------
// 2. Drop zone setup
// ------------------------------
const dropZone = document.querySelector("#drop-zone");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // allow drop
  dropZone.classList.add("highlight");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("highlight");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("highlight");

  const data = e.dataTransfer.getData("text/plain");
  console.log("📦 Dropped data:", data);

  // Example: move the dragged element inside dropZone
  const draggedElement = document.getElementById(data);
  dropZone.appendChild(draggedElement);
});

// ------------------------------
// 3. Drag start event
// ------------------------------
draggable.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", draggable.id);
  console.log("🚀 Drag started:", draggable.id);
});

/**
 * 🎯 Key Notes:
 * - Add draggable="true" on elements to make them draggable.
 * - Events:
 *   dragstart → when dragging begins
 *   dragover → continuously fires when dragging over a valid drop target
 *   drop → when item is dropped
 * - e.preventDefault() is required on dragover to allow dropping.
 */
