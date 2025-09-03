/**
 * 📘 Node.js Core Modules (fs, path, events, http)
 * Author: Ritik Kumar
 * Date: 18 Feb 2025
 *
 * Node.js = runtime for running JS outside the browser.
 * Core modules = built-in (no need to install).
 */

// ------------------------------
// 1. File System (fs)
// ------------------------------
import fs from "fs";

// Write to a file (creates if not exists)
fs.writeFileSync("hello.txt", "Hello, Node.js!");

// Read file (sync)
const data = fs.readFileSync("hello.txt", "utf-8");
console.log("File content:", data);

// Append to file
fs.appendFileSync("hello.txt", "\nNew line added!");

// Async read
fs.readFile("hello.txt", "utf-8", (err, content) => {
  if (err) throw err;
  console.log("Async read:", content);
});

// ------------------------------
// 2. Path
// ------------------------------
import path from "path";

const filePath = "/users/ritik/docs/file.txt";
console.log("Base name:", path.basename(filePath)); // file.txt
console.log("Dir name:", path.dirname(filePath)); // /users/ritik/docs
console.log("Extension:", path.extname(filePath)); // .txt

const joined = path.join("users", "ritik", "docs", "notes.txt");
console.log("Joined path:", joined); // users/ritik/docs/notes.txt

// ------------------------------
// 3. Events
// ------------------------------
import { EventEmitter } from "events";

const emitter = new EventEmitter();

// Listener
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit event
emitter.emit("greet", "Ritik"); // Hello, Ritik!

// Once listener
emitter.once("onceEvent", () => console.log("Runs only once"));
emitter.emit("onceEvent"); // triggered
emitter.emit("onceEvent"); // ignored

// ------------------------------
// 4. HTTP
// ------------------------------
import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

/**
 * Run: node 50-node-core-modules.js
 * Open browser → http://localhost:3000/
 */
