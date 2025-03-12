document.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let links = document.querySelectorAll("nav ul li a");

  sections.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop;  // Posisi bagian atas elemen
      let height = section.offsetHeight;  // Tinggi elemen
      let id = section.getAttribute("id");

      // Memeriksa apakah posisi scroll berada dalam rentang elemen
      if (top >= offset - window.innerHeight / 2 && top <= offset + height - window.innerHeight / 2) {
          links.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href").includes(id)) {
                  link.classList.add("active");
              }
          });
      }
  });
});

window.addEventListener("load", function () {
  let sections = document.querySelectorAll("section");
  let links = document.querySelectorAll("nav ul li a");

  sections.forEach((section) => {
      let offset = section.offsetTop;
      let id = section.getAttribute("id");

      // Memeriksa apakah section pertama terlihat pada load
      if (window.scrollY >= offset - window.innerHeight / 2 && window.scrollY <= offset + section.offsetHeight - window.innerHeight / 2) {
          links.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href").includes(id)) {
                  link.classList.add("active");
              }
          });
      }
  });
});


// slides
document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  // Update carousel slide
  function updateCarousel() {
    const offset = -currentIndex * 100; // Geser sebesar 100% tiap slide
    track.style.transform = `translateX(${offset}%)`;
  }

  // Prev Button Event
  document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1; // Looping slide
    updateCarousel();
  });

  // Next Button Event
  document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1; // Looping slide
    updateCarousel();
  });

  // Optional: Add keyboard arrow functionality for slide navigation
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
    } else if (event.key === "ArrowRight") {
      currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      updateCarousel();
    }
  });

  // Show the first slide initially
  updateCarousel();
});
