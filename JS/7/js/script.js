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

// Задание 2: Подсчет дней до нового года
function NewYear() {
    const now = new Date();
    const nextGod = new Date(now.getFullYear() + 1, 0, 1);
    const raznitsa = nextGod - now;
    const dney = Math.floor(raznitsa / (1000 * 60 * 60 * 24));
    document.getElementById('result2').textContent = `До нового года осталось ${dney} дней.`;
}

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

// Задание 4: Преобразование миллисекунд в дни, часы, минуты, секунды.
function ConvertTime() {
    const miliSek = parseInt(document.getElementById('msInput').value);

    if (isNaN(miliSek) || miliSek <= 0) {
        document.getElementById('result4').textContent = "Введите корректное количество миллисекунд.";
        return;
    }

    const vremya = convertMilliseconds(miliSek);

    // Проверяем, больше ли дней 365, чтобы добавить годы
    if (vremya.y > 0) {
        document.getElementById('result4').textContent = `Годы: ${vremya.y}, Дни: ${vremya.d}, Часы: ${vremya.h}, Минуты: ${vremya.m}, Секунды: ${vremya.s}`;
    } else {
        document.getElementById('result4').textContent = `Дни: ${vremya.d}, Часы: ${vremya.h}, Минуты: ${vremya.m}, Секунды: ${vremya.s}`;
    }
}

function convertMilliseconds(ms) {
    const sekundy = Math.floor(ms / 1000); 
    const days = Math.floor(sekundy / (24 * 3600));
    const years = Math.floor(days / 365);
    const ostatokDney = days % 365;
    const hours = Math.floor((sekundy % (24 * 3600)) / 3600);
    const mins = Math.floor((sekundy % 3600) / 60);
    const ostatokSekund = sekundy % 60;

    return {
        y: years,
        d: ostatokDney,
        h: hours,
        m: mins,
        s: ostatokSekund
    };
}

// Задание 5: Возраст по дате рождения
function FindAge() {
    const dataRozhdeniya = document.getElementById('birthDateInput').value;
    
    if (!dataRozhdeniya) {
        document.getElementById('result5').textContent = "Пожалуйста, введите дату рождения!";
        return;
    }
    
    const today = new Date();
    const BDayDate = new Date(dataRozhdeniya);

    let years = today.getFullYear() - BDayDate.getFullYear();
    let mesyatsy = today.getMonth() - BDayDate.getMonth();
    let days = today.getDate() - BDayDate.getDate();

    if (mesyatsy < 0 || (mesyatsy === 0 && days < 0)) {
        years--;
        mesyatsy = mesyatsy < 0 ? 12 + mesyatsy : mesyatsy;
        days = days < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() + days : days;
    }

    document.getElementById('result5').textContent = `Возраст: ${years} лет, ${mesyatsy} месяцев и ${days} дней`;
}

// Задание 6: Пятницы 13 числа в текущем году
function ThisYearFridays13() {
    const fridays13List = document.getElementById('fridays13List');
    fridays13List.innerHTML = '';

    const tekushiyGod = new Date().getFullYear();
    let fridays13Text = '';

    for (let mesyac = 0; mesyac < 12; mesyac++) {
        const data = new Date(tekushiyGod, mesyac, 13);
        if (data.getDay() === 5) {
            fridays13Text += `${data.toLocaleDateString()}<br>`;
        }
    }

    fridays13List.innerHTML = fridays13Text;
}


// Задание 7: Приветствие в зависимости от времени суток
function Hi() {
    const chasy = new Date().getHours();
    let privetstvie = "";

    if (chasy >= 6 && chasy < 12) {
        privetstvie = "Доброе утро!";
    } else if (chasy >= 12 && chasy < 18) {
        privetstvie = "Добрый день!";
    } else {
        privetstvie = "Добрый вечер!";
    }

    document.getElementById('result7').textContent = privetstvie;
}

// Задание 8: Государственные праздники
function ThisYearHolidays() {
    const tekushiyGod = new Date().getFullYear();

    const prazdniki = [
        { date: `${tekushiyGod}-01-01`, name: 'Новый год' },
        { date: `${tekushiyGod}-02-23`, name: 'День защитника Отечества' },
        { date: `${tekushiyGod}-05-01`, name: 'Праздник Весны и Труда' },
        { date: `${tekushiyGod}-06-12`, name: 'День России' },
        { date: `${tekushiyGod}-11-04`, name: 'День народного единства' }
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

