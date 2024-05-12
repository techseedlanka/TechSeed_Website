var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);


// technologies

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");
    const logoSlide = document.querySelector(".logo-slide");

    let currentSlide = 0;
    const slidesToShow = 4;

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    }

    function nextSlide() {
        const totalSlides = Math.ceil(logoSlide.children.length / slidesToShow);
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    }

    function updateSlide() {
        const slideWidth = logoSlide.clientWidth;
        logoSlide.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
});
