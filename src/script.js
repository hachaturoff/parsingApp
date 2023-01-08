
// Написан на NodeJS с использованием модулей axios и jsdom

const axios = require('axios'); // Подключение модуля axios для скачивания страницы
const fs = require('fs'); // Подключение встроенного в NodeJS модуля fs для работы с файловой системой
const jsdom = require("jsdom"); // Подключение модуля jsdom для работы с DOM-деревом (1)
const { JSDOM } = jsdom; // Подключение модуля jsdom для работы с DOM-деревом (2)



function parccurent() {
    axios.get("https://myfin.by/currency/minsk")
        .then(response => {
            let currentPage = response.data; // Запись полученного результата - сайт
            const dom = new JSDOM(currentPage);
            let current = dom.window.document.querySelector('#st-container > div > div > div > div > div > div > div > div > div.mt-10 > div > div > div.c-main > div:nth-child(1) > div.c-section.bg-pearl-white > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').textContent
            console.log(current)

            fs.appendFileSync('articles.text',current);
        })
}

// setInterval(parccurent, 1000)

parccurent()