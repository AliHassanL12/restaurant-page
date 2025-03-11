
export function loadContactPage() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Contact Us';
    content.appendChild(header);
    createContact('Zayn Calder', 'Manager', 'managerAtPrezt@gmail.com', '043921293219');
    createContact('Elian Voss', 'Head Chef', 'elian.voss@culinaryhub.com', '04567891234');  
    createContact('Mira Kellan', 'Marketing Director', 'mira.kellan@tasteworks.com', '03984756218');
}

function createContact(name, position, email, phoneNumber) {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('item');
    content.appendChild(div);

    const headerDiv = document.createElement('div');
    div.appendChild(headerDiv);
    const itemHeader = document.createElement('h3');
    itemHeader.textContent = name;
    headerDiv.appendChild(itemHeader);

    const itemContent = document.createElement('p');
    itemContent.classList.add('itemContent');
    itemContent.textContent = `${position}\n${email}\n${phoneNumber}`;
    headerDiv.appendChild(itemContent);
}

