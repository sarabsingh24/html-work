import data from "./data.js";

const menuLink = [...document.querySelectorAll(".menu-link")];
// const subMenu = document.querySelector(".menu-list");
const subMenu = document.querySelector(".sub-menu");
const banner = document.querySelector(".banner");
const linkNav = document.querySelector(".link-nav");
let column = "col-2";

menuLink.map((btn) => {
  btn.addEventListener("mouseover", function (e) {
    let target = e.currentTarget;
    let position = target.getBoundingClientRect();

    let boxWidth = subMenu.getBoundingClientRect();
    subMenu.style.left =
      (position.left + position.right) / 2 - boxWidth.width / 2 + "px";
    subMenu.style.top = position.bottom - 8 + "px";
    subMenu.classList.add("show");

    let pageName = target.textContent;
    let submenuLinks = data.find(({ page }) => page == pageName);
    
  
      if (submenuLinks.sublinks.length === 3){
          console.log(44);
          column = "col-3";
      }
      if (submenuLinks.sublinks.length > 3) {
          console.log(44);
          column = "col-4";
      }

    // let tabLinks = 


      subMenu.classList.add(column);
      let newSection = `<div><h4>${submenuLinks.page}</h4>
      <div class="grid ${column}">
      ${submenuLinks.sublinks
              .map((links) => {
                  const { url, icon, name } = links;
                  return `<a href="${url}"><span class="icon">${icon}</span>${name}</a>`;
              })
              .join("")}
        </div>
      </div>`
      subMenu.innerHTML = newSection;
  });

});

banner.addEventListener("mouseover", function (e) {
  subMenu.classList.remove("show");
    subMenu.classList.remove(column)
});

linkNav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("menu-link")) {
    subMenu.classList.remove("show");
      subMenu.classList.remove(column)
  }
 
});





const allMenu = document.querySelector(".all-menu"); 
const mobMenuContainer = document.querySelector(".mob-menu-container"); 

const close = document.querySelector(".close"); 
const dropMenu = document.querySelector(".drop-menu"); 
let flag = false;

const subMenuList = data.map(item => {

    let { page,sublinks } = item;
// console.log(page);
    return `<div class="mob-menu">
                 <h4>${page}</h4>
                   ${sublinks.map(link => {
                       const { url, icon, name } = link;
                   
                       return `<a href="${url}" class="mob-sub-link" ><span class="icon">${icon}</span>${name} </a>`
                }).join('')}
            </div>`
} );


allMenu.innerHTML = subMenuList.join('');

function showHideMenu(){
console.log("sarab")
    if (flag){
        mobMenuContainer.style.display = "none";
        flag = false
    }else{
        mobMenuContainer.style.display = "block";
        flag = true
    }
    
     
  
}

dropMenu.addEventListener('click', showHideMenu);
close.addEventListener('click', showHideMenu);



