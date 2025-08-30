/**
 * 📘 JavaScript Data Types - Primitive vs Reference
 * Author: Ritik Kumar
 * Date: 5 Jan 2025
 *
 * 👉 JavaScript has 2 main categories of data types:
 *    1. Primitive Types (copied by value)
 *    2. Reference Types (copied by reference)
 *
 * Let's explore them 👇
 */

// ------------------------------
// 1. Primitive Types
// ------------------------------
// Primitive values are stored directly in memory
// and copied by value (each variable has its own copy).

let str = "Hello";          // String
let num = 100;              // Number
let isLoggedIn = true;      // Boolean
let nothing = null;         // Null
let notDefined;             // Undefined
let big = 123456789012345678901234567890n; // BigInt
let unique = Symbol("id");  // Symbol

console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", isLoggedIn);
console.log("Null:", nothing);
console.log("Undefined:", notDefined);
console.log("BigInt:", big);
console.log("Symbol:", unique);

// Example: Copy by value
let a = 10;
let b = a;  // copy of value
b = 20;
console.log("a:", a); // 10
console.log("b:", b); // 20 (separate copy)

// ------------------------------
// 2. Reference Types
// ------------------------------
// Objects, Arrays, Functions are reference types.
// They are stored in heap memory, and variables store a reference (address).

let arr = [1, 2, 3];   // Array
let obj = { name: "Ritik", age: 22 }; // Object
function greet() {
  console.log("Hello World");
} // Function

console.log("Array:", arr);
console.log("Object:", obj);
greet();

// Example: Copy by reference
let person1 = { name: "Ritik" };
let person2 = person1; // copy reference, not value
person2.name = "Kumar";

console.log("person1:", person1); // { name: "Kumar" }
console.log("person2:", person2); // { name: "Kumar" }

// ------------------------------
// 3. typeof operator
// ------------------------------
// typeof is used to check data types in JS
console.log("typeof str:", typeof str);       // string
console.log("typeof num:", typeof num);       // number
console.log("typeof nothing:", typeof nothing); // object (quirk in JS!)
console.log("typeof notDefined:", typeof notDefined); // undefined
console.log("typeof arr:", typeof arr);       // object
console.log("typeof obj:", typeof obj);       // object
console.log("typeof greet:", typeof greet);   // function

/**
 * 🎯 Key Takeaways:
 * - Primitive (string, number, boolean, null, undefined, bigint, symbol)
 *   → stored directly, copied by value.
 * - Reference (object, array, function)





 *   → stored in heap, copied by reference (changes affect both).
 * - typeof helps check types, but has quirks:
 *   typeof null === "object" (bug in JS).
 */
