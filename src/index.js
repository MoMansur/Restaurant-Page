import './style.css';
import menuPage from './menu.js';

// import logo from './img/logo.png'


function component() {
  const contentDiv = document.getElementById('content')
  contentDiv.classList.add('contentDiv')

  contentDiv.innerHTML = ""

  const Container = document.createElement('div') 
  Container.classList.add('container');


  const firstSection = document.createElement('span')
  firstSection.innerHTML = 'Zulu Restaurant'
  firstSection.id = 'firstSection'
  firstSection.style.borderBottom = '1px solid orange'

  const openingHoursSection = document.createElement('div')
  
  openingHoursSection.id = 'openingHoursSection'

  const openingHours = domFactory(openingHoursSection, 'div')

  openingHours.innerHTML = `<h2>Opening Hours</h2>
                            <ul>Sunday<li>7AM-11PM</li></ul>
                            <ul>Monday<li>7AM-11PM</li></ul>
                            <ul>Tuesday<li>7AM-11PM</li></ul>
                            <ul>Wednesday<li>7AM-11PM</li></ul>
                            <ul>Thursday<li>7AM-11PM</li></ul>
                            <ul>Friday<li>7AM-11PM</li></ul>
                            <ul>Saturday<li>7AM-11PM</li></ul> `
                                

  //HEADER NAV BUTTONS

  const header = document.getElementsByTagName('header')
  const nav = document.getElementsByTagName('nav')
  const buttons = document.querySelectorAll('.btn')


//  buttons.forEach(item=>{
//   item.
//  })
  
  

  

//APPENDERS
  contentDiv.append(Container)  
  Container.append(firstSection)
  Container.append(openingHoursSection)

    return contentDiv;
  }
 
  document.body.appendChild(component());

  function domFactory(append, type, className){
    const element = document.createElement(type)
    
    element.className = className

    append.append(element)
    return element
  }