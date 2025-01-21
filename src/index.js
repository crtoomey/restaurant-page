import "./styles.css";
import { loadHomePage, pageLoad } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadContactPage } from "./contact.js";

const homeButton = document.querySelector("#homeBtn");
const menuButton = document.querySelector("#menuBtn");
const contactButton = document.querySelector("#contactBtn");
const contentDiv = document.querySelector("#content")

console.log("JS running.");
console.log(pageLoad);

loadHomePage();

homeButton.addEventListener('click', function () {
    contentDiv.innerHTML = '';
    loadHomePage();
});
menuButton.addEventListener('click', function () {
    contentDiv.innerHTML = '';
    loadMenuPage();
});
contactButton.addEventListener('click', function () {
    contentDiv.innerHTML = '';
    loadContactPage();
});