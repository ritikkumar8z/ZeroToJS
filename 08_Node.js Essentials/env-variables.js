/**
 * 📘 Environment Variables in Node.js
 * Author: Ritik Kumar
 * Date: 21 Feb 2025
 *
 * - Store secrets/configs outside code (API keys, DB URLs, ports).
 * - Access via process.env
 * - Use dotenv package for local development.
 */

// ------------------------------
// 1. Setup
// ------------------------------
// Install dotenv → npm install dotenv
import express from "express";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

const app = express();

// ------------------------------
// 2. Access env variables
// ------------------------------
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || "default-key";

// ------------------------------
// 3. Routes using env
// ------------------------------
app.get("/", (req, res) => {
  res.send(`🚀 Server running on PORT ${PORT}`);
});

app.get("/secure", (req, res) => {
  if (req.query.key === API_KEY) {
    res.json({ message: "Valid API Key ✅" });
  } else {
    res.status(403).json({ message: "Forbidden ❌ Invalid Key" });
  }
});

// ------------------------------
// 4. Start server
// ------------------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

/**
 * .env file example:
 *
 * PORT=4000
 * API_KEY=12345SECRET
 *
 * Run: node 53-env-variables.js
 * Open: http://localhost:4000/
 * Test: http://localhost:4000/secure?key=12345SECRET
 */
