const products = [
    {
        name: "Фитнес-браслет DEXP SB60",
        imgSrc: "images/1.jpg",
        corpus: "черный",
        remen: "черный",
        displaySize: "0.96\"",
        displayType: "OLED",
        bluetooth: true,
        OS: { os1: "Android 4.2", os2: "iOS 8" }
    },
    {
        name: "Смарт часы RunGo W2",
        imgSrc: "images/2.jpg",
        corpus: "зеленый",
        remen: "зеленый",
        displaySize: "3\"",
        displayType: "TFT (TN)",
        bluetooth: true,
        OS: { os1: "Android", os2: "iOS" }
    },
    {
        name: "Смарт-часы Welbe Prime",
        imgSrc: "images/3.jpg",
        corpus: "розовый",
        remen: "черный",
        displaySize: "1.69\"",
        displayType: "IPS",
        bluetooth: true,
        OS: { os1: "Android 5.0", os2: "iOS 9" }
    }
];

function Cards() {
    const container = document.getElementById('productCardsContainer');
    const template = document.querySelector('.product-card-template');

    products.forEach(product => {

        const productCard = template.cloneNode(true);
        productCard.style.display = 'block';

        productCard.querySelector('.card-img-top').src = product.imgSrc;
        productCard.querySelector('.card-img-top').alt = product.name;
        productCard.querySelector('.card-title').textContent = product.name;
        productCard.querySelector('.corpus').textContent = product.corpus;
        productCard.querySelector('.remen').textContent = product.remen;
        productCard.querySelector('.display-size').textContent = product.displaySize;
        productCard.querySelector('.display-type').textContent = product.displayType;
        productCard.querySelector('.bluetooth').textContent = product.bluetooth ? "Да" : "Нет";
        productCard.querySelector('.os1').textContent = product.OS.os1;
        productCard.querySelector('.os2').textContent = product.OS.os2;

        container.appendChild(productCard);
    });
}

// Вызов функции при загрузке страницы
window.onload = Cards;


// Таймер
const countdownTimer = document.getElementById('countdown-timer');
const endDate = new Date('2026-01-01T00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const remainingTime = endDate - now;

    if (remainingTime <= 0) {
        countdownTimer.innerHTML = 'Акция закончилась!';
        return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    const milliseconds = remainingTime % 1000;

    countdownTimer.innerHTML = `${days} д. ${hours} ч. ${minutes} мин. ${seconds} сек. ${milliseconds} мс.`;
}

setInterval(updateTimer, 1);
