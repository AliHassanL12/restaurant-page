export function loadMenuPage() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Menu';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Here\'s the menu';
    content.appendChild(header);
    content.appendChild(paragraph);
}