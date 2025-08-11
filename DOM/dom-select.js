const createElementBtn = document.getElementById("create-element-btn");
const elementContainer = document.getElementById("element-container");

createElementBtn.addEventListener("click", function() {
  const newElement = document.createElement("div"); 
  newElement.classList.add("new-element");
  newElement.textContent = "This is a new dynamically created element!";

  newElement.classList.add("new-element-animation");

  elementContainer.appendChild(newElement);
 
  setTimeout(() => {
    newElement.classList.remove("new-element-animation");
  }, 500);
});
