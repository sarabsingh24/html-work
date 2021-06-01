//   fetch data

const URL = "https://randomuser.me/api/";

const featchData = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  const person = data.results[0];
  const { cell, email, 
        name: { first, last }, 
        dob: { age }, location: { city, country }, 
        picture: { large: image } } = person;
  // == person.name.first; person.name.last
  // == person.picture.large  call it  "image"
 
  return {
    cell,
    email,
    image,
    age,
    location: `${city} ${country}`,
    name: `${first} ${last}`,
  };
};

// get element
function getElement(selection,all) {
  let element;
  if (all) {
    element = document.querySelectorAll(selection);
  } else {
    element = document.querySelector(selection);
  }
  if (element) return element;
  throw new Error(` ${selection} not found`);
}



export { featchData, getElement };
