import {createHomePage, createMenuPage, createAboutPage} from "./js/barrel.js"
import "./css/css-reset.css";
import "./css/main.css";

// Getting content 
const content = document.querySelector("#content")

function removeElementsFromPage(){
    while(content.childElementCount != 0){
        content.firstChild.remove();
    }
}   

// Getting three buttons for navigation
const homePageButton = document.querySelector("#home");
const menuPageButton = document.querySelector("#menu");
const aboutPageButton = document.querySelector("#about");

// Default Homepage is initialized here
createHomePage();
homePageButton.className = "outline";

homePageButton.addEventListener("click", () => {
    removeElementsFromPage();
    homePageButton.className = "outline";
    menuPageButton.className = aboutPageButton.className = null;
    createHomePage();
});

menuPageButton.addEventListener("click", () => {
    removeElementsFromPage();
    menuPageButton.className = "outline";
    homePageButton.className = aboutPageButton.className = null;
    createMenuPage();
});

aboutPageButton.addEventListener("click", () => {
    removeElementsFromPage();
    aboutPageButton.className = "outline";
    menuPageButton.className = homePageButton.className = null;
    createAboutPage();
});


