const eventButtons = document.querySelectorAll(".event-btn");

eventButtons.forEach(button => {
  button.addEventListener("click", function() {
    alert(`${this.textContent} was clicked!`);
    
    this.classList.add("clicked");

    setTimeout(() => {
      this.classList.remove("clicked"); 
    }, 300);
  });
});
