import "../common/menu.js";
import "../common/subscription.js";

import {
  getElement,
  getStorageItems,
  setStorageItems,
  formatPrice,
} from "../utils.js";
import { findId } from "../common/store.js";
import displayCartItems from "./display-in-cart.js";

// localStorage.removeItem("cartCount");

let cartCounter = getElement(".counter");
let cart = getStorageItems("cartCount");

const addToCart = (id) => {
  let item = cart.find((item) => item.id == id);

  if (!item) {
    let product = findId(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
  } else {
    increase(id);
  }

  setStorageItems("cartCount", cart);
  displayCartItemCount();
  displayCartTotal();
};

function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);
  cartCounter.textContent = amount;
}

function displayCartTotal() {
  let totalAmount = cart.reduce((total, cartItem) => {
    let newAmount = cartItem.price * cartItem.amount;
    return (total += newAmount);
  }, 0);

  let amount = document.querySelector(".amount");
  if (amount) {
    amount.textContent = formatPrice(totalAmount);
  }
}

function increase(dataId) {
  console.log("increase");
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id == dataId) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });

  return newAmount;
}

function decrease(dataId, element) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id == dataId) {
      newAmount = cartItem.amount - 1;

      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });

  if (newAmount == 0) {
    cart = cart.filter((remove) => remove.id !== dataId);

    setStorageItems("cartCount", cart);
    displayCartItemCount();
    displayCartTotal();
  }

  return newAmount;
}

let element = document.querySelector(".cart-items");
if (element) {
  element.innerHTML = displayCartItems();
  element.addEventListener("click", function (e) {
    const target = e.target;
    const idDOM = target.dataset.id;
    if (target.classList.contains("remove")) {
      cart = cart.filter((item) => item.id !== idDOM);
    } else if (target.classList.contains("increase")) {
      increase(idDOM);
    } else if (target.classList.contains("decrease")) {
      decrease(idDOM, element);
    }

    setStorageItems("cartCount", cart);
    element.innerHTML = displayCartItems();
    displayCartItemCount();
    displayCartTotal();
  });

  //remove items from cart
}

// increase/ decrease amount

const init = () => {
  displayCartItemCount();
  displayCartTotal();
};

init();

export { addToCart, cart, displayCartItemCount };
