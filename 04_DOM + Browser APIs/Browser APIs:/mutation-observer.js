/**
 * 📘 JavaScript - MutationObserver API
 * Author: Ritik Kumar
 * Date: 31 Jan 2025
 *
 * 👉 Observe changes to the DOM (attributes, children, text)
 * Use cases: Custom UI updates, tracking dynamic content, building frameworks
 */

// ------------------------------
// 1. Basic Observer Setup
// ------------------------------
const targetNode = document.getElementById("target");

const config = {
  childList: true,   // observe additions/removals of child nodes
  attributes: true,  // observe attribute changes
  characterData: true, // observe text changes
  subtree: true,     // observe descendants as well
};

const callback = (mutationsList, observer) => {
  mutationsList.forEach((mutation) => {
    switch (mutation.type) {
      case "childList":
        console.log("👶 Child nodes changed:", mutation);
        break;
      case "attributes":
        console.log(
          `⚙️ Attribute "${mutation.attributeName}" modified on`,
          mutation.target
        );
        break;
      case "characterData":
        console.log("✏️ Text changed:", mutation.target.data);
        break;
    }
  });
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

// ------------------------------
// 2. Trigger Mutations
// ------------------------------
setTimeout(() => {
  // Change text
  targetNode.textContent = "New text content ✅";

  // Add child
  const child = document.createElement("span");
  child.textContent = " (child added)";
  targetNode.appendChild(child);

  // Change attribute
  targetNode.setAttribute("data-status", "updated");
}, 2000);

// ------------------------------
// 3. Stop observing (optional)
// ------------------------------
// observer.disconnect();






// 📌 Example HTML:
```
<style>
  #target {
    padding: 15px;
    border: 2px solid #333;
    margin: 20px;
    font-family: sans-serif;
  }
</style>

<h2>MutationObserver Demo</h2>
<div id="target" data-status="initial">Original text</div>

<script src="29-mutation-observer.js"></script>
```


/*
✅ Use cases of MutationObserver:

Watching for dynamically injected ads or content
Custom UI frameworks (React/Angular internally use similar concepts)
Validating DOM changes for security or logging
Live updating UIs without polling
*/






