

import showDrinks from './displayItems.js';
import {getElement} from './getElement.js';



const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=k"

//get element



window.addEventListener("DOMContentLoaded", () => {
    showDrinks(URL);
})

const form = getElement(".search-form");
const input = getElement("[name='drink']");// select by name attribute

form.addEventListener('keyup', (e) => {
    e.preventDefault();
    const searchValue = input.value;
    const alpha = searchValue == '' ? "a" : searchValue;
    searchForm(alpha);
});

function searchForm(searchValue){
    const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const newUrl = `${baseURL}${searchValue}`;
    
    showDrinks(newUrl)
}