/**
 * 📘 JavaScript Type Coercion + Equality (== vs ===)
 * Author: Ritik Kumar
 * Date: 5 Jan 2025
 *
 * 👉 JavaScript is a loosely typed language.
 * This means types can change automatically during comparisons or operations.
 * This behavior is called **Type Coercion**.
 *
 * Let's explore 👇
 */

// ------------------------------
// 1. Type Coercion
// ------------------------------
// JS will sometimes convert one type into another automatically.

console.log("5" + 2);   // "52"  -> number converted to string
console.log("5" - 2);   // 3     -> string converted to number
console.log("5" * "2"); // 10    -> both converted to numbers
console.log(true + 1);  // 2     -> true becomes 1
console.log(false + 1); // 1     -> false becomes 0
console.log("10" == 10); // true (coerced comparison)

// ------------------------------
// 2. Loose Equality (==)
// ------------------------------
// == allows type coercion (converts types before comparing)

console.log(5 == "5");   // true  (string "5" coerced to number 5)
console.log(true == 1);  // true  (true coerced to 1)
console.log(false == 0); // true  (false coerced to 0)
console.log(null == undefined); // true (special rule)

// ------------------------------
// 3. Strict Equality (===)
// ------------------------------
// === checks value AND type (no coercion)

console.log(5 === "5");   // false (different types)
console.log(true === 1);  // false (boolean vs number)
console.log(false === 0); // false
console.log(null === undefined); // false

// ------------------------------
// 4. Weird cases (gotchas)
// ------------------------------
console.log("" == 0);    // true  ("" coerced to 0)
console.log("" === 0);   // false (different types)
console.log("0" == false);  // true ("0" -> number 0, false -> 0)
console.log("0" === false); // false (string vs boolean)
console.log([] == 0);    // true  (empty array -> "" -> 0)
console.log([] === 0);   // false
console.log([1,2] == "1,2"); // true (array to string)

// ------------------------------
// 5. Best Practice
// ------------------------------
// Always use strict equality (===) in modern JS
// unless you specifically want coercion behavior.

/**
 * 🎯 Key Takeaways:
 * - Type coercion = automatic conversion between types.
 * - == (loose equality) allows coercion → unpredictable.
 * - === (strict equality) checks both type + value → safer.
 * - Best practice: ALWAYS use === and !==
 */
