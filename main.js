const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});
document.addEventListener("DOMContentLoaded", function () {
  const typingText = document.querySelector(".typing-text");
  const phrases = ["Dream Job", "Dream Opportunity", "Dream Career"];
  let phraseIndex = 0;
  let charIndex = 0;
  let currentPhrase = phrases[phraseIndex];

  function type() {
    if (charIndex < currentPhrase.length) {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000); // Pause before erasing
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
      currentPhrase = phrases[phraseIndex];
      setTimeout(type, 500); // Start typing the new phrase
    }
  }

  type(); // Start the typing effect
});
