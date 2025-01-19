// Задание 5: Удалить символ на заданной позиции
function removeCharacter() {
    const stroka = prompt("Введите строку:");
    const pozitsiya = parseInt(prompt("Введите номер позиции для удаления (начиная с 0):"));
    
    if (pozitsiya >= 0 && pozitsiya < stroka.length) {
        const result = stroka.slice(0, pozitsiya) + stroka.slice(pozitsiya + 1);
        alert(`Строка после удаления символа: ${result}`);
        console.log(`Ввод пользователя: ${stroka}, Позиция для удаления: ${pozitsiya}, Результат: ${result}`);
    } else {
        alert("Неверная позиция. Пожалуйста, введите корректный номер.");
        console.log("Ошибка ввода: некорректная позиция.");
    }
}