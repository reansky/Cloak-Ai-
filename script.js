/* ==========================================
   ROBINHOOD CLOAK
   PREMIUM SCRIPT PART 1
========================================== */

// Navbar berubah saat scroll

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(8,8,8,.82)";
        navbar.style.borderColor = "rgba(0,214,79,.20)";
        navbar.style.boxShadow = "0 10px 40px rgba(0,0,0,.45)";
        navbar.style.top = "14px";

    } else {

        navbar.style.background = "rgba(12,12,12,.55)";
        navbar.style.borderColor = "rgba(255,255,255,.08)";
        navbar.style.boxShadow = "none";
        navbar.style.top = "22px";

    }

});

// Hero Fade

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    let y = window.scrollY;

    hero.style.opacity = 1 - y / 900;

    hero.style.transform =
        `translateY(${y * 0.18}px)`;

});

// Reveal Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// Hero tetap tampil

document.querySelector(".hero").classList.remove("hidden");

// Button Ripple

document.querySelectorAll("a").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left = (e.clientX - rect.left) + "px";
        ripple.style.top = (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});
