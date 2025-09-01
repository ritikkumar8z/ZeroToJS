 /**
 * 📘 JavaScript DOM & Browser APIs
 * Author: Ritik Kumar
 * Date: 21 Jan 2025
 *
 * 👉 Selecting and manipulating DOM elements
 */

// ------------------------------
// 1. Selecting Elements
// ------------------------------
const heading = document.getElementById("main-heading"); // single element by ID
const paragraphs = document.getElementsByClassName("para"); // HTMLCollection (live)
const listItems = document.getElementsByTagName("li"); // HTMLCollection (live)
const firstBtn = document.querySelector(".btn"); // first match
const allBtns = document.querySelectorAll(".btn"); // NodeList (static)

// Logging 
console.log(heading);
console.log(paragraphs);
console.log(listItems);
console.log(firstBtn);
console.log(allBtns);

// ------------------------------
// 2. Manipulating Content
// ------------------------------
heading.textContent = "Hello, DOM!";
heading.innerHTML = "Hello, <span style='color:red'>DOM</span>!"; // can include HTML
paragraphs[0].innerText = "Updated paragraph text";

// ------------------------------
// 3. Manipulating Attributes
// ------------------------------
firstBtn.setAttribute("disabled", true);
firstBtn.removeAttribute("disabled");
console.log(firstBtn.getAttribute("class"));

// ------------------------------
// 4. Manipulating Styles
// ------------------------------
heading.style.color = "blue";
heading.style.fontSize = "2rem";

// ------------------------------
// 5. Adding / Removing Classes
// ------------------------------
heading.classList.add("highlight");
heading.classList.remove("highlight");
heading.classList.toggle("highlight");

// ------------------------------
// 6. Creating & Appending Elements
// ------------------------------
const newPara = document.createElement("p");
newPara.textContent = "This is a dynamically created paragraph.";
document.body.appendChild(newPara);

// ------------------------------
// 7. Removing Elements
// ------------------------------
const oldPara = document.querySelector(".old-para");
if (oldPara) {
  oldPara.remove();
}

/**
 * 🎯 Key Takeaways:
 * - getElementById/ClassName/TagName = older, live collections.
 * - querySelector / querySelectorAll = modern, flexible.
 * - Use textContent / innerText / innerHTML to change content.
 * - classList & style for CSS manipulation.
 * - createElement + appendChild / remove = dynamic DOM changes.
 */
