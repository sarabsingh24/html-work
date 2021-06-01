

import allPages from './pagination.js';
import pageBtns from './pageBtns.js';
import displayData from './displayData.js'

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const container = document.querySelector(".container");
const btnContainer = document.querySelector('.btn-container');
const loader = document.querySelector('.loader');

const featchData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    return data
};

featchData();

let myArray = [];
let pageIndex = 0;
let count = 10;


const newArray = async () => {
    
    
   
    const newData = await featchData();

    btnContainer.innerHTML = "";
    container.innerHTML = "";

    let totalPages = Math.ceil(newData.length / count);
    
    myArray = allPages(newData,totalPages, count);
   
    pageBtns(totalPages, pageIndex, btnContainer);
  
    displayData(myArray[pageIndex], container, loader);

    localStorage.removeItem("itemPerpage");

};
newArray();

btnContainer.addEventListener('click', function (e) {


    if (e.target.classList.contains("btn-container")) {
        return;
    }
    if (e.target.classList.contains("comm-btn")) {
       
        pageIndex = parseInt(e.target.dataset.index);

    }
    if (e.target.classList.contains("prev")) {
       
        pageIndex--;
      
        if (pageIndex < 0) {
            pageIndex = myArray.length - 1
        }
    }
    if (e.target.classList.contains("next")) {
        pageIndex++;
        if (pageIndex > myArray.length -1) {
            pageIndex = 0;
        }

    }
    newArray();

})



const submitBtn = document.querySelector('.submit');
    submitBtn.addEventListener('click', function (e) {
        loader.classList.remove('hide');
        container.innerHTML = "";
        btnContainer.innerHTML = "";
    const counts = document.querySelector('.counts').value;
    let value = counts * 1; // convert into number
        localStorage.setItem("itemPerpage", value);
        count = parseInt(localStorage.getItem("itemPerpage"));
        pageIndex = 0;
        newArray();


})

window.addEventListener("load", function () {
    featchData();
});


