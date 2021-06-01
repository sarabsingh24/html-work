import {formatPrice, getElement } from "../utils.js";
import imageAnimation from "../common/image-animation.js";
import { addToCart } from "../cart/addToCart.js";

let element = getElement(".products");

function displayPage(products) {
  if (products.length < 1) {
    element.innerHTML =
      "<div class='not-found'>sorry, no products matched your search.</div>";
    return;
  }
  element.innerHTML = products
    .map((product) => {
      const { id, price, name, image } = product;

      return `
                <div class="img-container">
            <div class="animation-box">
                <div class="ut-icons">
                <a href="inside-page.html?id=${id}" class="icon-click image-info" data-id=""><i class="fas fa-search"></i></a>
                <button class="icon-click add-cart" data-id="${id}"><i class="fas fa-shopping-cart"></i></button>
              </div>
            </div>
            <img src="${image}" alt="${name}" />
            <div class="info">
              <span class="name">${name}</span>
              <span class="cost">${formatPrice(price)}</span>
            </div>
          </div>
                `;
    })
    .join("");

  imageAnimation();

  element.addEventListener("click", function (e) {
    let parent = e.target.parentElement;

    if (parent.classList.contains("add-cart")) {
      addToCart(parent.dataset.id);
    } else if (e.target.classList.contains("add-cart")) {
      addToCart(e.target.dataset.id);
    }
  });
}

export default displayPage;
