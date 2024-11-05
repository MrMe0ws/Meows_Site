let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider__slide');
  const totalSlides = slides.length;
  
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  
  const sliderContainer = document.querySelector('.slider__container');
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
// slider end

// stepper
let currentSlideIndex = 0;

function showStepper(index) {
    const slides = document.querySelectorAll('.process-slider__slide');
    slides[currentSlideIndex].classList.remove('active');
    slides[index].classList.add('active');
    currentSlideIndex = index;
}
// stepper end