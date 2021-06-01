const allproducts = "https://course-api.com/javascript-store-products";

const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) return element;
  throw new Error(`Please check, ${selection}, no such element exist`);
};

// select by product Id
function selectById() {
  const imageInfo = document.querySelectorAll(".image-info");
  imageInfo.forEach((info) => {
    info.addEventListener("click", function (e) {
      const target = e.currentTarget;
      const id = target.dataset.id;
      localStorage.setItem("itemid", id);
    });
  });
}

// get and set storage

const getStorageItems = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItems = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

// windoe height and width

let windowWidth = window.innerWidth + "px";
let windowHeight = window.innerHeight + "px";

// format Price

const formatPrice = (amount) => {
  // let formattedPrice = amount / 100;
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((amount / 100).toFixed(2));

  return formattedPrice;
};

export {
  allproducts,
  singleProductUrl,
  getElement,
  selectById,
  getStorageItems,
  setStorageItems,
  windowWidth,
  windowHeight,
  formatPrice,
};
