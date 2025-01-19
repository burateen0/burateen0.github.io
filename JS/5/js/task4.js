// Функция для генерации случайных чисел в диапазоне от min до max
function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

// Задание 4: Среднее арифметическое массива
function calculateAverage() {
    const chisla = Array.from({ length: 5 }, () => getRandomInt(1, 100));
    console.log("Сгенерированные числа: ", chisla);

    const srednee = chisla.reduce((summa, element) => summa + element, 0) / chisla.length;

    console.log(`Среднее арифметическое: ${srednee.toFixed(1)}`);
}