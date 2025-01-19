// Задание 5: Фильтрация строк, начинающихся с 'http://'
function filterUrls() {
    const stroki = [
        "http://google.com",
        "https://example.com",
        "http://yahoo.com",
        "ftp://file.com",
        "http://bing.com",
        "https://github.com",
        "http://stackoverflow.com",
        "https://linkedin.com",
        "ftp://backup.server.com",
        "http://mywebsite.ru",
        "https://edu.platform.com",
        "http://test-site.org",
        "ftp://downloads.site.net",
        "https://secure.payment.com",
        "http://shop.example.ru"
    ];
    
    console.log("Сгенерировано:", stroki);

    const otfiltrovannye = stroki.filter(stroka => stroka.startsWith('http://'));

    console.log(`Строки, начинающиеся на 'http://': ${otfiltrovannye}`);
}