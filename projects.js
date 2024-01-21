const display = document.querySelector('.display')

const projectDisplay = document.createElement('div')
const projects = document.createElement('div')
const info = document.createElement('div')
projects.className = 'projects';
info.className = 'info';
projectDisplay.className = 'projectDisplay'

projectDisplay.appendChild(projects)
projectDisplay.appendChild(info)

const blog = document.createElement('div')
const blogPic = document.createElement('img')
const blogCard = document.createElement('div')
const blogHeader = document.createElement('h1')
const blogText = document.createElement('p')

blog.className = 'blog'
blogPic.className = 'blogPic'
blogPic.src = './freelance.png'
blogText.className = 'blogText'
blogHeader.className = 'blogHeader'
blogHeader.textContent = `Beginner's Quick Guide`
blogText.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blogCard.appendChild(blogHeader)
blogCard.appendChild(blogText)
blog.appendChild(blogPic)
blog.appendChild(blogCard)

const blog2 = document.createElement('div')
const blog2Pic = document.createElement('img')
const blog2Card = document.createElement('div')
const blog2Header = document.createElement('h1')
const blog2Text = document.createElement('p')
blog2.className = 'blog'
blog2Pic.className = 'blogPic'
blog2Pic.src = './arrays.jpg'
blog2Text.className = 'blogText'
blog2Header.className = 'blogHeader'
blog2Header.textContent = 'Javascript Arrays'
blog2Text.textContent = `Arrays are one of the fundamental concepts to learn when one 
Is getting started with programming. ` 
blog2Card.appendChild(blog2Header)
blog2Card.appendChild(blog2Text)
blog2.appendChild(blog2Pic)
blog2.appendChild(blog2Card)

projects.appendChild(blog)
projects.appendChild(blog2)

function UpdateProjects (){
    display.textContent = '';
    display.appendChild(projectDisplay)

}

export{UpdateProjects}