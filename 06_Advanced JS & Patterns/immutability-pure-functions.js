/**
 * 📘 JavaScript: Immutability & Pure Functions
 * Author: Ritik Kumar
 * Date: 7 Feb 2025
 *
 * - Immutability: Don't change existing data, return new copies instead.
 * - Pure Function: Output depends only on input + no side effects. 
 */

// ------------------------------
// 1. Immutability Basics
// ------------------------------
const user = { id: 1, name: "Ritik" };

// ❌ Mutating (bad practice)
user.name = "Kumar";
console.log("Mutated user:", user);

// ✅ Immutable update (using spread)
const newUser = { ...user, name: "Kumar" };
console.log("Immutable user:", newUser);

// Arrays immutably
const arr = [1, 2, 3];
// ❌ arr.push(4); // mutates
const arr2 = [...arr, 4]; // ✅ immutable
console.log("Immutable array:", arr2);

// ------------------------------
// 2. Pure Functions
// ------------------------------
// Pure = same input => same output, no external mutation
function add(a, b) {
  return a + b; // ✅ pure
}

// Impure (depends on external variable)
let counter = 0;
function increase() {
  return ++counter; // ❌ impure (side effect)
}

console.log("Pure add:", add(2, 3)); // 5
console.log("Impure increase:", increase()); // 1
console.log("Impure increase:", increase()); // 2

// ------------------------------
// 3. Examples of Immutability + Pure Functions
// ------------------------------
const numbers = [1, 2, 3, 4, 5];

// ❌ Impure (mutates input)
function doubleInPlace(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] *= 2;
  }
  return nums;
}

// ✅ Pure (returns new array)
function double(nums) {
  return nums.map(n => n * 2);
}

console.log("Impure double:", doubleInPlace([...numbers])); // [2,4,6,8,10]
console.log("Pure double:", double(numbers));               // [2,4,6,8,10]
console.log("Original numbers:", numbers);                  // unchanged

// ------------------------------
// 4. Benefits
// ------------------------------
// - Easier debugging (no hidden state changes).
// - Safer concurrency (no race conditions).
// - Predictable, testable, reusable functions.
