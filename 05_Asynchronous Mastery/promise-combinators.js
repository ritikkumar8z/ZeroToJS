/**
 * 📘 JavaScript Promise Combinators
 * Topic: all, race, allSettled, any
 * Author: Ritik Kumar
 * Date: 3 Feb 2025
 */

// Helper: fake async function
function fakeFetch(label, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(`❌ ${label} failed`);
      else resolve(`✅ ${label} success`);
    }, delay);
  });
}

// ------------------------------
// 1. Promise.all
// ------------------------------
// ✅ Resolves when ALL succeed
// ❌ Rejects immediately if ANY fails
Promise.all([
  fakeFetch("Task 1", 500),
  fakeFetch("Task 2", 1000),
  fakeFetch("Task 3", 1500),
])
  .then((results) => console.log("Promise.all results:", results))
  .catch((err) => console.error("Promise.all error:", err));

// ------------------------------
// 2. Promise.race
// ------------------------------
// Resolves/rejects as soon as the FIRST promise settles
Promise.race([
  fakeFetch("Slow task", 2000),
  fakeFetch("Fast task", 800),
])
  .then((result) => console.log("Promise.race winner:", result))
  .catch((err) => console.error("Promise.race error:", err));

// ------------------------------
// 3. Promise.allSettled
// ------------------------------
// ✅ Always resolves (waits for all), 
// returns status for each promise
Promise.allSettled([
  fakeFetch("Task A", 600),
  fakeFetch("Task B", 1200, true),
  fakeFetch("Task C", 900),
]).then((results) => {
  console.log("Promise.allSettled results:");
  results.forEach((res, i) => console.log(`Task ${i + 1}:`, res));
});

// ------------------------------
// 4. Promise.any
// ------------------------------
// ✅ Resolves with FIRST successful promise
// ❌ Rejects only if ALL fail
Promise.any([
  fakeFetch("Fail 1", 500, true),
  fakeFetch("Fail 2", 1000, true),
  fakeFetch("Success 3", 1500),
])
  .then((res) => console.log("Promise.any result:", res))
  .catch((err) => console.error("Promise.any error:", err));
