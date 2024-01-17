const home = document.querySelector('.home');
const projects = document.querySelector('.projects');
const blogs = document.querySelector('.blogs');

import { updateBlogs } from "./blogs.js";
import { UpdateProjects } from "./projects.js";

blogs.addEventListener('click', updateBlogs)
projects.addEventListener('click', UpdateProjects)
home.addEventListener('click', updateHome)

function updateHome(){
    
}

