document.addEventListener('DOMContentLoaded', () => {
    const prices = {
        "bwPrint": 20,
        "bwCopy": 15,
        "colorPrint": 50,
        "colorCopy": 40,
        "photo30x40": 60,
        "photo50x60": 100
    };

    function updateTotal() {
        let total = 0;

        Object.keys(prices).forEach((key, index) => {
            const input = document.getElementById(`${key}Q`);
            let quantity = input.value || "0";

            if (isNaN(quantity) || typeof quantity !== "string") {
                quantity = "0"; // Если не число, то присваиваем "0"
            }

            quantity = parseInt(quantity, 10);

            // Проверка на отрицательное
            if (quantity < 0) {
                quantity = 0;
                input.value = quantity;
            }

            if (quantity > 100000) {
                quantity = 99999;
                input.value = quantity;
            }

            const sum = prices[key] * quantity;
            document.getElementById(`sum${index}`).textContent = sum;
            total += sum;
        });

        document.getElementById('itogo').textContent = total;
    }

    Object.keys(prices).forEach((key) => {
        const input = document.getElementById(`${key}Q`);
        input.addEventListener('input', updateTotal);
    });
});
