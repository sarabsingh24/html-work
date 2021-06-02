let listItems = document.querySelectorAll("#QAList article");

function removeActive() {
  listItems.forEach((quest) => {
    quest.classList.remove("active");
    let getMinus = quest.querySelector(".minus");
    let getPlus = quest.querySelector(".plus");
    getMinus.style.display = "none";
    getPlus.style.display = "block";
  });
}

listItems.forEach((list) => {
  list.addEventListener("click", function (e) {
    let tar = e.currentTarget;
    let plus = tar.querySelector(".plus");
    let minus = tar.querySelector(".minus");
    let checkActive = tar.classList.contains("active");

    if (checkActive) {
      tar.classList.remove("active");
      plus.style.display = "block";
      minus.style.display = "none";
    } else {
      removeActive();
      tar.classList.add("active");
      plus.style.display = "none";
      minus.style.display = "block";
    }
  });
});
