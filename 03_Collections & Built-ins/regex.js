/**
 * 📘 JavaScript Regular Expressions (RegEx)
 * Author: Ritik Kumar
 * Date: 20 Jan 2025
 *
 * 👉 RegEx (Regular Expressions):
 *    - Used for searching, matching, and replacing text patterns.
 *    - Declared with `/pattern/flags`
 *    - Flags: g (global), i (case-insensitive), m (multiline)
 */

// ------------------------------
// 1. Basic Matching
// ------------------------------
let str = "JavaScript is awesome!";

// test() → returns true/false
console.log(/Java/.test(str)); // true
console.log(/java/.test(str)); // false
console.log(/java/i.test(str)); // true (case-insensitive)

// exec() → returns match object (first match)
console.log(/is/.exec(str));

// ------------------------------
// 2. String methods with RegEx
// ------------------------------
console.log(str.match(/a/g)); // [ 'a', 'a' ] (all "a")
console.log(str.search(/awesome/)); // 13 (index of match)
console.log(str.replace(/awesome/, "powerful")); // JavaScript is powerful!

// ------------------------------
// 3. Character Classes
// ------------------------------
let text = "My phone: 9876543210, Code: JS2025";
console.log(text.match(/\d+/g)); // [ '9876543210', '2025' ] → digits
console.log(text.match(/\w+/g)); // words [ 'My', 'phone', '9876543210', 'Code', 'JS2025' ]
console.log(text.match(/\s/g)); // spaces [ ' ', ' ', ' ', ' ', ' ' ]

// ------------------------------
// 4. Quantifiers
// ------------------------------
console.log("aaaab".match(/a+/)); // 'aaaa' → one or more "a"
console.log("color".match(/colou?r/)); // matches 'color' or 'colour'

// ------------------------------
// 5. Anchors (^ and $)
// ------------------------------
console.log(/^Hello/.test("Hello World")); // true (starts with Hello)
console.log(/World$/.test("Hello World")); // true (ends with World)

// ------------------------------
// 6. Groups & Alternation
// ------------------------------
let fruits = "apple, mango, banana, grapes";
console.log(fruits.match(/apple|banana/g)); // [ 'apple', 'banana' ]

// ------------------------------
// 7. Validation Use Cases
// ------------------------------

// Email validation
let email = "ritik@example.com";
console.log(/^[\w.-]+@[a-z]+\.[a-z]{2,}$/.test(email)); // true

// Phone number (10 digits)
let phone = "9876543210";
console.log(/^\d{10}$/.test(phone)); // true

// Password (min 8 chars, at least 1 letter & 1 number)
let password = "abc12345";
console.log(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)); // true

/**
 * 🎯 Key Takeaways:
 * - Use .test() for boolean checks.
 * - Use .match(), .search(), .replace() with strings.
 * - Common flags: g (global), i (ignore case).
 * - Useful for validation (email, phone, password).
 */
