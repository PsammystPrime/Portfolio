const display = document.querySelector('.display')
const projectDisplay = document.createElement('div')
const projects = document.createElement('div')
const info = document.createElement('div')
projects.className = 'projects';
info.className = 'info';
projectDisplay.className = 'projectDisplay'

projectDisplay.appendChild(projects)
projectDisplay.appendChild(info)

//Staffood Restaurant
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
const objectiveHeader = document.createElement('h3')
const objectiveText = document.createElement('p')
const blogStack = document.createElement('div')
const stackHeader = document.createElement('h3')
const stack = document.createElement('ul')
const stackList1 = document.createElement('li')
const stackList2 = document.createElement('li')
const stackList3 = document.createElement('li')
const stackList4 = document.createElement('li')

blogObjective.className = 'blogObjective'
objectiveHeader.className = 'objectiveHeader'
objectiveText.className = 'objectiveText'
blogStack.className = 'blogStack'
stackHeader.className = 'stackHeader'
stack.className = 'stack'

objectiveHeader.textContent = 'Project Objective'
objectiveText.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stackHeader.textContent = 'Tech-Stack'
stackList1.textContent = 'Dynamic'
stackList2.textContent = 'HTML5'
stackList3.textContent = 'CSS'
stackList4.textContent = 'JavaScript'

blogObjective.appendChild(objectiveHeader)
blogObjective.appendChild(objectiveText)
stack.appendChild(stackList1)
stack.appendChild(stackList2)
stack.appendChild(stackList3)
stack.appendChild(stackList4)
blogStack.appendChild(stackHeader)
blogStack.appendChild(stack)

blog.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blogObjective)
    info.appendChild(blogStack)
})
//Weather App
const blog2 = document.createElement('div')
const blog2Pic = document.createElement('img')
const blog2Card = document.createElement('div')
const blog2Header = document.createElement('h1')
const blog2Text = document.createElement('p')
blog2.className = 'project'
blog2Pic.className = 'blogPic'
blog2Pic.src = './weather.png'
blog2Text.className = 'projectText'
blog2Header.className = 'blogHeader'
blog2Header.textContent = 'Javascript Arrays'
blog2Text.textContent = `Arrays are one of the fundamental concepts to learn when one 
Is getting started with programming. ` 
blog2Card.appendChild(blog2Header)
blog2Card.appendChild(blog2Text)
blog2.appendChild(blog2Pic)
blog2.appendChild(blog2Card)

const blog2Objective = document.createElement('div')
const objective2Header = document.createElement('h3')
const objective2Text = document.createElement('p')
const blog2Stack = document.createElement('div')
const stack2Header = document.createElement('h3')
const stack2 = document.createElement('ul')
const stack2List1 = document.createElement('li')
const stack2List2 = document.createElement('li')
const stack2List3 = document.createElement('li')
const stack2List4 = document.createElement('li')

blog2Objective.className = 'blogObjective'
objective2Header.className = 'objectiveHeader'
objective2Text.className = 'objectiveText'
blog2Stack.className = 'blogStack'
stack2Header.className = 'stackHeader'
stack2.className = 'stack'

objective2Header.textContent = 'Project Objective'
objective2Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack2List1.textContent = 'Dynamic'
stack2List2.textContent = 'HTML5'
stack2List3.textContent = 'CSS'
stack2List4.textContent = 'JavaScript'

blog2Objective.appendChild(objective2Header)
blog2Objective.appendChild(objective2Text)
stack2.appendChild(stack2List1)
stack2.appendChild(stack2List2)
stack2.appendChild(stack2List3)
stack2.appendChild(stack2List4)
blog2Stack.appendChild(stack2Header)
blog2Stack.appendChild(stack2)

blog2.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog2Objective)
    info.appendChild(blog2Stack)
})

//Calculator
const blog3 = document.createElement('div')
const blog3Pic = document.createElement('img')
const blog3Card = document.createElement('div')
const blog3Header = document.createElement('h1')
const blog3Text = document.createElement('p')

blog3.className = 'project'
blog3Pic.className = 'blogPic'
blog3Pic.src = './calc.png'
blog3Text.className = 'projectText'
blog3Header.className = 'blogHeader'
blog3Header.textContent = `Staffood Restaurant`
blog3Text.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blog3Card.appendChild(blog3Header)
blog3Card.appendChild(blog3Text)
blog3.appendChild(blog3Pic)
blog3.appendChild(blog3Card)

const blog3Objective = document.createElement('div')
const objective3Header = document.createElement('h3')
const objective3Text = document.createElement('p')
const blog3Stack = document.createElement('div')
const stack3Header = document.createElement('h3')
const stack3 = document.createElement('ul')
const stack3List1 = document.createElement('li')
const stack3List2 = document.createElement('li')
const stack3List3 = document.createElement('li')
const stack3List4 = document.createElement('li')

blog3Objective.className = 'blogObjective'
objective3Header.className = 'objectiveHeader'
objective3Text.className = 'objectiveText'
blog3Stack.className = 'blogStack'
stack3Header.className = 'stackHeader'
stack3.className = 'stack'

objective3Header.textContent = 'Project Objective'
objective3Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack3List1.textContent = 'Dynamic'
stack3List2.textContent = 'HTML5'
stack3List3.textContent = 'CSS'
stack3List4.textContent = 'JavaScript'

blog3Objective.appendChild(objective3Header)
blog3Objective.appendChild(objective3Text)
stack3.appendChild(stack3List1)
stack3.appendChild(stack3List2)
stack3.appendChild(stack3List3)
stack3.appendChild(stack3List4)
blog3Stack.appendChild(stack3Header)
blog3Stack.appendChild(stack3)

blog.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog3Objective)
    info.appendChild(blog3Stack)
})
//slider
const blog4 = document.createElement('div')
const blog4Pic = document.createElement('img')
const blog4Card = document.createElement('div')
const blog4Header = document.createElement('h1')
const blog4Text = document.createElement('p')

blog4.className = 'project'
blog4Pic.className = 'blogPic'
blog4Pic.src = './slider.png'
blog4Text.className = 'projectText'
blog4Header.className = 'blogHeader'
blog4Header.textContent = `Staffood Restaurant`
blog4Text.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blog4Card.appendChild(blog4Header)
blog4Card.appendChild(blog4Text)
blog4.appendChild(blog4Pic)
blog4.appendChild(blog4Card)

const blog4Objective = document.createElement('div')
const objective4Header = document.createElement('h3')
const objective4Text = document.createElement('p')
const blog4Stack = document.createElement('div')
const stack4Header = document.createElement('h3')
const stack4 = document.createElement('ul')
const stack4List1 = document.createElement('li')
const stack4List2 = document.createElement('li')
const stack4List3 = document.createElement('li')
const stack4List4 = document.createElement('li')

blog4Objective.className = 'blogObjective'
objective4Header.className = 'objectiveHeader'
objective4Text.className = 'objectiveText'
blog4Stack.className = 'blogStack'
stack4Header.className = 'stackHeader'
stack4.className = 'stack'

objective4Header.textContent = 'Project Objective'
objective4Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack4List1.textContent = 'Dynamic'
stack4List2.textContent = 'HTML5'
stack4List3.textContent = 'CSS'
stack4List4.textContent = 'JavaScript'

blog4Objective.appendChild(objective4Header)
blog4Objective.appendChild(objective4Text)
stack4.appendChild(stack4List1)
stack4.appendChild(stack4List2)
stack4.appendChild(stack4List3)
stack4.appendChild(stack4List4)
blog4Stack.appendChild(stack4Header)
blog4Stack.appendChild(stack4)

blog.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog4Objective)
    info.appendChild(blog4Stack)
})
//Admin
const blog5 = document.createElement('div')
const blog5Pic = document.createElement('img')
const blog5Card = document.createElement('div')
const blog5Header = document.createElement('h1')
const blog5Text = document.createElement('p')

blog5.className = 'project'
blog5Pic.className = 'blogPic'
blog5Pic.src = './admin.png'
blog5Text.className = 'projectText'
blog5Header.className = 'blogHeader'
blog5Header.textContent = `Staffood Restaurant`
blog5Text.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blog5Card.appendChild(blog5Header)
blog5Card.appendChild(blog5Text)
blog5.appendChild(blog5Pic)
blog5.appendChild(blog5Card)

const blog5Objective = document.createElement('div')
const objective5Header = document.createElement('h3')
const objective5Text = document.createElement('p')
const blog5Stack = document.createElement('div')
const stack5Header = document.createElement('h3')
const stack5 = document.createElement('ul')
const stack5List1 = document.createElement('li')
const stack5List2 = document.createElement('li')
const stack5List3 = document.createElement('li')
const stack5List4 = document.createElement('li')

blog5Objective.className = 'blogObjective'
objective5Header.className = 'objectiveHeader'
objective5Text.className = 'objectiveText'
blog5Stack.className = 'blogStack'
stack5Header.className = 'stackHeader'
stack5.className = 'stack'

objective5Header.textContent = 'Project Objective'
objective5Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack5List1.textContent = 'Dynamic'
stack5List2.textContent = 'HTML5'
stack5List3.textContent = 'CSS'
stack5List4.textContent = 'JavaScript'

blog5Objective.appendChild(objective5Header)
blog5Objective.appendChild(objective5Text)
stack5.appendChild(stack5List1)
stack5.appendChild(stack5List2)
stack5.appendChild(stack5List4)
stack5.appendChild(stack5List2)
blog5Stack.appendChild(stack5Header)
blog5Stack.appendChild(stack5)

blog.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog5Objective)
    info.appendChild(blog5Stack)
})
//To do list
const blog6 = document.createElement('div')
const blog6Pic = document.createElement('img')
const blog6Card = document.createElement('div')
const blog6Header = document.createElement('h1')
const blog6Text = document.createElement('p')

blog6.className = 'project'
blog6Pic.className = 'blogPic'
blog6Pic.src = './list.png'
blog6Text.className = 'projectText'
blog6Header.className = 'blogHeader'
blog6Header.textContent = `Staffood Restaurant`
blog6Text.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blog6Card.appendChild(blog6Header)
blog6Card.appendChild(blog6Text)
blog6.appendChild(blog6Pic)
blog6.appendChild(blog6Card)

const blog6Objective = document.createElement('div')
const objective6Header = document.createElement('h3')
const objective6Text = document.createElement('p')
const blog6Stack = document.createElement('div')
const stack6Header = document.createElement('h3')
const stack6 = document.createElement('ul')
const stack6List1 = document.createElement('li')
const stack6List2 = document.createElement('li')
const stack6List3 = document.createElement('li')
const stack6List4 = document.createElement('li')

blog6Objective.className = 'blogObjective'
objective6Header.className = 'objectiveHeader'
objective6Text.className = 'objectiveText'
blog6Stack.className = 'blogStack'
stack6Header.className = 'stackHeader'
stack6.className = 'stack'

objective6Header.textContent = 'Project Objective'
objective6Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack6List1.textContent = 'Dynamic'
stack6List2.textContent = 'HTML5'
stack6List3.textContent = 'CSS'
stack6List4.textContent = 'JavaScript'

blog6Objective.appendChild(objective6Header)
blog6Objective.appendChild(objective6Text)
stack6.appendChild(stack6List1)
stack6.appendChild(stack6List2)
stack6.appendChild(stack6List3)
stack6.appendChild(stack6List4)
blog6Stack.appendChild(stack6Header)
blog6Stack.appendChild(stack6)

blog6.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog6Objective)
    info.appendChild(blog6Stack)
})
//library
const blog7 = document.createElement('div')
const blog7Pic = document.createElement('img')
const blog7Card = document.createElement('div')
const blog7Header = document.createElement('h1')
const blog7Text = document.createElement('p')

blog7.className = 'project'
blog7Pic.className = 'blogPic'
blog7Pic.src = './library.png'
blog7Text.className = 'projectText'
blog7Header.className = 'blogHeader'
blog7Header.textContent = `Staffood Restaurant`
blog7Text.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blog7Card.appendChild(blog7Header)
blog7Card.appendChild(blog7Text)
blog7.appendChild(blog7Pic)
blog7.appendChild(blog7Card)

const blog7Objective = document.createElement('div')
const objective7Header = document.createElement('h3')
const objective7Text = document.createElement('p')
const blog7Stack = document.createElement('div')
const stack7Header = document.createElement('h3')
const stack7 = document.createElement('ul')
const stack7List1 = document.createElement('li')
const stack7List2 = document.createElement('li')
const stack7List3 = document.createElement('li')
const stack7List4 = document.createElement('li')

blog7Objective.className = 'blogObjective'
objective7Header.className = 'objectiveHeader'
objective7Text.className = 'objectiveText'
blog7Stack.className = 'blogStack'
stack7Header.className = 'stackHeader'
stack7.className = 'stack'

objective7Header.textContent = 'Project Objective'
objective7Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack7List1.textContent = 'Dynamic'
stack7List2.textContent = 'HTML5'
stack7List3.textContent = 'CSS'
stack7List4.textContent = 'JavaScript'

blog7Objective.appendChild(objective7Header)
blog7Objective.appendChild(objective7Text)
stack7.appendChild(stack7List1)
stack7.appendChild(stack7List2)
stack7.appendChild(stack7List3)
stack7.appendChild(stack7List4)
blog7Stack.appendChild(stack7Header)
blog7Stack.appendChild(stack7)

blog7.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog7Objective)
    info.appendChild(blog7Stack)
})
//landing page
const blog8 = document.createElement('div')
const blog8Pic = document.createElement('img')
const blog8Card = document.createElement('div')
const blog8Header = document.createElement('h1')
const blog8Text = document.createElement('p')

blog8.className = 'project'
blog8Pic.className = 'blogPic'
blog8Pic.src = './2024.jpg'
blog8Text.className = 'projectText'
blog8Header.className = 'blogHeader'
blog8Header.textContent = `Staffood Restaurant`
blog8Text.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blog8Card.appendChild(blog8Header)
blog8Card.appendChild(blog8Text)
blog8.appendChild(blog8Pic)
blog8.appendChild(blog8Card)

const blog8Objective = document.createElement('div')
const objective8Header = document.createElement('h3')
const objective8Text = document.createElement('p')
const blog8Stack = document.createElement('div')
const stack8Header = document.createElement('h3')
const stack8 = document.createElement('ul')
const stack8List1 = document.createElement('li')
const stack8List2 = document.createElement('li')
const stack8List3 = document.createElement('li')
const stack8List4 = document.createElement('li')

blog8Objective.className = 'blogObjective'
objective8Header.className = 'objectiveHeader'
objective8Text.className = 'objectiveText'
blog8Stack.className = 'blogStack'
stack8Header.className = 'stackHeader'
stack8.className = 'stack'

objective8Header.textContent = 'Project Objective'
objective8Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack8List1.textContent = 'Dynamic'
stack8List2.textContent = 'HTML5'
stack8List3.textContent = 'CSS'
stack8List4.textContent = 'JavaScript'

blog8Objective.appendChild(objective8Header)
blog8Objective.appendChild(objective8Text)
stack8.appendChild(stack8List1)
stack8.appendChild(stack8List2)
stack8.appendChild(stack8List3)
stack8.appendChild(stack8List4)
blog8Stack.appendChild(stack8Header)
blog8Stack.appendChild(stack8)

blog8.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog8Objective)
    info.appendChild(blog8Stack)
})
//Card
const blog9 = document.createElement('div')
const blog9Pic = document.createElement('img')
const blog9Card = document.createElement('div')
const blog9Header = document.createElement('h1')
const blog9Text = document.createElement('p')

blog9.className = 'project'
blog9Pic.className = 'blogPic'
blog9Pic.src = './card.png'
blog9Text.className = 'projectText'
blog9Header.className = 'blogHeader'
blog9Header.textContent = `Staffood Restaurant`
blog9Text.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blog9Card.appendChild(blog9Header)
blog9Card.appendChild(blog9Text)
blog9.appendChild(blog9Pic)
blog9.appendChild(blog9Card)

const blog9Objective = document.createElement('div')
const objective9Header = document.createElement('h3')
const objective9Text = document.createElement('p')
const blog9Stack = document.createElement('div')
const stack9Header = document.createElement('h3')
const stack9 = document.createElement('ul')
const stack9List1 = document.createElement('li')
const stack9List2 = document.createElement('li')
const stack9List3 = document.createElement('li')
const stack9List4 = document.createElement('li')

blog9Objective.className = 'blogObjective'
objective9Header.className = 'objectiveHeader'
objective9Text.className = 'objectiveText'
blog9Stack.className = 'blogStack'
stack9Header.className = 'stackHeader'
stack9.className = 'stack'

objective9Header.textContent = 'Project Objective'
objective9Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack9List1.textContent = 'Dynamic'
stack9List2.textContent = 'HTML5'
stack9List3.textContent = 'CSS'
stack9List4.textContent = 'JavaScript'

blog9Objective.appendChild(objective9Header)
blog9Objective.appendChild(objective9Text)
stack9.appendChild(stack9List1)
stack9.appendChild(stack9List2)
stack9.appendChild(stack9List3)
stack9.appendChild(stack9List4)
blog9Stack.appendChild(stack9Header)
blog9Stack.appendChild(stack9)

blog9.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog9Objective)
    info.appendChild(blog9Stack)
})
//Counter
const blog10 = document.createElement('div')
const blog10Pic = document.createElement('img')
const blog10Card = document.createElement('div')
const blog10Header = document.createElement('h1')
const blog10Text = document.createElement('p')

blog10.className = 'project'
blog10Pic.className = 'blogPic'
blog10Pic.src = './count.png'
blog10Text.className = 'projectText'
blog10Header.className = 'blogHeader'
blog10Header.textContent = `Staffood Restaurant`
blog10Text.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally.`

blog10Card.appendChild(blog10Header)
blog10Card.appendChild(blog10Text)
blog10.appendChild(blog10Pic)
blog10.appendChild(blog10Card)

const blog10Objective = document.createElement('div')
const objective10Header = document.createElement('h3')
const objective10Text = document.createElement('p')
const blog10Stack = document.createElement('div')
const stack10Header = document.createElement('h3')
const stack10 = document.createElement('ul')
const stack10List1 = document.createElement('li')
const stack10List2 = document.createElement('li')
const stack10List3 = document.createElement('li')
const stack10List4 = document.createElement('li')

blog10Objective.className = 'blogObjective'
objective10Header.className = 'objectiveHeader'
objective10Text.className = 'objectiveText'
blog10Stack.className = 'blogStack'
stack10Header.className = 'stackHeader'
stack10.className = 'stack'

objective10Header.textContent = 'Project Objective'
objective10Text.textContent = 'This is a Project solely devoted to use of grids in css as opposed to use of flexbox'
stack10List1.textContent = 'Dynamic'
stack10List2.textContent = 'HTML5'
stack10List3.textContent = 'CSS'
stack10List4.textContent = 'JavaScript'

blog10Objective.appendChild(objective10Header)
blog10Objective.appendChild(objective10Text)
stack10.appendChild(stack10List1)
stack10.appendChild(stack10List2)
stack10.appendChild(stack10List3)
stack10.appendChild(stack10List4)
blog10Stack.appendChild(stack10Header)
blog10Stack.appendChild(stack10)

blog10.addEventListener('mouseover',()=> {
    info.textContent = ''
    info.appendChild(blog10Objective)
    info.appendChild(blog10Stack)
})

projects.appendChild(blog)
projects.appendChild(blog2)
projects.appendChild(blog3)
projects.appendChild(blog4)
projects.appendChild(blog5)
projects.appendChild(blog6)
projects.appendChild(blog7)
projects.appendChild(blog8)
projects.appendChild(blog9)
projects.appendChild(blog10)

function UpdateProjects (){
    display.textContent = '';
    info.textContent = ''
    display.appendChild(projectDisplay)

}

export{UpdateProjects}