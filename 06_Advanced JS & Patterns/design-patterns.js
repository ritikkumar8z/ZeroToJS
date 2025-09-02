/**
 * 📘 JavaScript Design Patterns (Module, Factory, Observer, Singleton)
 * Author: Ritik Kumar
 * Date: 6 Feb 2025
 *
 * - Patterns = reusable solutions to common problems.
 * - JS supports many OOP + functional patterns.
 */

// ------------------------------
// 1. Module Pattern
// ------------------------------
// Encapsulation using closures
const CounterModule = (function () {
  let count = 0; // private
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
})();
console.log("Module Pattern:", CounterModule.increment()); // 1
console.log("Module Pattern:", CounterModule.getCount()); // 1

// ------------------------------
// 2. Factory Pattern
// ------------------------------
// Create objects without specifying exact class
function UserFactory(role) {
  switch (role) {
    case "admin":
      return { role, permissions: ["read", "write", "delete"] };
    case "editor":
      return { role, permissions: ["read", "write"] };
    default:
      return { role, permissions: ["read"] };
  }
}
const admin = UserFactory("admin");
console.log("Factory Pattern:", admin);

// ------------------------------
// 3. Observer Pattern (Pub/Sub)
// ------------------------------
// One-to-many dependency, event-driven
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    (this.events[event] || (this.events[event] = [])).push(listener);
  }
  emit(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
}
const emitter = new EventEmitter();
emitter.on("message", data => console.log("Observer got:", data));
emitter.emit("message", "Hello World!");

// ------------------------------
// 4. Singleton Pattern
// ------------------------------
// Ensure only one instance exists
class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    this.timestamp = Date.now();
    Singleton.instance = this;
  }
}
const s1 = new Singleton();
const s2 = new Singleton();
console.log("Singleton same instance?", s1 === s2); // true
console.log("Singleton timestamp:", s1.timestamp, s2.timestamp);
