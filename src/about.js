import addressImg from './img/address.png'

export default function aboutUsPageDom(container){

    container.innerHtml = ""

    const firstSection = document.createElement('span')
    firstSection.innerHTML = 'About Us '
    firstSection.id = 'firstSection'
    firstSection.style.marginBottom = '15px'
    firstSection.style.borderBottom = '1px solid orange'

    const aboutContainer = document.createElement('div');

    // Create and append the heading
    const heading = document.createElement('h1');

    aboutContainer.append(heading);

     // Create and append the description
     const description = document.createElement('p');
     description.textContent = 'Welcome to Our Restaurant! We offer a variety of delicious dishes made from fresh, locally-sourced ingredients. Come visit us for an unforgettable dining experience.';
     aboutContainer.appendChild(description);
     description.className = "aboutUsDesc"

    // Create and append the address
    const address = document.createElement('address');
    address.classList.add('addressClass');
    
    const strong = document.createElement('strong');
    strong.textContent = 'Our Address';
    
    const addressDetails = document.createElement('div');
    addressDetails.innerHTML = `
    <a href="https://www.google.com/maps/place/Zulu+Restaurant+%26+Cafe/@41.0065577,28.9462965,16z/data=!4m6!3m5!1s0x14cabbd0729b153d:0x25b7b5b69b47c4c5!8m2!3d41.0072555!4d28.9502406!16s%2Fg%2F11frszxyfm?entry=ttu">
        Aksaray Mah, Namık Kemal Cad. No: 23 <br>
        Yenikapı, Istanbul, Turkey
        </a>
    `;
    addressDetails.className = "addressDetails"
    

    // Image element
const image = document.createElement('img');
image.src = addressImg;  
image.alt = 'Zulu Restaurant Location'; 
image.style.width = '850px'
image.style.height = '500px'



address.appendChild(image);

    address.appendChild(strong);
    address.appendChild(addressDetails);
    
    aboutContainer.appendChild(address);

   

    container.appendChild(firstSection)
    container.appendChild(aboutContainer)
}