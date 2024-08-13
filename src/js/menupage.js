import foodDisplayImageOne from "../img/food1.jpg";
import foodDisplayImageTwo from "../img/food2.jpg";
import foodDisplayImageThree from "../img/food3.jpg";
import menuList from "./menuList";

export default function createMenuPage(){    
    // creating elements
    const foodImage1 = document.createElement("img");
    const foodImage2 = document.createElement("img");
    const foodImage3 = document.createElement("img");
    const menuHeading = document.createElement("h1");

    // Adding information to elements
    foodImage1.src = foodDisplayImageOne;
    foodImage2.src = foodDisplayImageTwo;
    foodImage3.src = foodDisplayImageThree;
    menuHeading.textContent = "Menu"

    // Selecting Main Content Section
    const content = document.querySelector("#content");

    // Adding everything to content page
    content.append(foodImage1, foodImage2, foodImage3, menuHeading);
}