import cookingDoughImage from "../img/cooking-dough.jpg"
import "../css/homepage.css";

export default function createHomePage() {
    // creating elements
    const restaurantImage = document.createElement("img");
    const restaurantName = document.createElement("h1");
    const welcomeMessage = document.createElement("p");
    const operatingHoursHeading = document.createElement("h2");
    const operatingHoursList = document.createElement("ul");
    const workingHourMainDays = document.createElement("li");
    const workingHourSaturday = document.createElement("li");
    const workingHourSunday = document.createElement("li");
    const locationHeading = document.createElement("h2");
    const locationAddress = document.createElement("ul");
    const addressLine1 = document.createElement("li");
    const addressLine2 = document.createElement("li");
    const addressLine3 = document.createElement("li");

    // Adding information to elements
    restaurantImage.src = cookingDoughImage;
    restaurantName.textContent = "Welcome to 🍪Flavours & Flames🔥!";
    welcomeMessage.textContent = `Where culinary artistry meets warm hospitality. Whether you’re here for a casual meal or a special celebration,
            our kitchen is dedicated to bringing you flavors that delight and inspire. From our signature dishes to our
            seasonal specialties, each plate is crafted with passion and served with pride. Join us for an unforgettable
            dining experience.`;
    operatingHoursHeading.textContent = "⏰Operating Hours🗓️";
    workingHourMainDays.textContent = "Monday - Friday: 11:00 AM - 10:00 PM";
    workingHourSaturday.textContent = "Saturday: 10:00 AM - 11:00 PM";
    workingHourSunday.textContent = "Sunday: 10:00 AM - 9:00 PM";
    locationHeading.textContent = "📍Our Location🗺️";
    addressLine1.textContent = "Flavours and Flames";
    addressLine2.textContent = "123 Culinary Street,"
    addressLine3.textContent = "Gourmet City."

    // Selecting Main Content Section
    const content = document.querySelector("div#content");

    // divs for styling
    const welcomeImageContainer = document.createElement("div");
    const welcomeMessageContainer = document.createElement("div");
    const operatingHoursContainer = document.createElement("div");
    const locationAddressContainer = document.createElement("div");

    welcomeImageContainer.className = "welcome-image";
    welcomeMessageContainer.className = "welcome-message";
    operatingHoursContainer.className = "operating-hours";
    locationAddressContainer.className = "location-address";
   
    // Adding everything to content page
    operatingHoursList.append(workingHourMainDays, 
        workingHourSaturday, 
        workingHourSunday
    );
    locationAddress.append(addressLine1,
        addressLine2,
        addressLine3
    );
    welcomeImageContainer.appendChild(restaurantImage);
    welcomeMessageContainer.append(restaurantName, welcomeMessage);
    operatingHoursContainer.append(operatingHoursHeading, operatingHoursList);
    locationAddressContainer.append(locationHeading,locationAddress);
    content.append(welcomeImageContainer,
        welcomeMessageContainer,
        operatingHoursContainer,
        locationAddressContainer,
    );
}