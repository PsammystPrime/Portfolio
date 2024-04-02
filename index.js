const home = document.querySelector("#home");
const projects = document.querySelector("#projects");
const blogs = document.querySelector("#blogs");

import { updateHome } from "./home.js";

home.addEventListener("click", updateHome());
