// Задание 4: Вывод сообщения основываясь на возрасте
const checkAge = function(name, vozrast) {
    if (vozrast > 200) {
        console.log(`${name}, врёте!`);
        return;
    }
    
    if (vozrast < 18) {
        console.log(`${name}, вы еще очень молоды!`);
    } else if (vozrast >= 18 && vozrast <= 50) {
        console.log(`${name}, добро пожаловать в личный кабинет!`);
    } else if (vozrast > 50) {
        console.log(`${name}, моё почтение!`);
    } else {
        console.log("Укажите корректные данные!");
    }
}