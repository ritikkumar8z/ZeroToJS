// Application State
let currentPage = "home";
let capsules = JSON.parse(localStorage.getItem("chronovault_capsules") || "[]");
let currentTheme = localStorage.getItem("chronovault_theme") || "dark";
let selectedCapsule = null;

// Initialize Application
document.addEventListener("DOMContentLoaded", function () {  
  initializeApp(); 
});     

function initializeApp() {
  setupCustomCursor(); 
  setupAnimatedBackground();
  setupNavigation();
  setupTheme(); 
  setupForms();
  loadCapsules();
  startCountdownTimers();
  setupTimeFlowEffect();
}

// Custom Cursor
function setupCustomCursor() {
  const cursor = document.querySelector(".cursor");
  const cursorDot = document.querySelector(".cursor-dot");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
    cursorDot.style.left = e.clientX - 2 + "px";
    cursorDot.style.top = e.clientY - 2 + "px";
  });

  // Elements that should show default pointer and hide custom cursor
  const pointerElements = document.querySelectorAll(
    "a, button, .capsule-card, input, textarea, select, label"
  );

  pointerElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      // Hide custom cursor
      cursor.style.display = "none";
      cursorDot.style.display = "none";
      // Let default browser pointer appear
      el.style.cursor = "pointer";
    });

    el.addEventListener("mouseleave", () => {
      // Show custom cursor again
      cursor.style.display = "block";
      cursorDot.style.display = "block";
    });
  });

  // Optional: smooth scale effect on hover
  document.querySelectorAll("a, button, .capsule-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)";
      cursorDot.style.transform = "scale(2)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursorDot.style.transform = "scale(1)";
    });
  });
}
 
// Animated Background
function setupAnimatedBackground() {
  const starsContainer = document.querySelector(".stars");

  // Create stars
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = Math.random() * 3 + 1 + "px";
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 2 + "s";
    starsContainer.appendChild(star);
  }
}

// Time Flow Effect
function setupTimeFlowEffect() {
  const timeFlow = document.querySelector(".time-flow");

  setInterval(() => {
    const line = document.createElement("div");
    line.className = "flow-line";
    line.style.left = Math.random() * 100 + "%";
    line.style.animationDelay = Math.random() * 2 + "s";
    timeFlow.appendChild(line);

    setTimeout(() => {
      line.remove();
    }, 3000);
  }, 800);
}

// Navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinksContainer = document.querySelector(".nav-links");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateToPage(page);

      // Update active nav link
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Close mobile menu
      navLinksContainer.classList.remove("mobile-active");
    });
  });

  // Mobile menu toggle
  mobileMenu.addEventListener("click", () => {
    navLinksContainer.classList.toggle("mobile-active");
  });
}

function navigateToPage(page) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => p.classList.remove("active"));

  const targetPage = document.getElementById(page);
  if (targetPage) {
    targetPage.classList.add("active");
    currentPage = page;

    // Load page-specific content
    if (page === "capsules") {
      loadCapsules();
    } else if (page === "gallery") {
      loadPublicGallery();
    }
  }
}

// Theme System
function setupTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const themeButtons = document.querySelectorAll(".theme-btn");

  // Apply saved theme
  document.body.dataset.theme = currentTheme;
  updateThemeToggleIcon();

  themeToggle.addEventListener("click", () => {
    const themes = ["dark", "light", "futuristic"];
    const currentIndex = themes.indexOf(currentTheme);
    currentTheme = themes[(currentIndex + 1) % themes.length];

    document.body.dataset.theme = currentTheme;
    localStorage.setItem("chronovault_theme", currentTheme);
    updateThemeToggleIcon();
  });

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      currentTheme = theme;
      document.body.dataset.theme = theme;
      localStorage.setItem("chronovault_theme", theme);
      updateThemeToggleIcon();
    });
  });
}

function updateThemeToggleIcon() {
  const themeToggle = document.getElementById("themeToggle");
  const icons = { dark: "🌙", light: "☀️", futuristic: "🚀" };
  themeToggle.textContent = icons[currentTheme] || "🌙";
}

// Forms
function setupForms() {
  const createForm = document.getElementById("createCapsuleForm");
  const mediaInput = document.getElementById("capsuleMedia");
  const mediaPreview = document.getElementById("mediaPreview");

  // Set minimum date to current time
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  document.getElementById("unlockDate").min = now.toISOString().slice(0, 16);

  createForm.addEventListener("submit", handleCreateCapsule);

  mediaInput.addEventListener("change", (e) => {
    mediaPreview.innerHTML = "";
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = document.createElement("div");
        preview.style.margin = "10px 0";

        if (file.type.startsWith("image/")) {
          preview.innerHTML = `<img src="${e.target.result}" class="media-preview" alt="Preview">`;
        } else if (file.type.startsWith("video/")) {
          preview.innerHTML = `<video src="${e.target.result}" class="media-preview" controls></video>`;
        } else if (file.type.startsWith("audio/")) {
          preview.innerHTML = `<audio src="${e.target.result}" class="media-preview" controls></audio>`;
        }

        mediaPreview.appendChild(preview);
      };
      reader.readAsDataURL(file);
    });
  });
}

// Create Capsule
function handleCreateCapsule(e) {
  e.preventDefault();

  const title = document.getElementById("capsuleTitle").value;
  const message = document.getElementById("capsuleMessage").value;
  const unlockDate = new Date(document.getElementById("unlockDate").value);
  const visibility = document.getElementById("visibility").value;
  const password = document.getElementById("password").value;
  const mediaFiles = document.getElementById("capsuleMedia").files;

  // Validate unlock date
  if (unlockDate <= new Date()) {
    showModal(
      "errorModal",
      "Please select a future date for your time capsule."
    );
    return;
  }

  // Process media files
  const media = [];
  const processFiles = Array.from(mediaFiles).map((file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        media.push({
          name: file.name,
          type: file.type,
          data: e.target.result,
        });
        resolve();
      };
      reader.readAsDataURL(file);
    });
  });

  Promise.all(processFiles).then(() => {
    const capsule = {
      id: Date.now().toString(),
      title,
      message,
      unlockDate: unlockDate.toISOString(),
      visibility,
      password,
      media,
      createdAt: new Date().toISOString(),
      isLocked: true,
    };

    capsules.push(capsule);
    localStorage.setItem("chronovault_capsules", JSON.stringify(capsules));

    // Reset form
    document.getElementById("createCapsuleForm").reset();
    document.getElementById("mediaPreview").innerHTML = "";

    showModal(
      "successModal",
      "Your time capsule has been created and locked until " +
        unlockDate.toLocaleDateString()
    );
  });
}

// Load Capsules
function loadCapsules() {
  const grid = document.getElementById("capsulesGrid");
  grid.innerHTML = "";

  if (capsules.length === 0) {
    grid.innerHTML = `
                    <div class="glass-card" style="grid-column: 1 / -1; text-align: center;">
                        <i class="fas fa-hourglass-empty" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 20px;"></i>
                        <h3>No Time Capsules Yet</h3>
                        <p>Create your first time capsule to get started!</p>
                        <button class="btn btn-primary" onclick="navigateToPage('create')">Create Capsule</button>
                    </div>
                `;
    return;
  }

  capsules.forEach((capsule) => {
    const unlockDate = new Date(capsule.unlockDate);
    const now = new Date();
    const isUnlocked = now >= unlockDate;

    if (isUnlocked && capsule.isLocked) {
      capsule.isLocked = false;
      localStorage.setItem("chronovault_capsules", JSON.stringify(capsules));
    }

    const card = document.createElement("div");
    card.className = "capsule-card";
    card.innerHTML = `
                    <div class="capsule-status ${
                      isUnlocked ? "status-unlocked" : "status-locked"
                    }">
                        ${isUnlocked ? "Unlocked" : "Locked"}
                    </div>
                    <h3>${capsule.title}</h3>
                    <p style="color: var(--text-secondary); margin: 10px 0;">
                        Created: ${new Date(
                          capsule.createdAt
                        ).toLocaleDateString()}
                    </p>
                    <div class="countdown" data-unlock="${capsule.unlockDate}">
                        ${isUnlocked ? "Ready to view!" : "Calculating..."}
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: 20px;">
                        <button class="btn ${
                          isUnlocked ? "btn-primary" : "btn-secondary"
                        }" 
                                onclick="viewCapsule('${capsule.id}')" 
                                ${isUnlocked ? "" : "disabled"}>
                            <i class="fas fa-${
                              isUnlocked ? "unlock" : "lock"
                            }"></i>
                            ${isUnlocked ? "View" : "Locked"}
                        </button>
                        <button class="btn btn-secondary" onclick="deleteCapsule('${
                          capsule.id
                        }')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;

    if (isUnlocked && capsule.isLocked) {
      card.classList.add("unlock-animation");
    } else if (!isUnlocked) {
      card.classList.add("lock-animation");
    }

    grid.appendChild(card);
  });
}

// Load Public Gallery
function loadPublicGallery() {
  const gallery = document.getElementById("publicGallery");
  const publicCapsules = capsules.filter(
    (c) => c.visibility === "public" && !c.isLocked
  );

  gallery.innerHTML = "";

  if (publicCapsules.length === 0) {
    gallery.innerHTML = `
                    <div class="glass-card" style="grid-column: 1 / -1; text-align: center;">
                        <i class="fas fa-globe" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 20px;"></i>
                        <h3>No Public Capsules Available</h3>
                        <p>Check back later for more unlocked public capsules!</p>
                    </div>
                `;
    return;
  }

  publicCapsules.forEach((capsule) => {
    const card = document.createElement("div");
    card.className = "capsule-card";
    card.innerHTML = `
                    <div class="capsule-status status-unlocked">Public</div>
                    <h3>${capsule.title}</h3>
                    <p style="color: var(--text-secondary); margin: 10px 0;">
                        Unlocked: ${new Date(
                          capsule.unlockDate
                        ).toLocaleDateString()}
                    </p>
                    <button class="btn btn-primary" onclick="viewCapsule('${
                      capsule.id
                    }')">
                        <i class="fas fa-eye"></i> View Capsule
                    </button>
                `;
    gallery.appendChild(card);
  });
}

// View Capsule
function viewCapsule(capsuleId) {
  const capsule = capsules.find((c) => c.id === capsuleId);
  if (!capsule) return;

  const now = new Date();
  const unlockDate = new Date(capsule.unlockDate);

  if (now < unlockDate) {
    showModal(
      "errorModal",
      "This capsule is still locked until " + unlockDate.toLocaleDateString()
    );
    return;
  }

  if (capsule.password) {
    selectedCapsule = capsule;
    showModal("passwordModal");
    return;
  }

  displayCapsule(capsule);
}

function verifyPassword() {
  const password = document.getElementById("passwordInput").value;
  if (password === selectedCapsule.password) {
    closeModal("passwordModal");
    displayCapsule(selectedCapsule);
    document.getElementById("passwordInput").value = "";
  } else {
    showModal("errorModal", "Incorrect password. Please try again.");
  }
}

function displayCapsule(capsule) {
  const content = document.getElementById("capsuleContent");

  let mediaHtml = "";
  if (capsule.media && capsule.media.length > 0) {
    mediaHtml = '<div style="margin: 20px 0;"><h4>Attached Media:</h4>';
    capsule.media.forEach((media) => {
      if (media.type.startsWith("image/")) {
        mediaHtml += `<img src="${media.data}" class="media-preview" alt="${media.name}">`;
      } else if (media.type.startsWith("video/")) {
        mediaHtml += `<video src="${media.data}" class="media-preview" controls></video>`;
      } else if (media.type.startsWith("audio/")) {
        mediaHtml += `<audio src="${media.data}" class="media-preview" controls></audio>`;
      }
    });
    mediaHtml += "</div>";
  }

  content.innerHTML = `
                <div style="text-align: center; margin-bottom: 30px;">
                    <i class="fas fa-unlock-alt" style="font-size: 3rem; color: var(--success-color); margin-bottom: 20px;"></i>
                    <h1>${capsule.title}</h1>
                    <p style="color: var(--text-secondary);">
                        Created: ${new Date(
                          capsule.createdAt
                        ).toLocaleDateString()} | 
                        Unlocked: ${new Date(
                          capsule.unlockDate
                        ).toLocaleDateString()}
                    </p>
                </div>
                
                <div class="glass-card">
                    <h3>Message:</h3>
                    <p style="white-space: pre-wrap; line-height: 1.6; font-size: 1.1rem;">${
                      capsule.message
                    }</p>
                    ${mediaHtml}
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button class="btn btn-secondary" onclick="navigateToPage('capsules')">
                        <i class="fas fa-arrow-left"></i> Back to Capsules
                    </button>
                </div>
            `;

  navigateToPage("viewer");
}

// Delete Capsule
function deleteCapsule(capsuleId) {
  if (
    confirm(
      "Are you sure you want to delete this time capsule? This action cannot be undone."
    )
  ) {
    capsules = capsules.filter((c) => c.id !== capsuleId);
    localStorage.setItem("chronovault_capsules", JSON.stringify(capsules));
    loadCapsules();
    showModal("successModal", "Time capsule deleted successfully.");
  }
}

// Countdown Timers
function startCountdownTimers() {
  setInterval(updateCountdowns, 1000);
}

function updateCountdowns() {
  const countdowns = document.querySelectorAll(".countdown");

  countdowns.forEach((countdown) => {
    const unlockDate = new Date(countdown.dataset.unlock);
    const now = new Date();
    const diff = unlockDate - now;

    if (diff <= 0) {
      countdown.textContent = "Ready to view!";
      countdown.style.color = "var(--success-color)";
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  });
}

// Modals
function showModal(modalId, message = "") {
  const modal = document.getElementById(modalId);
  if (message) {
    const messageEl = modal.querySelector("#successMessage, #errorMessage");
    if (messageEl) messageEl.textContent = message;
  }
  modal.classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

// Settings Functions
document.getElementById("exportData").addEventListener("click", () => {
  const data = {
    capsules: capsules,
    theme: currentTheme,
    exportDate: new Date().toISOString(),
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "chronovault-data.json";
  a.click();
  URL.revokeObjectURL(url);

  showModal("successModal", "Data exported successfully!");
});

document.getElementById("clearData").addEventListener("click", () => {
  if (
    confirm(
      "Are you sure you want to clear all data? This will delete all your time capsules permanently."
    )
  ) {
    localStorage.removeItem("chronovault_capsules");
    capsules = [];
    loadCapsules();
    showModal("successModal", "All data cleared successfully.");
  }
});

// Modal close button handlers
document.querySelectorAll(".modal-close").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const modal = e.target.closest(".modal");
    modal.classList.remove("active");
  });
});

// Close modals on background click
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});

// Initialize some demo data for first-time users
if (capsules.length === 0 && !localStorage.getItem("chronovault_demo_loaded")) {
  const demoDate = new Date();
  demoDate.setMinutes(demoDate.getMinutes() + 2); // Unlock in 2 minutes for demo

  const demoCapsule = {
    id: "demo-1",
    title: "Welcome to ChronoVault!",
    message:
      "This is a demo time capsule to show you how the platform works. You can create your own capsules with text, images, videos, and audio. This capsule will unlock in just 2 minutes so you can see the unlock experience!",
    unlockDate: demoDate.toISOString(),
    visibility: "private",
    password: "",
    media: [],
    createdAt: new Date().toISOString(),
    isLocked: true,
  };

  capsules.push(demoCapsule);
  localStorage.setItem("chronovault_capsules", JSON.stringify(capsules));
  localStorage.setItem("chronovault_demo_loaded", "true");
}
