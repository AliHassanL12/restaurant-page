
export function loadHomePage() {
    createMainContent();
    createHoursSection();
    createLocationSection();
}
function createMainContent() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'A Culinary Gem: Where Every Bite Feels Like Perfection';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This restaurant is nothing short of amazing! From the moment you step inside, you’re greeted with a warm, inviting atmosphere and a delightful aroma that promises an unforgettable dining experience. The food is simply outstanding—every dish is crafted with fresh, high-quality ingredients and bursting with rich, authentic flavors';
    content.appendChild(header);
    content.appendChild(paragraph);
}

function createHoursSection() {
        const content = document.querySelector('#content');
        // creating a open hours section
        const hoursInformationDiv = document.createElement('div');
        hoursInformationDiv.classList.add('hoursDiv');
        content.appendChild(hoursInformationDiv);
    
        // create the open hours header
        const headerDiv = document.createElement('div');
        hoursInformationDiv.appendChild(headerDiv);
        const hoursHeader = document.createElement('h2');
        hoursHeader.textContent = 'Hours';
        headerDiv.appendChild(hoursHeader);
    
        // create open hours content
        const hoursParagraph = document.createElement('p');
        hoursParagraph.classList.add('hoursParagraph');
        hoursParagraph.textContent = 'Monday: 9:00 - 15:00\nTuesday: 9:00 - 15:00\nWednesday: 9:00 - 16:00\nThursday: 9:00 - 16:00\nFriday: 9:00 - 18:00\nSaturday: Closed\nSunday: Closed';
        headerDiv.appendChild(hoursParagraph);
}

function createLocationSection() {
    const content = document.querySelector('#content');

    const locationDivContainer = document.createElement('div');
    locationDivContainer.classList.add('locationDivContainer');
    content.appendChild(locationDivContainer);

        // create the open hours header
    const locationHeaderContainer = document.createElement('div');
    locationDivContainer.appendChild(locationHeaderContainer);
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';
    locationHeaderContainer.appendChild(locationHeader);

    const locationInfo = document.createElement('p');
    locationInfo.textContent = '123 Maplewood Avenue, Pinebrook Heights, Greendale County';
    locationHeaderContainer.appendChild(locationInfo);
}