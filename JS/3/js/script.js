// Задание 1: Определение пола
function defineGender(gender) {
    if (gender === 'М' || gender === 'м') {
        return "Ваш пол мужской";
    } else if (gender === 'Ж' || gender === 'ж') {
        return "Ваш пол женский";
    } else {
        return "Ваш пол не определён";
    }
}

// Задание 2: Получение дня недели по номеру
function getDayOfWeek(nomerDnya) {
    switch (nomerDnya) {
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
        default:
            return "Некорректный номер дня";
    }
}

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

// Задание 4: Вывод сообщения основываясь на возрасте
const checkAge = function(name, vozrast) {
    if (vozrast > 200) {
        console.log(`${name}, врёте!`);
        return;
    }
    
    if (vozrast < 18) {
        console.log(`${name}, вы еще очень молоды!`);
    } else if (vozrast >= 18 && vozrast <= 50) {
        console.log(`${name}, добро пожаловать в личный кабинет!`);
    } else if (vozrast > 50) {
        console.log(`${name}, моё почтение!`);
    } else {
        console.log("Укажите корректные данные!");
    }
}

// Задание 5: Функция проверки типа данных
function checkType() {
    const vvod = prompt("Введите значение:");

    if (vvod === null) {
        console.log("Тип данных: null");
    }
    else if (vvod === undefined) {
        console.log("Тип данных: undefined");
    }
    else if (vvod === "true" || vvod === "false" || vvod === "False"|| vvod === "True") {
        console.log("Тип данных: boolean");
    }
    else if (!isNaN(vvod) && vvod.trim() !== "") {
        console.log("Тип данных: number");
    }
    else {
        console.log("Тип данных: string");
    }
}

// Задание 6: Тренажер
const mathTrainer = () => {
    const chisloA = Random(1, 100);
    const chisloB = Random(1, 100);
    const pravilnoeZnachenie = chisloA + chisloB;
    
    const otvet = parseInt(prompt(`Сколько будет ${chisloA} + ${chisloB}?`));
    
    if (otvet === pravilnoeZnachenie) {
        alert("Правильно!");
    } else {
        alert(`Неправильно. Правильный ответ: ${pravilnoeZnachenie}`);
    }
}

// Рандом
function Random(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
