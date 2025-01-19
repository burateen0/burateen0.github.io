// Задание 3: Получение предыдущего, текущего и следующего дня недели
function Days() {
    const dniNedeli = CheckDays();
    document.getElementById('result3').textContent = `Предыдущий день: ${dniNedeli.prev}, Текущий день: ${dniNedeli.curr}, Следующий день: ${dniNedeli.next}`;
}

function CheckDays() {
    const dni = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const segodnya = new Date();
    const currentDayIndex = segodnya.getDay();
    const prevDay = dni[(currentDayIndex + 6) % 7]; // Предыдущий
    const nextDay = dni[(currentDayIndex + 1) % 7]; // След
    const currDay = dni[currentDayIndex]; // Текущий
    return {
        prev: prevDay,
        curr: currDay,
        next: nextDay
    };
}