/**
 * 📘 JavaScript WebSockets
 * Author: Ritik Kumar
 * Date: 5 Feb 2025
 *
 * - WebSockets provide full-duplex, real-time communication
 *   (unlike HTTP which is request/response).
 * - Works great for chat apps, live updates, games, stock prices, etc.
 */

// ------------------------------
// 1. Basic WebSocket Connection
// ------------------------------
const socket = new WebSocket("wss://echo.websocket.org"); // public echo server

// When connection opens
socket.addEventListener("open", () => {
  console.log("✅ Connected to server");
  socket.send("Hello WebSocket! 👋"); // send message
});

// Listen for messages
socket.addEventListener("message", (event) => {
  console.log("📩 Received:", event.data);
});

// Handle errors
socket.addEventListener("error", (err) => {
  console.error("❌ WebSocket error:", err);
});

// Handle close
socket.addEventListener("close", () => {
  console.log("🔌 Connection closed");
});

// ------------------------------
// 2. Reconnection Logic (simple)
// ------------------------------
function connectWithRetry(url, retries = 3) {
  let ws;
  let attempt = 0;

  function connect() {
    ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("✅ Connected (retry logic)");
      ws.send("Ping with retry test!");
    };

    ws.onmessage = (e) => console.log("📩 Message:", e.data);

    ws.onclose = () => {
      if (attempt < retries) {
        attempt++;
        console.log(`⚠️ Reconnecting... (attempt ${attempt})`);
        setTimeout(connect, 1000 * attempt); // exponential backoff
      } else {
        console.log("❌ Failed after retries");
      }
    };
  }

  connect();
}
connectWithRetry("wss://echo.websocket.events");

// ------------------------------
// 3. Sending JSON Data
// ------------------------------
function sendJSON(socket, obj) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(obj));
  } else {
    console.warn("⚠️ Socket not ready");
  }
}

// Example usage after a delay (to ensure open):
setTimeout(() => {
  sendJSON(socket, { type: "chat", user: "Ritik", msg: "Hello World 🌍" });
}, 2000);

// ------------------------------
// 4. Heartbeat (keep alive)
// ------------------------------
function startHeartbeat(ws, interval = 5000) {
  setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send("💓 heartbeat");
    }
  }, interval);
}
startHeartbeat(socket);
