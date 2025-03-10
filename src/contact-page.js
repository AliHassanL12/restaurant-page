
export function loadContactPage() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Contact Us';
    content.appendChild(header);
}

function createContact() {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('item');
    content.appendChild(div);
}

