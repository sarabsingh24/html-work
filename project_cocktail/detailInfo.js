import singleDrink from "./singleDrink.js";

const drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

window.addEventListener("DOMContentLoaded", function () {
  const id = localStorage.getItem("drinkId");

  if (!id) {
    window.location.replace("main.html");
  } else {
    const newUrl = `${drinkURL}${id}`;

    singleDrink(newUrl);
  }
});
