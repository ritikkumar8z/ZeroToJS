/**
 * 📘 JavaScript Event Handling & Delegation
 * Author: Ritik Kumar
 * Date: 22 Jan 2025
 *
 * 👉 Handling events on DOM elements and delegation for efficiency
 */

// ------------------------------
// 1. Selecting Elements
// ------------------------------
const btn = document.querySelector("#my-btn");
const container = document.querySelector("#container");

// ------------------------------
// 2. Adding Event Listeners
// ------------------------------
btn.addEventListener("click", function (e) {
  console.log("Button clicked!");
  console.log("Event object ->", e);
});

// ------------------------------
// 3. Event Object Properties
// ------------------------------
btn.addEventListener("click", (e) => {
  console.log("Target:", e.target); // clicked element
  console.log("Type:", e.type);     // event type
});

// ------------------------------
// 4. Removing Event Listeners
// ------------------------------
function handleClick() {
  console.log("This will run once");
  btn.removeEventListener("click", handleClick);
}
btn.addEventListener("click", handleClick);

// ------------------------------
// 5. Event Delegation
// ------------------------------
// Instead of adding listener to every child, attach to parent
container.addEventListener("click", (e) => {
  if (e.target && e.target.matches(".child-btn")) {
    console.log("Child button clicked:", e.target.textContent);
  }
});

// HTML Example for delegation:
// <div id="container">
//   <button class="child-btn">One</button>
//   <button class="child-btn">Two</button>
// </div>

// ------------------------------
// 6. Common Event Types
// ------------------------------
// Mouse: click, dblclick, mouseenter, mouseleave
// Keyboard: keydown, keyup, keypress
// Form: submit, input, change, focus, blur
// Window: resize, scroll, load, unload

// Example: Prevent form submission
const form = document.querySelector("#my-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submission prevented. You can handle data via JS.");
});

/**
 * 🎯 Key Takeaways:
 * - addEventListener preferred over inline handlers.
 * - Event object gives info like target, type, key, etc.
 * - removeEventListener can remove previously attached handler.
 * - Delegation improves performance for dynamic elements.
 * - Prevent default actions when needed (forms, links).
 */
