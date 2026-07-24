// =========================================
// MAZHAR WOODWORKS
// MAIN JAVASCRIPT
// =========================================

// ===========================
// Sticky Header
// ===========================

const header = document.querySelector("header");
const isInnerPage = header && header.classList.contains("header-solid");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#2d2018";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        if (!isInnerPage) {

            header.style.background = "transparent";
            header.style.boxShadow = "none";

        }

    }

});

// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show-menu");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show-menu")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}

// ===========================
// Close Mobile Menu
// ===========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("show-menu");

        }

        if (menuBtn) {

            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        }

    });

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// Active Navigation
// ===========================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

// ===========================
// Scroll Reveal Animation
// ===========================

const revealItems = document.querySelectorAll(

".service-card, .project-card, .process-card, .testimonial-card, .stat-card, .about-image, .about-content"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: .15

});

revealItems.forEach(item => {

    revealObserver.observe(item);

});

// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".stat-card h2");

const speed = 80;

counters.forEach(counter => {

    const suffix = counter.getAttribute("data-suffix") || "+";

    const target = parseInt(counter.innerText);

    counter.innerText = "0" + suffix;

    const updateCounter = () => {

        let count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            count += increment;

            if (count > target) count = target;

            counter.setAttribute("data-count", count);

            counter.innerText = count + suffix;

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + suffix;

        }

    };

    updateCounter();

});

// ===========================
// Image Hover Effect
// ===========================

document.querySelectorAll(".project-card img").forEach(img => {

    img.addEventListener("mousemove", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ===========================
// Button Ripple Effect
// ===========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = e.clientX - rect.left + "px";
        ripple.style.top = e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ===========================
// Fade In Hero
// ===========================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.classList.add("hero-visible");

    }

});

// ===========================
// Current Year
// ===========================

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}