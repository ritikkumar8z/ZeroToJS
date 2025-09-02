/**
 * 📘 JavaScript - Canvas & SVG Basics
 * Author: Ritik Kumar
 * Date: 29 Jan 2025
 *
 * 👉 Drawing with <canvas> and <svg>
 */

// ------------------------------
// 1. Canvas API (pixel-based)
// ------------------------------
function drawOnCanvas() {
  const canvas = document.getElementById("myCanvas");
  if (!canvas.getContext) {
    console.log("❌ Canvas not supported");
    return;
  }

  const ctx = canvas.getContext("2d");

  // Rectangle
  ctx.fillStyle = "skyblue";
  ctx.fillRect(20, 20, 150, 100);

  // Circle
  ctx.beginPath();
  ctx.arc(250, 70, 50, 0, Math.PI * 2);
  ctx.fillStyle = "orange";
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(20, 150);
  ctx.lineTo(300, 150);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Text
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Hello Canvas!", 20, 200);
}

// ------------------------------
// 2. SVG (vector-based)
// ------------------------------
// Example is directly in HTML (scalable, DOM-based)
// No JS needed to draw, but you can manipulate via JS



//📌 Example HTML:
```
<h3>Canvas Example</h3>
<canvas id="myCanvas" width="400" height="250" style="border:1px solid black"></canvas>
<script src="27-canvas-svg-basics.js"></script>
<script>
  drawOnCanvas();
</script>

<h3>SVG Example</h3>
<svg width="400" height="250" style="border:1px solid black">
  <!-- Rectangle -->
  <rect x="20" y="20" width="150" height="100" fill="skyblue" />

  <!-- Circle -->
  <circle cx="250" cy="70" r="50" fill="orange" />

  <!-- Line -->
  <line x1="20" y1="150" x2="300" y2="150" stroke="green" stroke-width="3" />

  <!-- Text -->
  <text x="20" y="200" font-size="20" fill="black">Hello SVG!</text>
</svg>
```


//🎯 Key differences:

//Canvas → pixel-based, faster for animations/games, no DOM nodes.
//SVG → vector-based, resolution independent, each shape is a DOM element (easier to style & interact).






