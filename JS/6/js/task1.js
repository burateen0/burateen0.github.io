// Задание 1: Подсчет количества букв и цифр в строке
function Counting() {
    const vvodStroki = prompt("Введите строку:");

    const lettersss = /[a-zA-Z]/g;
    const Cifri = /\d/g;

    const lettersNum = (vvodStroki.match(lettersss) || []).length;
    const CifNum = (vvodStroki.match(Cifri) || []).length;

    alert(`Количество букв: ${lettersNum}\nКоличество цифр: ${CifNum}`);
}