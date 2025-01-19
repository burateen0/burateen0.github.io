// Задание 4: Перевернуть число
function reverseNumber() {
    let input = prompt("Введите число:");
    let result = ""; 

    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }

    alert(`Перевернутое число: ${result}`);
    return result; 
}


/* Но проще, если бы...

function reverseNumber() {
    const input = prompt("Введите число:");
    const result = input.split('').reverse().join('');
    
    alert(`Перевернутое число: ${result}`);
}

*/