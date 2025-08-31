/**
 * 📘 JavaScript Strings, Numbers, Math, BigInt
 * Author: Ritik Kumar
 * Date: 5 Jan 2025
 *
 * 👉 In JavaScript, Strings and Numbers are primitive types.
 *    We also have Math utilities and BigInt for very large numbers.
 */

// ------------------------------
// 1. Strings
// ------------------------------
let single = 'Hello';        // single quotes
let double = "World";        // double quotes
let backtick = `Hi ${single}`; // template literals (supports interpolation)

console.log(single, double, backtick);

// String methods
let text = " JavaScript ";
console.log("Length:", text.length);       // 12
console.log("Uppercase:", text.toUpperCase()); // "JAVASCRIPT"
console.log("Lowercase:", text.toLowerCase()); // "javascript"
console.log("Trimmed:", text.trim());      // "JavaScript"
console.log("Substring:", text.substring(0, 4)); // " Jav"
console.log("Includes:", text.includes("Script")); // true
console.log("Replace:", text.replace("Java", "Type")); // " TypeScript "

// ------------------------------
// 2. Numbers
// ------------------------------
let num1 = 42;
let num2 = 3.14;

console.log("Integer:", num1);
console.log("Float:", num2);

// Number methods
console.log("toFixed(2):", num2.toFixed(2)); // "3.14" (string)
console.log("toString():", num1.toString()); // "42"
console.log("parseInt('100'):", parseInt("100")); // 100
console.log("parseFloat('3.14'):", parseFloat("3.14")); // 3.14
console.log("isNaN('abc'):", isNaN("abc")); // true

// ------------------------------
// 3. Math Object
// ------------------------------
// Math has many built-in utilities
console.log("Math.PI:", Math.PI);
console.log("Math.round(4.6):", Math.round(4.6)); // 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.ceil(4.1):", Math.ceil(4.1));   // 5
console.log("Math.abs(-10):", Math.abs(-10));     // 10
console.log("Math.pow(2, 3):", Math.pow(2, 3));   // 8
console.log("Math.sqrt(16):", Math.sqrt(16));     // 4
console.log("Math.random():", Math.random());     // random number (0-1)

// ------------------------------
// 4. BigInt
// ------------------------------
// For very large numbers beyond Number limit (~2^53 - 1)

let big1 = 123456789012345678901234567890n; // add 'n' at end
let big2 = 100000000000000000000000000000n;

console.log("BigInt 1:", big1);
console.log("BigInt 2:", big2);
console.log("BigInt sum:", big1 + big2);

// ⚠️ BigInt cannot be mixed with normal Number directly
// console.log(big1 + num1); // ❌ TypeError

/**
 * 🎯 Key Takeaways:
 * - Strings can be created with '', "", or `` (template literals).
 *   Useful methods: length, toUpperCase, toLowerCase, trim, includes, replace.
 * - Numbers handle both integers & floats.
 *   Methods: toFixed, toString, parseInt, parseFloat, isNaN.
 * - Math object gives common math utilities: round, floor, ceil, abs, pow, sqrt, random.
 * - BigInt is used for very large integers → add 'n' at the end.
 *   Cannot mix BigInt with normal Numbers directly.
 */
