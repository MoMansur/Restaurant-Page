import imagelogo from './img/outside.png'

export default function homePageDom(container){
    
  container.innerHTML = ""

  const firstSection = document.createElement('div')
  firstSection.innerHTML = 'Zulu Restaurant'
  firstSection.id = 'firstSection'
  firstSection.style.borderBottom = '1px solid orange'

  const secondSection =  document.createElement('div')

  


   // Title
   const title = document.createElement("h1");
   title.textContent = "Welcome to Zulu Restaurant";
   secondSection.appendChild(title);

   // Description
   const description = document.createElement("p");
   description.className = 'resturantDescription'
   description.textContent = "Experience the best of African cuisine at Zulu Restaurant. Enjoy our special dishes crafted with love and tradition.";
   secondSection.appendChild(description);

   // Image
   const image = document.createElement("img");
   image.src = imagelogo
   image.alt = "Zulu Restaurant";
   image.style.height = '400px';

   
   secondSection.appendChild(image);


  const openingHoursSection = document.createElement('div')
  
  openingHoursSection.id = 'openingHoursSection'

  const openingHours = document.createElement('div')

  openingHours.innerHTML = `<h2>Opening Hours</h2>
                            <ul>Sunday<li>7AM-11PM</li></ul>
                            <ul>Monday<li>7AM-11PM</li></ul>
                            <ul>Tuesday<li>7AM-11PM</li></ul>
                            <ul>Wednesday<li>7AM-11PM</li></ul>
                            <ul>Thursday<li>7AM-11PM</li></ul>
                            <ul>Friday<li>7AM-11PM</li></ul>
                            <ul>Saturday<li>7AM-11PM</li></ul> `
               
    openingHoursSection.append(openingHours)   

    
    
    container.append(firstSection)
    secondSection.append(openingHoursSection)
    container.append(secondSection)
    


    return firstSection
}