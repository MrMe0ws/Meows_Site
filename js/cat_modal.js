// КОТ МОДАЛ ОКНА
// Получаем модальное окно
var modal = document.getElementById('myModal');

// Получаем изображение и подпись внутри модального окна
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Получаем все изображения с классом "myImg"
var images = document.getElementsByClassName("myImg");

// Проходим по всем изображениям и устанавливаем событие клика
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        openModal(this.src, this.alt);
    };
}

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Закрытие модального окна при клике на крестик
span.onclick = closeModal;

// Закрытие модального окна при клике за пределами изображения
modal.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Функция для открытия модального окна
function openModal(src, alt) {
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;
    document.body.classList.add('no-scroll'); // Предотвращает прокрутку
    document.querySelector('header').classList.add('header-hidden'); // Скрывает шапку
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll'); // Восстанавливает прокрутку
    document.querySelector('header').classList.remove('header-hidden'); // Показывает шапку
}