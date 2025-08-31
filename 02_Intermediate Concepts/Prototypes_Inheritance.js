/**
 * 📘 JavaScript Prototypes & Inheritance
 * Author: Ritik Kumar
 * Date: 13 Jan 2025
 *
 * 👉 Prototype:
 *    - Every JS object has a hidden property [[Prototype]] (aka __proto__).
 *    - Objects inherit properties/methods from their prototype chain.
 *
 * 👉 Inheritance:
 *    - Reusing methods/properties of one object in another.
 *    - Achieved via prototype chain or ES6 classes.
 */
 
// ------------------------------
// 1. Prototype Basics
// ------------------------------
const person = {
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const user = {
  name: "Ritik",
  age: 22,
};

user.__proto__ = person; // Inherit from person
user.greet(); // Hello, my name is Ritik

// ------------------------------
// 2. Constructor Functions + Prototype
// ------------------------------
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log(`${this.type} makes a sound`);
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound

const cat = new Animal("Cat");
cat.speak(); // Cat makes a sound

// ------------------------------
// 3. Prototype Chain
// ------------------------------
console.log(dog.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)

// ------------------------------
// 4. Inheritance with Constructor Functions
// ------------------------------
function Vehicle(name) {
  this.name = name;
}
Vehicle.prototype.move = function () {
  console.log(`${this.name} is moving`);
};

function Car(name, brand) {
  Vehicle.call(this, name); // inherit properties
  this.brand = brand;
}

// Inherit methods
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
  console.log(`${this.brand} car is honking 🚗`);
};

const myCar = new Car("Sedan", "Toyota");
myCar.move(); // Sedan is moving
myCar.honk(); // Toyota car is honking 🚗

// ------------------------------
// 5. ES6 Class Syntax (syntactic sugar)
// ------------------------------
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I’m ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name); // call parent constructor
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying in grade ${this.grade}`);
  }
}

const student1 = new Student("Ritik", "BCA");
student1.greet(); // Hi, I’m Ritik
student1.study(); // Ritik is studying in grade BCA

/**
 * 🎯 Key Takeaways:
 * - Prototypes form the backbone of inheritance in JS.
 * - __proto__ links objects to their prototype.
 * - Constructor functions use `.prototype` for method sharing.
 * - ES6 classes provide cleaner syntax but still use prototypes under the hood.
 */
