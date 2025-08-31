/**
 * 📘 JavaScript Error Handling (try/catch, custom errors)
 * Author: Ritik Kumar
 * Date: 15 Jan 2025
 *
 * 👉 Errors in JS:
 *    - SyntaxError: Invalid code (caught at parse-time, not runtime).
 *    - ReferenceError: Using an undefined variable.
 *    - TypeError: Wrong type (calling non-function, accessing props on null).
 *    - RangeError: Invalid length or range.
 *    - Custom Error: Defined by developer using `Error` or subclasses.
 *
 * ✅ Tools:
 *    - try { ... } catch (err) { ... } finally { ... }
 *    - throw new Error("msg")
 */

// ------------------------------
// 1. Basic try...catch
// ------------------------------
try {
  let num = 10;
  console.log(num / 2); // 5
  console.log(undefinedVar); // ❌ ReferenceError
} catch (err) {
  console.log("Caught Error ->", err.name, err.message);
} finally {
  console.log("Finally always runs ✅");
}

// ------------------------------
// 2. Throwing Custom Errors
// ------------------------------
function divide(a, b) {
  if (b === 0) {
    throw new Error("❌ Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // ❌ throws error
} catch (err) {
  console.error("Divide Error:", err.message);
}

// ------------------------------
// 3. Built-in Error Types
// ------------------------------
try {
  JSON.parse("{ invalid json }"); // ❌ SyntaxError
} catch (err) {
  console.log("JSON Error ->", err.name, err.message);
}

try {
  let arr = new Array(-5); // ❌ RangeError
} catch (err) {
  console.log("Range Error ->", err.name, err.message);
}

// ------------------------------
// 4. Custom Error Class
// ------------------------------
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function registerUser(user) {
  if (!user.name) throw new ValidationError("Name is required", "name");
  if (!user.email) throw new ValidationError("Email is required", "email");
  return `${user.name} registered successfully ✅`;
}

try {
  console.log(registerUser({ email: "test@mail.com" }));
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`Validation failed: ${err.field} -> ${err.message}`);
  } else {
    console.log("Unexpected Error:", err.message);
  }
}

// ------------------------------
// 5. Async/Await Error Handling
// ------------------------------
async function fetchData() {
  try {
    // Fake API call (rejects promise)
    throw new Error("Network request failed");
  } catch (err) {
    console.log("Async Error ->", err.message);
  }
}

fetchData();

/**
 * 🎯 Key Takeaways:
 * - Use try/catch/finally for safe execution.
 * - throw Error to signal problems.
 * - Extend Error for custom error types.
 * - Always handle async errors in promises/await.
 */
