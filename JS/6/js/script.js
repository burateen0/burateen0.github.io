// Задание 1: Подсчет количества букв и цифр в строке
function Counting() {
    const vvodStroki = prompt("Введите строку:");

    const lettersss = /[a-zA-Z]/g;
    const Cifri = /\d/g;

    const lettersNum = (vvodStroki.match(lettersss) || []).length;
    const CifNum = (vvodStroki.match(Cifri) || []).length;

    alert(`Количество букв: ${lettersNum}\nКоличество цифр: ${CifNum}`);
}

// Задание 2: Проверка URL
function validateUrl() {
    const urlShablon = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const vvodUrl = prompt("Введите URL:");

    if (urlShablon.test(vvodUrl)) {
        alert("URL корректен!");
    } else {
        alert("URL некорректен");
    }
}

// Задание 3: Проверка корректности названия переменной
function validateName() {
    const peremennayaShablon = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    const peremennayaName = prompt("Введите название переменной JavaScript:");

    if (peremennayaShablon.test(peremennayaName)) {
        alert("Название корректно");
    } else {
        alert("Название некорректно");
    }
}

// Задание 4: Проверки строки на содержание только букв и цифр
function validateStr() {
    const alfaNumerikShablon = /^[a-zA-Z0-9]+$/;
    const strokaVvoda = prompt("Введите строку, состоящую только из букв и цифр:");

    if (alfaNumerikShablon.test(strokaVvoda)) {
        alert("Строка состоит только из букв и цифр");
    } else {
        alert("Строка содержит недопустимые символы");
    }
}

// Задание 5: Строка не содержит спецсимволов, цифр, а ее длина 10+ символов
function validateNoSpecialCharsAndMinLength() {
    const strokaBezSimvolov = /^[A-Za-z]{10,}$/;
    const stroka = prompt("Введите строку (без цифр и спецсимволов, длина не менее 10 символов):");

    if (strokaBezSimvolov.test(stroka)) {
        alert("Строка корректна");
    } else {
        alert("Строка некорректна");
    }
}