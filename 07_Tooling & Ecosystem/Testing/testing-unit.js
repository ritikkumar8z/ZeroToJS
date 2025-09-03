/**
 * 📘 Unit Testing in JavaScript (Jest & Vitest)
 * Author: Ritik Kumar
 * Date: 14 Feb 2025
 *
 * - Unit Test = test small, isolated pieces of code (functions/classes).
 * - Jest → popular, works with any JS project.
 * - Vitest → modern, super-fast, works seamlessly with Vite. 
 */

// ------------------------------
// 1. Example Function to Test
// ------------------------------
function add(a, b) {
  return a + b;
}
function isEven(n) {
  return n % 2 === 0;
}
module.exports = { add, isEven }; // for Jest

// ------------------------------
// 2. Jest Setup
// ------------------------------
// Install:
// $ npm install -D jest
// Add to package.json:
// "scripts": { "test": "jest" }

// Create file: add.test.js
/**
const { add, isEven } = require("./46-testing-unit");

test("adds 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("checks even number", () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(5)).toBe(false);
});
*/

// Run: $ npm test

// ------------------------------
// 3. Vitest Setup (for Vite projects)
// ------------------------------
// Install:
// $ npm install -D vitest
// package.json:
/**
"scripts": {
  "test": "vitest"
}
*/

// vite.config.js:
/**
import { defineConfig } from "vite";
export default defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
});
*/

// Create file: add.test.js
/**
import { describe, it, expect } from "vitest";
import { add, isEven } from "./46-testing-unit";

describe("add()", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("isEven()", () => {
  it("should return true for even numbers", () => {
    expect(isEven(4)).toBe(true);
  });
  it("should return false for odd numbers", () => {
    expect(isEven(5)).toBe(false);
  });
});
*/

// Run: $ npm run test

// ------------------------------
// 4. Snapshot Testing (Jest example)
// ------------------------------
// For React/objects, store expected output snapshot.
// test("object snapshot", () => {
//   const obj = { id: 1, name: "Ritik" };
//   expect(obj).toMatchSnapshot();
// });

// ------------------------------
// 5. Best Practices
// ------------------------------
// - Keep tests small, isolated.
// - One test file per module (same name + .test.js).
// - Use descriptive test names.
// - Test edge cases, not just happy path.
