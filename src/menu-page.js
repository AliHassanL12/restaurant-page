export function loadMenuPage() {
    createMainContent();
    generateDrinks();
}

function generateDrinks() {
    createDrink('Mystic Berry Fizz', 'A refreshing blend of wild blueberries, blackberries, and raspberries, infused with a hint of mint and topped with sparkling citrus soda for a crisp, invigorating finish');
    createDrink('Amber Sunset Chai', 'A rich and creamy spiced chai latte with hints of caramel and toasted vanilla, finished with a sprinkle of cinnamon for a warm, cozy indulgence.');
    createDrink('Crimson Frost Elixir', 'A tangy fusion of pomegranate, hibiscus, and lemon, shaken with crushed ice and a touch of honey for a perfectly balanced sweet-tart refreshment.');
}

function createDrink(drinkName, drinkDescription) {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('beverages');
    content.appendChild(div);

    const headerDiv = document.createElement('div');
    div.appendChild(headerDiv);
    const drinkHeader = document.createElement('h3');
    drinkHeader.textContent = drinkName;
    headerDiv.appendChild(drinkHeader);

    const beverageContent = document.createElement('p');
    beverageContent.classList.add('beverageContent');
    beverageContent.textContent = drinkDescription;
    headerDiv.appendChild(beverageContent);

}

function createMainContent() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Menu';
    const subHeader = document.createElement('h2');
    subHeader.textContent = 'Beverages';
    content.appendChild(header);
    content.appendChild(subHeader);
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
