// Задание 5: Возраст по дате рождения
function FindAge() {
    const dataRozhdeniya = document.getElementById('birthDateInput').value;
    
    if (!dataRozhdeniya) {
        document.getElementById('result5').textContent = "Пожалуйста, введите дату рождения!";
        return;
    }
    
    const today = new Date();
    const BDayDate = new Date(dataRozhdeniya);

    let years = today.getFullYear() - BDayDate.getFullYear();
    let mesyatsy = today.getMonth() - BDayDate.getMonth();
    let days = today.getDate() - BDayDate.getDate();

    if (mesyatsy < 0 || (mesyatsy === 0 && days < 0)) {
        years--;
        mesyatsy = mesyatsy < 0 ? 12 + mesyatsy : mesyatsy;
        days = days < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() + days : days;
    }

    document.getElementById('result5').textContent = `Возраст: ${years} лет, ${mesyatsy} месяцев и ${days} дней`;
}