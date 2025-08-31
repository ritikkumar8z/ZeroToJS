/**
 * 📘 JavaScript ES6+ Features
 * Author: Ritik Kumar
 * Date: 16 Jan 2025
 *
 * ES6+ brought many modern features to make JS cleaner, safer, and powerful.
 */

// ------------------------------
// 1. let & const (block scope)
// ------------------------------
let age = 22;
const country = "India"; // constant, cannot reassign
console.log(age, country);

// ------------------------------
// 2. Template Literals (string interpolation)
// ------------------------------
let name = "Ritik";
console.log(`Hello, my name is ${name}, and I live in ${country}.`);

// ------------------------------
// 3. Destructuring (arrays & objects)
// ------------------------------
const arr = [10, 20, 30];
const [first, , third] = arr; // skip second
console.log("Destructured ->", first, third);

const user = { id: 1, username: "ritik", email: "test@mail.com" };
const { username, email } = user;
console.log("User ->", username, email);

// ------------------------------
// 4. Spread & Rest
// ------------------------------
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // spread
console.log("Spread ->", newNumbers);

function sum(...values) { // rest
  return values.reduce((a, b) => a + b, 0);
}
console.log("Sum ->", sum(1, 2, 3, 4, 5));

// ------------------------------
// 5. Modules (import/export)
// ------------------------------
/**
 * 👉 In a real project, use:
 * // math.js
 * export const add = (a,b) => a+b;
 * export default function multiply(a,b){ return a*b; }
 *
 * // main.js
 * import multiply, { add } from "./math.js";
 */

// ------------------------------
// 6. Promises
// ------------------------------
const fakeApi = (success = true) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve("✅ Data fetched") : reject("❌ Failed");
    }, 1000);
  });

fakeApi(true)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// ------------------------------
// 7. Async/Await
// ------------------------------
async function getData() {
  try {
    const result = await fakeApi(true);
    console.log("Async/Await ->", result);
  } catch (err) {
    console.error(err);
  }
}
getData();

// ------------------------------
// 8. Optional Chaining (?.)
// ------------------------------
const person = { profile: { name: "RK" } };
console.log(person.profile?.name); // RK
console.log(person.address?.city); // undefined (no error)

// ------------------------------
// 9. Nullish Coalescing (??)
// ------------------------------
let input = null;
console.log(input ?? "Default Value"); // "Default Value"

// ------------------------------
// 10. Dynamic Import
// ------------------------------
/**
 * 👉 Useful for code-splitting:
 * 
 * async function loadMath() {
 *   const { add } = await import("./math.js");
 *   console.log("Dynamic Import Add ->", add(2, 3));
 * }
 * loadMath();
 */

/**
 * 🎯 Key Takeaways:
 * - let/const prevent hoisting issues & make code safe.
 * - Template literals simplify strings.
 * - Destructuring + spread/rest = cleaner syntax.
 * - Promises & async/await simplify async logic.
 * - Optional chaining & ?? prevent runtime crashes.
 * - Modules & dynamic import enable scalable apps.
 */
