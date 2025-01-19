// Задание 2
function checkSign() {
    const chisloInput = prompt("Введите число:");

    if (isNaN(chisloInput)) {
        alert("Это не число! Пожалуйста, введите число.");
        return;
    }

    const chislo = parseFloat(chisloInput);

    // Определяем знак
    if (chislo > 0) {
        alert(`Введенное число ${chislo} положительное.`);
    } else if (chislo < 0) {
        alert(`Введенное число ${chislo} отрицательное.`);
    } else {
        alert("Введенное число 0 не положительное и не отрицательное.");
    }
}
