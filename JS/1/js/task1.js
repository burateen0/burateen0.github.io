// Задание 1
function checkIfNumber() {
    const chislo = prompt("Введите число:");

    // Проверка на число
    if (isNaN(chislo)) {
        alert("Это не число! Пожалуйста, введите число.");
        return false;
    }

    return true;
}