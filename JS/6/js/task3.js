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