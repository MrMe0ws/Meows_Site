// Получаем модальное окно
var modal = document.getElementById('myModal');

// Получаем изображение и подпись внутри модального окна
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Получаем все изображения с классом "myImg"
var images = document.getElementsByClassName("myImg");

// Проходим по всем изображениям и устанавливаем событие клика
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Закрытие модального окна при клике на крестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике за пределами изображения
modal.onclick = function(event) {
    // Если клик произошел НЕ на изображении (и не на его контейнере), то закрываем модальное окно
    if (event.target === modal) {
        modal.style.display = "none";
    }
}