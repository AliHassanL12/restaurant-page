export function loadMenuPage() {
    createMainContent();
    generateDrinks();
}

function generateDrinks() {
    createDrink('Mystic Berry Fizz', 'A refreshing blend of wild blueberries, blackberries, and raspberries, infused with a hint of mint and topped with sparkling citrus soda for a crisp, invigorating finish', '£3');
    createDrink('Amber Sunset Chai', 'A rich and creamy spiced chai latte with hints of caramel and toasted vanilla, finished with a sprinkle of cinnamon for a warm, cozy indulgence.', '£5');
    createDrink('Crimson Frost Elixir', 'A tangy fusion of pomegranate, hibiscus, and lemon, shaken with crushed ice and a touch of honey for a perfectly balanced sweet-tart refreshment.', '£3');
}

function createDrink(drinkName, drinkDescription, dishPrice) {
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

    const price = document.createElement('p');
    price.textContent = dishPrice;
    price.classList.add('price');
    headerDiv.appendChild(price);

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

