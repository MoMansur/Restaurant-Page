

export default function homePageDom(container){
    
  container.innerHTML = ""

  const firstSection = document.createElement('span')
  firstSection.innerHTML = 'Zulu Restaurant'
  firstSection.id = 'firstSection'
  firstSection.style.borderBottom = '1px solid orange'


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
    container.append(openingHoursSection)

    


    return firstSection
}