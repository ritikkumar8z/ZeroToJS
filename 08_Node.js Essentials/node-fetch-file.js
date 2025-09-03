/**
 * 📘 Fetch + File Handling in Node.js
 * Author: Ritik Kumar
 * Date: 22 Feb 2025
 *
 * Node.js (v18+) has fetch API built-in (no need for node-fetch).
 * We can fetch data from APIs and save/read files with fs.
 */

import fs from "fs";
import path from "path";

// ------------------------------
// 1. Fetch JSON data & save to file
// ------------------------------
const url = "https://jsonplaceholder.typicode.com/posts";

try {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! ${res.status}`);

  const data = await res.json();

  // Save to file
  fs.writeFileSync("posts.json", JSON.stringify(data, null, 2));
  console.log("✅ Posts saved to posts.json");
} catch (err) {
  console.error("❌ Fetch error:", err.message);
}

// ------------------------------
// 2. Fetch an image & save locally
// ------------------------------
const imgUrl = "https://picsum.photos/200"; // random image
const imgPath = path.join("downloads", "image.jpg");

// Ensure folder exists
if (!fs.existsSync("downloads")) {
  fs.mkdirSync("downloads");
}

try {
  const res = await fetch(imgUrl);
  const buffer = Buffer.from(await res.arrayBuffer());

  fs.writeFileSync(imgPath, buffer);
  console.log("✅ Image saved at:", imgPath);
} catch (err) {
  console.error("❌ Image fetch error:", err.message);
}

// ------------------------------
// 3. Read file & send back (like API)
// ------------------------------
import express from "express";
const app = express();
const PORT = 3000;

// Serve JSON from file
app.get("/posts", (req, res) => {
  try {
    const file = fs.readFileSync("posts.json", "utf-8");
    res.json(JSON.parse(file));
  } catch (err) {
    res.status(500).json({ error: "File not found, fetch first!" });
  }
});

// Serve downloaded image
app.get("/image", (req, res) => {
  res.sendFile(path.resolve(imgPath));
});

app.listen(PORT, () => {
  console.log(`🚀 API running at http://localhost:${PORT}`);
});

/**
 * Steps:
 * 1. Run: node 54-node-fetch-file.js
 * 2. It fetches posts + image, saves locally
 * 3. Visit:
 *    - http://localhost:3000/posts → JSON data
 *    - http://localhost:3000/image → Random image
 */
