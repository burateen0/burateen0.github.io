// Задание 3: Мин и Макс числа
function findMin(chislo1, chislo2, chislo3) {
    return Math.min(chislo1, chislo2, chislo3);
}

function findMax(chislo1, chislo2, chislo3) {
    return Math.max(chislo1, chislo2, chislo3);
}

function calculateMinMax() {

    const chislo1 = parseFloat(prompt("Введите первое число:"));
    const chislo2 = parseFloat(prompt("Введите второе число:"));
    const chislo3 = parseFloat(prompt("Введите третье число:"));

    if (isNaN(chislo1) || isNaN(chislo2) || isNaN(chislo3)) {
        alert("Пожалуйста, введите корректные числа!");
    } else {
        const min = findMin(chislo1, chislo2, chislo3);
        const max = findMax(chislo1, chislo2, chislo3);
        alert(`Минимальное число: ${min}, Максимальное число: ${max}`);
    }
}