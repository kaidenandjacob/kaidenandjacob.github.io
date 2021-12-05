const navbar = document.querySelector("nav").querySelector(".nav-links");
const mediaQuery = window.matchMedia('(min-width: 760px)')
var display = getComputedStyle(navbar).display

const toggle = document.querySelector("nav").querySelector(".toggle-btn");

toggle.addEventListener("click", () => {
    var display = getComputedStyle(navbar).display
    if (display == "none") {
        navbar.style.display = "flex";
    }else{
        navbar.style.display = "none";
    }
});

mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
        navbar.style.display = "flex";
    }
});
