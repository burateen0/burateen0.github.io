// Задание 2: Подсчёт суммы заказов
const ordersList = [
    { customer: "Ivan", product: "phone", cost: 10000, amount: 2 },
    { customer: "Peter", product: "usb", cost: 2300, amount: 5 },
    { customer: "Mary", product: "connector", cost: 1000, amount: 10 },
];

function calculateOrders() {
    const totalOrders = ordersList
        .map(order => 
            `Заказ покупателя ${order.customer} на товар "${order.product}" составил ${order.cost * order.amount}`
        )
        .join('\n');
    
    console.log(totalOrders);
    document.getElementById('ordersResult').textContent = totalOrders;
}