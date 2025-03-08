export function loadContactPage() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Contact Us';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Here\'s where you can contact us';
    content.appendChild(header);
    content.appendChild(paragraph);
}
