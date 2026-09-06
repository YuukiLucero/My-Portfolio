/* =========================================
   SKILLS PAGE JAVASCRIPT
   Queen Dalahigon Portfolio
========================================= */


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.querySelector(".navbar");


if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if (menuBtn && nav) {

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

}


/* =========================================
   CLOSE MOBILE MENU
   WHEN NAVIGATION LINK IS CLICKED
========================================= */

const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("open");

        }


        if (menuBtn) {

            const icon = menuBtn.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });

});


/* =========================================
   SKILL CARDS
========================================= */

const skillCards = document.querySelectorAll(".skill-card");


/* =========================================
   SKILL CARD INITIAL STATE
========================================= */

skillCards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});


/* =========================================
   SKILL CARD OBSERVER
========================================= */

const skillObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const card = entry.target;


                card.style.opacity = "1";

                card.style.transform = "translateY(0)";


                animateSkill(card);


                observer.unobserve(card);

            }

        });

    },

    {
        threshold: 0.2
    }

);


/* =========================================
   OBSERVE EACH SKILL CARD
========================================= */

skillCards.forEach(card => {

    skillObserver.observe(card);

});


/* =========================================
   ANIMATE SKILL
========================================= */

function animateSkill(card) {

    const progress =
        card.querySelector(".progress span");


    const percentage =
        card.querySelector(".level-text span:last-child");


    if (!progress || !percentage) {

        return;

    }


    /* Get target percentage */

    const target =
        parseInt(
            percentage.textContent.replace("%", "")
        );


    /* Reset progress */

    progress.style.width = "0%";


    /* Counter */

    let current = 0;


    /* Animation duration */

    const duration = 1200;


    /* Calculate animation interval */

    const intervalTime =
        duration / target;


    const counter =
        setInterval(() => {

            current++;


            percentage.textContent =
                current + "%";


            if (current >= target) {

                clearInterval(counter);

                percentage.textContent =
                    target + "%";

            }

        }, intervalTime);


    /* Animate progress bar */

    setTimeout(() => {

        progress.style.width =
            target + "%";

    }, 100);

}


/* =========================================
   PREVENT SKILLS ANIMATION FROM RUNNING
   IMMEDIATELY ON PAGE LOAD
========================================= */

window.addEventListener("load", () => {

    skillCards.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const currentPage =
    window.location.pathname.split("/").pop();


navLinks.forEach(link => {

    const linkPage =
        link.getAttribute("href");


    if (
        linkPage &&
        linkPage !== "#" &&
        linkPage === currentPage
    ) {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });


        link.classList.add("active");

    }

});


/* =========================================
   SKILL CARD HOVER EFFECT
========================================= */

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("skill-hover");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("skill-hover");

    });

});


/* =========================================
   PAGE READY
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "Skills page loaded successfully."
    );

});