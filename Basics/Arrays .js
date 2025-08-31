/**
 * 📘 JavaScript Arrays (map, filter, reduce, find, some/every, flat)
 * Author: Ritik Kumar
 * Date: 6 Jan 2025
 *
 * 👉 Arrays are ordered collections of values.
 *    They come with many built-in methods for iteration and transformation.
 */

// ------------------------------
// 1. Creating Arrays
// ------------------------------
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango"];
let mixed = [1, "two", true, null];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Mixed:", mixed);

// ------------------------------
// 2. map()
// ------------------------------
// Creates a new array by applying a function to each element
let doubled = numbers.map(num => num * 2);
console.log("map -> doubled:", doubled); // [2,4,6,8,10]

// ------------------------------
// 3. filter()
// ------------------------------
// Creates a new array with elements that pass a condition
let even = numbers.filter(num => num % 2 === 0);
console.log("filter -> even numbers:", even); // [2,4]

// ------------------------------
// 4. reduce()
// ------------------------------
// Reduces array to a single value (accumulator pattern)
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("reduce -> sum:", sum); // 15

let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("reduce -> product:", product); // 120

// ------------------------------
// 5. find()
// ------------------------------
// Returns the FIRST element matching a condition
let found = fruits.find(fruit => fruit.startsWith("b"));
console.log("find -> starts with b:", found); // banana

// ------------------------------
// 6. some()
// ------------------------------
// Returns true if at least ONE element matches condition
let hasBigNum = numbers.some(num => num > 4);
console.log("some -> num > 4:", hasBigNum); // true

// ------------------------------
// 7. every()
// ------------------------------
// Returns true if ALL elements match condition
let allPositive = numbers.every(num => num > 0);
console.log("every -> all positive:", allPositive); // true

// ------------------------------
// 8. flat()
// ------------------------------
// Flattens nested arrays into a single array
let nested = [1, [2, 3], [4, [5, 6]]];
console.log("Original nested:", nested);

let flat1 = nested.flat();     // one level deep
console.log("flat(1):", flat1); // [1,2,3,4,[5,6]]

let flat2 = nested.flat(2);    // two levels deep
console.log("flat(2):", flat2); // [1,2,3,4,5,6]

// ------------------------------
// 9. Extra: common utilities
// ------------------------------
console.log("Length:", numbers.length); // 5
console.log("Includes 3:", numbers.includes(3)); // true
console.log("Index of mango:", fruits.indexOf("mango")); // 2
console.log("Slice (1,3):", numbers.slice(1,3)); // [2,3]
console.log("Concat:", numbers.concat([6,7])); // [1,2,3,4,5,6,7]

/**
 * 🎯 Key Takeaways:
 * - map → transform elements, returns new array
 * - filter → keep elements based on condition
 * - reduce → boil array down to a single value
 * - find → returns first matching element
 * - some → at least one condition true?
 * - every → all conditions true?
 * - flat → flattens nested arrays
 * - Arrays are powerful → combine these for data processing
 */
