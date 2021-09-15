const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        navbar.className = "navbar navbar-expand-lg navbar-dark fixed-top py-4 animate";
    } else {
        navbar.className = "navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top animate";
    }
});
