const display = document.querySelector('.display')
const line = document.createElement('hr')
const line2 = document.createElement('hr')
const line3 = document.createElement('hr')


const displayMain = document.createElement('div')
const about = document.createElement('div')
const aboutImage = document.createElement('img')
const aboutInfo = document.createElement('div')
const aboutHeader = document.createElement('h2')
const aboutText = document.createElement('p')

displayMain.className = 'displayMain'
about.className = 'about'
aboutImage.src = '/assets/pic.png'
aboutImage.className = 'mainImg'
aboutInfo.className = 'textArea'
aboutHeader.textContent = 'About'
aboutText.innerHTML = `Hello World, Am Samuel Njuguna. <br>A Frontend Web Developer and Technical Writer
experienced with JavaScript-based Programming, with a background in Electrical and Electronics Engineering. <br>
Transformed my passion for creativity and innovation into programming languages and Technical 
Blogging. Join me and let's change the world one line of code at a time. <br>
Providing Solutions to complex Problems is what I do best, and with time, am becoming
great at it!`

aboutInfo.appendChild(aboutHeader)
aboutInfo.appendChild(aboutText)
about.appendChild(aboutImage)
about.appendChild(aboutInfo)
displayMain.appendChild(about)
displayMain.appendChild(line)


const technologies = document.createElement('div')
technologies.className = 'technologies'
const header2 = document.createElement('h2')
header2.textContent = 'Technologies'
const ul = document.createElement('ul')

const skills = ['JavaScript','React','APIs','Jest','Git','Webpack','ES6','JAMstack','OOP','Data Structures and Algorithms','Web Security','HTML','CSS']
skills.forEach((skill)=>{
    const list =document.createElement('li')
    list.textContent = skill
    ul.appendChild(list)
})

const education = document.createElement('div')
const educationHeader = document.createElement('h2')
educationHeader.textContent = 'EDUCATION'
education.appendChild(educationHeader)

function School (name, info, date){
    this.name = name
    this.info = info
    this.date = date
}

const edu1 = new School("Harvard-X","Introduction to Computer Science and the art of Programming", "Dec 2023 - Mar 2024" )
const edu2 = new School("Thika Technical Training Institute", "Diploma in Electrical & Electronics Engineering", "Nov 2021 - Nov 2024")

const schools = [edu1,edu2]
schools.forEach((edu)=>{
    const school = document.createElement('ol')
    const name = document.createElement('h3')
    const info = document.createElement('p')
    const  date = document.createElement('p')

    name.textContent = edu.name
    info.textContent = edu.info
    date.textContent = edu.date

    school.appendChild(name)
    school.appendChild(info)
    school.appendChild(date)

    education.appendChild(school)
})

technologies.appendChild(header2)
technologies.appendChild(ul)
technologies.appendChild(line2)
technologies.appendChild(education)
displayMain.appendChild(technologies)
displayMain.appendChild(line3)


const contact = document.createElement('div')
contact.className = 'contact'
const contactheader =document.createElement('h2')
contactheader.textContent = 'Get in Touch'
const contactPara =document.createElement('p')
contactPara.className = 'contactPara'
contactPara.textContent = `Looking for a curious and adaptable Junior Developer to join the team? Searching for any kind of collaboration, consultation, or insights?
Have some advice, questions? Feel free to let me know via any platform below;`
 
contact.appendChild(contactheader)
contact.appendChild(contactPara)
displayMain.appendChild(contact)

function updateHome(){
    display.textContent=''
    display.appendChild(displayMain)

}
export{updateHome}