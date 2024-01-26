const home = document.querySelector('#home');
const projects = document.querySelector('#projects');
const blogs = document.querySelector('#blogs');
const admin = document.querySelector('#admin');
const submit = document.querySelector('.send')
const status = document.querySelector('.status')
const message = document.querySelector('.message')

import { updateBlogs } from "./blogs.js";
import { UpdateProjects } from "./projects.js";
import { updateHome } from "./home.js";

blogs.addEventListener('click', updateBlogs)
projects.addEventListener('click', UpdateProjects)
home.addEventListener('click', updateHome)

const mode = document.querySelector('.mode')
mode.addEventListener('click', ()=>{
    let body = document.body
    body.classList.toggle('dark' )
})

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
admin.addEventListener('click',function form(){
 return alert('Access Denied!')
    //     const card = document.createElement('form');
    //     const cardButton=document.createElement('button')
    //     const cardImg = document.createElement('div');
    //     const imgLabel = document.createElement('label');
    //     const imgSource = document.createElement('input');

    //     const cardHeader = document.createElement('div');
    //     const headerLabel = document.createElement('label');
    //     const headerText = document.createElement('input');

    //     const cardDetails = document.createElement('div');
    //     const detailsLabel = document.createElement('label');
    //     const detailsText = document.createElement('input');
        
    //     cardImg.appendChild(imgLabel)
    //     cardImg.appendChild(imgSource)
    //     cardHeader.appendChild(headerLabel)
    //     cardHeader.appendChild(headerText)
    //     cardDetails.appendChild(detailsLabel)
    //     cardDetails.appendChild(detailsText)
        
    //     card.id = 'card'
    //     cardImg.id='cardImage'
    //     cardHeader.id='cardHeader'
    //     cardDetails.id = 'cardDetails'
    //     cardButton.id= 'cardButton'

    //     imgLabel.textContent='Image Name'
    //     headerLabel.textContent='Title'
    //     detailsLabel.textContent='About'
    //     cardButton.textContent= 'Submit'
        
    //     card.appendChild(cardImg);
    //     card.appendChild(cardHeader);
    //     card.appendChild(cardDetails);
    //     card.appendChild(cardButton)
        
    //       display.appendChild(card)

    // cardButton.addEventListener('click', (e)=>{
    //     e.preventDefault()
    //     display.removeChild(card)
    //})
})



