const display = document.querySelector('.display')
const blogContainer = document.createElement('div')
blogContainer.className = 'blogContainer'

const blog = document.createElement('div')
const blogPic = document.createElement('img')
const blogLink = document.createElement('a')
const blogHeader = document.createElement('h1')
const blogText = document.createElement('p')

blog.className = 'blog'
blogLink.href = 'https://medium.com/@psammystprime/beginners-quick-guide-to-gaining-freelance-skills-using-problem-solving-10974c67ce96'
blogPic.className = 'blogPic'
blogPic.src = './freelance.png'
blogText.className = 'blogText'
blogHeader.className = 'blogHeader'
blogHeader.textContent = `Beginner's Quick Guide to gaining freelance skills using problem solving`
blogText.textContent = `The world of freelance work and remote jobs has seen the emergence of a rapid 
desire for technical sklls globally. Have you ever been asked for what type of job you'd like and in 
response found yourself saying "...any job that is available"? Well, this article is for you...`
blogLink.appendChild(blogHeader)
blog.appendChild(blogLink)
blog.appendChild(blogPic)
blog.appendChild(blogText)


const blog2 = document.createElement('div')
const blog2Pic = document.createElement('img')
const blog2Link = document.createElement('a')
const blog2Header = document.createElement('h1')
const blog2Text = document.createElement('p')
blog2.className = 'blog'
blog2Link.href = 'https://medium.com/@psammystprime/js-arrays-81b3088eea8c'
blog2Pic.className = 'blogPic'
blog2Pic.src = './arrays.jpg'
blog2Text.className = 'blogText'
blog2Header.className = 'blogHeader'
blog2Header.textContent = 'Understanding Javascript Arrays and objects'
blog2Text.textContent = `Arrays are one of the fundamental concepts to learn when one 
Is getting started with programming. Understanding them and how they work is key to getting your feet off 
the ground. This article has been drafted in the simplest way possible for effective understanding 
regardless of intellectual background. ` 
blog2Link.appendChild(blog2Header)
blog2.appendChild(blog2Link)
blog2.appendChild(blog2Pic)
blog2.appendChild(blog2Text)


const blog3 = document.createElement('div')
const blog3Pic = document.createElement('img')
const blog3Link = document.createElement('a')
const blog3Header = document.createElement('h1')
const blog3Text = document.createElement('p')
blog3.className = 'blog'
blog3Link.href = 'www.medium.com/dddd'
blog3Pic.className = 'blogPic'
blog3Pic.src = './2024.jpg'
blog3Text.className = 'blogText'
blog3Header.className = 'blogHeader'
blog3Header.textContent = 'Writing Great Content in 2024'
blog3Text.textContent = `Proven Ideas and methods for writers in enhancing writing skills. It will guide
you through challenges a writer encounters and ways of overcomimg them ensuring you publish great content
that stands out to readers.`
blog3Link.appendChild(blog3Header)
blog3.appendChild(blog3Link)
blog3.appendChild(blog3Pic)
blog3.appendChild(blog3Text)


const blog4 = document.createElement('div')
const blog4Pic = document.createElement('img')
const blog4Link = document.createElement('a')
const blog4Header = document.createElement('h1')
const blog4Text = document.createElement('p')
blog4.className = 'blog'
blog4Link.href = 'https://medium.com/@psammystprime/mobile-apps-vs-web-apps-which-one-to-build-and-why-7725ef445cee'
blog4Pic.className = 'blogPic'
blog4Pic.src = './comps.jpg'
blog4Text.className = 'blogText'
blog4Header.className = 'blogHeader'
blog4Header.textContent = `Web Apps vs Mobile Apps`
blog4Text.textContent = `We explore the world of web Development and Mobile Development both for users and
 developers. Do's and Don'ts, expectations, and the factors that may necessitate one choice over another.`
blog4Link.appendChild(blog4Header)
blog4.appendChild(blog4Link)
blog4.appendChild(blog4Pic)
blog4.appendChild(blog4Text)


const blog5 = document.createElement('div')
const blog5Pic = document.createElement('img')
const blog5Link = document.createElement('a')
const blog5Header = document.createElement('h1')
const blog5Text = document.createElement('p')
blog5.className = 'blog'
blog5Link.href = 'www.medium.com/dddd'
blog5Pic.className = 'blogPic'
blog5Pic.src = './bundling.jpg'
blog5Text.className = 'blogText'
blog5Header.className = 'blogHeader'
blog5Header.textContent = `Bundling Modules with Webpack`
blog5Text.textContent = `ES6 Modules are among the latest features in Javascript. This article will take you
through benefits of bundling up project modules and resources using webpack and why you should incorporate
such a tool for successful deployment of your project to production.`
blog5Link.appendChild(blog5Header)
blog5.appendChild(blog5Link)
blog5.appendChild(blog5Pic)
blog5.appendChild(blog5Text)


const blog6 = document.createElement('div')
const blog6Pic = document.createElement('img')
const blog6Link = document.createElement('a')
const blog6Header = document.createElement('h1')
const blog6Text = document.createElement('p')
blog6.className = 'blog'
blog6Link.href = 'https://medium.com/@psammystprime/securing-the-client-side-for-your-web-applications-2fbbd222e6fa'
blog6Pic.className = 'blogPic'
blog6Pic.src = './securinglogo.webp'
blog6Text.className = 'blogText'
blog6Header.className = 'blogHeader'
blog6Header.textContent = `Securing the Client-Side for your Web Applications`
blog6Text.textContent = `A quick guide to understanding cyber security threats on the front end of your web applications and measures against such modern-day attacks.`
blog6Link.appendChild(blog6Header)
blog6.appendChild(blog6Link)
blog6.appendChild(blog6Pic)
blog6.appendChild(blog6Text)


function updateBlogs (){
    display.textContent = ''

    blogContainer.appendChild(blog)
    blogContainer.appendChild(blog6)
    blogContainer.appendChild(blog2)
    blogContainer.appendChild(blog3)
    blogContainer.appendChild(blog4)
    blogContainer.appendChild(blog5)
    display.appendChild(blogContainer)

}


export{updateBlogs}