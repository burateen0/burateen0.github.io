// Задание 1
function checkIfNumber() {
    const chislo = prompt("Введите число:");

    // Проверка на число
    if (isNaN(chislo)) {
        alert("Это не число! Пожалуйста, введите число.");
        return false;
    }
	alert(`${chislo} - число`);
	console.log(`${chislo} - число`);
}

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
        console.log(`Введенное число ${chislo} положительное.`);
    } else if (chislo < 0) {
        console.log(`Введенное число ${chislo} отрицательное.`);
    } else {
        console.log("Введенное число 0 не положительное и не отрицательное.");
    }
}

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

// Задание 5
function findMaxSumPair() {
    const pervoeChislo = prompt("Введите первое число:");
    const vtoroeChislo = prompt("Введите второе число:");
    const tretieChislo = prompt("Введите третье число:");
    const chetvertoeChislo = prompt("Введите четвертое число:");

    // Проверка на числа
    if (isNaN(pervoeChislo) || isNaN(vtoroeChislo) || isNaN(tretieChislo) || isNaN(chetvertoeChislo)) {
        alert("Пожалуйста, введите только числа.");
        alert("Для корректной работы программы обновите страницу.");
        return; 
    }

    const metod = prompt("Выберите метод (1 или 2):\n1. Использование Math.max\n2. Сравнение вручную");

    switch (metod) {
        case "1":
            const MaxSumma = Math.max(
                Number(pervoeChislo) + Number(vtoroeChislo),
                Number(pervoeChislo) + Number(tretieChislo),
                Number(pervoeChislo) + Number(chetvertoeChislo),
                Number(vtoroeChislo) + Number(tretieChislo),
                Number(vtoroeChislo) + Number(chetvertoeChislo),
                Number(tretieChislo) + Number(chetvertoeChislo)
            );
            alert(`Максимальная сумма: ${MaxSumma}`);
            break;
        
        case "2":
            let maxSumma = Number(pervoeChislo) + Number(vtoroeChislo);
            if (Number(pervoeChislo) + Number(tretieChislo) > maxSumma) maxSumma = Number(pervoeChislo) + Number(tretieChislo);
            if (Number(pervoeChislo) + Number(chetvertoeChislo) > maxSumma) maxSumma = Number(pervoeChislo) + Number(chetvertoeChislo);
            if (Number(vtoroeChislo) + Number(tretieChislo) > maxSumma) maxSumma = Number(vtoroeChislo) + Number(tretieChislo);
            if (Number(vtoroeChislo) + Number(chetvertoeChislo) > maxSumma) maxSumma = Number(vtoroeChislo) + Number(chetvertoeChislo);
            if (Number(tretieChislo) + Number(chetvertoeChislo) > maxSumma) maxSumma = Number(tretieChislo) + Number(chetvertoeChislo);

            alert(`Максимальная сумма: ${maxSumma}`);
            break;

        default:
            alert("Некорректный выбор метода.");
            break;
    }
}



