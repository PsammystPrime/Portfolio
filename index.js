const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const blogs = document.querySelector('#blogs');


import { updateBlogs } from "./blogs.js";
// import { UpdateProjects } from "./projects.js";
import { updateHome } from "./home.js";

blogs.addEventListener('click', updateBlogs)
// projects.addEventListener('click', UpdateProjects)
home.addEventListener('click', updateHome)

// const mode = document.querySelector('.mode')
// mode.addEventListener('click', ()=>{
//     let body = document.body
//     body.classList.toggle('dark' )
// })

// submit.addEventListener('click', (e)=>{
//     e.preventDefault()
//     status.textContent = '';
//     if(message.value!==''){
//     status.textContent = 'Message not Sent'
//     }
// })


// function updateHome(){
    
//     display.textContent=''

//     function Blogs(image,title,preview){
//         this.image=image
//         this.title=title
//         this.preview=preview
//     }
    
//     let blog=new Blogs('img','none','other')
//     console.log(blog)
// }




