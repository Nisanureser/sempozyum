var yukari = document.getElementsByClassName("upIcon")[0];
window.addEventListener("scrollY", function() {
    const mesafe = window.scrollY;
    if (mesafe > 400) {
        yukari.classList.add("goster");
    } else {
        yukari.classList.remove("goster");
    }
});
yukari.addEventListener("click", function() {
    window.scrollTo(0, 0);
});