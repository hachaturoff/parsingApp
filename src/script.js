
// Написан на NodeJS с использованием модулей axios и jsdom
import 'regenerator-runtime/runtime';
import axios from 'axios';
// const axios = require('axios/dist/browser/axios.cjs');

// import jsdom from 'jsdom';
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

let text = document.getElementById('text')
let btn = document.getElementById('btn')


function parccurent() {

    axios.get("https://myfin.by/currency/minsk")

        .then(response => {
            let currentPage = response.data;

            const div = document.createElement('div')
            div.innerHTML = currentPage

            const current = div.querySelector('#st-container > div > div > div > div > div > div > div > div > div.mt-10 > div > div > div.c-main > div:nth-child(1) > div.c-section.bg-pearl-white > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').textContent
            const currentEuro  = div.querySelector('#st-container > div > div > div > div > div > div > div > div > div.mt-10 > div > div > div.c-main > div:nth-child(1) > div.c-section.bg-pearl-white > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4)').textContent
            console.log(current)
            console.log(currentEuro)

            // const dom = new JSDOM(currentPage);
            // let current = dom.window.document.querySelector('#st-container > div > div > div > div > div > div > div > div > div.mt-10 > div > div > div.c-main > div:nth-child(1) > div.c-section.bg-pearl-white > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2)').textContent


            // fs.appendFileSync('articles.text',current);
        })
}

// parccurent()

btn.addEventListener('click', () => {
    parccurent()
})