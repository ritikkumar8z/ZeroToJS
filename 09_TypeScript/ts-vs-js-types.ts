/**
 * 📘 TypeScript vs JavaScript — Easy Explanation
 * Author: Ritik Kumar
 * Date: 23 Feb 2025
 *
 * JavaScript → Dynamically typed (decides type at runtime).
 * TypeScript → Statically typed (checks type at compile time).
 *
 * ✅ TS = JS + Types
 * ✅ Safer, more reliable, better for big projects
 */

// ==================================================
// 1. Typing System
// ==================================================

// JavaScript (Dynamic Typing → risky)
/*
let jsVar = "Hello"; 
jsVar = 42; // Allowed in JS
console.log("JS variable:", jsVar); // 42
*/

// TypeScript (Static Typing → safe)
let tsVar: string = "Hello";
// tsVar = 42; ❌ Error: Type 'number' not assignable to type 'string'
console.log("TS variable:", tsVar);

// ==================================================
// 2. Type Inference
// ==================================================
/**
 * In TypeScript, if you don’t explicitly write a type,
 * the compiler is smart enough to guess (infer) the type.
 */

let tsNum = 100; // inferred as number
// tsNum = "abc"; ❌ Error
console.log("TS inferred number:", tsNum);

// ==================================================
// 3. Functions (JS vs TS)
// ==================================================

// JavaScript → accepts anything
/*
function addJS(a, b) {
  return a + b;
}
console.log("JS add:", addJS(2, 3));   // 5 ✅
console.log("JS add:", addJS(2, "3")); // "23" (bug?)
*/

// TypeScript → safer, type-checked
function addTS(a: number, b: number): number {
  return a + b;
}
console.log("TS add:", addTS(2, 3)); // ✅ 5
// console.log(addTS(2, "3")); ❌ Error: Argument of type 'string' not assignable

// ==================================================
// 4. Objects
// ==================================================

// JavaScript → any shape allowed
/*
const userJS = { name: "Ritik" };
userJS.age = 22;       // Allowed
userJS.email = "abc";  // Allowed (but unexpected later)
*/

// TypeScript → structure enforced
type User = {
  name: string;
  age: number;
};

const userTS: User = { name: "Ritik", age: 22 };
console.log("TS user:", userTS);
// userTS.email = "abc@test.com"; ❌ Error

// ==================================================
// 5. Why Use TypeScript?
// ==================================================
/**
 * JavaScript = flexible but risky
 * TypeScript = strict but safe
 *
 * ✅ Benefits of TypeScript:
 * 1. Catches errors early (before running).
 * 2. Better autocompletion (IntelliSense).
 * 3. Code is self-documented (types show intent).
 * 4. Easier to maintain large projects.
 *
 * 🔁 Analogy:
 * - JavaScript → Writing without grammar rules. Flexible, but may not make sense.
 * - TypeScript → Writing with grammar + spell checker. Restrictive, but clear & correct.
 */

// ==================================================
// 6. Summary
// ==================================================
/**
 * - JS = Dynamically typed (types decided at runtime)
 * - TS = Statically typed (types checked at compile time)
 *
 * - JS = Flexible, but error-prone
 * - TS = Strict, safer, prevents bugs
 *
 * ✅ Use TS when:
 * - Building big/complex apps
 * - You want safety & maintainability
 * - You want autocomplete & tooling support
 */

// ==================================================
// END
// ==================================================
