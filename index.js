const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


document.querySelector(".log_button").addEventListener("click", function() {
    window.location.href = "login.html";
});
document.querySelector(".reg_button").addEventListener("click", function() {
    window.location.href = "register.html";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible"); // Removes class when scrolling up
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".scroll-fade").forEach(element => {
    observer.observe(element);
});

