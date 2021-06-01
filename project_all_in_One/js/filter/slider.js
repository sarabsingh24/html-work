import displayPage from "../common/display-page.js";

function slider(products) {
  const slider = document.getElementById("myRange");
  const output = document.getElementById("demo");

  let maxPrice = products.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  slider.value = maxPrice;
  slider.max = maxPrice;
  slider.min = 0;

  output.textContent = `Max. price: $${maxPrice}`;

  slider.addEventListener("input", function () {
    const newValue = parseInt(slider.value);
    output.textContent = `Max. price: $${newValue}`;

    const newArray = products.filter((item) => item.price / 100 <= newValue);

    displayPage(newArray);
  });
}

export default slider;
