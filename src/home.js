const contentDiv = document.querySelector("#content");
const mainContainer = document.createElement("div");
const testimonialContainer = document.createElement("div");
const hoursContainer = document.createElement("div");
const locationContainer = document.createElement("div");
const homeHeading = document.createElement("h1");
const testimonialParagraph = document.createElement("p");
const hoursParagraph = document.createElement("p");
const locationParagraph = document.createElement("p");
export const pageLoad = "Page loading";

export function loadHomePage() {
    mainContainer.classList.add("main-container");
    homeHeading.classList.add("home-heading");
    contentDiv.appendChild(mainContainer);
    mainContainer.appendChild(homeHeading);
    mainContainer.appendChild(testimonialContainer);
    mainContainer.appendChild(hoursContainer);
    mainContainer.appendChild(locationContainer);
    testimonialContainer.appendChild(testimonialParagraph);
    hoursContainer.appendChild(hoursParagraph);
    locationContainer.appendChild(locationParagraph);
    homeHeading.innerText = "Capello's Fine Dining";
    testimonialParagraph.innerText = "This is where the testimonial goes."
    hoursParagraph.innerText = "This is where the hours go."
    locationParagraph.innerText = "This is where the location info goes."

}


