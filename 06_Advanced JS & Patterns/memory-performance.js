/**
 * 📘 JavaScript Memory Leaks & Performance Optimization
 * Author: Ritik Kumar
 * Date: 9 Feb 2025
 *
 * - Memory leaks = memory kept alive even if no longer needed.
 * - Causes: global vars, event listeners, closures, timers, DOM refs.
 * - Optimizations: GC-friendly code, batching, caching, lazy-loading.
 */

// ------------------------------
// 1. Common Memory Leak Patterns
// ------------------------------

// ❌ Global variables (never released)
let bigData = new Array(1e6).fill("leak");
// Forgetting to nullify later → memory stuck

// ❌ Event listeners not removed
function attach() {
  const el = document.getElementById("btn");
  el.addEventListener("click", () => console.log("clicked"));
  // If 'el' removed later but listener not cleaned → leak
}

// ❌ setInterval without clearInterval
const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);
// clearInterval(intervalId) when not needed!

// ❌ Detached DOM nodes
function leakDOM() {
  const el = document.createElement("div");
  document.body.appendChild(el);
  document.body.removeChild(el);
  // But if we keep reference:
  window._leak = el; // stays in memory
}

// ------------------------------
// 2. Fixing & Preventing Leaks
// ------------------------------

// ✅ Clean up intervals
clearInterval(intervalId);

// ✅ Remove listeners
// el.removeEventListener("click", handler);

// ✅ Nullify references when done
bigData = null;

// ------------------------------
// 3. Performance Optimization
// ------------------------------

// (a) Debounce & Throttle
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
window.addEventListener("resize", debounce(() => {
  console.log("Resized (debounced)");
}, 200));

// (b) Memoization (cache results)
function slowSquare(n) {
  console.log("Computing...");
  return n * n;
}
const memo = {};
function memoSquare(n) {
  if (memo[n]) return memo[n];
  return (memo[n] = slowSquare(n));
}
console.log("Memoized:", memoSquare(4)); // computes
console.log("Memoized:", memoSquare(4)); // cached

// (c) Lazy loading images (example with 'loading=lazy' in HTML)

// (d) Batch DOM updates
const frag = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement("div");
  div.textContent = "Item " + i;
  frag.appendChild(div);
}
document.body.appendChild(frag); // ✅ 1 repaint, not 1000

// ------------------------------
// 4. Tools to Detect Leaks
// ------------------------------
// - Chrome DevTools → Performance tab, Memory tab.
// - Performance APIs: performance.now(), console.time()
console.time("loop");
for (let i = 0; i < 1e6; i++) {}
console.timeEnd("loop");




