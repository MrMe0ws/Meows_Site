// ПРОВЕРКА ВЕРСИИ САЙТА

const currentVerison = '1.22'; //НОВАЯ ВЕРСИЯ САЙТА, МЕНЯТЬ ДАННЫЕ, КОГДА ЗАЛИВКА


const savedVersion = localStorage.getItem('siteVersion'); 

// Если версия не совпадает, обновляем LocalStoreage и перезгражаем стр
if (savedVersion !== currentVerison) {
    localStorage.setItem('siteVersion', currentVersion);
    location.reload(true); // Принудительно перезагрузить стр.
}