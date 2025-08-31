/**
 * 📘 JavaScript Hoisting
 * Author: Ritik Kumar
 * Date: 12 Jan 2025
 *
 * 👉 Hoisting:
 *    - JavaScript moves declarations (NOT initializations) to the top of their scope.
 *    - Function declarations are hoisted fully.
 *    - var is hoisted but initialized as `undefined`.
 *    - let & const are hoisted but kept in "Temporal Dead Zone (TDZ)" until defined.
 */ 

// ------------------------------
// 1. var Hoisting
// ------------------------------
console.log(a); // undefined (declaration hoisted, value not)
var a = 10;
console.log(a); // 10

// ------------------------------
// 2. let & const Hoisting (TDZ)
// ------------------------------
// console.log(b); // ❌ ReferenceError (TDZ)
// let b = 20;

// console.log(c); // ❌ ReferenceError (TDZ)
// const c = 30;

// ------------------------------
// 3. Function Hoisting
// ------------------------------
sayHello(); // ✅ Works even before definition

function sayHello() {
  console.log("Hello from hoisted function!");
}

// ------------------------------
// 4. Function Expression vs Declaration
// ------------------------------
// greet(); // ❌ TypeError: greet is not a function (because greet is undefined here)

var greet = function () {
  console.log("Hi from function expression");
};

greet(); // ✅ Works after definition

// ------------------------------
// 5. Hoisting inside functions
// ------------------------------
function test() {
  console.log(x); // undefined (declaration hoisted, init not)
  var x = 50;
  console.log(x); // 50
}
test();

/**
 * 🎯 Key Takeaways:
 * - var: Hoisted, initialized as undefined
 * - let & const: Hoisted but in TDZ (can’t access before definition)
 * - Function declarations: Fully hoisted
 * - Function expressions/arrow functions: Treated like variables
 */
