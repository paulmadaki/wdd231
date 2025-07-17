const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

//const menuBtn = document.getElementById("menuBtn");
//const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Toggle icon text between ☰ and ×
  if (navLinks.classList.contains("open")) {
    menuBtn.textContent = "✖"; // close icon
  } else {
    menuBtn.textContent = "☰"; // hamburger icon
  }



});
