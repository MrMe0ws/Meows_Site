// NAVBAR
// DROPDOWN логика клика вне области
document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.navbar__dropdown');
    const checkbox = document.querySelector('.navbar__dropdown-checkbox');

    // Если клик происходит вне дропдауна и чекбокс отмечен, снимаем отметку
    if (!dropdown.contains(event.target) && checkbox.checked) {
        checkbox.checked = false;
    }
});




// ЗВУК кота в шапке
// Получаем элемент изображения и аудио
const catImage = document.getElementById('catImage');
const catSound = document.getElementById('catSound');

// Добавляем обработчик клика на изображение
catImage.addEventListener('click', function () {
    // Воспроизводим звук
    catSound.currentTime = 0; // Сбрасываем время воспроизведения
    catSound.play();
});










