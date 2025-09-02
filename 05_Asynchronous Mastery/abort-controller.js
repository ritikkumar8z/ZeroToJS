/**
 * 📘 JavaScript AbortController
 * Topic: Cancel async tasks (fetch, custom promises)
 * Author: Ritik Kumar
 * Date: 3 Feb 2025
 */

// ------------------------------
// 1. Using AbortController with fetch
// ------------------------------
const controller = new AbortController();
const { signal } = controller;

fetch("https://jsonplaceholder.typicode.com/posts", { signal })
  .then((res) => res.json())
  .then((data) => console.log("Fetched posts:", data.slice(0, 3)))
  .catch((err) => console.error("Fetch error:", err.name)); // -> AbortError if aborted

// Cancel request after 200ms
setTimeout(() => {
  controller.abort(); // Cancels fetch
  console.log("⏹️ Fetch aborted");
}, 200);

// ------------------------------
// 2. AbortController with custom async task
// ------------------------------
function fakeAsyncTask(label, delay, signal) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(`✅ ${label} done`), delay);

    // Listen for abort
    signal.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new Error(`❌ ${label} aborted`));
    });
  });
}

const customController = new AbortController();
fakeAsyncTask("Custom Task", 1000, customController.signal)
  .then(console.log)
  .catch((err) => console.error(err.message));

// Cancel after 500ms
setTimeout(() => customController.abort(), 500);

// ------------------------------
// 3. Abort multiple tasks with one controller
// ------------------------------
const multiController = new AbortController();

Promise.allSettled([
  fakeAsyncTask("Task 1", 300, multiController.signal),
  fakeAsyncTask("Task 2", 600, multiController.signal),
  fakeAsyncTask("Task 3", 900, multiController.signal),
])
  .then((results) => console.log("Multi-task results:", results));

// Cancel everything after 400ms
setTimeout(() => multiController.abort(), 400);
