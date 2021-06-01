
import {loader } from './loader.js';

const loadDrinks = async (url) => {

    loader.classList.remove('hideLoader');

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.drinks;
    }
    catch{
        console.log(error)
    }

};

export default loadDrinks;