//FOOD
import jollofRice from './img/food1.png'
import riceandstew from './img/food2.png'
import bunny from './img/food3.png'
import egusi from './img/food4.png'

//Drinks
import palmWine from './img/drink1.png'
import chapman from './img/drink2.png'
import Rooibos from './img/drink3.png'

// APPETIZERS
import springRolls from './img/appetizer1.png';
import samosas from './img/appetizer2.png';
import mozzarellaSticks from './img/appetizer3.png';
import stuffedMushrooms from './img/appetizer4.png';


 export default function menuPage(container) {
    container.innerHTML = "";

    // Create and style first section
    const firstSection = document.createElement('span');
    firstSection.innerHTML = 'Zulu Menu';
    firstSection.id = 'firstSection';
    firstSection.style.marginBottom = '15px';
    firstSection.style.borderBottom = '1px solid orange';
    container.appendChild(firstSection);

    // Create button container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttonsDiv";

    // Create menu container
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    // Food button
    const foodButton = document.createElement('button');
    foodButton.textContent = 'Food';
    foodButton.className = 'menu-button';
    foodButton.addEventListener('click', () => {
        menuDiv.innerHTML = "";
        createElement(foodMenu());
    });

    // Drinks button
    const drinksButton = document.createElement('button');
    drinksButton.textContent = 'Drinks';
    drinksButton.className = 'menu-button';
    drinksButton.addEventListener('click', () => {
        menuDiv.innerHTML = "";
        createElement(drinksMenu());
    });

    // Appetizers button
    const appetizersButton = document.createElement('button');
    appetizersButton.textContent = 'Appetizers';
    appetizersButton.className = 'menu-button';
    appetizersButton.addEventListener('click', () => {
        menuDiv.innerHTML = "";
        createElement(appetizers());
    });

    // Append buttons to button container
    buttonsDiv.appendChild(foodButton);
    buttonsDiv.appendChild(drinksButton);
    buttonsDiv.appendChild(appetizersButton);

    // Append button container and menu container to main container
    container.appendChild(buttonsDiv);
    container.appendChild(menuDiv);

    // Functions to create menu items
    function foodMenu() {
        foodButton.style.backgroundColor = 'orange';
        drinksButton.style.backgroundColor = 'black';
        appetizersButton.style.backgroundColor = 'black';

        return [
            {
                name: 'Jollof Rice and Stew', 
                image: jollofRice,
                price: '300.00₺',
                description: 'Jollof rice is a beloved staple food in West Africa, enjoyed for its comforting flavors and versatility. It is often served with a flavorful tomato-based stew.'
            },
            {
                name: 'Rice and Stew',
                image: riceandstew, 
                price: '250.00₺',
                description: 'Rice and stew is a common and comforting dish in many African households, featuring perfectly cooked rice served with a rich, spicy tomato-based stew.'
            },
            {
                name: 'Egusi Soup',
                image: egusi, 
                price: '400.00₺',
                description: 'Egusi soup is a rich and hearty Nigerian dish made with melon seeds, leafy vegetables, and meat or fish. It is often eaten with fufu or pounded yam.'
            },
            {
                name: 'Bunny Chow',
                image: bunny, 
                price: '350.00₺',
                description: 'Bunny chow is a South African fast food dish consisting of a hollowed-out loaf of white bread filled with curry. It originated among Indian South Africans in Durban.'
            }
        ];
    }

    function drinksMenu() {
        drinksButton.style.backgroundColor = 'orange';
        foodButton.style.backgroundColor = 'black';
        appetizersButton.style.backgroundColor = 'black';

        return [
            {
                name: 'Palm Wine',
                image: palmWine, 
                price: '150.00₺',
                description: 'Palm wine is a traditional alcoholic beverage made from the sap of various species of palm trees such as the palmyra, date palms, and coconut palms.'
            },
            {
                name: 'Chapman',
                image: chapman, 
                price: '200.00₺',
                description: 'Chapman is a popular Nigerian non-alcoholic cocktail made with a blend of fruit juices, grenadine syrup, and a splash of bitters, garnished with cucumber and citrus fruits.'
            },
            {
                name: 'Rooibos Tea',
                image: Rooibos, 
                price: '100.00₺',
                description: 'Rooibos tea is a caffeine-free herbal tea originating from South Africa, known for its rich, slightly sweet flavor and numerous health benefits.'
            }
        ];
    }

function appetizers(){
    drinksButton.style.backgroundColor = 'black'
    foodButton.style.backgroundColor = 'black'
    appetizersButton.style.backgroundColor = 'orange'

    const menuItems = [
        {
            name: 'Spring Rolls', 
            image: springRolls,
            price: '150.00₺',
            description: 'Spring rolls are a popular appetizer, featuring a variety of fresh vegetables and meats wrapped in a thin pastry and fried to perfection.'
        },
        {
            name: 'Samosas',
            image: samosas, 
            price: '120.00₺',
            description: 'Samosas are a beloved appetizer, consisting of a crispy pastry filled with spiced potatoes, peas, and sometimes meat, often served with chutney.'
        },
        {
            name: 'Mozzarella Sticks',
            image: mozzarellaSticks, 
            price: '200.00₺',
            description: 'Mozzarella sticks are a favorite snack, made by coating mozzarella cheese in seasoned breadcrumbs and frying until golden brown and deliciously melty.'
        },
        {
            name: 'Stuffed Mushrooms',
            image: stuffedMushrooms, 
            price: '180.00₺',
            description: 'Stuffed mushrooms are a tasty appetizer, featuring mushrooms filled with a savory mixture of cheese, herbs, and breadcrumbs, baked until tender.'
        }
    ];

    return menuItems
}


function createElement(arr){
    arr.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuDiv.appendChild(menuItem);

    
        const image = document.createElement("img");
        image.src = item.image
        image.alt = item.name;
        menuItem.appendChild(image);
        image.className = 'menuImages'
    
        const titleandDescriptionDiv  =document.createElement("div");
        titleandDescriptionDiv.className = 'titleandDescription'
        menuItem.appendChild(titleandDescriptionDiv);

        const title = document.createElement("h2");
        title.textContent = item.name;
        titleandDescriptionDiv.appendChild(title);
    
        const description = document.createElement("p");
        description.textContent = item.description;
        titleandDescriptionDiv.appendChild(description);
    
        const price = document.createElement("h3");
        price.textContent = item.price;
        price.className = 'priceBox'
        menuItem.appendChild(price);
    });
    
}
createElement(foodMenu());
}
   
