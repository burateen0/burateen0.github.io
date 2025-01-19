// Задание 5: Функция проверки типа данных
function checkType() {
    const vvod = prompt("Введите значение:");

    if (vvod === null) {
        console.log("Тип данных: null");
    }
    else if (vvod === undefined) {
        console.log("Тип данных: undefined");
    }
    else if (vvod === "true" || vvod === "false" || vvod === "False"|| vvod === "True") {
        console.log("Тип данных: boolean");
    }
    else if (!isNaN(vvod) && vvod.trim() !== "") {
        console.log("Тип данных: number");
    }
    else {
        console.log("Тип данных: string");
    }
}