// Задание 1: Объект messages с проверкой правильности ответа
let soobsheniya = {
    'error': "Вы допустили ошибку",
    'success': "Все прошло успешно",
    'check': function (otvetPolzovatelya, pravilnoeZnachenie) {
        if (otvetPolzovatelya == pravilnoeZnachenie) {
            console.log(this.success);
            alert(this.success);
        } else {
            console.log(this.error);
            alert(this.error);
        }
    }
};

// Генерация
function generateQuestion() {
    const chislo1 = Random(1, 10);
    const chislo2 = Random(1, 10);
    const pravilnyOtvet = chislo1 * chislo2;
    const otvet = prompt(`Сколько будет ${chislo1} * ${chislo2}?`);
    
    // Передаем данные в метод check
    soobsheniya.check(otvet, pravilnyOtvet);
    console.log(`Вопрос: ${chislo1} * ${chislo2}, Ответ пользователя: ${otvet}, Правильный ответ: ${pravilnyOtvet}`);
}

// Функция для генерации случайного числа
function Random(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

// Задание 2: Строка из символов на четных позициях
function evenCharacters() {
    const vvodPolzovatelya = prompt("Введите строку:");
    let result = '';
    
    for (let index = 0; index < vvodPolzovatelya.length; index++) {
        if (index % 2 === 0) {
            result += vvodPolzovatelya[index];
        }
    }
    
    alert(`Строка с символами на четных позициях: ${result}`);
    console.log(`Ввод пользователя: ${vvodPolzovatelya}, Результат: ${result}`);
}

// Задание 3: Произведение цифр строки
function multiplyDigits() {
    const stroka = prompt("Введите строку, состоящую только из цифр:");
    let proizvedenie = 1;
    
    if (!/^\d+$/.test(stroka)) {
        alert("Введены некорректные данные. Пожалуйста, введите строку, состоящую только из цифр.");
        console.log("Ошибка ввода: строка содержит недопустимые символы.");
        return;
    }
    
    for (let index = 0; index < stroka.length; index++) {
        proizvedenie *= parseInt(stroka[index]);
    }
    
    alert(`Произведение цифр: ${proizvedenie}`);
    console.log(`Ввод пользователя: ${stroka}, Произведение цифр: ${proizvedenie}`);
}

// Задание 4: Перевернуть число
function reverseNumber() {
    let input = prompt("Введите число:");
    let result = ""; 

    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }

    alert(`Перевернутое число: ${result}`);
    return result; 
}


// Задание 5: Удалить символ на заданной позиции
function removeCharacter() {
    const stroka = prompt("Введите строку:");
    const pozitsiya = parseInt(prompt("Введите номер позиции для удаления (начиная с 0):"));
    
    if (pozitsiya >= 0 && pozitsiya < stroka.length) {
        const result = stroka.slice(0, pozitsiya) + stroka.slice(pozitsiya + 1);
        alert(`Строка после удаления символа: ${result}`);
        console.log(`Ввод пользователя: ${stroka}, Позиция: ${pozitsiya}, Результат: ${result}`);
    } else {
        alert("Неверная позиция. Пожалуйста, введите корректный номер.");
        console.log("Ошибка ввода: некорректная позиция.");
    }
}
