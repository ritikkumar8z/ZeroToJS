/**
 * 📘 JavaScript Asynchronous Mastery
 * Topic: Event Loop, Call Stack, Task Queue, Microtasks
 * Author: Ritik Kumar
 * Date: 2 Feb 2025
 *
 * 👉 JS runs single-threaded with an event loop to handle async tasks.
 */

// ------------------------------
// 1. Call Stack (synchronous execution)
// ------------------------------
function foo() {
  console.log("foo");
}
function bar() {
  console.log("bar start");
  foo();
  console.log("bar end");
}
bar();
// Execution: bar -> foo -> bar end

// ------------------------------
// 2. Macrotask Queue (setTimeout, setInterval, I/O, DOM events)
// ------------------------------
console.log("Start");

setTimeout(() => {
  console.log("⏰ setTimeout (macrotask)");
}, 0);

console.log("End");

// Output:
// Start
// End
// ⏰ setTimeout (macrotask)

// ------------------------------
// 3. Microtask Queue (Promises, queueMicrotask, MutationObserver)
// ------------------------------
console.log("Microtask demo");

Promise.resolve().then(() => {
  console.log("✅ Promise then (microtask)");
});

queueMicrotask(() => {
  console.log("🌀 queueMicrotask (microtask)");
});

console.log("After scheduling microtasks");

// Output order:
// Microtask demo
// After scheduling microtasks
// ✅ Promise then (microtask)
// 🌀 queueMicrotask (microtask)

// ------------------------------
// 4. Event Loop Explanation
// ------------------------------
/**
 * 🔄 Flow:
 * - Call Stack executes sync code
 * - Then Event Loop checks Microtask Queue
 * - Then moves to Macrotask Queue
 *
 * Order of priority:
 * 1. Call stack
 * 2. Microtasks (Promises, queueMicrotask, MutationObserver)
 * 3. Macrotasks (setTimeout, setInterval, I/O, DOM events)
 */

console.log("Event Loop order test");

setTimeout(() => console.log("⏰ setTimeout"), 0);

Promise.resolve().then(() => console.log("✅ Promise"));

queueMicrotask(() => console.log("🌀 queueMicrotask"));

console.log("End of script");

// Expected Output order:
// Event Loop order test
// End of script
// ✅ Promise
// 🌀 queueMicrotask
// ⏰ setTimeout
