// Задание 4: Проверки строки на содержание только букв и цифр
function validateStr() {
    const alfaNumerikShablon = /^[a-zA-Z0-9]+$/;
    const strokaVvoda = prompt("Введите строку, состоящую только из букв и цифр:");

    if (alfaNumerikShablon.test(strokaVvoda)) {
        alert("Строка корректна!");
    } else {
        alert("Строка содержит недопустимые символы");
    }
}