// ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ

const themeToggle = document.getElementById('theme-toggle');

// Проверяем сохраненную тему при загрузке
const savedTheme = localStorage.getItem('theme');

// Если тема сохранена, применяем её, иначе устанавливаем светлую тему по умолчанию
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark'; // Устанавливаем состояние чекбокса в зависимости от темы
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.checked = false; // По умолчанию светлая тема, чекбокс выключен
}

// Логика переключения темы
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Сохраняем выбранную тему
});