/**
 * 📘 JavaScript Map, Set, WeakMap, WeakSet
 * Author: Ritik Kumar
 * Date: 17 Jan 2025
 *
 * 👉 Modern collections for key-value and unique data handling
 */

// ------------------------------
// 1. Set (unique values)
// ------------------------------
const numbers = new Set([1, 2, 3, 3, 4]); // duplicates ignored
numbers.add(5);
numbers.add(2); // ignored
console.log("Set ->", numbers); // {1,2,3,4,5}
console.log("Has 3?", numbers.has(3)); // true
numbers.delete(4);
console.log("After delete ->", numbers);

// Iterating
for (let num of numbers) console.log("Iterate Set:", num);

// ------------------------------
// 2. Map (key-value, keys can be any type)
// ------------------------------
const userMap = new Map();
userMap.set("name", "Ritik");
userMap.set(1, "Number Key");
userMap.set({ id: 1 }, "Object Key"); // keys are references

console.log("Map ->", userMap);
console.log("Get name:", userMap.get("name"));
console.log("Has key 1?", userMap.has(1));
userMap.delete(1);

for (let [key, value] of userMap) {
  console.log(`Map entry: ${key} -> ${value}`);
}

// ------------------------------
// 3. WeakSet (only objects, weakly held)
// ------------------------------
let obj1 = { id: 1 };
let obj2 = { id: 2 };

const weakSet = new WeakSet([obj1, obj2]);
console.log("WeakSet has obj1?", weakSet.has(obj1)); // true

// obj1 = null; // after this, obj1 may be garbage collected
// WeakSet doesn’t prevent cleanup (no size/iteration)

// ------------------------------
// 4. WeakMap (keys must be objects)
// ------------------------------
let user1 = { name: "RK" };
let user2 = { name: "Dev" };

const weakMap = new WeakMap();
weakMap.set(user1, "Some secret");
weakMap.set(user2, "Another secret");

console.log("WeakMap get user1 ->", weakMap.get(user1));

// user1 = null; // eligible for GC, WeakMap cleans automatically

/**
 * 🎯 Key Takeaways:
 * - Set = unique values.
 * - Map = key-value store (any type of key).
 * - WeakSet/WeakMap = store objects without preventing garbage collection.
 * - Weak collections cannot be iterated (no size/keys/values).
 */
