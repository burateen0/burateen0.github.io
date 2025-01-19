// Функция для генерации случайных чисел в диапазоне от min до max
function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

// Задание 1: Найдите сумму тех элементов массива, которые больше нуля и меньше десяти.
function sumFilteredElements() {
    const massiv = Array.from({ length: 10 }, () => getRandomInt(-10, 20));
    console.log("Сгенерированные числа: ", massiv);

    const summa = massiv.filter(element => element > 0 && element < 10)
                        .reduce((promezh, tekuschee) => promezh + tekuschee, 0);

    console.log(`Сумма элементов массива больше 0 и меньше 10: ${summa}`);
}

// Задание 2: Проверка, все ли элементы массива четные
function areAllEven() {
    const chisla = Array.from({ length: 5 }, () => getRandomInt(1, 20));
    console.log("Сгенерированные числа: ", chisla);

    const vseChetnie = chisla.every(chislo => chislo % 2 === 0);

    console.log(vseChetnie ? "Все элементы четные" : "Не все элементы четные");
}

// Задание 3: Массив из чисел, кратных 5
function filterMultiplesOfFive() {
    const chisla = Array.from({ length: 10 }, () => getRandomInt(1, 100));
    console.log("Сгенерированные числа: ", chisla);

    const kratnyePyati = chisla.filter(element => element % 5 === 0);

    console.log(`Числа, кратные 5: ${kratnyePyati}`);
}

// Задание 4: Среднее арифметическое массива
function calculateAverage() {
    const chisla = Array.from({ length: 5 }, () => getRandomInt(1, 100));
    console.log("Сгенерированные числа: ", chisla);

    const srednee = chisla.reduce((summa, element) => summa + element, 0) / chisla.length;

    console.log(`Среднее арифметическое: ${srednee.toFixed(1)}`);
}

// Задание 5: Фильтрация строк, начинающихся с 'http://'
function filterUrls() {
    const stroki = [
        "http://google.com",
        "https://example.com",
        "http://yahoo.com",
        "ftp://file.com",
        "http://bing.com",
        "https://github.com",
        "http://stackoverflow.com",
        "https://linkedin.com",
        "ftp://backup.server.com",
        "http://mywebsite.ru",
        "https://edu.platform.com",
        "http://test-site.org",
        "ftp://downloads.site.net",
        "https://secure.payment.com",
        "http://shop.example.ru"
    ];

    const otfiltrovannye = stroki.filter(stroka => stroka.startsWith('http://'));

    console.log(`Строки, начинающиеся на 'http://': ${otfiltrovannye}`);
}

// Задание 6: Массивы ключей и значений из объекта
function extractKeysAndValues() {
    const dannye = [
        { 1: getRandomInt(1, 20), 2: getRandomInt(1, 20), 3: getRandomInt(1, 20) },
        { 1: getRandomInt(1, 20), 2: getRandomInt(1, 20), 3: getRandomInt(1, 20) },
        { 1: getRandomInt(1, 20), 2: getRandomInt(1, 20), 3: getRandomInt(1, 20) }
    ];
    console.log("Сгенерировано:", dannye);

    let keys = [];
    let znach = [];

    dannye.forEach(obekt => {
        keys = keys.concat(Object.keys(obekt));
        znach = znach.concat(Object.values(obekt));
    });

    console.log(`Ключи: ${keys}`);
    console.log(`Значения: ${znach}`);
}

// Задание 7: Сумма всех элементов из массива объектов
function sumData() {
    const dannye = [
        { 1: getRandomInt(1, 10), 2: getRandomInt(1, 10), 3: getRandomInt(1, 10) },
        { 1: getRandomInt(1, 10), 2: getRandomInt(1, 10), 3: getRandomInt(1, 10) },
        { 1: getRandomInt(1, 10), 2: getRandomInt(1, 10), 3: getRandomInt(1, 10) }
    ];
    console.log("Сгенерировано:", dannye);

    const obshayaSumma = dannye.reduce((itog, obekt) => {
        return itog + Object.values(obekt).reduce((promezh, znachenie) => promezh + znachenie, 0);
    }, 0);

    console.log(`Сумма всех элементов структуры: ${obshayaSumma}`);
}
