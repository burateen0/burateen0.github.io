// Задание 4
function checkTriangleSides() {
    const storonaA = prompt("Введите длину первой стороны:");
    const storonaB = prompt("Введите длину второй стороны:");
    const storonaC = prompt("Введите длину третьей стороны:");

    if (isNaN(storonaA) || isNaN(storonaB) || isNaN(storonaC)) {
        alert("Пожалуйста, введите только числа.");
        return;
    }

    // Проверяем, могут ли быть сторонами
    if (parseFloat(storonaA) + parseFloat(storonaB) > parseFloat(storonaC) &&
        parseFloat(storonaA) + parseFloat(storonaC) > parseFloat(storonaB) &&
        parseFloat(storonaB) + parseFloat(storonaC) > parseFloat(storonaA)) {
        alert("Эти числа могут быть длинами сторон треугольника.");
    } else {
        alert("Эти числа не могут быть длинами сторон треугольника.");
    }
}