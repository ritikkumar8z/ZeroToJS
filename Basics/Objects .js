/**
 * 📘 JavaScript Objects (keys, values, entries, destructuring, rest/spread)
 * Author: Ritik Kumar
 * Date: 7 Jan 2025
 *
 * 👉 Objects store data in key-value pairs.
 *    They are the backbone of most JS applications.
 */

// ------------------------------
// 1. Creating Objects
// ------------------------------
let person = {
  name: "Ritik",
  age: 22,
  country: "India",
  skills: ["JS", "React", "Node"]
};

console.log("Person object:", person);
console.log("Name:", person.name);     // dot notation
console.log("Country:", person["country"]); // bracket notation

// ------------------------------
// 2. Object.keys(), Object.values(), Object.entries()
// ------------------------------
console.log("Keys:", Object.keys(person));     // ["name","age","country","skills"]
console.log("Values:", Object.values(person)); // ["Ritik",22,"India",["JS","React","Node"]]
console.log("Entries:", Object.entries(person));
// [["name","Ritik"], ["age",22], ["country","India"], ["skills",["JS","React","Node"]]]

// ------------------------------
// 3. Object Destructuring
// ------------------------------
let { name, age, country } = person;
console.log("Destructured ->", name, age, country); // Ritik 22 India

// Renaming variables while destructuring
let { name: fullName, age: years } = person;
console.log("Renamed ->", fullName, years); // Ritik 22

// Nested destructuring
let { skills: [firstSkill, secondSkill] } = person;
console.log("Nested destructuring ->", firstSkill, secondSkill); // JS React

// ------------------------------
// 4. Spread operator (...)
// ------------------------------
// Copy object or merge multiple objects
let address = { city: "Jaipur", pin: 302001 };
let personWithAddress = { ...person, ...address };

console.log("Spread ->", personWithAddress);

// ------------------------------
// 5. Rest operator (...)
// ------------------------------
// Collect remaining properties into a new object
let { country: c, ...rest } = person;
console.log("Rest -> country:", c, "| rest:", rest);

// ------------------------------
// 6. Object.freeze() vs Object.seal()
// ------------------------------
let user = { id: 1, username: "admin" };

Object.freeze(user); // ❌ cannot add/remove/change properties
// user.username = "root"; // ignored in strict mode -> error
console.log("Freeze ->", user);

let settings = { theme: "dark", layout: "grid" };
Object.seal(settings); // can change values but cannot add/remove keys
settings.theme = "light"; // ✅ allowed
// settings.newKey = "value"; ❌ not allowed
console.log("Seal ->", settings);

/**
 * 🎯 Key Takeaways:
 * - Object.keys(obj) → array of keys
 * - Object.values(obj) → array of values
 * - Object.entries(obj) → array of [key,value] pairs
 * - Destructuring → extract values easily (supports renaming & nested)
 * - Spread (...) → clone or merge objects
 * - Rest (...) → collect remaining properties
 * - freeze() → no changes allowed
 * - seal() → can update values but cannot add/remove keys
 */
