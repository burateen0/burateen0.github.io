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