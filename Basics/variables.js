/**
 * 📘 JavaScript Variables - var, let, const
 * Author: Ritik Kumar
 * Date: 6 Jan 2025
 *
 * 👉 Variables are containers used to store data.
 * In JavaScript, we have 3 ways to declare variables:
 *    - var   (old, function scoped)
 *    - let   (modern, block scoped, re-assignable)
 *    - const (modern, block scoped, not re-assignable)
 */

// ------------------------------
// 1. var (old way, function scoped)
// ------------------------------
var name = "Ritik";
var name = "Kumar"; // ✅ redeclare allowed
name = "RK";        // ✅ reassign allowed
console.log("var ->", name); // RK

// ------------------------------
// 2. let (modern, block scoped)
// ------------------------------
let age = 22;
// let age = 23; ❌ redeclare not allowed in same scope
age = 23; // ✅ reassign allowed
console.log("let ->", age); // 23

// ------------------------------
// 3. const (constant, block scoped)
// ------------------------------
const country = "India";
// country = "USA"; ❌ reassign not allowed
console.log("const ->", country); // India

// ⚠️ But with objects/arrays, we can modify content inside
const user = { id: 1, name: "Ritik" };
user.name = "Kumar"; // ✅ allowed (property changed)
console.log("const object ->", user);

// ------------------------------
// 4. Block Scope demo (var vs let/const)
// ------------------------------
function demoScope() {
  if (true) {
    var a = "var inside block";
    let b = "let inside block";
    const c = "const inside block";
  }

  console.log(a); // ✅ accessible (function scope)
  // console.log(b); // ❌ ReferenceError (block scope)
  // console.log(c); // ❌ ReferenceError (block scope)
}
demoScope();

/**
 * 🎯 Key Takeaways:
 * - var → function-scoped, redeclare + reassign possible
 * - let → block-scoped, no redeclare, reassign allowed
 * - const → block-scoped, no redeclare, no reassign
 * - Always prefer const, then let, avoid var in modern JS
 */
