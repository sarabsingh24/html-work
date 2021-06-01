import { allproducts } from "./utils.js";

const fetchData = async () => {
  const response = await fetch(allproducts).catch(
    (error) => `Failed to fetch ${error}`
  );
  if (response) {
    return response.json();
  }
  return response;
};

export default fetchData;
