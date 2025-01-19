// Задание 1 Все целые числа от 1 до 100
function printNumbers1to100() {
    for (let chislo = 1; chislo <= 100; chislo++) {
        console.log(chislo);
    }
}

// Задание 2 Все целые числа от -100 до 0
function printNegativeNumbers() {
    for (let number = -100; number <= 0; number++) {
        console.log(number);
    }
}

// Задание 3 Все четные числа от 1 до 100
function printEvenNumbers1to100() {
    for (let chislo = 1; chislo <= 100; chislo++) {
        if (chislo % 2 === 0) {
            console.log(chislo);
        }
    }
}

// Задание 4 Все четные числа из промежутка
function findEvenNumbersInRange() {
    let nachalo = parseInt(prompt("Введите начало диапазона:"));
    let end = parseInt(prompt("Введите конец диапазона:"));

    while (isNaN(nachalo) || isNaN(end) || nachalo >= end) {
        alert("Некорректный ввод. Начало должно быть меньше конца. Попробуйте снова.");
        nachalo = parseInt(prompt("Введите начало диапазона:"));
        end = parseInt(prompt("Введите конец диапазона:"));
    }

    while (end - nachalo > 1000000) {
        alert("Слишком большой диапазон. Попробуйте снова.");
        nachalo = parseInt(prompt("Введите начало диапазона:"));
        end = parseInt(prompt("Введите конец диапазона:"));
    }

    console.log(`Четные числа в диапазоне от ${nachalo} до ${end}:`);
    for (let number = nachalo; number <= end; number++) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}

// Задание 5 Таблица умножения
function multiplicationTest() {
    while (true) {
        const num1 = Random(2, 10);
        const num2 = Random(2, 10);
        const correctAnswer = num1 * num2;

        const otvet = prompt(`Сколько будет ${num1} * ${num2}? (Введите "N" для выхода)`);

        if (otvet === "N" || otvet === "n") {
            alert("Тест завершен.");
            break;
        }

        if (parseInt(otvet) === correctAnswer) {
            alert("Правильно!");
        } else {
            alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
        }
    }
}

// Рандом
function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}