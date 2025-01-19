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