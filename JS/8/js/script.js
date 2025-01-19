// Задание 1: Генерация ссылок
function generateLinks() {
    const link = (cat) => (code) => `http://myshop.ru/${encodeURIComponent(cat)}/${code}`;
    const pcLink = link("PC");
    const notebookLink = link("Notebooks");
    const monitorLink = link("Monitors");

    const result = ` 
        PC: ${pcLink(1001)}<br>
        Notebooks: ${notebookLink(4004)}<br>
        Monitors: ${monitorLink(345)}
    `;

    document.getElementById('linksResult').innerHTML = result;
}

// Задание 2: Подсчёт суммы заказов
const ordersList = [
    { 
        customer: "Ivan",
        product: "phone", 
        cost: 10000, 
        amount: 2 
    },
    { 
        customer: "Peter", 
        product: "usb", 
        cost: 2300, 
        amount: 5 
    },
    { 
        customer: "Mary", 
        product: "connector", 
        cost: 1000, 
        amount: 10 
    },
];

function FindOrders() {
    const totalOrders = ordersList
        .map(order => 
            `Заказ покупателя ${order.customer} на товар "${order.product}" составил ${order.cost * order.amount}`
        )
        .join('\n');
    
    console.log(totalOrders);
    document.getElementById('ordersResult').textContent = totalOrders;
}

// Задание 3: Подсчёт цены со скидкой
function FindOrdersDisc() {
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

// Задание 4: Генерация ссылок
function Links() {
    function Menu(...navList) {
        this.navList = navList;

        this.wrapperA = function (titles) {
            return this.navList.map((elem, index) => 
                `<a href="${elem}">${titles[index] || 'item'}</a>`
            ).join("<br>");
        };
    }

    let mainMenu = new Menu("home.html", "services.html", "price.html", "about.html");
    let footerMenu = new Menu("newPage.html", "checkPage.html", "seoPage.html");

    let mainMenuTitles = ["Главная", "Услуги", "Цены", "О нас"];
    let footerMenuTitles = ["Новая страница", "Проверка", "SEO"];

    const mainMenuAnchors = mainMenu.wrapperA(mainMenuTitles);
    const footerMenuAnchors = footerMenu.wrapperA(footerMenuTitles);

    document.getElementById('anchorLinksResult').innerHTML = `
        <h3>Основное меню:</h3>
        ${mainMenuAnchors}
        <h3>Нижнее меню:</h3>
        ${footerMenuAnchors}
    `;
}