// Задание 3 Все четные числа от 1 до 100
function printEvenNumbers1to100() {
    for (let chislo = 1; chislo <= 100; chislo++) {
        if (chislo % 2 === 0) {
            console.log(chislo);
        }
    }
}