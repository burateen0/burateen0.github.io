// Функция для генерации случайных чисел в диапазоне от min до max
function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
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

