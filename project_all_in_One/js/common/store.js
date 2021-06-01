import { getStorageItems, setStorageItems } from "../utils.js";

let store = getStorageItems("list");

function setupStore(products) {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });

  //   localStorage.removeItem("list");
  setStorageItems("list", store);
}

const findId = (id) => {
  let product = store.find((item) => item.id == id);
  return product;
};

export { store, setupStore, findId };
