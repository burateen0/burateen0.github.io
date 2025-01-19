// Задание 3
function solveQuadratic() {
    const a = prompt("Введите коэффициент a:");
    const b = prompt("Введите коэффициент b:");
    const c = prompt("Введите коэффициент c:");
    
    // Проверяем на числа
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Пожалуйста, введите только числа для коэффициентов.");
        return;
    }

    const diskriminant = b * b - 4 * a * c;

    if (diskriminant > 0) {
        alert("У уравнения два решения.");
    } else if (diskriminant === 0) {
        alert("У уравнения одно решение.");
    } else {
        alert("У уравнения нет решений.");
    }
}