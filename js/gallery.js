// =====================================
// Gallery Filter
// =====================================

const filterButtons = document.querySelectorAll(".gallery-filter button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (filter === "all") {

                item.style.display = "block";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 100);

            }

            else if (item.classList.contains(filter)) {

                item.style.display = "block";

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                }, 100);

            }

            else {

                item.style.opacity = "0";
                item.style.transform = "scale(.8)";

                setTimeout(() => {

                    item.style.display = "none";

                }, 300);

            }

        });

    });

});


// =====================================
// Image Lightbox
// =====================================

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const img = item.querySelector("img");

        lightbox.classList.add("show");

        lightboxImage.src = img.src;

        lightboxImage.alt = img.alt;

        document.body.style.overflow = "hidden";

    });

});


// =====================================
// Close Button
// =====================================

closeBtn.addEventListener("click", closeLightbox);

function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "auto";

}


// =====================================
// Click Outside Image
// =====================================

lightbox.addEventListener("click", e => {

    if (e.target === lightbox) {

        closeLightbox();

    }

});


// =====================================
// ESC Key Close
// =====================================

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeLightbox();

    }

});


// =====================================
// Image Hover Animation
// =====================================

galleryItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transition = ".4s";
        item.style.transform = "translateY(-10px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateY(0px)";

    });

});


// =====================================
// Fade In Animation
// =====================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.2
});

galleryItems.forEach(item => {

    item.classList.add("hidden");

    observer.observe(item);

});


// =====================================
// Loading Animation
// =====================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// =====================================
// Scroll To Top Button
// =====================================

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.classList.add("top-button");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});