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

document.addEventListener("scroll", function() {
    document.querySelectorAll(".scroll-fade").forEach((element) => {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add("visible");
        }
    });
});
