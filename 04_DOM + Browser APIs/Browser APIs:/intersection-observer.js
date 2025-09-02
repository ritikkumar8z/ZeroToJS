/**
 * 📘 JavaScript - IntersectionObserver API
 * Author: Ritik Kumar
 * Date: 30 Jan 2025
 *
 * 👉 Detect when elements enter/leave the viewport
 * Use cases: Lazy loading, infinite scroll, animations
 */

// ------------------------------
// 1. Basic Observer
// ------------------------------
const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("✅ Visible:", entry.target);

        // Example: Add animation class
        entry.target.classList.add("visible");

        // If we only need it once:
        obs.unobserve(entry.target);
      }
    });
  },
  {
    root: null, // viewport (can set container element)
    threshold: 0.5, // % of element visible (0–1)
  }
);

boxes.forEach((box) => observer.observe(box));

// ------------------------------
// 2. Lazy Loading Images Example
// ------------------------------
const lazyImages = document.querySelectorAll("img[data-src]");

const imageObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // set real src
      img.removeAttribute("data-src");
      obs.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => imageObserver.observe(img));






// 📌 Example HTML:
```
<style>
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
  .box {
    height: 150px;
    margin: 20px;
    background: lightgray;
    opacity: 0;
    transition: opacity 0.8s ease;
  }
  .box.visible {
    opacity: 1;
    background: lightgreen;
  }
  img {
    width: 100%;
    max-width: 400px;
    margin: 20px 0;
    display: block;
  }
</style>

<h2>IntersectionObserver Demo</h2>

<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>

<h2>Lazy Loading Images</h2>
<img data-src="https://picsum.photos/id/237/400/200" alt="Lazy dog" />
<img data-src="https://picsum.photos/id/238/400/200" alt="Lazy nature" />
<img data-src="https://picsum.photos/id/239/400/200" alt="Lazy city" />

<script src="28-intersection-observer.js"></script>
```

/*
✅ Use cases of IntersectionObserver:

Infinite scroll (load more content when user reaches bottom)
Lazy loading images/videos
Scroll-based animations
Tracking ad viewability
*/






