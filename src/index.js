import { loadHomePage } from './page-load.js';
import { loadContactPage } from './contact-page.js';
import { loadMenuPage } from './menu-page.js';
import '../css/styles.css'

loadHomePage();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', loadPage);
})

function loadPage(e) {
    removeContentChildren();
    const targetButton = e.target;
    switch(targetButton.textContent) {
        case 'Home':
            loadHomePage();
            break;
        case 'Menu':
            loadMenuPage();
            break;
        case 'Contact Us':
            loadContactPage();
            break;
    } 
}


function removeContentChildren() {
    const content = document.querySelector('#content');
    content.textContent = '';
}