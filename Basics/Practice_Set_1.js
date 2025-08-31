/**
 * 📘 JavaScript - Complete Guide with Examples Day one - 
 * Author: Ritik Kumar
 * Date:  2025
 *
 * Yeh file JavaScript ka complete Prectice set hai
 * code ke through. 
 */


// Q1: What is the difference between var, let, and const in JavaScript?

// var is function-scoped, let and const are block-scoped.
var a = 10; // Can be reassigned
let b = 20; // Can be reassigned
const c = 30; // Cannot be reassigned

// Q2: What is hoisting in JavaScript?
console.log(x);  // undefined
var x = 5;  // Variables declared with var are hoisted to the top but not initialized.

console.log(y);  // ReferenceError: Cannot access 'y' before initialization 
let y = 10;  // Variables declared with let and const are hoisted but not initialized.

// Q3: What is a closure in JavaScript?
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}

const count = outer();
count();  // 1
count();  // 2

// Q4: What are the differences between == and === in JavaScript?
console.log(1 == "1");  // true (loose equality)
console.log(1 === "1");  // false (strict equality)

// Q5: What is event delegation in JavaScript?
document.querySelector("#parent").addEventListener("click", function(event) {
  if (event.target && event.target.matches("button.classname")) {
    console.log("Button clicked");
  }
});

// Q6: What is the 'this' keyword in JavaScript?
const obj = {
  name: "Ritik",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

obj.greet();  // Hello, Ritik

// Q7: What is a promise in JavaScript, and how does it work?
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data fetched successfully");
  } else {
    reject("Error fetching data");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Q8: What is async/await in JavaScript?
const fetchData = async () => {
  let data = await new Promise((resolve) => setTimeout(() => resolve("Fetched data"), 1000));
  console.log(data);
};

fetchData();

// Q9: What are higher-order functions in JavaScript?
const multiplyByTwo = (num) => num * 2;
const numbers = [1, 2, 3, 4];

const result = numbers.map(multiplyByTwo);  // Higher-order function as map is taking a function as argument
console.log(result);

// Q10: What is the difference between function expressions and function declarations?
function declaration() {  // Function declaration
  console.log("This is a function declaration");
}

const expression = function() {  // Function expression
  console.log("This is a function expression");
};

declaration();
expression();

// Q11: What are arrow functions in JavaScript?
const add = (a, b) => a + b;  // Concise syntax, no 'this' binding
console.log(add(2, 3));

// Q12: What are the differences between primitive and reference types in JavaScript?
let num = 10;  // Primitive type (copied by value)
let anotherNum = num;
anotherNum = 20;
console.log(num);  // 10



// Q13: How can you check if a number is NaN?
console.log(isNaN("hello"));  // true
console.log(isNaN(123));  // false

// Q14: What are Map and Set in JavaScript?
const map = new Map();
map.set("name", "Ritik");
map.set("age", 25);
console.log(map.get("name"));  // Ritik

const set = new Set([1, 2, 3, 4, 5, 3, 4]);
console.log(set);  // Set { 1, 2, 3, 4, 5 }

// Q15: How does JavaScript's call, apply, and bind work?
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }
};

const person2 = { firstName: "Jane", lastName: "Smith" };

person.fullName.call(person2);  // Jane Smith
person.fullName.apply(person2);  // Jane Smith

const boundFunction = person.fullName.bind(person2);
boundFunction();  // Jane Smith

// Q16: What is the purpose of the "new" keyword in JavaScript?
function Car(model, year) {
  this.model = model;
  this.year = year;
}

const myCar = new Car("Toyota", 2022);
console.log(myCar);  // Car { model: 'Toyota', year: 2022 }

// Q17: How do you create an object in JavaScript?
const personObj = {
  name: "Ritik",
  age: 25,
  greet() {
    console.log("Hello, " + this.name);
  }
};

personObj.greet();  // Hello, Ritik

// Q18: How would you clone an object in JavaScript?
const original = { name: "Ritik", age: 25 };
const clone = { ...original };
console.log(clone);  // { name: 'Ritik', age: 25 }

// Q19: What is the difference between map() and forEach() in JavaScript?
const arr = [1, 2, 3, 4, 5];

arr.map((num) => num * 2);  // [2, 4, 6, 8, 10]
arr.forEach((num) => console.log(num));  // Logs 1, 2, 3, 4, 5

// Q20: How can you prevent a function from being called multiple times in quick succession?
const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};

const log = () => console.log("Function called!");
const debouncedLog = debounce(log, 1000);
debouncedLog();
debouncedLog();  // Function is called only once after 1 second

// Q21: What is the 'prototype' in JavaScript?
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

const person1 = new Person("John");
person1.greet();  // Hello, John

// Q22: What is the 'arguments' object in JavaScript functions?
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));  // 15

// Q23: What are template literals in JavaScript?
const name = "Ritik";
const message = `Hello, ${name}! Welcome to JavaScript.`;
console.log(message);  // Hello, Ritik! Welcome to JavaScript.

// Q24: What is the difference between setTimeout and setInterval in JavaScript?
setTimeout(() => console.log("This runs once after 2 seconds"), 2000);  // Runs once

setInterval(() => console.log("This runs every 2 seconds"), 2000);  // Repeated every 2 seconds

// Q25: How can you prevent the default action of an event in JavaScript?
document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Button clicked, default action prevented");
});
