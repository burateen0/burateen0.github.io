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
