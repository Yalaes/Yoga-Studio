// Menu pop in
const checkbox = document.querySelector("#navi__toogle");
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        checkbox.checked = false;
    })
})

// Navigation change style on scroll - TODO better than this
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)?  nav.classList.add("nav-scrolled") : nav.classList.remove("nav-scrolled");
})