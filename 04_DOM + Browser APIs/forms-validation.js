/**
 * 📘 JavaScript Forms & Validation
 * Author: Ritik Kumar
 * Date: 23 Jan 2025
 *
 * 👉 Reading input, validating data, and giving user feedback
 */

// ------------------------------
// 1. Selecting the Form & Inputs
// ------------------------------
const form = document.querySelector("#my-form");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// ------------------------------
// 2. Form Submit Event
// ------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default page reload
  console.log("Form submitted!");

  // Validate fields
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  let errors = [];

  if (username.length < 3) errors.push("Username must be at least 3 characters");
  if (!/^[\w.-]+@[a-z]+\.[a-z]{2,}$/.test(email)) errors.push("Invalid email format");
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))
    errors.push("Password must be 8 chars, include letters & numbers");

  if (errors.length > 0) {
    displayErrors(errors);
  } else {
    displaySuccess(`User ${username} registered successfully ✅`);
    // You can now send data via fetch/ajax
    form.reset();
  }
});

// ------------------------------
// 3. Displaying Feedback
// ------------------------------
function displayErrors(errors) {
  const errorDiv = document.querySelector("#errors");
  errorDiv.innerHTML = ""; // clear previous errors
  errors.forEach((err) => {
    const p = document.createElement("p");
    p.textContent = err;
    p.style.color = "red";
    errorDiv.appendChild(p);
  });
}

function displaySuccess(message) {
  const errorDiv = document.querySelector("#errors");
  errorDiv.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = message;
  p.style.color = "green";
  errorDiv.appendChild(p);
}

// ------------------------------
// 4. Real-time Validation (Optional)
// ------------------------------
usernameInput.addEventListener("input", () => {
  if (usernameInput.value.trim().length >= 3) {
    usernameInput.style.borderColor = "green";
  } else {
    usernameInput.style.borderColor = "red";
  }
});

/**
 * 🎯 Key Takeaways:
 * - Always prevent default form submission to handle via JS.
 * - Trim inputs to remove unwanted spaces.
 * - Regex helps in validating email, password, phone, etc.
 * - Give immediate feedback with color or messages.
 * - You can integrate with fetch/ajax for backend submission.
 */
