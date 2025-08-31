/**
 * 📘 JavaScript Strict Mode
 * Author: Ritik Kumar
 * Date: 10 Jan 2025
 *
 * 👉 "use strict" is a directive introduced in ES5.
 *    It makes JavaScript code run in a stricter, safer mode
 *    by throwing errors for bad practices that are ignored in normal mode.
 *
 * To enable strict mode: add this line at the TOP of a file or function:
 *    "use strict";
 */

// ------------------------------
// 1. Strict Mode at File Level
// ------------------------------
"use strict"; // applies to whole file

// Example: assigning to undeclared variable
try {
  x = 10; // ❌ Error in strict mode, OK in sloppy mode
} catch (err) {
  console.log("Error:", err.message); // x is not defined
}

// ------------------------------
// 2. Strict Mode in Functions
// ------------------------------
function testStrict() {
  "use strict";
  // y = 20; // ❌ Error: y is not defined
}
testStrict();

// ------------------------------
// 3. Duplicate Parameters Not Allowed
// ------------------------------
try {
  function duplicateParams(a, a) { // ❌ Error in strict mode
    return a;
  }
  console.log(duplicateParams(1, 2));
} catch (err) {
  console.log("Error:", err.message);
}

// ------------------------------
// 4. this in Strict Mode
// ------------------------------
// In normal mode, `this` inside a standalone function = global object (window in browser).
// In strict mode, it becomes undefined.

function showThis() {
  console.log("this =", this);
}
showThis(); // undefined in strict mode

// ------------------------------
// 5. Deleting variables or functions
// ------------------------------
try {
  let a = 10;
  // delete a; // ❌ Error in strict mode
} catch (err) {
  console.log("Error:", err.message);
}

// ------------------------------
// 6. Reserved Keywords
// ------------------------------
// Strict mode reserves future keywords (like let, class, public, etc.)
// Trying to use them as variable names will throw error.

// let public = 123; // ❌ Error

/**
 * 🎯 Key Takeaways:
 * - Enable strict mode with "use strict".
 * - Helps catch errors early (undeclared vars, duplicates, etc.).
 * - this inside functions -> undefined (not global).
 * - Prevents deleting variables, duplicate params, and using reserved keywords.
 * - Best practice: Always write code in strict mode (by default in ES6 modules).
 */
