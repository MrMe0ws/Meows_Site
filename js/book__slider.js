// КНИГА
const bookList = document.querySelector('.book__list');

let isDragging = false;
let startX;
let scrollLeft;
let isSwipe = false; // Флаг, чтобы определить, был ли это свайп

// Когда пользователь нажимает на область
bookList.addEventListener('mousedown', (e) => {
  isDragging = true;
  isSwipe = false; // Сбрасываем флаг свайпа
  startX = e.pageX - bookList.offsetLeft;
  scrollLeft = bookList.scrollLeft;
  bookList.style.cursor = 'grabbing'; // Меняем курсор
});

// При отпускании мыши или выходе из области
bookList.addEventListener('mouseleave', () => {
  isDragging = false;
  bookList.style.cursor = 'grab';
});

bookList.addEventListener('mouseup', (e) => {
  isDragging = false;
  bookList.style.cursor = 'grab';

  // Проверяем, произошел ли свайп
  if (isSwipe) {
    e.preventDefault(); // Отменяем действие клика
    isSwipe = false; // Сбрасываем флаг свайпа
  }
});

// Когда пользователь перемещает мышь
bookList.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // Проверяем, удерживается ли мышь
  e.preventDefault();
  const x = e.pageX - bookList.offsetLeft;
  const walk = (x - startX) * 1.5; // Регулируем множитель для скорости прокрутки
  bookList.scrollLeft = scrollLeft - walk;
  isSwipe = true; // Устанавливаем флаг, что был свайп
});

// Получаем все кнопки для открытия модальных окон
let buttons = document.querySelectorAll('.book-btn');

// Назначаем обработчик событий для каждой кнопки
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // Проверяем, был ли свайп
    if (isSwipe) {
      e.preventDefault(); // Отменяем действие клика, если был свайп
      isSwipe = false; // Сбрасываем флаг свайпа
      return; // Выходим из функции
    }

    // Получаем ID модального окна из data-атрибута кнопки
    var modalId = this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.classList.add('no-scroll'); // Предотвращает прокрутку
    document.querySelector('header').classList.add('header-hidden'); // Скрывает шапку
  });
});

// Получаем все элементы <span>, которые закрывают модальные окна
let spans = document.getElementsByClassName("close");

// Назначаем обработчик событий для каждого спана
Array.from(spans).forEach(span => {
  span.onclick = function () {
    var modal = span.closest('.modal');
    modal.style.display = "none";
    document.body.classList.remove('no-scroll'); // Восстанавливает прокрутку
    document.querySelector('header').classList.remove('header-hidden'); // Показывает шапку
  }
});

// Закрываем модальное окно при клике вне его
window.onclick = function (event) {
  Array.from(spans).forEach(span => {
    let modal = span.closest('.modal');
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove('no-scroll'); // Восстанавливает прокрутку
      document.querySelector('header').classList.remove('header-hidden'); // Показывает шапку
    }
  });
};
