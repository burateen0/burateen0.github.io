// Задание 6: Пятницы 13 числа в текущем году
function ThisYearFridays13() {
    const fridays13List = document.getElementById('fridays13List');
    fridays13List.innerHTML = '';

    const tekushiyGod = new Date().getFullYear();
    let fridays13Text = '';

    for (let mesyac = 0; mesyac < 12; mesyac++) {
        const data = new Date(tekushiyGod, mesyac, 13);
        if (data.getDay() === 5) {
            fridays13Text += `${data.toLocaleDateString()}<br>`;
        }
    }

    fridays13List.innerHTML = fridays13Text;
}