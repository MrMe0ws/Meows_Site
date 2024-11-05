// Обработчик кликов по неактив ссылкам, которые в рзработке
document.querySelectorAll('.header__link_noactive').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const message = link.getAttribute('data-message');
        const navbar__dropdown_link = document.getElementById('navbar__dropdown_link');

        // Устанавливаем текст и показываем дропдаун
        navbar__dropdown_link.textContent = message;
        navbar__dropdown_link.style.display = 'block';

        // Через 3 секунды скрываем дропдаун
        setTimeout(() => {
            navbar__dropdown_link.style.display = 'none';
        }, 3000);
    });
});