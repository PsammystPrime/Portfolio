const display = document.querySelector('.display')
const projectsContainer = document.createElement('div')
projectsContainer.className = 'projectsContainer'
const projects = document.createElement('div')
projects.className = 'projects';

projectsContainer.appendChild(projects)

//Staffood Restaurant
const project1 = document.createElement('div')
project1.className = 'project1'
const info = document.createElement('div')
info.className = 'info';

const blog = document.createElement('div')
const projectPic = document.createElement('img')
const blogCard = document.createElement('div')
const blogHeader = document.createElement('h1')
const blogLink = document.createElement('a')
const blogText = document.createElement('p')

blogLink.href = ''
blog.className = 'project'
projectPic.className = 'projectPic'
projectPic.src = './peoplebg.jpeg'
blogText.className = 'projectText'
blogHeader.className = 'blogHeader'
blogHeader.textContent = `Staffood Restaurant`
blogText.textContent = `A simple restaurant page for delicacies`

blogLink.appendChild(blogHeader)
blogCard.appendChild(blogLink)
blogCard.appendChild(blogText)
blog.appendChild(blogCard)
blog.appendChild(projectPic)


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
objectiveText.textContent = 'To demonstrate proper understanding of ES6 modules and Dom Manipulation'
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

    info.appendChild(blogObjective)
    info.appendChild(blogStack)

project1.appendChild(blog)
project1.appendChild(info)
projects.appendChild(project1)

//Weather App
const project2 = document.createElement('div')
project2.className = 'project1'
const info2 = document.createElement('div')
info2.className = 'info';

const blog2 = document.createElement('div')
const blog2Pic = document.createElement('img')
const blog2Card = document.createElement('div')
const blog2Header = document.createElement('h1')
const blog2Link = document.createElement('a')
const blog2Text = document.createElement('p')

blog2Link.href = 'https://Psammystprime.github.io/Weather-App'
blog2.className = 'project'
blog2Pic.className = 'projectPic'
blog2Pic.src = './weather.png'
blog2Text.className = 'projectText'
blog2Header.className = 'blogHeader'
blog2Header.textContent = 'Weather App'
blog2Text.textContent = `Get live feed on climate conditions` 

blog2Link.appendChild(blog2Header)
blog2Card.appendChild(blog2Link)
blog2Card.appendChild(blog2Text)
blog2.appendChild(blog2Card)
blog2.appendChild(blog2Pic)


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
objective2Text.textContent = "Demonstrating efficient fetching of data from API's, Json and Promises"
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

    info2.appendChild(blog2Objective)
    info2.appendChild(blog2Stack)

project2.appendChild(blog2)
project2.appendChild(info2)
projects.appendChild(project2)

//Calculator
const project3 = document.createElement('div')
project3.className = 'project1'
const info3 = document.createElement('div')
info3.className = 'info';

const blog3 = document.createElement('div')
const blog3Pic = document.createElement('img')
const blog3Card = document.createElement('div')
const blog3Header = document.createElement('h1')
const blog3Link = document.createElement('a')
const blog3Text = document.createElement('p')

blog3Link.href = 'https://Psammystprime.github.io/Calculator'
blog3.className = 'project'
blog3Pic.className = 'projectPic'
blog3Pic.src = './calc.png'
blog3Text.className = 'projectText'
blog3Header.className = 'blogHeader'
blog3Header.textContent = `Calculator`
blog3Text.textContent = `A JavaScript Calculator for Users`

blog3Link.appendChild(blog3Header)
blog3Card.appendChild(blog3Link)
blog3Card.appendChild(blog3Text)
blog3.appendChild(blog3Card)
blog3.appendChild(blog3Pic)


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
objective3Text.textContent = 'Creating own functionality and abstaining from using the eval function'
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

    info3.appendChild(blog3Objective)
    info3.appendChild(blog3Stack)

project3.appendChild(blog3)
project3.appendChild(info3)
projects.appendChild(project3)

//slider
const blog4 = document.createElement('div')
const blog4Pic = document.createElement('img')
const blog4Card = document.createElement('div')
const blog4Header = document.createElement('h1')
const blog4Link = document.createElement('a')
const blog4Text = document.createElement('p')

const project4 = document.createElement('div')
project4.className = 'project1'
const info4 = document.createElement('div')
info4.className = 'info';

blog4Link.href = 'https://Psammystprime.github.io/image-slider'
blog4.className = 'project'
blog4Pic.className = 'projectPic'
blog4Pic.src = './slider.png'
blog4Text.className = 'projectText'
blog4Header.className = 'blogHeader'
blog4Header.textContent = `Image Slider`
blog4Text.textContent = `An image Carousel`

blog4Link.appendChild(blog4Header)
blog4Card.appendChild(blog4Link)
blog4Card.appendChild(blog4Text)
blog4.appendChild(blog4Card)
blog4.appendChild(blog4Pic)


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
objective4Text.textContent = 'Enhancing understanding of CSS'
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

    info4.appendChild(blog4Objective)
    info4.appendChild(blog4Stack)

project4.appendChild(blog4)
project4.appendChild(info4)
projects.appendChild(project4)

//Admin
const blog5 = document.createElement('div')
const blog5Pic = document.createElement('img')
const blog5Card = document.createElement('div')
const blog5Header = document.createElement('h1')
const blog5Link = document.createElement('a')
const blog5Text = document.createElement('p')

const project5 = document.createElement('div')
project5.className = 'project1'
const info5 = document.createElement('div')
info5.className = 'info';

blog5Link.href = 'https://Psammystprime.github.io/Project-Admin-Dashboard'
blog5.className = 'project'
blog5Pic.className = 'projectPic'
blog5Pic.src = './admin.png'
blog5Text.className = 'projectText'
blog5Header.className = 'blogHeader'
blog5Header.textContent = `Admin Blog`
blog5Text.textContent = `An Admin dashboard for a blog website`

blog5Link.appendChild(blog5Header)
blog5Card.appendChild(blog5Link)
blog5Card.appendChild(blog5Text)
blog5.appendChild(blog5Card)
blog5.appendChild(blog5Pic)


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
stack5List1.textContent = 'Static'
stack5List2.textContent = 'HTML5'
stack5List3.textContent = 'CSS'
stack5List4.textContent = 'JavaScript'

blog5Objective.appendChild(objective5Header)
blog5Objective.appendChild(objective5Text)
stack5.appendChild(stack5List1)
stack5.appendChild(stack5List2)
stack5.appendChild(stack5List3)
stack5.appendChild(stack5List4)
blog5Stack.appendChild(stack5Header)
blog5Stack.appendChild(stack5)

    info5.appendChild(blog5Objective)
    info5.appendChild(blog5Stack)

project5.appendChild(blog5)
project5.appendChild(info5)
projects.appendChild(project5)

//To do list
const blog6 = document.createElement('div')
const blog6Pic = document.createElement('img')
const blog6Card = document.createElement('div')
const blog6Header = document.createElement('h1')
const blog6Link = document.createElement('a')
const blog6Text = document.createElement('p')

const project6 = document.createElement('div')
project6.className = 'project1'
const info6 = document.createElement('div')
info6.className = 'info';

blog6Link.href = ''
blog6.className = 'project'
blog6Pic.className = 'projectPic'
blog6Pic.src = './list.png'
blog6Text.className = 'projectText'
blog6Header.className = 'blogHeader'
blog6Header.textContent = `To do list`
blog6Text.textContent = `Not the usual type to-do-list. `

blog6Link.appendChild(blog6Header)
blog6Card.appendChild(blog6Link)
blog6Card.appendChild(blog6Text)
blog6.appendChild(blog6Card)
blog6.appendChild(blog6Pic)


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
objective6Text.textContent = 'Dom manipulation on large scale and ES6 modules bundling using webpack '
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

    info6.appendChild(blog6Objective)
    info6.appendChild(blog6Stack)

project6.appendChild(blog6)
project6.appendChild(info6)
projects.appendChild(project6)

//library
const blog7 = document.createElement('div')
const blog7Pic = document.createElement('img')
const blog7Card = document.createElement('div')
const blog7Header = document.createElement('h1')
const blog7Link = document.createElement('a')
const blog7Text = document.createElement('p')

const project7 = document.createElement('div')
project7.className = 'project1'
const info7 = document.createElement('div')
info7.className = 'info';

blog7Link.href = ''
blog7.className = 'project'
blog7Pic.className = 'projectPic'
blog7Pic.src = './library.png'
blog7Text.className = 'projectText'
blog7Header.className = 'blogHeader'
blog7Header.textContent = `Book Library`
blog7Text.textContent = `An online library for books`

blog7Link.appendChild(blog7Header)
blog7Card.appendChild(blog7Link)
blog7Card.appendChild(blog7Text)
blog7.appendChild(blog7Card)
blog7.appendChild(blog7Pic)


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
objective7Text.textContent = 'Robust Dom manipulation and Local Storage functionality'
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

    info7.appendChild(blog7Objective)
    info7.appendChild(blog7Stack)

project7.appendChild(blog7)
project7.appendChild(info7)
projects.appendChild(project7)

//landing page
const blog8 = document.createElement('div')
const blog8Pic = document.createElement('img')
const blog8Card = document.createElement('div')
const blog8Header = document.createElement('h1')
const blog8Link = document.createElement('a')
const blog8Text = document.createElement('p')

const project8 = document.createElement('div')
project8.className = 'project1'
const info8 = document.createElement('div')
info8.className = 'info';

blog8Link.href = 'https://Psammystprime.github.io/Landing-Page'
blog8.className = 'project'
blog8Pic.className = 'projectPic'
blog8Pic.src = './2024.jpg'
blog8Text.className = 'projectText'
blog8Header.className = 'blogHeader'
blog8Header.textContent = `Landing Page`
blog8Text.textContent = `My first Landing Page`

blog8Link.appendChild(blog8Header)
blog8Card.appendChild(blog8Link)
blog8Card.appendChild(blog8Text)
blog8.appendChild(blog8Card)
blog8.appendChild(blog8Pic)


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
objective8Text.textContent = 'Use of foundational skills on HTML and CSS'
stack8List1.textContent = 'Static'
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

    info8.appendChild(blog8Objective)
    info8.appendChild(blog8Stack)

project8.appendChild(blog8)
project8.appendChild(info8)
projects.appendChild(project8)

//Card
const blog9 = document.createElement('div')
const blog9Pic = document.createElement('img')
const blog9Card = document.createElement('div')
const blog9Header = document.createElement('h1')
const blog9Link = document.createElement('a')
const blog9Text = document.createElement('p')

const project9 = document.createElement('div')
project9.className = 'project1'
const info9 = document.createElement('div')
info9.className = 'info';

blog9Link.href = 'https://Psammystprime.github.io/Card'
blog9.className = 'project'
blog9Pic.className = 'projectPic'
blog9Pic.src = './card.png'
blog9Text.className = 'projectText'
blog9Header.className = 'blogHeader'
blog9Header.textContent = `Card`
blog9Text.textContent = `A business card`

blog9Link.appendChild(blog9Header)
blog9Card.appendChild(blog9Link)
blog9Card.appendChild(blog9Text)
blog9.appendChild(blog9Card)
blog9.appendChild(blog9Pic)


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
objective9Text.textContent = 'Frontend Mentor Project'
stack9List1.textContent = 'Static'
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


    info9.appendChild(blog9Objective)
    info9.appendChild(blog9Stack)

project9.appendChild(blog9)
project9.appendChild(info9)
projects.appendChild(project9)

//Counter
const blog10 = document.createElement('div')
const blog10Pic = document.createElement('img')
const blog10Card = document.createElement('div')
const blog10Header = document.createElement('h1')
const blog10Link = document.createElement('a')
const blog10Text = document.createElement('p')

const project10 = document.createElement('div')
project10.className = 'project1'
const info10 = document.createElement('div')
info10.className = 'info';

blog10.className = 'project'
blog10Link.href = 'https://Psammystprime.github.io/Passenger-Counter'
blog10Pic.className = 'projectPic'
blog10Pic.src = './count.png'
blog10Text.className = 'projectText'
blog10Header.className = 'blogHeader'
blog10Header.textContent = `Passenger Counter`
blog10Text.textContent = `Let's count`

blog10Link.appendChild(blog10Header)
blog10Card.appendChild(blog10Link)
blog10Card.appendChild(blog10Text)
blog10.appendChild(blog10Card)
blog10.appendChild(blog10Pic)


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
objective10Text.textContent = 'Project from Scrimba'
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

    info10.appendChild(blog10Objective)
    info10.appendChild(blog10Stack)

project10.appendChild(blog10)
project10.appendChild(info10)
projects.appendChild(project10)


function UpdateProjects (){
    display.textContent = '';
    display.appendChild(projectsContainer)

}

export{UpdateProjects}