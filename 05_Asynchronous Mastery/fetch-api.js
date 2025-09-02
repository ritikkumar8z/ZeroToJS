/**
 * 📘 JavaScript Fetch API + Error Handling
 * Author: Ritik Kumar
 * Date: 5 Feb 2025
 */

// ------------------------------
// 1. Basic Fetch
// ------------------------------
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    if (!res.ok) throw new Error("HTTP Error " + res.status); // ✅ check response
    return res.json();
  })
  .then((data) => console.log("Fetch success ->", data))
  .catch((err) => console.error("Fetch error ->", err.message));

// ------------------------------
// 2. Using Async/Await with try...catch
// ------------------------------
async function getUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("Failed to fetch user: " + res.status);
    const user = await res.json();
    console.log("User ->", user);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
getUser(1);

// ------------------------------
// 3. POST Request with JSON body
// ------------------------------
async function createPost(post) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    if (!res.ok) throw new Error("Failed to create post");
    const data = await res.json();
    console.log("Post created ->", data);
  } catch (err) {
    console.error("Create error:", err.message);
  }
}
createPost({ title: "New Post", body: "Hello World", userId: 1 });

// ------------------------------
// 4. Timeout / AbortController
// ------------------------------
async function fetchWithTimeout(url, timeout = 2000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    if (!res.ok) throw new Error("HTTP Error " + res.status);
    return await res.json();
  } catch (err) {
    if (err.name === "AbortError") {
      console.error("Fetch aborted: request took too long");
    } else {
      console.error("Fetch failed:", err.message);
    }
  }
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 1000);

// ------------------------------
// 5. Handling Different Errors
// ------------------------------
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status >= 400 && res.status < 500) {
        throw new Error("Client error " + res.status);
      } else if (res.status >= 500) {
        throw new Error("Server error " + res.status);
      }
    }
    return await res.json();
  } catch (err) {
    console.error("Network/Parsing error:", err.message);
    return null;
  }
}

safeFetch("https://jsonplaceholder.typicode.com/invalid-endpoint");
