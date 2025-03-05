const content = document.querySelector('#content');

const header = document.createElement('header');
const nav = document.createElement('nav');

content.appendChild(header);
header.appendChild(nav);

const homeButton = document.createElement('button');
homeButton.textContent = 'Home';

const menuButton = document.createElement('button');
menuButton.textContent = 'Menu';

const aboutButton = document.createElement('button');
aboutButton.textContent = 'About';

nav.appendChild(homeButton);
nav.appendChild(menuButton);
nav.appendChild(aboutButton);