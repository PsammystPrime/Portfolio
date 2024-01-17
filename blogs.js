const display = document.querySelector('.display')
const blog2 = document.createElement('div')
const blog2Pic = document.createElement('img')
const blog2Card = document.createElement('div')
const blog2Header = document.createElement('h1')
const blog2Text = document.createElement('p')

blog2.className = 'blog'
blog2Pic.className = 'blogPic'
blog2Pic.src = './pic.png'
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
const blog3Text = document.createElement('p')

blog3.className = 'blog'
blog3Pic.className = 'blogPic'
blog3Pic.src = './pic.png'
blog3Text.className = 'blogText'
blog3Text.textContent = 'Javascript Arrays...'

blog3.appendChild(blog3Pic)
blog3.appendChild(blog3Text)


const blog = document.createElement('div')
const blogPic = document.createElement('img')
const blogText = document.createElement('p')

blog.className = 'blog'
blogPic.className = 'blogPic'
blogPic.src = './pic.png'
blogText.className = 'blogText'
blogText.textContent = 'Javascript Arrays...'

blog.appendChild(blogPic)
blog.appendChild(blogText)

function updateBlogs (){
    //return console.log('alive too')
    display.textContent = ''

    display.appendChild(blog)
    display.appendChild(blog2)
    display.appendChild(blog3)
    

}

export{updateBlogs}