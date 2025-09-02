/**
 * 📘 JavaScript Browser API - Geolocation
 * Author: Ritik Kumar
 * Date: 28 Jan 2025
 *
 * 👉 Access user location (lat, long) with permission
 */

// ------------------------------
// 1. Check if geolocation is available
// ------------------------------
if ("geolocation" in navigator) {
  console.log("✅ Geolocation supported");

  // ------------------------------
  // 2. Get current position
  // ------------------------------
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("📍 Current Position:");
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
      console.log("Accuracy (meters):", position.coords.accuracy);

      // Example: show on page
      document.getElementById("output").innerText =
        `Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`;
    },
    (error) => {
      console.error("❌ Error:", error.message);
    }
  );

  // ------------------------------
  // 3. Watch position (real-time tracking)
  // ------------------------------
  const watchId = navigator.geolocation.watchPosition(
    (pos) => {
      console.log("🔄 Updated:", pos.coords.latitude, pos.coords.longitude);
    },
    (err) => console.error("⚠️ Watch error:", err.message),
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
  );

  // Stop watching after 15s (demo)
  setTimeout(() => navigator.geolocation.clearWatch(watchId), 15000);

} else {
  console.log("❌ Geolocation NOT supported in this browser");
}

/**
 * 🎯 Key Notes:
 * - getCurrentPosition(success, error, options) → one-time location
 * - watchPosition(success, error, options) → continuous tracking
 * - Options:
 *    enableHighAccuracy → use GPS if possible
 *    maximumAge → cache result (ms)
 *    timeout → max wait time (ms)
 * - Requires user permission!
 */




//📌 Example HTML:
```
<button onclick="getLocation()">Get Location</button>
<p id="output">Location will appear here</p>
<script src="26-geolocation-api.js"></script>
```





