/**
 * 📘 Simple REST API with Express.js
 * Author: Ritik Kumar
 * Date: 19 Feb 2025
 *
 * Express = Minimal & flexible Node.js framework for building APIs/web apps.
 * REST API = Representational State Transfer → standard for APIs.
 */

// ------------------------------
// 1. Setup
// ------------------------------
// Install: npm install express
import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// ------------------------------
// 2. Sample Data (in-memory DB)
// ------------------------------
let users = [
  { id: 1, name: "Ritik", email: "ritik@example.com" },
  { id: 2, name: "Kumar", email: "kumar@example.com" },
];

// ------------------------------
// 3. REST API Endpoints
// ------------------------------

// GET → all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET → single user by id
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST → create user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT → update user
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name ?? user.name;
  user.email = req.body.email ?? user.email;
  res.json(user);
});

// DELETE → remove user
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.json({ message: "User deleted" });
});

// ------------------------------
// 4. Start Server
// ------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

/**
 * Test with Postman / curl:
 * - GET    /users
 * - GET    /users/1
 * - POST   /users   { "name": "New", "email": "new@example.com" }
 * - PUT    /users/1 { "name": "Updated" }
 * - DELETE /users/2
 */
