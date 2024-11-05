// АЛКО СЧЕТЧИК
const startDate = new Date('2024-01-28'); // Дата, когда бросил
const moneySpentPerDay = 150; // Указываем стоимость алкоголя в день
const alcoholPerDay = 0.07; // Количество алкоголя в литрах в день
const callPerDay = 400; // Сколько калорий в день в среднем с алкоголем

let currentMoneyFree = 0; // Для хранения текущих сэкономленных денег
let currentAlco = 0; // Для хранения текущего количества выпитого алкоголя
let currentCall = 0; // Для хранения текущего количества сэкономленных калорий
let secondsPassed = 0; // Для хранения прошедших секунд

function updateCounter() {
    const currentDate = new Date(); // Текущая дата

    // Вычисляем разницу во времени
    const timeDifference = currentDate - startDate;

    // Подсчет времени
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursPassed = (Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 3) % 24;
    const minutesPassed = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    
    // Обновляем счетчик секунд
    secondsPassed = Math.floor(timeDifference / 1000);

    // Расчет экономленных денег, алкоголя и калорий
    const moneyPerSecond = moneySpentPerDay / (24 * 60 * 60); // Расчет за секунду
    const alcoholPerSecond = alcoholPerDay / (24 * 60 * 60); // Расчет за секунду
    const callPerSecond = callPerDay / (24 * 60 * 60); // Расчет за секунду

    // Обновляем текущие значения
    currentMoneyFree = (secondsPassed * moneyPerSecond).toFixed(0); // Сэкономленные деньги
    currentAlco = (secondsPassed * alcoholPerSecond).toFixed(1); // Не выпито спирта
    currentCall = (secondsPassed * callPerSecond).toFixed(0); // Сэкономленные калории

    // Обновляем отображение в HTML
    document.getElementById('days-counter').innerHTML = 'Я трезв: ' + daysPassed + ' дней';
    document.getElementById('hours-counter').innerHTML = hoursPassed + ' ч';
    document.getElementById('minutes-counter').innerHTML = minutesPassed + ' м';
    document.getElementById('seconds-counter').innerHTML = (secondsPassed % 60) + ' с'; // Отображаем только секунды
    document.getElementById('money-free').innerHTML = 'Денег сэкономлено: ' + currentMoneyFree + ' ₽';
    document.getElementById('alco').innerHTML = 'Не выпито спирта: ' + currentAlco + ' л';
    document.getElementById('call').innerHTML = 'Сэконом. калории: ' + currentCall + ' к';
}

// Запускаем обновление каждую секунду
setInterval(updateCounter, 1000);

// Первый запуск сразу
updateCounter();

