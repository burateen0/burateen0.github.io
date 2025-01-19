// Задание 8: Государственные праздники
function ThisYearHolidays() {
    const Year = new Date().getFullYear();

    const prazdniki = [
        { date: `${Year}-01-01`, name: 'Новый год' },
        { date: `${Year}-02-23`, name: 'День защитника Отечества' },
        { date: `${Year}-05-01`, name: 'Праздник Весны и Труда' },
        { date: `${Year}-06-12`, name: 'День России' },
        { date: `${Year}-11-04`, name: 'День народного единства' }
    ];

    const holidaysList = document.getElementById('result8');
    holidaysList.innerHTML = '';

    prazdniki.forEach(prazdnik => {
        const li = document.createElement('li');
        const dataPrazdnika = new Date(prazdnik.date);
        const denNedeli = DayOfWeek(prazdnik.date);
        li.innerHTML = `<strong>${prazdnik.name}</strong> — ${denNedeli}`;
        holidaysList.appendChild(li);
    });
}