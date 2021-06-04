//burger icon toogle style
const wrapBurger = document.querySelector(".wrap-burger");
const burger = document.querySelector(".burger");

wrapBurger.addEventListener("click", () => {
    burger.classList.toggle("cross");
})

// Menu pop in
const checkbox = document.querySelector("#navi__toogle");
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        checkbox.checked = false;
        burger.classList.toggle("cross");
    })
})



// Navigation change style on scroll - TODO better than this
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)?  nav.classList.add("nav-scrolled") : nav.classList.remove("nav-scrolled");
})


//gallery photo animation
const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(image => {
  
  image.addEventListener("click", () => {
    removeActiveClass();
    image.classList.add("active");
  })
})

function removeActiveClass() {
  galleryImages.forEach(image => image.classList.remove("active"))
}