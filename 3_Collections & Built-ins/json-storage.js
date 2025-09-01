/**
 * 📘 JavaScript JSON & Web Storage (localStorage / sessionStorage)
 * Author: Ritik Kumar
 * Date: 19 Jan 2025
 *
 * 👉 JSON for data exchange & browser storage for persistence.
 */

// ------------------------------
// 1. JSON (JavaScript Object Notation)
// ------------------------------
const user = {
  id: 1,
  name: "Ritik",
  skills: ["JS", "React", "Node"],
};

// Convert object → JSON string
const jsonString = JSON.stringify(user);
console.log("JSON String ->", jsonString);

// Convert JSON string → object
const parsedUser = JSON.parse(jsonString);
console.log("Parsed Object ->", parsedUser);

// With pretty formatting
console.log("Pretty JSON ->\n", JSON.stringify(user, null, 2));

// ------------------------------
// 2. localStorage (persists until manually cleared)
// ------------------------------

// Save to localStorage
localStorage.setItem("username", "Ritik");
localStorage.setItem("user", JSON.stringify(user)); // objects must be JSON

// Retrieve from localStorage
console.log("Username ->", localStorage.getItem("username"));
console.log("User ->", JSON.parse(localStorage.getItem("user")));

// Remove item
localStorage.removeItem("username");

// Clear all
// localStorage.clear();

// ------------------------------
// 3. sessionStorage (clears when tab closed)
// ------------------------------
sessionStorage.setItem("sessionUser", "RK");
console.log("Session User ->", sessionStorage.getItem("sessionUser"));

// ------------------------------
// 4. Practical Use Case Example
// ------------------------------
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

function loadTheme() {
  return localStorage.getItem("theme") || "light";
}

saveTheme("dark");
console.log("Saved Theme ->", loadTheme());

/**
 * 🎯 Key Takeaways:
 * - JSON is universal format for APIs (serialize/deserialize).
 * - localStorage persists data across sessions.
 * - sessionStorage exists only per browser tab/session.
 * - Always JSON.stringify objects before saving.
 */
