document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = this.getAttribute("href");
    });
});
