/**
 * 📘 JavaScript CSSOM Basics
 * Author: Ritik Kumar
 * Date: 24 Jan 2025
 *
 * 👉 Working with computed styles and class manipulation
 */

// ------------------------------
// 1. Selecting an element
// ------------------------------
const box = document.querySelector(".box");

// ------------------------------
// 2. Reading Computed Styles
// ------------------------------
const styles = getComputedStyle(box);
console.log("Computed width ->", styles.width);
console.log("Computed background-color ->", styles.backgroundColor);

// ------------------------------
// 3. Inline vs Computed Styles
// ------------------------------
box.style.width = "200px"; // inline style
console.log("Inline style ->", box.style.width); // 200px
console.log("Computed width ->", getComputedStyle(box).width); // reflects actual rendered width

// ------------------------------
// 4. classList API
// ------------------------------
box.classList.add("highlight");     // add a class
box.classList.remove("highlight");  // remove a class
box.classList.toggle("active");     // add if absent, remove if present
console.log("Has 'active'? ->", box.classList.contains("active"));

// ------------------------------
// 5. Combining CSSOM + Events
// ------------------------------
const toggleBtn = document.querySelector("#toggle-btn");
toggleBtn.addEventListener("click", () => {
  box.classList.toggle("active");
  console.log("Box classes ->", box.classList.value);
});

// ------------------------------
// 6. Dynamic Styling
// ------------------------------
const changeColorBtn = document.querySelector("#color-btn");
changeColorBtn.addEventListener("click", () => {
  box.style.backgroundColor = "orange";
  console.log("New background color ->", getComputedStyle(box).backgroundColor);
});

/**
 * 🎯 Key Takeaways:
 * - getComputedStyle(element) reads actual rendered styles.
 * - element.style only reads/sets inline styles.
 * - classList.add/remove/toggle/contains = safe way to manipulate CSS classes.
 * - Combine with events to make dynamic interactive UI.
 */
