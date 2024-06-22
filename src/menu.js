
import Potato from './img/food3.png'
import jollofFood from './img/food2.png'

export default function menuPage(container){

    container.innerHTML = ""

    const firstSection = document.createElement('span')
    firstSection.innerHTML = 'Zulu Menu'
    firstSection.id = 'firstSection'
    firstSection.style.marginBottom = '15px'
    firstSection.style.borderBottom = '1px solid orange'

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    container.appendChild(firstSection)
    container.appendChild(menuDiv);

    const menuItems = [
        {
            name: 'Rice', 
            image: jollofFood,
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
    
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuDiv.appendChild(menuItem);

        const image = document.createElement("img");
        image.src = item.image
        image.alt = item.name;
        menuItem.appendChild(image);

        const title = document.createElement("h2");
        title.textContent = item.name;
        menuItem.appendChild(title);

        const description = document.createElement("p");
        description.textContent = item.description;
        menuItem.appendChild(description);

        const price = document.createElement("h3");
        price.textContent = item.price;
        price.className = 'priceBox'
        menuItem.appendChild(price);
    });
}
   
