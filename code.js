const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;


function initializeImages() {
    slides.forEach(slide => {
        slide.classList.remove("displaySlide", "hidden");
    });
}


function startSlideshow(startIndex) {
    
    clearInterval(intervalId);

    
    slides.forEach(slide => slide.classList.add("hidden"));
    slideIndex = startIndex;
    slides[slideIndex].classList.remove("hidden");
    slides[slideIndex].classList.add("displaySlide");

   
    intervalId = setInterval(nextSlide, 3000);
}


function showSlide(index) {
    slides.forEach(slide => slide.classList.add("hidden")); 
    slides[index].classList.remove("hidden"); 
    slides[index].classList.add("displaySlide");
}


function prevSlide() {
    clearInterval(intervalId); 
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
    showSlide(slideIndex);
}


function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; 
    showSlide(slideIndex);
}


slides.forEach((slide, index) => {
    slide.addEventListener("dblclick", () => {
        startSlideshow(index); 
    });
});


initializeImages();