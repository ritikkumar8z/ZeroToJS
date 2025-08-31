/**
 * 📘 JavaScript Closures & Lexical Environment
 * Author: Ritik Kumar
 * Date: 11 Jan 2025
 *
 * 👉 Lexical Environment:
 *    - Every function in JS has access to variables from:
 *      1) Its own scope
 *      2) Outer (parent) scopes
 *      3) Global scope
 *
 * 👉 Closure:
 *    - A closure is created when a function "remembers"
 *      its lexical scope even after the outer function has finished executing.
 */

// ------------------------------
// 1. Lexical Environment Example
// ------------------------------
function outer() {
  let outerVar = "I am from outer function";

  function inner() {
    console.log(outerVar); // ✅ can access parent variable
  }

  inner();
}
outer(); // "I am from outer function"

// ------------------------------
// 2. Closure Example
// ------------------------------
function makeCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = makeCounter();
console.log(counter2()); // 1 (separate closure)

// ------------------------------
// 3. Closure with Parameters
// ------------------------------
function greet(name) {
  return function (msg) {
    console.log(`${msg}, ${name}!`);
  };
}

const greetRitik = greet("Ritik");
greetRitik("Hello"); // Hello, Ritik!
greetRitik("Welcome"); // Welcome, Ritik!

// ------------------------------
// 4. Closure in setTimeout
// ------------------------------
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}
// Output: 4, 4, 4 (because var is function-scoped, closure captures same reference)

for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log("let j:", j), 200);
}
// Output: 1, 2, 3 (let is block-scoped, closure keeps correct value)

// ------------------------------
// 5. Data Privacy with Closures
// ------------------------------
function secretPassword() {
  let password = "12345"; // private

  return {
    getPassword: function () {
      return password;
    },
    setPassword: function (newPass) {
      password = newPass;
    },
  };
}

const user = secretPassword();
console.log(user.getPassword()); // 12345
user.setPassword("abcde");
console.log(user.getPassword()); // abcde

/**
 * 🎯 Key Takeaways:
 * - Lexical Environment: Functions access outer variables.
 * - Closure: Function remembers variables from its scope chain,
 *   even after parent function ends.
 * - Useful for data privacy, stateful functions, callbacks, async code.
 */
