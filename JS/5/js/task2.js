// Функция для генерации случайных чисел в диапазоне от min до max
function getRandomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

// Задание 2: Проверка, все ли элементы массива четные
function areAllEven() {
    const chisla = Array.from({ length: 5 }, () => getRandomInt(1, 20));
    console.log("Сгенерированные числа: ", chisla);

    const vseChetnie = chisla.every(chislo => chislo % 2 === 0);

    console.log(vseChetnie ? "Все элементы четные" : "Не все элементы четные");
}
