document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById('theme-toggle');
  
    // Установка светлой темы по умолчанию
    document.documentElement.setAttribute('data-theme', 'light');
    
    // Обработчик события для изменения состояния чекбокса
    checkbox.addEventListener('change', function() {
        // Получаем текущую тему
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        // Меняем тему в зависимости от текущей
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });
});