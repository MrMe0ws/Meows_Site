const track = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot'); // Получаем кружки
let currentSlide = 0;
const slides = document.querySelectorAll('.blog__cards');
const totalSlides = slides.length;

let startX = 0;
let currentX = 0;
let isSwiping = false;

// Устанавливаем активный класс на первый кружок при загрузке страницы
dots[currentSlide].classList.add('active');

function updateSliderPosition() {
    track.style.transition = 'transform 0.3s ease-in-out'; // Добавляем анимацию
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Обновляем кружки
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function resetTransition() {
    track.style.transition = 'none';
}

// Обработчик клика по кружкам
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.dataset.slide);
        updateSliderPosition();
    });
});

// Добавление обработчиков для свайпа
track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    resetTransition(); // Убираем transition
});

track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    // Рассчитываем временной сдвиг во время свайпа
    track.style.transform = `translateX(-${currentSlide * 100 + diff / window.innerWidth * 100}%)`;
});

track.addEventListener('touchend', () => {
    if (!isSwiping) return;
    const diff = startX - currentX;

    // Если разница больше 50 пикселей, то происходит смена слайда
    if (diff > 50) {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
    } else if (diff < -50) {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1;
        }
    }

    // Обновляем позицию с анимацией
    updateSliderPosition();
    isSwiping = false;
});