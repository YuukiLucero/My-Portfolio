/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (nav.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================================
   TYPING ANIMATION
========================================= */

const typingText = document.querySelector(".typing-text");

const words = [
    "Web Developer",
    "BSIT Student",
    "Love Sketching",
];

let wordIndex = 0;
let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    const speed = deleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}


typeEffect();


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});