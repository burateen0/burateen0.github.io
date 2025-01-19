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