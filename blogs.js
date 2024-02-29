const display = document.querySelector('.display')
const blogContainer = document.createElement('div')
blogContainer.className = 'blogContainer'

//Create an array for storing blogs
const blogList = [];
//Create constructor for creating blogs
function Blog(title, pic, about, link) {
    this.title = title;
    this.about = about;
    this.pic = pic;
    this.link = link;
}
//Create blogs using the 'new' keyword. The function below is an IIFE function for wrapping the blogs.
const blogs =  (function (){
    const blog1 = new Blog(`Beginner's Quick Guide to gaining freelance skills using problem solving`, 
    'freelance.png',
    `The world of freelance work and remote jobs has seen the emergence of a rapid 
      desire for technical sklls globally. Have you ever been asked for what type of job you'd like and in 
      response found yourself saying "...any job that is available"? Well, this article is for you...`,
    'https://medium.com/@psammystprime/beginners-quick-guide-to-gaining-freelance-skills-using-problem-solving-10974c67ce96')
    const blog2 = new Blog('Writing Great Content in 2024', 
    '2024.jpg',
    `Proven Ideas and methods for writers in enhancing writing skills. It will guide
      you through challenges a writer encounters and ways of overcomimg them ensuring you publish great content
      that stands out to readers.`, 
    'www2')
    const blog3 = new Blog(`Web Apps vs Mobile Apps`, 
    'comps.jpg',`
    We explore the world of web Development and Mobile Development both for users and
      developers. Do's and Don'ts, expectations, and the factors that may necessitate one choice over another.`, 
    'https://medium.com/@psammystprime/mobile-apps-vs-web-apps-which-one-to-build-and-why-7725ef445cee')    
    const blog4 = new Blog('Understanding Javascript Arrays and objects',
    'arrays.jpg', 
    `Arrays are one of the fundamental concepts to learn when one 
      Is getting started with programming. Understanding them and how they work is key to getting your feet off 
      the ground. This article has been drafted in the simplest way possible for effective understanding 
      regardless of intellectual background. `, 
    'https://medium.com/@psammystprime/js-arrays-81b3088eea8c')
    const blog5 = new Blog(`Securing the Client-Side for your Web Applications`, 
    'securinglogo.webp', 
    `A quick guide to understanding cyber security
      threats on the front end of your web applications and measures against such modern-day attacks.`, 
    'https://medium.com/@psammystprime/securing-the-client-side-for-your-web-applications-2fbbd222e6fa')
    const blog6 = new Blog(`Writing: Getting The Best Audience For Your Technical Content.`, 
    'writing.png',
    `Writing is a magnet; it either repels or 
      attracts. Are you into technical writing? Get to know how to attract your audience.`, 
    'https://rb.gy/ox49vk')
    const blog7 = new Blog('Understanding Webpack',
    './bundling.jpg', 
    `ES6 Modules are among the latest features in Javascript. This article will take you
      through benefits of bundling up project modules and resources using webpack and why you should incorporate
      such a tool for successful deployment of your project to production.`,
    'https://medium.com/@psammystprime/understanding-webpack-3839e0d50e7d?source=your_stories_page-------------------------------------')
    const blog8 = new Blog(`Using the Fetch API and Promises`,
    'fetch.jpg',
    `An introduction to Asynchronous Code and fetching data from an API.`,
    'https://medium.com/@psammystprime/using-the-fetch-api-and-promises-1793993bd1eb')
    blogList.push(blog1, blog2, blog3, blog4, blog5, blog6, blog7, blog8)
    blogList.reverse()
})();
//Display blogs on screen
function updateBlogs(){
    display.textContent = ''
    blogContainer.textContent = ''

    blogList.map((item)=>{    
        const blog = document.createElement('div')
        const blogPic = document.createElement('img')
        const blogHeader = document.createElement('h1')
        const blogLink = document.createElement('a')
        const blogText = document.createElement('p')

        blog.className = 'blog'
        blogPic.className = 'blogPic'
        blogText.className = 'blogText'
        blogHeader.className = 'blogHeader'
        blogLink.href = item.link
        blogLink.textContent = item.title
        blogPic.src = `./${item.pic}`
        blogText.textContent = item.about

        blogHeader.appendChild(blogLink)
        blog.appendChild(blogHeader)
        blog.appendChild(blogPic)
        blog.appendChild(blogText)        

        blogContainer.appendChild(blog)
        display.appendChild(blogContainer)
    });
};

export{updateBlogs}