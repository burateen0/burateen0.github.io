// Задание 2: Подсчет дней до нового года
function NewYear() {
    const now = new Date();
    const nextGod = new Date(now.getFullYear() + 1, 0, 1);
    const raznitsa = nextGod - now;
    const dney = Math.floor(raznitsa / (1000 * 60 * 60 * 24));
    document.getElementById('result2').textContent = `До нового года осталось ${dney} дней.`;
}