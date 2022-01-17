const hamburger = document.querySelector(".hamburger");
const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        menuBtn.classList.remov("active")
    }))