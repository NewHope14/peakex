// Smooth Scroll Indicator - Optional
document.addEventListener("DOMContentLoaded", () => {
    const scrollIcon = document.querySelector(".scroll-down");
    scrollIcon.addEventListener("click", () => {
        window.scrollTo({
            top: document.querySelector(".highlights").offsetTop,
            behavior: "smooth"
        });
    });
});
// Accordion
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.maxHeight
            ? (panel.style.maxHeight = null)
            : (panel.style.maxHeight = panel.scrollHeight + "px");
    });
}
