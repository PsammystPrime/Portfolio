const display = document.querySelector('.display')
const blogContainer = document.createElement('div')
blogContainer.className = 'blogContainer'

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
blog2Header.textContent = 'Understanding Javascript Arrays and objects'
blog2Text.textContent = `Arrays are one of the fundamental concepts to learn when one 
Is getting started with programming. Understanding them and how they work is key to getting your feet off 
the ground. This article has been drafted in the simplest way possible for effective understanding 
regardless of intellectual background. ` 
blog2Card.appendChild(blog2Header)
blog2Card.appendChild(blog2Text)
blog2.appendChild(blog2Pic)
blog2.appendChild(blog2Card)

const blog3 = document.createElement('div')
const blog3Pic = document.createElement('img')
const blog3Card = document.createElement('div')
const blog3Header = document.createElement('h1')
const blog3Text = document.createElement('p')
blog3.className = 'blog'
blog3Pic.className = 'blogPic'
blog3Pic.src = './2024.jpg'
blog3Text.className = 'blogText'
blog3Header.className = 'blogHeader'
blog3Header.textContent = 'Writing Great Content in 2024'
blog3Text.textContent = `Proven Ideas and methods for writers in enhancing writing skills. It will guide
you through challenges a writer encounters and ways of overcomimg them ensuring you publish great content
that stands out to readers.`
blog3Card.appendChild(blog3Header)
blog3Card.appendChild(blog3Text)
blog3.appendChild(blog3Pic)
blog3.appendChild(blog3Card)

const blog4 = document.createElement('div')
const blog4Pic = document.createElement('img')
const blog4Card = document.createElement('div')
const blog4Header = document.createElement('h1')
const blog4Text = document.createElement('p')

blog4.className = 'blog'
blog4Pic.className = 'blogPic'
blog4Pic.src = './comps.jpg'
blog4Text.className = 'blogText'
blog4Header.className = 'blogHeader'
blog4Header.textContent = `Web Apps vs Mobile Apps`
blog4Text.textContent = `We explore the world of web Development and Mobile Development both for users and
 developers. Do's and Don'ts, expectations, and the factors that may necessitate one choice over another.`

blog4Card.appendChild(blog4Header)
blog4Card.appendChild(blog4Text)
blog4.appendChild(blog4Pic)
blog4.appendChild(blog4Card)

const blog5 = document.createElement('div')
const blog5Pic = document.createElement('img')
const blog5Card = document.createElement('div')
const blog5Header = document.createElement('h1')
const blog5Text = document.createElement('p')

blog5.className = 'blog'
blog5Pic.className = 'blogPic'
blog5Pic.src = './bundling.jpg'
blog5Text.className = 'blogText'
blog5Header.className = 'blogHeader'
blog5Header.textContent = `Bundling Modules with Webpack`
blog5Text.textContent = `ES6 Modules are among the latest features in Javascript. This article will take you
through benefits of bundling up project modules and resources using webpack and why you should incorporate
such a tool for successful deployment of your project to production.`

blog5Card.appendChild(blog5Header)
blog5Card.appendChild(blog5Text)
blog5.appendChild(blog5Pic)
blog5.appendChild(blog5Card)

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
blogHeader.textContent = `Beginner's Quick Guide to gaining freelance skills using problem solving`
blogText.textContent = `The world of freelance work and remote jobs has seen the emergence of a rapid 
desire for technical sklls globally. Have you ever been asked for what type of job you'd like and in 
response found yourself saying "...any job that is available"? Well, this article is for you...`

blogCard.appendChild(blogHeader)
blogCard.appendChild(blogText)
blog.appendChild(blogPic)
blog.appendChild(blogCard)

function updateBlogs (){
    //return console.log('alive too')
    display.textContent = ''

    blogContainer.appendChild(blog)
    blogContainer.appendChild(blog2)
    blogContainer.appendChild(blog3)
    blogContainer.appendChild(blog4)
    blogContainer.appendChild(blog5)
    display.appendChild(blogContainer)

}


export{updateBlogs}