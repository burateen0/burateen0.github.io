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