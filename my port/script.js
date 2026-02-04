// Typing Effect
const textElement = document.getElementById("animated-text");
const words = ["Frontend Developer"];
let j = 0,
  del = false;

function type() {
  textElement.textContent = words[0].slice(0, j);
  if (!del) {
    j++;
    if (j > words[0].length) {
      setTimeout(() => {
        del = true;
      }, 2000);
    }
  } else {
    j--;
    if (j === 0) {
      del = false;
    }
  }
  setTimeout(type, del ? 80 : 150);
}
type();

// Hamburger Menu Toggle
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
