import './style.css';
import menuPage from './menu.js';
import homePageDom from './home.js';
import aboutUsPageDom from './about.js';

import logo from './img/Dlogo.png'


function component() {
const header = document.createElement('header');
const nav = document.createElement('nav');

// Create logo image element
const logoImg = document.createElement('img');
logoImg.src = logo; // Replace with actual path to your logo image
logoImg.alt = 'Zulu Restaurant Logo'; // Alt text for accessibility
logoImg.className = 'logo'; // Optional: Add a class for styling

// Append logo image to header
header.appendChild(logoImg);

// Create buttons and append to nav
const homeButton = document.createElement('button');
homeButton.className = 'btn';
homeButton.textContent = 'Home';
nav.appendChild(homeButton);



const menuButton = document.createElement('button');
menuButton.className = 'btn';
menuButton.textContent = 'Menu';
nav.appendChild(menuButton);

const aboutButton = document.createElement('button');
aboutButton.className = 'btn';
aboutButton.textContent = 'About';
nav.appendChild(aboutButton);

// Append nav to header
header.appendChild(nav);

// Create content div
const contentDiv = document.createElement('div');
contentDiv.id = 'content';

// Append header and contentDiv to body
document.body.appendChild(header);
document.body.appendChild(contentDiv);



  contentDiv.innerHTML = ""

  const Container = document.createElement('div') 
  Container.classList.add('container');




  

//APPENDERS
 
contentDiv.append(Container)  
homePageDom(Container)


// aboutUsPageDom(Container)
homeButton.addEventListener('click', ()=>{
  homePageDom(Container)
})

menuButton.addEventListener('click', ()=>{
    menuPage(Container)

  })

aboutButton.addEventListener('click', ()=>{
  Container.innerHTML = ""
  aboutUsPageDom(Container)
})
  
const footer = document.createElement('footer');

const copyrightText = document.createTextNode('\u00A9 2024 by Mo_Mansur ');

const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/MoMansur';
githubLink.classList.add('link-offset-2', 'link-offset-3-hover', 'link-underline', 'link-underline-opacity-0', 'link-underline-opacity-75-hover');


const githubText = document.createTextNode(' Mo_Mansur GitHub');
githubLink.appendChild(githubText);

const rightsReservedText = document.createTextNode('. All rights reserved.');

footer.appendChild(copyrightText);
footer.appendChild(githubLink);
footer.appendChild(rightsReservedText);

contentDiv.append(footer)
  }
 
  document.body.appendChild(component());

 