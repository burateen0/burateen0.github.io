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