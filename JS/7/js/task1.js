// Задание 1: Функция для получения дня недели по дате
function displayDayOfWeek() {
    const dataVvoda = document.getElementById('dateInput').value;
    if (!dataVvoda) {
        document.getElementById('result1').textContent = "Пожалуйста, введите дату :)";
        return;
    }
    
    const denNedeli = DayOfWeek(dataVvoda);
    document.getElementById('result1').textContent = `День недели: ${denNedeli}`;
}

// Функция для получения дня недели по дате
function DayOfWeek(data) {
    const daysss = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const Data = new Date(data);
    return daysss[Data.getDay()];
}

// Установка текущей даты в поле ввода
window.onload = function() {
    const today = new Date();
    const formattedData = today.toISOString().split('T')[0];
    document.getElementById('dateInput').value = formattedData;
    document.getElementById('msInput').value = 86400000;
    document.getElementById('birthDateInput').value = '2000-01-01';
};