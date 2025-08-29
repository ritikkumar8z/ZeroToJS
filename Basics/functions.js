/**
 * 📘 JavaScript Functions - Complete Guide with Examples
 * Author: Ritik Kumar
 * Date: 6 Jan 2025
 *
 * Yeh file JavaScript ke functions ka complete explanation hai
 * code aur comments ke through.
 */

// 1️⃣ Function Declaration
function greet() {
  console.log("Hello World 🌍");
}
greet(); // Output: Hello World 🌍

// 2️⃣ Function with Parameters
function add(a, b) {
  console.log("Sum is:", a + b);
}
add(5, 10); // Output: Sum is: 15

// 3️⃣ Function with Return Value
function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 5);
console.log("Multiplication:", result); // 20

// 4️⃣ Default Parameters
function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
sayHello("Ritik"); // Hello, Ritik!
sayHello(); // Hello, Guest!

// 5️⃣ Function Expression
const subtract = function (a, b) {
  return a - b;
};
console.log("Subtraction:", subtract(10, 3)); // 7

// 6️⃣ Arrow Functions (short syntax)
const divide = (a, b) => a / b;
console.log("Division:", divide(20, 5)); // 4

// If only one parameter
const square = n => n * n;
console.log("Square:", square(6)); // 36

// 7️⃣ Rest Parameters (...args)
function total(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Total:", total(1, 2, 3, 4, 5)); // 15

// 8️⃣ Spread Operator with Functions
function showDetails(name, age, city) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
const person = ["Ritik", 22, "Kolkata"];
showDetails(...person);

// 9️⃣ Callback Functions (functions as arguments)
function processUserInput(name, callback) {
  console.log("Processing user:", name);
  callback(name);
}
processUserInput("Ritik", function (user) {
  console.log("Welcome", user);
});

//  🔟 Higher Order Functions (functions that return another function)
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// 1️⃣1️⃣ Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE executed immediately 🚀");
})();

// 1️⃣2️⃣ Function inside Object (Method)
const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};
console.log("Obj Add:", calculator.add(2, 3)); // 5
console.log("Obj Multiply:", calculator.multiply(3, 4)); // 12

// 1️⃣3️⃣ Anonymous Function Example
setTimeout(function () {
  console.log("Anonymous Function after 1 second ⏳");
}, 1000);

// 1️⃣4️⃣ Arrow Function + setTimeout
setTimeout(() => console.log("Arrow Function after 2 sec ⏰"), 2000);

/**
 * ✅ SUMMARY:
 * - Function Declaration
 * - Parameters & Return
 * - Function Expressions
 * - Arrow Functions
 * - Default + Rest Parameters
 * - Spread Operator
 * - Callback & Higher Order Functions
 * - IIFE
 * - Functions inside Objects
 * - Anonymous Functions
 *
 * 👉 This covers almost all use cases of functions in JS.
 */


/** Ek mini story-style function -
 - Main ek shopping cart example banata hoon (real life feel), jisme har jagah important function concept aa jayein, aur code bhi readable ho.
*/


// 🛒 Shopping Cart Example = All Main Function Concepts
function cart(user = "Guest", ...items) {
  // Default parameter + Rest parameter
  console.log(`Welcome ${user}, you added:`, items);

  // Normal function (declaration)
  function totalPrice(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  // Function expression
  const discount = function (price) {
    return price * 0.9; // 10% off
  };

  // Arrow function
  const tax = price => price * 0.05;

  // Callback + Higher-order
  function checkout(cb) {
    return cb(totalPrice(items));
  }

  // Object method
  const bill = {
    final() {
      let base = totalPrice(items);
      let afterDiscount = discount(base);
      let afterTax = afterDiscount + tax(afterDiscount);
      return { user, base, afterDiscount, afterTax };
    }
  };

  // IIFE
  (function () {
    console.log("🧾 Bill is being prepared...");
  })();

  // Use callback to return final bill
  return checkout(bill.final);
}

// ✅ Run Example
console.log(cart("Ritik", 100, 200, 50));


// Output:

/* Welcome Ritik, you added: [ 100, 200, 50 ]
🧾 Bill is being prepared...
{
  user: 'Ritik',
  base: 350,
  afterDiscount: 315,
  afterTax: 330.75
}
*/









