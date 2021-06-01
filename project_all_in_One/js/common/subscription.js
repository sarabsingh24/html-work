const subscribe = document.querySelector(".subscribe");
const error = document.querySelector(".error");
let status = false;

subscribe.addEventListener("input", function (e) {
  let target = e.target.value;
  let dotPosition = target.indexOf(".");

  if (target.length < 1) {
    error.innerHTML = "Please enter valid email Id";
  }

  if (target.length > 1) {
    if (target.indexOf("@") == -1) {
      error.innerHTML = "@ is missing";
      error.classList.add("show");
      status = false;
      return;
    } else {
      error.classList.remove("show");
      status = true;
    }

    if (target.indexOf(".") == -1) {
      error.innerHTML = ". is missing";
      error.classList.add("show");
      status = false;
      return;
    }

    if (target.length > dotPosition + 2) {
      error.classList.remove("show");
      status = true;
      return;
    } else {
      error.innerHTML = ".com or .in is missing";
      error.classList.add("show");
      dotPosition = dotPosition + 2;
      status = false;
    }
  }
});

const subscribeBtn = document.querySelector(".subscribe-btn");

subscribeBtn.addEventListener("click", function () {
  const popup = document.querySelector(".popup");
  const cross = document.querySelector(".cross");

  if (status) {
    console.log("sarab");
    error.classList.remove("show");
    popup.classList.add("display");
    document.body.style.overflowY = "hidden";
  } else {
    error.innerHTML = "Please type valid email Id";
    error.classList.add("show");
  }

  cross.addEventListener("click", function () {
    popup.classList.remove("display");
    document.body.style.overflowY = "scroll";
  });
});
