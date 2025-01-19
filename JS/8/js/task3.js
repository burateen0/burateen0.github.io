// Задание 3: Подсчёт цены со скидкой
function calculateOrdersWithDiscount() {
    let discountResult = "";

    for (let order of ordersList) {
        let discount;

        // Ввод скидки 
        do {
            const promptMessage = `Товар: ${order.product}\n` +
                                  `Цена за единицу: ${order.cost}\n` +
                                  `Количество: ${order.amount}\n` +
                                  `Введите размер скидки для ${order.customer} в процентах (от 0 до 100), или "N" для завершения:`;
            const discountInput = prompt(promptMessage, "10");

            if (discountInput === "N" || discountInput === "n") {
                document.getElementById('discountResult').textContent = discountResult;
                console.log(discountResult);
                return;
            }

            discount = parseFloat(discountInput);

            // Проверяем ввод
            if (isNaN(discount) || discount < 0 || discount > 100) {
                alert("Ошибка: введите корректное значение скидки от 0 до 100 или 'N' для завершения.");
            }
        } while (isNaN(discount) || discount < 0 || discount > 100);

        // Расчёт суммы с учётом скидки
        const totalCost = order.cost * order.amount;
        const SummaZakaza = Math.round(totalCost * (1 - discount / 100));
        const discountPros = `${discount}%`;

        // Формируем результат для вывода
        discountResult += `Заказ покупателя ${order.customer} составил ${SummaZakaza}, скидка составила ${discountPros}\n`;
    }

    // Вывод результатов
    document.getElementById('discountResult').textContent = discountResult;
    console.log(discountResult);
}