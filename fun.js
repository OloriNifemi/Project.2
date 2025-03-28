let header1 = document.getElementById("header1");
let header2 = document.getElementById("header2");
let scrollUp = 200;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > scrollUp) {
        header1.style.transform = "translateY(-100%)";
        header2.style.top = "0px";
        header2.classList.remove("hidden");
    } else {
        header1.style.transform = "translateY(0)";
        header2.style.top = "-100px";
        header2.classList.add("hidden");
    }
});





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
    slideImages[counter].style.animation = "next1 0.35s ease-in forwards";

    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }

    slideImages[counter].style.animation = "next2 0.35s ease-in forwards";
    indicators();
}

// Code for prev button
prev.addEventListener("click", slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = "prev1 0.35s ease-in forwards";

    if (counter === 0) {
        counter = slideImages.length - 1;
    } else {
        counter--;
    }

    slideImages[counter].style.animation = "prev2 0.35s ease-in forwards";
    indicators();
}

// Auto sliding
let deleteInterval;
function autoSliding() {
    deleteInterval = setInterval(slideNext, 3000);
    indicators();
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector(".banner-slide-container");
container.addEventListener("mouseover", () => clearInterval(deleteInterval));

// Resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);

// Update indicators (dots)
function indicators() {
    // Remove 'banner-active' class from all dots
    dots.forEach(dot => dot.classList.remove("banner-active"));

    // Add 'banner-active' class to the current active dot
    dots[counter].classList.add("banner-active");
}

// ft-gallery-scroll
document.addEventListener("DOMContentLoaded", () => {
    let scrollContainer = document.querySelector(".ft-gallery-scroll");
    let prevBtn = document.getElementById("ft-prev");
    let nextBtn = document.getElementById("ft-next");
    if (!scrollContainer || !prevBtn || !nextBtn) {
        console.error("One or more elements not found!");
        return;
    }

    let scrollAmount = scrollContainer.clientWidth;
    let containerWidth = scrollContainer.clientWidth; 

    prevBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft += containerWidth;
    });

    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft -= containerWidth;
    });
});

// deals-gallery
document.addEventListener("DOMContentLoaded", () => {
    let scrollButton = document.querySelector(".deals-wraphold-scroll");
    let btnPrev = document.getElementById("deals-prev");
    let dealsNext = document.getElementById("deals-next");

    if (!scrollButton || !btnPrev  || !dealsNext) {
        console.error("One or more elements not found!");
        return;
    }

    let containerWidth = scrollButton.clientWidth; 

    btnPrev .addEventListener("click", () => {
        scrollButton.scrollLeft += containerWidth;
    });

    dealsNext.addEventListener("click", () => {
        scrollButton.scrollLeft -= containerWidth;
    });
}) 
// product-gallery
document.addEventListener("DOMContentLoaded", () => {
    let productScrollBtn = document.querySelector(".product-gallery-scroll");
    let productPrev= document.getElementById("product-prev");
    let productNext = document.getElementById("product-next");

    if (!productScrollBtn || !productPrev || !productNext) {
        console.error("One or more elements not found!");
        return;
    }

    let containerWidth = productScrollBtn.clientWidth; 

    productPrev.addEventListener("click", () => {
        productScrollBtn.scrollLeft += containerWidth;
    });

    productNext.addEventListener("click", () => {
        productScrollBtn.scrollLeft -= containerWidth;
    });
})

// code for mail
function showAlert() { 
    let mail = document.getElementById("email").value.trim(); 
    
    if (mail === "") { 
        document.getElementById("message")
        alert("Please fill all fields"); 
        return;
    } else {
        console.log("SUCCESS!");
        alert("EMAIL SENT!");
    }
}
