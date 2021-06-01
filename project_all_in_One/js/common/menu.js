import { getElement } from "../utils.js";

// menu show hide===============
const menuBar = getElement(".menu-bar");
const menuLinks = getElement(".menu-links");
const closeMenu = getElement(".close-menu");

menuBar.addEventListener("click", function () {
  menuLinks.classList.add("display-menu");
});

closeMenu.addEventListener("click", function () {
  menuLinks.classList.remove("display-menu");
});
