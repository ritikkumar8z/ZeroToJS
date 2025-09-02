/**
 * 📘 JavaScript Modules (CJS vs ESM)
 * Author: Ritik Kumar
 * Date: 6 Feb 2025
 *
 * - Modules allow splitting code into reusable files.
 * - Two major systems:
 *   1. CommonJS (CJS) → Node.js (require/module.exports)
 *   2. ES Modules (ESM) → Modern JS (import/export)
 *
 * 🔑 Use ESM in modern projects, CJS only when working with older Node.js packages.
 */

// ------------------------------
// 1. CommonJS (CJS)
// ------------------------------

// file: math-cjs.js
// module.exports = { add, sub }
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
module.exports = { add, sub };

// file: app-cjs.js
const { add, sub } = require("./math-cjs");
console.log("CJS add:", add(2, 3));
console.log("CJS sub:", sub(5, 2));

// ------------------------------
// 2. ES Modules (ESM)
// ------------------------------

// file: math-esm.js
export function mul(a, b) { return a * b; }
export const div = (a, b) => a / b;

// default export
export default function square(x) { return x * x; }

// file: app-esm.mjs  (or set "type": "module" in package.json)
import square, { mul, div } from "./math-esm.js";
console.log("ESM mul:", mul(2, 3));
console.log("ESM div:", div(10, 2));
console.log("ESM square:", square(5));

// ------------------------------
// 3. Dynamic Import (ESM only)
// ------------------------------
async function loadMath() {
  const { mul } = await import("./math-esm.js"); // loaded on demand
  console.log("Dynamic import mul:", mul(4, 5));
}
loadMath();

// ------------------------------
// 4. Differences (CJS vs ESM)
// ------------------------------
/**
 * ✅ CommonJS
 * - Synchronous (require is blocking)
 * - Objects are exported (module.exports)
 * - Can be used anywhere in code
 * - Mainly for Node.js (older ecosystem)
 *
 * ✅ ES Modules
 * - Asynchronous (static analysis + tree shaking)
 * - `export` / `import`
 * - Must be at top-level (not inside functions)
 * - Works in browsers + Node.js (modern)
 */
