import displayPage from "../common/display-page.js";

const searchResults = (products, searchBox) => {
  searchBox.addEventListener("keyup", function (e) {
    const target = e.target.value.toLowerCase();

    let matchedArray = products.filter((product) => {
      let name = product.name.toLowerCase();

      if (name.startsWith(target)) {
        return product;
      }
    });

    // products.forEach((item) => {
    //   if (item.name.toLowerCase().indexOf(target) !== -1) {
    //     matchedArray.push(item);
    //   }
    // });

    displayPage(matchedArray);
  });
};

export default searchResults;
