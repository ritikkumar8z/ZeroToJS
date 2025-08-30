/**
 * 📘 JavaScript - Complete Guide with Examples Day one - 
 * Author: Ritik Kumar
 * Date: 4 Jan 2025
 *
 * Yeh file JavaScript ka complete Prectice set hai
 * code ke through.
 */ 


// Q1: What is the difference between null and undefined in JavaScript?
let a = null;
let b;

console.log(a);  // null
console.log(b);  // undefined

// Q2: How do you handle errors in JavaScript?
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log(error.message);  // Something went wrong!
} finally {
  console.log("Execution completed.");
}

// Q3: What is the difference between slice() and splice() methods in JavaScript?
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 3));  // [2, 3] (non-destructive)
arr.splice(1, 2, 6, 7);  // [2, 3] removed and 6, 7 added
console.log(arr);  // [1, 6, 7, 4, 5]

// Q4: What are default parameters in JavaScript functions?
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();  // Hello, Guest!
greet("Ritik");  // Hello, Ritik!

// Q5: What is the event loop in JavaScript?
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
// Output: Start, End, Timeout

// Q6: How do you deep clone an object in JavaScript?
const obj = { a: 1, b: { c: 2 } };
const deepClone = JSON.parse(JSON.stringify(obj));

obj.b.c = 3;
console.log(deepClone.b.c);  // 2

// Q7: What is a IIFE (Immediately Invoked Function Expression)?
(function() {
  console.log("This is an IIFE");
})();

// Q8: What is the 'rest' operator in JavaScript?
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // 15

// Q9: What is the 'spread' operator in JavaScript?
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);  // [1, 2, 3, 4, 5]

// Q10: What is the use of the 'delete' operator in JavaScript?
const obj = { name: "Ritik", age: 25 };
delete obj.age;
console.log(obj);  // { name: 'Ritik' }

// Q11: What are the different ways to iterate over an array in JavaScript?
const arr3 = [1, 2, 3, 4];

arr.forEach((num) => console.log(num));  // Using forEach

for (let num of arr) {
  console.log(num);  // Using for...of
}

for (let i in arr) {
  console.log(arr[i]);  // Using for...in
}

// Q12: How do you create a class in JavaScript?
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Ritik", 25);
person1.greet();  // Hello, my name is Ritik and I am 25 years old.

// Q13: What is the 'super' keyword in JavaScript?
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    super.speak();
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();  // Buddy makes a sound, Buddy barks

// Q14: What is the purpose of the 'set' object in JavaScript?
const set = new Set([1, 2, 3, 4, 5, 5]);
console.log(set);  // Set { 1, 2, 3, 4, 5 }

// Q15: What is the 'weakSet' in JavaScript?
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);

console.log(weakSet.has(obj));  // true

// Q16: What is the 'Map' object in JavaScript?
const map = new Map();
map.set("name", "Ritik");
map.set("age", 25);
console.log(map.get("name"));  // Ritik

// Q17: How do you check if an object is an array in JavaScript?
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray({ a: 1 }));  // false

// Q18: What is the 'typeof' operator in JavaScript?
console.log(typeof "Hello");  // string
console.log(typeof 10);  // number
console.log(typeof {});  // object
console.log(typeof null);  // object (this is a known bug in JavaScript)

// Q19: How do you create a promise in JavaScript?
const myPromise = new Promise((resolve, reject) => {
  let isSuccessful = true;

  if (isSuccessful) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Q20: What is 'map()' method in JavaScript?
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);  // [2, 4, 6]

// Q21: How do you check if a variable is an instance of a class in JavaScript?
class Person {}

const personInstance = new Person();
console.log(personInstance instanceof Person);  // true

// Q22: What is the 'bind' method in JavaScript?
const person = {
  name: "Ritik",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

const boundGreet = person.greet.bind(person);
boundGreet();  // Hello, Ritik

// Q23: What is the purpose of 'Object.assign' in JavaScript?
const obj1 = { name: "Ritik" };
const obj2 = { age: 25 };

const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);  // { name: 'Ritik', age: 25 }

// Q24: What is 'JSON.parse' and 'JSON.stringify' in JavaScript?
const obj = { name: "Ritik", age: 25 };
const jsonString = JSON.stringify(obj);  // Convert object to string
console.log(jsonString);  // '{"name":"Ritik","age":25}'

const parsedObj = JSON.parse(jsonString);  // Convert string to object
console.log(parsedObj);  // { name: 'Ritik', age: 25 }

// Q25: How do you check if a string contains a substring in JavaScript?
const str = "JavaScript is awesome!";
console.log(str.includes("awesome"));  // true
console.log(str.includes("Python"));  // false
