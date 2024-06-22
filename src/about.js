

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
    heading.textContent = 'Welcome';
    aboutContainer.append(heading);

    // Create and append the address
    const address = document.createElement('address');
    address.innerHTML = `
        <strong>Our Address</strong><br>
        
        Aksaray Mah, Namık Kemal Cad. No: 23 <br>
        Yenikapı, Istanbul, Turkey<br>

    `;
    aboutContainer.appendChild(address);

    // Create and append the description
    const description = document.createElement('p');
    description.textContent = 'Welcome to Our Restaurant! We offer a variety of delicious dishes made from fresh, locally-sourced ingredients. Come visit us for an unforgettable dining experience.';
    aboutContainer.appendChild(description);

    container.appendChild(firstSection)
    container.appendChild(aboutContainer)
}