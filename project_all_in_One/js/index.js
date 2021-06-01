// global imports     ========
import "./common/menu.js";
import "./common/subscription.js";

// spacific import   ==============

import { windowHeight, getElement } from "./utils.js";
import fetchData from "./fetch-products.js";
import displayPage from "./common/display-page.js";
import { store, setupStore } from "./common/store.js";

// work area  =====================

const heroBanner = document.querySelector(".hero-banner");
heroBanner.style.height = windowHeight;

const init = async () => {
  const products = await fetchData();
  setupStore(products);
  const featured = store.filter((product) => product.featured == true);
  displayPage(featured);
};

window.addEventListener("DOMContentLoaded", init);
