import {loadHomePage} from './page-load.js';
import { loadContactPage } from './about-page.js';
import '../css/styles.css'

loadHomePage();


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', loadPage);
})

function loadPage(e) {
    const targetButton = e.target
    switch(targetButton.textContent) {
        case 'Home':
            openHomePage();
            break;
        case 'Contact Us':
            openContactPage();
            break;
    } 
}

function openHomePage() {
    removeContentChildren();
    loadHomePage();
}

function openContactPage() {
    removeContentChildren();
    loadContactPage();
}

function removeContentChildren() {
    const content = document.querySelector('#content');
    content.textContent = '';
}