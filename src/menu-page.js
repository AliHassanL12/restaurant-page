export function loadMenuPage() {
    createMainContent();
    createSectionHeader('Beverages');
    generateDrinks();
    createSectionHeader('Main Dishes');
    generateMainDishes();
}

function generateMainDishes() {
    createItem('Mango Lassi', 'A refreshing and creamy yogurt-based drink made with ripe mangoes, yogurt, sugar, and a touch of cardamom. It’s a popular beverage in South Asian cuisine, perfect for cooling down on a hot day.', '£8')
    createItem('Shakshuka', 'A vibrant North African and Middle Eastern dish made with poached eggs in a rich, spiced tomato sauce with onions, peppers, and garlic. It\'s often served with warm crusty bread for dipping, making it a flavorful and hearty meal.', '£12')
    createItem('Beef Wellington', 'A luxurious British dish consisting of tender beef fillet coated with mushroom duxelles and pâté, then wrapped in puff pastry and baked until golden', '£25')
}

function generateDrinks() {
    createItem('Mystic Berry Fizz', 'A refreshing blend of wild blueberries, blackberries, and raspberries, infused with a hint of mint and topped with sparkling citrus soda for a crisp, invigorating finish', '£3');
    createItem('Amber Sunset Chai', 'A rich and creamy spiced chai latte with hints of caramel and toasted vanilla, finished with a sprinkle of cinnamon for a warm, cozy indulgence.', '£5');
    createItem('Crimson Frost Elixir', 'A tangy fusion of pomegranate, hibiscus, and lemon, shaken with crushed ice and a touch of honey for a perfectly balanced sweet-tart refreshment.', '£3');
}

function createItem(drinkName, drinkDescription, dishPrice) {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.classList.add('item');
    content.appendChild(div);

    const headerDiv = document.createElement('div');
    div.appendChild(headerDiv);
    const itemHeader = document.createElement('h3');
    itemHeader.textContent = drinkName;
    headerDiv.appendChild(itemHeader);

    const itemContent = document.createElement('p');
    itemContent.classList.add('itemContent');
    itemContent.textContent = drinkDescription;
    headerDiv.appendChild(itemContent);

    const price = document.createElement('p');
    price.textContent = dishPrice;
    price.classList.add('price');
    headerDiv.appendChild(price);

}

function createSectionHeader(title) {
    const content = document.querySelector('#content');
    const header = document.createElement('h2');
    header.textContent = title;
    content.appendChild(header);
}

function createMainContent() {
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    header.textContent = 'Menu';
    content.appendChild(header);
}

