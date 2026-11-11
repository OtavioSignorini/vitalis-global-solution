let slideIndex = 0;
mostrarSlides(slideIndex);

function mudarSlide(n) {
    mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
    let slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return; 

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    
    slides[slideIndex].style.display = "block";
}


setInterval(() => {
    mudarSlide(1);
}, 4000);