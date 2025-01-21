const contentDiv = document.querySelector("#content");
const mainContainer = document.createElement("div");
const contactHeading = document.createElement("h1");

export function loadContactPage() {
    mainContainer.classList.add("main-container");
    contentDiv.appendChild(mainContainer);
    mainContainer.appendChild(contactHeading);
    contactHeading.innerText = "Contact";
}