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