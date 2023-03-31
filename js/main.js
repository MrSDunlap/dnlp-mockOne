// nav module import
import content from "./modules/nav.js";
// Select nav and add the nav content from the module
const nav = document.querySelector(".nav");
nav.innerHTML = content;

let burger = document.querySelector(".burger");
let menu = document.querySelector(".hidden-nav");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
