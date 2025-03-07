import {loadHomePage} from './page-load.js'

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
    } 
}

function openHomePage() {
    removeContentChildren();
    loadHomePage();
}

function removeContentChildren() {
    const content = document.querySelector('#content');
    content.textContent = '';
}