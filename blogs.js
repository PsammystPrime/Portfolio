const display = document.querySelector('.display')

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
Is getting started with programming. Understanding them and how they work is key to getting your feet off 
the ground. This article has been drafted in the simplest possible way for effective understanding 
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
blog3Text.textContent = 'Javascript Arrays...'
blog3Card.appendChild(blog3Header)
blog3Card.appendChild(blog3Text)
blog3.appendChild(blog3Pic)
blog3.appendChild(blog3Card)


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
blogHeader.textContent = `Beginner's Quick Guide to gaining freelace skills using problem solving`
blogText.textContent = `The world of freelance workand remote jobs has seen the emergence of a rapid 
desire for technical sklls globally. Have you ever been asked for what type of job you'd like and in 
response found yourself saying "...any job that is available"? Well, this article is for you...`

blogCard.appendChild(blogHeader)
blogCard.appendChild(blogText)
blog.appendChild(blogPic)
blog.appendChild(blogCard)

function updateBlogs (){
    //return console.log('alive too')
    display.textContent = ''

    display.appendChild(blog)
    display.appendChild(blog2)
    display.appendChild(blog3)
    

}

export{updateBlogs}