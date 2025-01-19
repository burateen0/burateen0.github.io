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



