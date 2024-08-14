import foodDisplayImageOne from "../img/food1.jpg";
import foodDisplayImageTwo from "../img/food2.jpg";
import foodDisplayImageThree from "../img/food3.jpg";
import menuList from "./menuList";
import "../css/menupage.css";

export default function createMenuPage(){
     // Containers for menu sections
     const menupage = document.createElement("div");
     const sampleImagesContainer = document.createElement("div");
     const appetizerContainer = document.createElement("div");
     const mainCourseContainer = document.createElement("div");
     const dessertContainer = document.createElement("div");
     const beveragesContainer = document.createElement("div");

    // Container classes for styling
     menupage.className = "menupage";
     sampleImagesContainer.className = "sample-menu-images";
     appetizerContainer.className = "appetizers";
     mainCourseContainer.className = "main-courses";
     dessertContainer.className = "desserts"
     beveragesContainer.className = "beverages"

    // creating elements
    const foodImage1 = document.createElement("img");
    const foodImage2 = document.createElement("img");
    const foodImage3 = document.createElement("img");
    const menuHeading = document.createElement("h1");
    const appetizersHeading = document.createElement("h2");
    const mainCourseHeading = document.createElement("h2");
    const dessertsHeading = document.createElement("h2");
    const beveragessHeading = document.createElement("h2");

    // Adding information to elements
    foodImage1.src = foodDisplayImageOne;
    foodImage2.src = foodDisplayImageTwo;
    foodImage3.src = foodDisplayImageThree;
    menuHeading.textContent = "Menu";
    appetizersHeading.textContent = "Appetizers";
    mainCourseHeading.textContent = "Main Course";
    dessertsHeading.textContent = "Desserts";
    beveragessHeading.textContent = "Beverages";

    //Takes a food item and adds its details(name, description, price) to its respective container
    function addFoodDetailListToContainer(food, container){
        const foodDetailList = document.createElement("ul");
        const foodName = document.createElement("li");
        const foodDescription = document.createElement("li");
        const foodPrice = document.createElement("li");

        foodName.textContent = food.name;
        foodDescription.textContent = food.description;
        foodPrice.textContent = "$" + food.price;

        foodDetailList.append(foodName, foodDescription, foodPrice);
        container.appendChild(foodDetailList);
    }

    // Adding elements to their respective containers
    sampleImagesContainer.append(foodImage1, foodImage2, foodImage3);   
    appetizerContainer.appendChild(appetizersHeading);
    mainCourseContainer.appendChild(mainCourseHeading);
    dessertContainer.appendChild(dessertsHeading);
    beveragesContainer.appendChild(beveragessHeading);


    menuList.appetizers.forEach(appetizer => addFoodDetailListToContainer(appetizer, appetizerContainer));
    menuList.mainCourses.forEach(mainCourse => addFoodDetailListToContainer(mainCourse, mainCourseContainer));
    menuList.desserts.forEach(dessert => addFoodDetailListToContainer(dessert, dessertContainer));
    menuList.beverages.forEach(beverage => addFoodDetailListToContainer(beverage, beveragesContainer));
    
    // Selecting Main Content Section
    const content = document.querySelector("#content");
 
    // Adding everything to content section
    menupage.append(sampleImagesContainer, menuHeading, appetizerContainer, mainCourseContainer, dessertContainer, beveragesContainer);
    content.appendChild(menupage);
}