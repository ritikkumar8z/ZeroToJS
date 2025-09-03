/**
 * 📘 Express Middleware Basics
 * Author: Ritik Kumar
 * Date: 20 Feb 2025
 *
 * Middleware = Functions that run between request & response.
 * - Access req, res, next
 * - Can log, validate, authenticate, handle errors, etc.
 */

import express from "express";
const app = express();
const PORT = 3000;

// ------------------------------
// 1. Built-in Middleware
// ------------------------------
app.use(express.json()); // parses JSON body
app.use(express.urlencoded({ extended: true })); // parses form data

// ------------------------------
// 2. Application-level Middleware
// ------------------------------
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // continue to next middleware/route
});

// ------------------------------
// 3. Route-specific Middleware
// ------------------------------
const checkAuth = (req, res, next) => {
  if (req.headers["x-api-key"] === "12345") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Invalid API Key" });
  }
};

app.get("/public", (req, res) => {
  res.send("Public route, no auth required ✅");
});

app.get("/private", checkAuth, (req, res) => {
  res.send("Private route, valid API key ✅");
});

// ------------------------------
// 4. Error-handling Middleware
// ------------------------------
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Something went wrong!" });
});

// ------------------------------
// 5. Start Server
// ------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Middleware demo running at http://localhost:${PORT}`);
});

/**
 * Try:
 * - GET  /public
 * - GET  /private   (add header x-api-key: 12345)
 * - Remove key → should return 403
 */
