import displayPage from "../common/display-page.js";
import { getElement } from "../utils.js";

const selectCategory = (store) => {
  const company = getElement(".company");

  const companies = [
    "All",
    ...new Set(store.map((product) => product.company)),
  ];
  company.innerHTML = companies.map((name) => `<li>${name}</li>`).join("");

  const selectByLink = [...document.querySelectorAll(".filter-prod ul li")];

  selectByLink.forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = e.target.textContent;

      // let filterList = store;
      // if (target != "All") {
      //   filterList = store.filter(
      //     (item) =>
      //       item.company.toLocaleLowerCase() == target.toLocaleLowerCase()
      //   );
      // }

      let filterList = [];

      if (target == "All") {
        filterList = [...store];
      } else {
        filterList = store.filter(
          (item) =>
            item.company.toLocaleLowerCase() == target.toLocaleLowerCase()
        );
      }

      displayPage(filterList);
    });
  });
};

export default selectCategory;
