// Функция для генерации случайных чисел в диапазоне от min до max
function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

// Задание 3: Массив из чисел, кратных 5
function filterMultiplesOfFive() {
    const chisla = Array.from({ length: 10 }, () => getRandomInt(1, 100));
    console.log("Сгенерированные числа: ", chisla);

    const kratnyePyati = chisla.filter(element => element % 5 === 0);

    console.log(`Числа, кратные 5: ${kratnyePyati}`);
}