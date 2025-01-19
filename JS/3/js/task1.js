// Задание 1: Определение пола
function defineGender(gender) {
    if (gender === 'М' || gender === 'м') {
        return "Ваш пол мужской";
    } else if (gender === 'Ж' || gender === 'ж') {
        return "Ваш пол женский";
    } else {
        return "Ваш пол не определён";
    }
}