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