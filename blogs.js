const display = document.querySelector('.display')

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
}

export{updateBlogs}