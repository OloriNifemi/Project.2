// Access slider images (restrict to .banner-slides)
let slideImages = document.querySelectorAll(".banner-slides img");
// Auto sliding
let deleteInterval;
function autoSliding() {
    deleteInterval = setInterval(slideNext, 3000);
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector(".banner-slide-container");
container.addEventListener("mouseover", () => clearInterval(deleteInterval));

// Resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);