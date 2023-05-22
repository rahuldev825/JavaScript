function changebg() {
    let header = document.querySelector("header");
    let currentval = window.scrollY;
    if (currentval > 0) {
        header.classList.add("header-fixed");
    } else {
        header.classList.remove("header-fixed")
    }
}
window.addEventListener("scroll", changebg)