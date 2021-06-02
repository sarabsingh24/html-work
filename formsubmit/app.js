const form = document.getElementById("form");
const testForm = document.querySelectorAll("#form input");
const testText = document.querySelectorAll("#form label");

const name = document.getElementById("name");
const nameError = document.getElementById("err-name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const checkbox = document.getElementById("checkbox");

const validationArray = [name, email, mobile];

function checkUncheck() {
  if (checkbox.checked == false) {
    checkbox.parentElement.classList.add("error");
  } else {
    checkbox.parentElement.classList.remove("error");
  }
}

var newList = [];

function myTestList() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      newList.push(json);
      console.log(newList);
    });
}
myTestList();

function sendData(counter) {
  //    if (counter == 3 && checkbox.checked == true) {
  //     fetch("https://jsonplaceholder.typicode.com/posts", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         title: name.value,
  //         body: email.value,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //           console.log(data);
  //         newList.push(data);
  //           console.log(newList);
  //       });
  //}
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  var counter = 0;

  validationArray.forEach((field) => {
    if (field.value == "") {
      field.parentElement.classList.add("error");

      return false;
    } else if (!field.classList.contains("error")) {
      counter++;
    }
    console.log(counter);
  });

  checkUncheck();
  sendData(counter);

  name.addEventListener("input", () => {
    if (name.length < 2 && name.length > 20) {
      name.parentElement.classList.add("error");
      return false;
    } else {
      name.parentElement.classList.remove("error");
    }
  });

  email.addEventListener("input", () => {
    //   if (email.value.indexOf('@') <= 0) {
    //     email.parentElement.classList.add("error");
    //     return false;
    //   } else {

    //     email.parentElement.classList.remove("error");
    //   }

    //  if(email.value.charAt(email.value.length - 4) !== '.' && email.value.charAt(email.value.length - 3 ) !== '.'){
    //        console.log("in for .");
    //     email.parentElement.classList.add("error");
    //     return false;
    //   }
    //    else {
    //         console.log("out fromfor .");
    //     email.parentElement.classList.remove("error");
    //   }

    if (email.value.indexOf("@") == -1) {
      email.parentElement.classList.add("error");
      return false;
    } else if (email.value.indexOf(".") == -1) {
      email.parentElement.classList.add("error");
      return false;
    } else {
      console.log("out fromfor .");
      email.parentElement.classList.remove("error");
    }
  });

  mobile.addEventListener("input", () => {
    console.log(mobile.value.length >= 10 && mobile.value.length <= 12);
    if (isNaN(mobile.value)) {
      mobile.parentElement.classList.add("error");
      return false;
    } else {
      mobile.parentElement.classList.remove("error");
    }

    if (mobile.value.length <= 9 || mobile.value.length >= 13) {
      console.log("in");
      mobile.parentElement.classList.add("error");
      return false;
    } else {
      mobile.parentElement.classList.remove("error");
    }
  });
});
