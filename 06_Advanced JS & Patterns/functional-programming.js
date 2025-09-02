/**
 * 📘 JavaScript Functional Programming
 * Author: Ritik Kumar
 * Date: 8 Feb 2025
 *
 * - Core idea: Treat functions as "first-class citizens".
 * - Focus on immutability, pure functions, and transformations.
 * - Compare traditional loops vs map/filter/reduce.
 */

// ------------------------------
// 1. Traditional Loop Approach
// ------------------------------
const numbers = [1, 2, 3, 4, 5];

// Imperative: "HOW to do it"
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log("Loop doubled:", doubled);

// ------------------------------
// 2. map() – Transform elements
// ------------------------------
// Declarative: "WHAT to do"
const doubledMap = numbers.map(n => n * 2);
console.log("map doubled:", doubledMap);

// ------------------------------
// 3. filter() – Keep only some values
// ------------------------------
const evensLoop = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) evensLoop.push(numbers[i]);
}
console.log("Loop evens:", evensLoop);

const evens = numbers.filter(n => n % 2 === 0);
console.log("filter evens:", evens);

// ------------------------------
// 4. reduce() – Accumulate into single value
// ------------------------------
// Loop sum
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Loop sum:", sum);

// reduce sum
const reduceSum = numbers.reduce((acc, n) => acc + n, 0);
console.log("reduce sum:", reduceSum);

// reduce to object frequency count
const letters = ["a", "b", "a", "c", "b", "a"];
const freq = letters.reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log("reduce frequency:", freq);

// ------------------------------
// 5. Chaining map/filter/reduce
// ------------------------------
// Double only even numbers, then sum them
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log("Chain result:", result); // (2*2 + 4*2) = 12

// ------------------------------
// 6. Benefits of FP over loops
// ------------------------------
// - Cleaner, shorter, expressive.
// - Less mutable state.
// - Easier to reason about.
// - Composable (chain operations).
