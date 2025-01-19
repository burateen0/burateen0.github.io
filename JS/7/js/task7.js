// Задание 7: Приветствие в зависимости от времени суток
function Hi() {
    const chasy = new Date().getHours();
    let privetstvie = "";

    if (chasy >= 6 && chasy < 12) {
        privetstvie = "Доброе утро!";
    } else if (chasy >= 12 && chasy < 18) {
        privetstvie = "Добрый день!";
    } else {
        privetstvie = "Добрый вечер!";
    }

    document.getElementById('result7').textContent = privetstvie;
}