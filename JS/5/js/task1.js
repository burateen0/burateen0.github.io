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
