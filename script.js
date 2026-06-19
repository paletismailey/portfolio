
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});



const sections = document.querySelectorAll(".section");

function revealSections() {
    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight - 100;

        if (sectionTop < screenPosition) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);

revealSections();


window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});