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