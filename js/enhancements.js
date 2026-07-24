// ================================
// Loading Screen
// ================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.remove();

        }, 600);

    }

});


// ================================
// Scroll Progress Bar
// ================================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


// ================================
// WhatsApp Floating Button
// ================================

const whatsappBtn = document.createElement("a");

whatsappBtn.href =
"https://wa.me/923001234567";

whatsappBtn.target = "_blank";

whatsappBtn.className = "whatsapp-btn";

whatsappBtn.innerHTML =
'<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsappBtn);


// ================================
// Back To Top
// ================================

const topBtn = document.createElement("button");

topBtn.className = "top-btn";

topBtn.innerHTML =
'<i class="fas fa-chevron-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

