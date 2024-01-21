const display = document.querySelector('.display')

const displayMain = document.createElement('div')
const about = document.createElement('div')
const aboutImage = document.createElement('img')
const aboutInfo = document.createElement('div')
const aboutHeader = document.createElement('h1')
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

const emailForm = document.createElement('div')
const form = document.createElement('form')
const emailLabel = document.createElement('label')
const emailInput = document.createElement('input')
const messageLabel = document.createElement('label')
const messageInput = document.createElement('input')
const submitButton = document.createElement('button')

emailForm.className = 'emailForm'
form.action = '#'
form.method = 'get'
emailLabel.textContent = 'Email'
emailInput.type = 'text'
messageLabel.textContent = 'Message'
messageInput.type = 'text'
submitButton.className = 'send'
submitButton.textContent = 'Send'

form.appendChild(emailLabel)
form.appendChild(emailInput)
form.appendChild(messageLabel)
form.appendChild(messageInput)
form.appendChild(submitButton)
emailForm.appendChild(form)

displayMain.appendChild(about)
displayMain.appendChild(emailForm)

function updateHome(){
    display.textContent=''
    display.appendChild(displayMain)

}
export{updateHome}