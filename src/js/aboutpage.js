import "../css/aboutus.css";

export default function createAboutPage() {
    // Creating elements
    const aboutUsHeading = document.createElement("h1");
    const welcomeHeading = document.createElement("h2");
    const ourStoryHeading = document.createElement("h2");
    const ourPhilosophyHeading = document.createElement("h2");
    const meetTheTeamHeading = document.createElement("h2");
    const joinUsHeading = document.createElement("h2");
    const welcomeParagraph = document.createElement("p");
    const ourStoryParagraph1 = document.createElement("p");
    const ourStoryParagraph2 = document.createElement("p");
    const ourPhilosophyParagraph1 = document.createElement("p");
    const ourPhilosophyParagraph2 = document.createElement("p");
    const meetTheTeamParagraph = document.createElement("p");
    const joinUsParagraph = document.createElement("p");

    // divs for different section
    const aboutUsContainer = document.createElement("div");
    const welcomeContainer = document.createElement("div");
    const ourStoryContainer = document.createElement("div");
    const ourPhilosophyContainer = document.createElement("div");
    const meetTheTeamContainer = document.createElement("div");
    const joinUsContainer = document.createElement("div");

    // naming divs for styling
    aboutUsContainer.className = "about-us";
    welcomeContainer.className = "about-welcome";
    ourStoryContainer.className = "our-story";
    ourPhilosophyContainer.className = "our-philosophy";
    meetTheTeamContainer.className = "meet-the-team";
    joinUsContainer.className = "join-us";

    // Adding content to elements
    aboutUsHeading.textContent = "About Us";
    welcomeHeading.textContent = "Welcome to 🍪Flavours & Flames🔥!"
    welcomeParagraph.textContent =
        `At Flavours and Flames, we believe that dining is not just about eating; it's about creating memories, sharing moments, 
        and enjoying the finest flavors. Nestled in the heart of Salem, our restaurant offers a unique culinary experience that combines 
        traditional recipes with modern twists.`;
    ourStoryHeading.textContent = "Our Story";
    ourStoryParagraph1.textContent = `Founded in 2020, Flavours and Flames was born out of a passion for food and a desire to bring people together. 
        Our journey began with a simple vision: to create a place where friends and family could gather, relax, and savor delicious meals 
        prepared with love and care.`;
    ourStoryParagraph2.textContent = `Our chef, Mr. Mark, brings years of experience and a deep love for parota. 
        With a focus on fresh, locally sourced ingredients, our menu reflects the rich culinary heritage of TamilNadu, 
        while also incorporating contemporary flavors and techniques.`;
    ourPhilosophyHeading.textContent = "Our Philosophy";
    ourPhilosophyParagraph1.textContent = `At the core of our restaurant is a commitment to quality, sustainability, and community. 
        We believe in using only the freshest ingredients, sourced from local farmers and suppliers who share our values. 
        Our menu changes seasonally to reflect the best of what each season has to offer.`;
    ourPhilosophyParagraph2.textContent = `We also take pride in our warm and inviting atmosphere. 
        Whether you're here for a casual lunch, a romantic dinner, or a special celebration, 
        our team is dedicated to making your experience unforgettable.`;
    meetTheTeamHeading.textContent = "Meet the Team";
    meetTheTeamParagraph.textContent = `Our staff is more than just a team; they're a family. 
        From our talented chefs to our friendly servers, everyone at Flavours and Flames is passionate about what they do. 
        We believe that great food and great service go hand in hand, and we strive to exceed your expectations every time you visit.`;
    joinUsHeading.textContent = "Join Us";
    joinUsParagraph.textContent = `We invite you to come and experience the magic of Flavours and Flames. 
    Whether you're a longtime guest or visiting us for the first time, we look forward to welcoming you to our table.`;

    // getting content to add about page
    const content = document.querySelector("#content");

    // Adding everything to content
    welcomeContainer.append(welcomeHeading, welcomeParagraph);
    ourStoryContainer.append(ourStoryHeading, ourStoryParagraph1, ourStoryParagraph2);
    ourPhilosophyContainer.append(ourPhilosophyHeading, ourPhilosophyParagraph1, ourPhilosophyParagraph2);
    meetTheTeamContainer.append(meetTheTeamHeading, meetTheTeamParagraph);
    joinUsContainer.append(joinUsHeading, joinUsParagraph);
    aboutUsContainer.append(aboutUsHeading,
        welcomeContainer,
        ourPhilosophyContainer,
        ourStoryContainer,
        meetTheTeamContainer,
        joinUsContainer,
    );
    content.appendChild(aboutUsContainer);
}