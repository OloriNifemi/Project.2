// Access slider images (restrict to .banner-slides)
let slideImages = document.querySelectorAll(".banner-slides img");

// Access next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

// Access indicators (dots)
let dots = document.querySelectorAll(".dot");

let counter = 0;

// Code for next button
next.addEventListener("click", slideNext);
function slideNext() {
    slideImages[counter].style.animation = "next1 0.5s ease-in forwards";

    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    slideImages[counter].style.animation = "next2 0.5s ease-in forwards";
    indicators();
}

// Code for prev button
prev.addEventListener("click", slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = "prev1 0.5s ease-in forwards";

    if (counter === 0) {
        counter = slideImages.length - 1;
    } else {
        counter--;
    }

    slideImages[counter].style.animation = "prev2 0.5s ease-in forwards";
    indicators();
}

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

// Update indicators (dots)
function indicators() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[counter].classList.add("active");
}
