/**
 * 📘 JavaScript Variables - var, let, const
 * Author: Ritik Kumar
 * Date: 4 Jan 2025

 */

// 1. var (old way, function scoped)
var name = "Ritik";
var name = "Kumar"; // redeclare allowed
name = "RK";        // reassign allowed
console.log("var ->", name); // RK

// 2. let (modern, block scoped)
let age = 22;
// let age = 23; ❌ redeclare not allowed
age = 23; // ✅ reassign allowed
console.log("let ->", age); // 23

// 3. const (constant, block scoped)
const country = "India";
// country = "USA"; ❌ reassign not allowed
console.log("const ->", country); // India

// But with objects/arrays we can modify content
const user = { id: 1, name: "Ritik" };
user.name = "Kumar"; // ✅ allowed
console.log("const object ->", user);

// Block scope demo
function demoScope() {
  if (true) {
    var a = "var inside block";
    let b = "let inside block";
    const c = "const inside block";
  }
  console.log(a); // ✅ accessible (function scope)
  // console.log(b); // ❌ Error (block scope)
  // console.log(c); // ❌ Error (block scope)
}
demoScope();




