const display = document.querySelector('.display')

const displayMain = document.createElement('div')
const about = document.createElement('div')
const aboutImage = document.createElement('img')
const aboutInfo = document.createElement('div')
const aboutHeader = document.createElement('h2')
const aboutText = document.createElement('p')

displayMain.className = 'displayMain'
about.className = 'about'
aboutImage.src = './pic.png'
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

const technologies = document.createElement('div')
technologies.className = 'technologies'
const header2 = document.createElement('h2')
header2.textContent = 'Technologies'
const ul = document.createElement('ul')
const list1 =document.createElement('li')
const list2 =document.createElement('li')
const list3 =document.createElement('li')
const list4 =document.createElement('li')
const list5 =document.createElement('li')
const list6 =document.createElement('li')
const list7 =document.createElement('li')
list1.textContent = 'HTML'
list2.textContent = 'CSS'
list3.textContent = 'JavaScript'
list4.textContent = 'React'
list5.textContent = 'Webpack'
list6.textContent = 'ES6'
list7.textContent = 'Git'
ul.appendChild(list1)
ul.appendChild(list2)
ul.appendChild(list3)
ul.appendChild(list4)
ul.appendChild(list5)
ul.appendChild(list6)
ul.appendChild(list7)
technologies.appendChild(header2)
technologies.appendChild(ul)
displayMain.appendChild(technologies)


const contact = document.createElement('div')
contact.className = 'contact'
const contactheader =document.createElement('h2')
contactheader.textContent = 'Get in Touch'
const contactPara =document.createElement('p')
contactPara.className = 'contactPara'
contactPara.textContent = 'Are you looking for a curious and adaptable junior developer to join your team? Look no further. Looking for any kind of collaboration or consultation? Have some advice for me? Having some questions? Feel free to let me know via any platform below;'
const credentials =document.createElement('div')
credentials.className = 'credentials'
const link = document.createElement('a')
link.href = 'https://Psammystprime384@gmail.com/'
const linkImg = document.createElement('img')
linkImg.src = './email-outline.svg'
linkImg.className = 'email' 

link.appendChild(linkImg)
credentials.appendChild(link)
contact.appendChild(contactheader)
contact.appendChild(contactPara)
contact.appendChild(credentials)
displayMain.appendChild(contact)

// const form = document.createElement('form')
// const emailLabel = document.createElement('label')
// const emailInput = document.createElement('input')
// const messageLabel = document.createElement('label')
// const messageInput = document.createElement('input')
// const submitButton = document.createElement('button')

// emailForm.className = 'emailForm'
// form.action = '#'
// form.method = 'get'
// emailLabel.textContent = 'Email'
// emailInput.type = 'text'
// messageLabel.textContent = 'Message'
// messageInput.type = 'text'
// submitButton.className = 'send'
// submitButton.textContent = 'Send'

// form.appendChild(emailLabel)
// form.appendChild(emailInput)
// form.appendChild(messageLabel)
// form.appendChild(messageInput)
// form.appendChild(submitButton)
// emailForm.appendChild(form)

// displayMain.appendChild(about)
// displayMain.appendChild(emailForm)

function updateHome(){
    display.textContent=''
    display.appendChild(displayMain)

}
export{updateHome}