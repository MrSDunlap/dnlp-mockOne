// ============== IMPORTS ================

// nav module import
import content from "./modules/nav.js";

// professions module import
import professions from "./modules/professions.js";

// Select nav and add the nav content from the module
const nav = document.querySelector(".nav");
nav.innerHTML = content;

let logo = document.querySelector(".logo");

let burger = document.querySelector(".burger");
let menu = document.querySelector(".hidden-nav");
const topBar = document.querySelector(".top");
const bottomBar = document.querySelector(".bottom");

// add background blur to the navigation on mobile

let bg = document.querySelector(".nav-bg");
// let blur = document.querySelector(".bg-blur");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  topBar.classList.toggle("top-rotation");
  bottomBar.classList.toggle("bottom-rotation");

  bg.classList.toggle("bg-blur");

  logo.classList.toggle("logo-invert");
});
