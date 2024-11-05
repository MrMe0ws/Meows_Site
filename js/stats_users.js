// // ПОДСЧЕТ ЗАШЕДШИХ НА САЙТ ЧЕРЕЗ ЛОКАЛ СТОРЭДЖ
// // Функция для увеличения количества посещений
// function updateVisits() {
//     // Читаем текущее количество посещений
//     let visits = localStorage.getItem('stats-users__visit-count')
//     if (!visits) {
//         visits = 0;
//     }
//     visits++;
//     localStorage.setItem('stats-users__visit-count', visits);

//     //Обновляем счетчик посещений на странице
//     document.getElementById('stats-users__visit-count').textContent += visits;
// }

// //Функция для подсчета уникал. пользователей
// function checkUniqueUser() {
//     // Проверяем есть ли метка уникального пользователя в local storage
//     let uniqueUser = localStorage.getItem('stats-users__unique-users');
//     let uniqueUsersCount = localStorage.getItem('stats-user__unique-users-count') || 0;

//     if (!uniqueUser) {
//         // Если метки нет, добавляем её(пользователь уникаьлный)
//         localStorage.setItem('stats-users__unique-users', 'true');
//         uniqueUsersCount++;
//         localStorage.setItem('stats-user__unique-users-count', uniqueUsersCount);
//     }

//     //Обновляем количество пользователей на стр
//     document.getElementById('stats-users__unique-users').textContent += uniqueUsersCount;
// }

// //Вызов функции при загрузке стр.
// updateVisits();
// checkUniqueUser();

// Функция для получения IP-адреса (можно использовать сторонний API для этого)
async function getUserIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip; // Вернёт IP-адрес
}

// Выполняем запрос при загрузке страницы
window.onload = async function () {
    const ip = await getUserIP(); // Получаем IP-адрес
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxCFZqOC92Pj0wGV6QPzd97GVBb9druCID_jKHoF54dVGtork3YNf_QJuBsCLUxUSDM/exec'; // Заменить на свой URL

    fetch(`${scriptUrl}?ip=${ip}`)
        .then(response => response.json())
        .then(data => {
            // Обработка ответа
            if (data.error) {
                console.error('Ошибка на сервере:', data.error);
            } else {
                document.getElementById('stats-users__visit-count').textContent = `Сайт посетили: ${data.visits}`;
                document.getElementById('stats-users__unique-users').textContent = `Уникальных посетителей: ${data.uniqueUsers}`;
            }
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
};