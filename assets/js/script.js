document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll("nav ul li a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(id)) {
                    link.classList.add("active");
                }
            });
        }
    });
});

window.addEventListener('load', function () {
    document.getElementById("homeLink").classList.add("active");
});