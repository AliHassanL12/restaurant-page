import './page-load.js'

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', loadPage);
})

function loadPage(e) {
    const targetButton = e.target
    switch(targetButton.textContent) {
        case 'Home':
            console.log('hit home');
            break;
    } 
}