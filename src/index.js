import './style.css';
import menuPage from './menu.js';
import homePageDom from './home.js';
import aboutUsPageDom from './about.js';

// import logo from './img/logo.png'
function switchTab(tab) {
  switch (tab) {
      case "home":
        window.location.href = "index.html";  
      break;
    case "contact":
      createContactPage();
      break;
    case "menu":
      createMenuPage();
      break;
    default:
      break;
  }
}

function component() {
const header = document.createElement('header');
const nav = document.createElement('nav');

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
// menuPage(Container)

aboutUsPageDom(Container)
homeButton.addEventListener('click', ()=>{
  homePageDom(Container)
})

menuButton.addEventListener('click', ()=>{
    menuPage(Container)

  })


  
    return contentDiv;
  }
 
  document.body.appendChild(component());

 