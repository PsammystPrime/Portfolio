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

blog.className = 'project'
blogPic.className = 'blogPic'
blogPic.src = './peoplebg.jpeg'
blogText.className = 'projectText'
blogHeader.className = 'blogHeader'
blogHeader.textContent = `Staffood Restaurant`
blogText.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blogCard.appendChild(blogHeader)
blogCard.appendChild(blogText)
blog.appendChild(blogPic)
blog.appendChild(blogCard)

const blogObjective = document.createElement('div')
const objectiveHeader = document.createElement('h1')
const objectiveText = document.createElement('p')
const blogStack = document.createElement('div')
const stackHeader = document.createElement('h1')
const stack = document.createElement('ul')
const stackList1 = document.createElement('li')
const stackList2 = document.createElement('li')

blogObjective.className = 'blogObjective'
objectiveHeader.className = 'objectiveHeader'
objectiveText.className = 'objectiveText'
blogStack.className = 'blogStack'
stackHeader.className = 'stackHeader'
stack.className = 'stack'

objectiveHeader.textContent = 'Project Objective'
objectiveText.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stackHeader.textContent = 'Tech-Stack'
stackList1.textContent = 'HTML5'
stackList2.textContent = 'CSS'

blogObjective.appendChild(objectiveHeader)
blogObjective.appendChild(objectiveText)
stack.appendChild(stackList1)
stack.appendChild(stackList2)
blogStack.appendChild(stackHeader)
blogStack.appendChild(stack)

blog.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blogObjective)
    info.appendChild(blogStack)
})

const blog2 = document.createElement('div')
const blog2Pic = document.createElement('img')
const blog2Card = document.createElement('div')
const blog2Header = document.createElement('h1')
const blog2Text = document.createElement('p')
blog2.className = 'project'
blog2Pic.className = 'blogPic'
blog2Pic.src = './arrays.jpg'
blog2Text.className = 'projectText'
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

const blog2Objective = document.createElement('div')
const objective2Header = document.createElement('h1')
const objective2Text = document.createElement('p')
const blog2Stack = document.createElement('div')
const stack2Header = document.createElement('h1')
const stack2 = document.createElement('ul')
const stack2List1 = document.createElement('li')
const stack2List2 = document.createElement('li')

blog2Objective.className = 'blogObjective'
objective2Header.className = 'objectiveHeader'
objective2Text.className = 'objectiveText'
blog2Stack.className = 'blogStack'
stack2Header.className = 'stackHeader'
stack2.className = 'stack'

objective2Header.textContent = 'Project Objective'
objective2Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack2Header.textContent = 'Tech-Stack'
stack2List1.textContent = 'HTML'
stack2List2.textContent = 'CSS'

blog2Objective.appendChild(objective2Header)
blog2Objective.appendChild(objective2Text)
stack2.appendChild(stack2List1)
stack2.appendChild(stack2List2)
blog2Stack.appendChild(stack2Header)
blog2Stack.appendChild(stack2)

blog2.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog2Objective)
    info.appendChild(blog2Stack)
})

function UpdateProjects (){
    display.textContent = '';
    display.appendChild(projectDisplay)

}

export{UpdateProjects}