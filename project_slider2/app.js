import { peoples, reviews } from "./data.js";

console.log(peoples);

const container = document.querySelector(".slider-container");
const nxtBtn = document.querySelector(".nxtBtn");
const prevBtn = document.querySelector(".prevBtn");

const list = reviews
  .map((person, index) => {
    const { img, job, name, text } = person;

    let className = "next";
    if (index == 0) {
      className = "active";
    } else if (index == reviews.length - 1) {
      className = "prev";
    }

    return `  <article class="content ${className}">
          <img src="${img}" alt="${name}">
          <div class="info">
              <div class="name">${name}</div>
              <div class="job">${job}</div>
              <p class="detail">${text}</p>
          </div>
        </article>`;
  })
  .join("");

container.innerHTML = list;

const slider = (back) => {
  const active = document.querySelector(".active");
  let prev = document.querySelector(".prev");
  let next = active.nextElementSibling;
  const nextElement = [...document.querySelectorAll(".next")];
  const prevElement = [...document.querySelectorAll(".prev")];

  if (!next) {
    next = container.firstElementChild;
  }

  if (!back) {
    prev = next.nextElementSibling;
  }

  //remove class
  active.classList.remove(["active"]);
  nextElement.forEach((i) => {
    i.classList.remove(["next"]);
  });
  prevElement.forEach((i) => {
    i.classList.remove(["prev"]);
  });

  // back button process
  if (back === "previous") {
    //change class
    active.classList.add("next");
    prev.classList.add("active");

    next = prev.previousElementSibling;

    if (!next) {
      next = container.lastElementChild;
    }

    //change class
    next.classList.add("prev");

    return;
  }

  //change class
  active.classList.add("prev");
  next.classList.add("active");
  if (!prev) {
    prev = container.firstElementChild;
  }
  prev.classList.add("next");
};

nxtBtn.addEventListener("click", function () {
  slider();
});

prevBtn.addEventListener("click", function () {
  slider("previous");
});
