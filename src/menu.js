const contentDiv = document.querySelector("#content");
const mainContainer = document.createElement("div");
const menuHeading = document.createElement("h1");

export function loadMenuPage() {
    mainContainer.classList.add("main-container");
    contentDiv.appendChild(mainContainer);
    mainContainer.appendChild(menuHeading);
    menuHeading.innerText = "Menu";
}