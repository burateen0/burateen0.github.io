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