// Получаем все кнопки для открытия модальных окон
var buttons = document.querySelectorAll('.modal-btn');

// Назначаем обработчик событий для каждой кнопки
buttons.forEach(function(button) {
    button.onclick = function() {
        // Получаем ID модального окна из data-атрибута кнопки
        var modalId = this.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    }
});

// Получаем все элементы <span>, которые закрывают модальные окна
var spans = document.getElementsByClassName("close");

// Назначаем обработчик событий для каждого спана
Array.from(spans).forEach(span => {
    span.onclick = function() {
        var modal = span.closest('.modal');
        modal.style.display = "none";
    }
});

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    Array.from(spans).forEach(span => {
        var modal = span.closest('.modal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}