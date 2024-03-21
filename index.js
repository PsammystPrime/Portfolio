const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const blogs = document.querySelector('#blogs');


import { updateBlogs } from "./blogs.js";
// import { UpdateProjects } from "./projects.js";
import { updateHome } from "./home.js";

blogs.addEventListener('click', updateBlogs)
// projects.addEventListener('click', )
home.addEventListener('click', updateHome)

updateHome()

// function updateHome(){s
    
//     display.textContent=''

//     function Blogs(image,title,preview){
//         this.image=image
//         this.title=title
//         this.preview=preview
//     }
    




