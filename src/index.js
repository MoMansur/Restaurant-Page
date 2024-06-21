import homePageDom from './home.js';
import './style.css';

function component() {
  const contentDiv = document.getElementById('content')
 
    
contentDiv.classList.add('container')
  contentDiv.append(homePageDom())
 

  

    return contentDiv;
  }
 
  document.body.appendChild(component());