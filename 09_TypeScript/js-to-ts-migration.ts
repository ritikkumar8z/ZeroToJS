/**
 * 📘 Gradually Migrating JavaScript → TypeScript
 * Author: Ritik Kumar
 * Date: 26 Feb 2025
 *
 * Strategy to convert JS projects to TS safely.
 * - Start small → one file or module at a time
 * - Incremental migration → keep project running
 */

// ------------------------------
// 1. Rename JS files to TS
// ------------------------------
// old: src/app.js → new: src/app.ts

// ------------------------------
// 2. Enable allowJs in tsconfig.json
// ------------------------------
/**
{
  "compilerOptions": {
    "allowJs": true,    // compile JS files
    "checkJs": false,   // optional: enable to check types in JS
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
*/

// ------------------------------
// 3. Add types gradually
// ------------------------------
// JS function (no type)
function sum(a, b) {
  return a + b;
}

// TS version
function sumTS(a: number, b: number): number {
  return a + b;
}

// ------------------------------
// 4. Convert modules step by step
// ------------------------------
/**
 * - Start with utilities / helper functions
 * - Then services / API modules
 * - Leave routes/controllers for last
 */

// ------------------------------
// 5. Use JSDoc for intermediate type safety
// ------------------------------
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addJSDoc(a, b) {
  return a + b;
}

// ------------------------------
// 6. Handle external JS libraries
// ------------------------------
/**
 * - Install type definitions if available
 *   npm install -D @types/lodash
 * - Or create custom d.ts files for untyped libraries
 *   declare module "my-untyped-lib";
 */

// ------------------------------
// 7. Compile and check
// ------------------------------
/**
 * npx tsc --noEmit
 * - Checks for type errors without generating JS
 * npx tsc
 * - Compiles TS → JS
 */

// ------------------------------
// 8. Summary / Strategy
// ------------------------------
/**
 * 1. Keep project runnable at each step
 * 2. Start with critical modules
 * 3. Use allowJs + checkJs for gradual safety
 * 4. Add explicit types gradually
 * 5. Use JSDoc if unsure
 * 6. Migrate tests last
 */
