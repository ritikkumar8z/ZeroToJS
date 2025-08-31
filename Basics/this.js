/**
 * 📘 JavaScript 'this' Keyword & Binding
 * Author: Ritik Kumar
 * Date: 9 Jan 2025
 *
 * 👉 'this' refers to the execution context (who is calling the function).
 *    Its value depends on HOW a function is called, not where it's written.
 *
 * Let's explore the cases 👇
 */
 
// ------------------------------
// 1. Global Context
// ------------------------------
console.log("Global this:", this); 
// In browser -> window
// In Node.js  -> {} (empty object in module scope)

// ------------------------------
// 2. Inside an Object Method
// ------------------------------
let user = {
  name: "Ritik",
  greet: function () {
    console.log("Hello, I am", this.name); // 'this' -> user object
  }
};
user.greet(); // Hello, I am Ritik

// ------------------------------
// 3. Standalone Function
// ------------------------------
function showThis() {
  console.log("Standalone this:", this);
}
showThis(); 
// In strict mode -> undefined
// In non-strict -> global (window in browser)

// ------------------------------
// 4. Constructor Function (with 'new')
// ------------------------------
function Person(name) {
  this.name = name;
}
let p1 = new Person("RK");
console.log("Constructor ->", p1.name); // RK

// ------------------------------
// 5. Arrow Functions
// ------------------------------
// Arrow functions DON'T have their own 'this'.
// They use 'this' from the surrounding lexical scope.

let obj = {
  name: "Kumar",
  normal: function () {
    console.log("Normal:", this.name); // 'this' -> obj
  },
  arrow: () => {
    console.log("Arrow:", this.name); // 'this' -> global (no binding to obj)
  }
};
obj.normal(); // Normal: Kumar
obj.arrow();  // Arrow: undefined (or window.name in browser)

// ------------------------------
// 6. Explicit Binding (call, apply, bind)
// ------------------------------
function introduce(city, country) {
  console.log(`I am ${this.name} from ${city}, ${country}`);
}

let person = { name: "Ritik" };

// call -> directly invokes function
introduce.call(person, "Jaipur", "India"); 
// I am Ritik from Jaipur, India

// apply -> same as call but arguments as array
introduce.apply(person, ["Delhi", "India"]); 
// I am Ritik from Delhi, India

// bind -> returns a new function with bound 'this'
let boundIntro = introduce.bind(person, "Kolkata", "India");
boundIntro(); 
// I am Ritik from Kolkata, India

// ------------------------------
// 7. 'this' inside setTimeout
// ------------------------------
let timerObj = {
  name: "Timer",
  start: function () {
    setTimeout(function () {
      console.log("Normal function in setTimeout:", this.name);
    }, 1000);

    setTimeout(() => {
      console.log("Arrow function in setTimeout:", this.name);
    }, 1500);
  }
};
timerObj.start();
// Normal function -> undefined (global 'this')
// Arrow function -> Timer (inherits 'this' from start method)

/**
 * 🎯 Key Takeaways:
 * - 'this' depends on HOW function is called.
 * - Global -> window (browser), undefined in strict mode.
 * - Object method -> object itself.
 * - Constructor -> new object created.
 * - Arrow function -> no own 'this', takes from surrounding scope.
 * - call/apply/bind -> explicitly control 'this'.
 */
