import { cart } from "./addToCart.js";
import { formatPrice } from "../utils.js";

const displayCartItems = () => {
  let cartList = cart
    .map((items) => {
      const { id, image, name, amount, price } = items;

      return `
    <div class="selected-items-list" data-id="${id}">
              <div class="thum-image">
                <img
                  src="${image}"
                  alt="${name}"
                />
              </div>

              <article class="info">
                <header>${name}</header>
                <p>price: ${formatPrice(price)}</p>
                <button class="remove" data-id="${id}">Remove</button>
              </article>
              <div class="qty">
                <button><i class="fas fa-chevron-up increase count" data-id="${id}"></i></button>
                <p class="qty">${amount}</p>
                <button><i class="fas fa-chevron-down decrease count" data-id="${id}"></i></button>
              </div>
            </div>
    `;
    })
    .join("");
  return cartList;
};

export default displayCartItems;
