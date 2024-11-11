import "./styles.css"
import { home } from "./home"
import { menu } from "./menu";
import { contact } from "./contact";

contact();
const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const contactButton = document.querySelector(".contactButton");

homeButton.addEventListener("click", ()=>{
    home()
});

menuButton.addEventListener("click", ()=>{
    menu()
});

contactButton.addEventListener("click", ()=>{
    contact()
});