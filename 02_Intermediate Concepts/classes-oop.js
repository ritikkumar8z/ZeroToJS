/**
 * 📘 JavaScript Classes & OOP
 * Author: Ritik Kumar
 * Date: 14 Jan 2025
 *
 * 👉 Classes in JS:
 *    - Introduced in ES6 (2015).
 *    - Syntactic sugar over prototype-based inheritance.
 *    - Support constructor, instance methods, static methods, inheritance.
 *
 * OOP Principles (in JS):
 * 1. Encapsulation – Group data & methods together.
 * 2. Abstraction – Hide internal details, show only usage.
 * 3. Inheritance – Share behavior across classes.
 * 4. Polymorphism – Same method name, different implementation.
 */

// ------------------------------
// 1. Basic Class & Constructor
// ------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance Method
  greet() {
    console.log(`Hi, I’m ${this.name} and I’m ${this.age} years old.`);
  }
}

const p1 = new Person("Ritik", 22);
p1.greet(); // Hi, I’m Ritik and I’m 22 years old.

// ------------------------------
// 2. Inheritance (extends + super)
// ------------------------------
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // call parent constructor
    this.grade = grade;
  }

  // Overriding method (Polymorphism)
  greet() {
    console.log(
      `Hello, I’m ${this.name}, ${this.age} years old and studying in ${this.grade}`
    );
  }

  study() {
    console.log(`${this.name} is studying hard 📚`);
  }
}

const s1 = new Student("Kumar", 21, "BCA");
s1.greet(); // Overridden method
s1.study(); // Kumar is studying hard 📚

// ------------------------------
// 3. Static Methods
// ------------------------------
class MathUtil {
  static add(a, b) {
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtil.add(2, 3)); // 5
console.log(MathUtil.multiply(4, 5)); // 20

// ------------------------------
// 4. Getters & Setters
// ------------------------------
class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary; // private-like naming convention
  }

  get salary() {
    return `₹${this._salary}`;
  }

  set salary(amount) {
    if (amount < 0) {
      console.log("❌ Salary cannot be negative");
    } else {
      this._salary = amount;
    }
  }
}

const emp = new Employee("Ritik", 20000);
console.log(emp.salary); // ₹20000
emp.salary = 25000;
console.log(emp.salary); // ₹25000

// ------------------------------
// 5. Private Fields (#) (ES2022)
// ------------------------------
class BankAccount {
  #balance = 0; // private field

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ₹${amount}, New Balance: ₹${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("❌ Insufficient funds");
    } else {
      this.#balance -= amount;
      console.log(`Withdrew: ₹${amount}, Balance: ₹${this.#balance}`);
    }
  }

  // Access balance safely
  getBalance() {
    return `Balance: ₹${this.#balance}`;
  }
}

const acc = new BankAccount("RK", 1000);
acc.deposit(500); // Deposited: ₹500
acc.withdraw(200); // Withdrew: ₹200
console.log(acc.getBalance()); // Balance: ₹1300
// console.log(acc.#balance); ❌ Error: private field

/**
 * 🎯 Key Takeaways:
 * - class = syntactic sugar for prototypes.
 * - constructor initializes object state.
 * - extends + super = inheritance.
 * - static methods belong to class, not instances.
 * - getters/setters control property access.
 * - #privateFields ensure encapsulation.
 */
