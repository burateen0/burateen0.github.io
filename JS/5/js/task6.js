// Функция для генерации случайных чисел в диапазоне от min до max
function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
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