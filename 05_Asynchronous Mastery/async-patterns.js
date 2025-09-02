/**
 * 📘 JavaScript Asynchronous Patterns
 * Topic: Callbacks → Promises → Async/Await
 * Author: Ritik Kumar
 * Date: 2 Feb 2025
 */

// ------------------------------
// 1. Callbacks (old-school async handling)
// ------------------------------
function fetchDataCallback(url, callback) {
  setTimeout(() => {
    // fake data fetch
    callback(`Data from ${url}`);
  }, 1000);
}

fetchDataCallback("api/callback", (result) => {
  console.log("📞 Callback:", result);
});

// ❌ Problem: Callback Hell (nested callbacks)
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
    }, 1000);
  }, 1000);
}, 1000);

// ------------------------------
// 2. Promises (cleaner async)
// ------------------------------
function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) resolve(`Data from ${url}`);
      else reject("❌ Invalid URL");
    }, 1000);
  });
}

fetchDataPromise("api/promise")
  .then((result) => {
    console.log("✅ Promise resolved:", result);
    return fetchDataPromise("api/next");
  })
  .then((next) => {
    console.log("➡️ Chained promise:", next);
  })
  .catch((err) => console.error("❌ Error:", err))
  .finally(() => console.log("🎉 Done"));

// ------------------------------
// 3. Async/Await (modern, syntactic sugar over Promises)
// ------------------------------
async function fetchDataAsync() {
  try {
    const res1 = await fetchDataPromise("api/async1");
    console.log("🔹 Await 1:", res1);

    const res2 = await fetchDataPromise("api/async2");
    console.log("🔹 Await 2:", res2);
  } catch (err) {
    console.error("❌ Async error:", err);
  } finally {
    console.log("🎉 Async/Await complete");
  }
}
fetchDataAsync();

// ------------------------------
// 4. Parallel execution with Promise.all
// ------------------------------
async function parallelFetch() {
  try {
    const results = await Promise.all([
      fetchDataPromise("api/one"),
      fetchDataPromise("api/two"),
      fetchDataPromise("api/three"),
    ]);
    console.log("🚀 Promise.all results:", results);
  } catch (err) {
    console.error("❌ Promise.all error:", err);
  }
}
parallelFetch();

// ------------------------------
// 5. Promise.race / any
// ------------------------------
Promise.race([
  fetchDataPromise("api/slow"), // slower
  fetchDataPromise("api/fast"), // faster
]).then((fastest) => console.log("🏁 Promise.race:", fastest));

Promise.any([
  fetchDataPromise("api/a"),
  fetchDataPromise("api/b"),
]).then((firstSuccess) => console.log("🥇 Promise.any:", firstSuccess));
