// nav module import
import content from "./modules/nav.js";
// Select nav and add the nav content from the module
const nav = document.querySelector(".nav");
nav.innerHTML = content;

let burger = document.querySelector(".burger");
let menu = document.querySelector(".hidden-nav");
const topBar = document.querySelector(".top");
const midBar = document.querySelector(".mid");
const bottomBar = document.querySelector(".bottom");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  topBar.classList.toggle("top-rotation");
  bottomBar.classList.toggle("bottom-rotation");
  midBar.classList.toggle("fade");
});
