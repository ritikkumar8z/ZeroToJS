const form = document.getElementById("myForm");
const nameInput = document.getElementById("name-input");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  formMessage.textContent = "";
  formMessage.style.color = "";
  formMessage.classList.remove("message-animation");

  if (nameInput.value.trim() === "") {
    formMessage.textContent = "Name is required!";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = `Hello, ${nameInput.value}! Your form was submitted successfully.`;
    formMessage.style.color = "green";
  }

  formMessage.classList.add("message-animation");
});
