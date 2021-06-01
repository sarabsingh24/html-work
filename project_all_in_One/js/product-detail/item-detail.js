import "../common/menu.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";
import { addToCart } from "../cart/addToCart.js";

const containerBox = getElement(".containerBox");
const largeImage = getElement(".large-img");
const cost = getElement(".cost");
const discription = getElement(".discription");
const prodName = getElement(".prod-name");
const addCartButton = getElement(".add-to-cart-btn");

let productId = "";

window.addEventListener("DOMContentLoaded", async function () {
  let urlID = window.location.search;

  try {
    const response = await fetch(`${singleProductUrl}${urlID}`);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();

      const { id, fields } = product;
      productId = id;

      const { company, description, name, price, image } = fields;
      let img = image[0].thumbnails.large.url;

      largeImage.innerHTML = `<img src="${img}" alt="${name}" />`;
      prodName.textContent = name;
      cost.textContent = formatPrice(price);
      discription.textContent = description;
    } else {
      console.log(response.status);
      console.log(response.statusText);
      containerBox.innerHTML = `
      <div>
      <h4> Sorry, somthing went wrong!</h4>
      <a href="home.html" > </a>
      </div>
      `;
    }
  } catch (error) {
    // console.log(error);
  }
});

addCartButton.addEventListener("click", function () {
  addToCart(productId);
});
