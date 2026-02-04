const textElement = document.getElementById("animated-text");
const words = ["Full stack developer (MERN)....."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];
  let displayedText = currentWord.substring(0, charIndex);

  textElement.textContent = displayedText;

  if (!isDeleting) {
    charIndex++;
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // पूरा word दिखने के बाद 1 second रुकेगा
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // next word पे move
    }
  }

  setTimeout(typeEffect, isDeleting ? 100 : 200); // deleting fast, typing slow
}

typeEffect();
