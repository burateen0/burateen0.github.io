// Задание 2: Проверка URL
function validateUrl() {
    const urlShablon = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const vvodUrl = prompt("Введите URL:");

    if (urlShablon.test(vvodUrl)) {
        alert("URL корректен!");
    } else {
        alert("URL некорректен");
    }
}