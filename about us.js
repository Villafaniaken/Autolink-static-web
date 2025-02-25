document.addEventListener("DOMContentLoaded", function () {
    // Highlight the active navigation link
    let currentLocation = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
});
