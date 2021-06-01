// Global js
import "./filter/search-result.js";
import "./common/menu.js";
import "./common/subscription.js";
import selectCategory from "./filter/select-category.js";

// specific Js

import displayPage from "./common/display-page.js";

import slider from "./filter/slider.js";
import { store } from "./common/store.js";
import { getElement } from "./utils.js";
import searchResults from "./filter/search-result.js";

displayPage(store);

searchResults(store, getElement(".search-box"));

selectCategory(store);

slider(store);
