

//FOOD
import jollofRice from './img/food1.png'
import riceandstew from './img/food2.png'
import bunny from './img/food3.png'
import egusi from './img/food4.png'

export default function menuPage(container){

    container.innerHTML = ""

    const firstSection = document.createElement('span')
    firstSection.innerHTML = 'Zulu Menu'
    firstSection.id = 'firstSection'
    firstSection.style.marginBottom = '15px'
    firstSection.style.borderBottom = '1px solid orange'
    container.appendChild(firstSection)

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

     // Create button for Food
     const foodButton = document.createElement('button');
     foodButton.textContent = 'Food';
     foodButton.className = 'menu-button';
     foodButton.onclick = function() {
        foodMenu()
     };
     container.appendChild(foodButton);
   
     // Create button for Drinks
     const drinksButton = document.createElement('button');
     drinksButton.textContent = 'Drinks';
     drinksButton.className = 'menu-button';
     drinksButton.onclick = function() {
        drinksMenu()
    };
     container.appendChild(drinksButton);
 
     // Create button for Appetizers
     const appetizersButton = document.createElement('button');
     appetizersButton.textContent = 'Appetizers';
     appetizersButton.className = 'menu-button';
     appetizersButton.onclick = function() {
         alert('Displaying Appetizers Menu');
     };
     container.appendChild(appetizersButton);



   
    container.appendChild(menuDiv);

    function foodMenu(){
    foodButton.style.backgroundColor = 'orange'
    drinksButton.style.backgroundColor = 'black'
    appetizersButton.style.backgroundColor = 'black'

    
    const menuItems = [
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
    

    return menuItems
}

const foodMenuFunc = foodMenu()
createElement(foodMenuFunc)

function drinksMenu(){
    drinksButton.style.backgroundColor = 'orange'
    foodButton.style.backgroundColor = 'black'
    appetizersButton.style.backgroundColor = 'black'
    const menuItems = [
        {
            name: 'Drink', 
            image: Potato,
            price: '300.00₺',
            description: 'Jollof rice is a beloved staple food in West Africa, enjoyed for its comforting flavors and versatility.'
        },
        {
            name: 'Potato',
            image: Potato, 
            price: '600.00₺',
            description: 'Jollof rice is a beloved staple food in West Africa, enjoyed for its comforting flavors and versatility.'
        }
    ]
    

    return menuItems
}
const drinkMenuFunc = drinksMenu()
// createElement(drinkMenuFunc)


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
foodMenu()

}
   
