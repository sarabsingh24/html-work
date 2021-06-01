const foodContainer = document.querySelector(".food-items");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  renderListItems(menu);
  createButtonList();
  getListItems();
});

function createButtonList() {
  let menuButton = menu.reduce(
    (values, items) => {
      if (!values.includes(items.category)) {
        values.push(items.category);
      }
      return values;
    },
    ["All"]
  );

  const createTopBtn = menuButton.map((category) => {
    return `<button class="filter-button" data-name=${category}>${category}</button>`;
  });

  btnContainer.innerHTML = createTopBtn.join("");

  const filterButton = document.querySelectorAll(".filter-button");

  filterButton.forEach((btns) => {
    btns.addEventListener("click", function (e) {
      let target = e.currentTarget.dataset.name;
      let menuCategory = menu.filter((menuitems) => {
        if (menuitems.category == target) {
          return menuitems;
        }
      });

      if (target == "All") {
        renderListItems(menu);
          getListItems()
      } else {
        renderListItems(menuCategory);
          getListItems()
      }
    });
  });
}

function renderListItems(menu) {
  let itemList = menu.map((items) => {
    return `<div class="food-plate" data-id="${items.id}">
                 <img src="${items.img}" alt="">
               
                 <div class="spacing">
                 <h4>${items.title}</h4>
             <div class="price">$${items.price}</div>
            </div>
            </div>`;
  });

  itemList = itemList.join("");
  foodContainer.innerHTML = itemList;
}

function getListItems() {
  const foodPlate = [...document.querySelectorAll(".food-plate")];

  foodPlate.map((item) => {
    item.addEventListener("click", function (e) {
        console.log(e.target)
      let targetId = e.currentTarget.dataset.id;
        localStorage.setItem("shoeId", targetId);
        
      let currenturl = location.href;
      let endNum = currenturl.lastIndexOf("/");
      let editUrl = currenturl.slice(0, endNum);
      let newUrl = `${editUrl}/item_detail.html`;

      location.href = newUrl;
    });
  });
}
