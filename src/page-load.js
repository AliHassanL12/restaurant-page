import '../css/styles.css'


export function loadHomePage() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'A Culinary Gem: Where Every Bite Feels Like Perfection';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This restaurant is nothing short of amazing! From the moment you step inside, you’re greeted with a warm, inviting atmosphere and a delightful aroma that promises an unforgettable dining experience. The food is simply outstanding—every dish is crafted with fresh, high-quality ingredients and bursting with rich, authentic flavors';
    content.appendChild(header);
    content.appendChild(paragraph);
}

