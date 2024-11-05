const slides = document.querySelector('.slides');
const buttons = document.querySelectorAll('.nav-btn');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Перемещаем слайды
        slides.style.transform = `translateX(-${index * 100}%)`;
        // Обновляем активное состояние кнопок
        updateActiveButton(index);
    });
});

function updateActiveButton(index) {
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('nav-btn_active');
        } else {
            btn.classList.remove('nav-btn_active');
        }
    });
}

// Инициализация первого активного элемента
updateActiveButton(0);