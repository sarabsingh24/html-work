const deadline = document.querySelector(".dedline span");
const countdown = document.querySelectorAll(".countdown h4");
const counterBox = document.querySelector(".countdown");

const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "Octuber",
  "November",
  "December",
];
const daysArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let temTime = new Date();
let temYear = temTime.getFullYear();
let temMonth = temTime.getMonth();
let temDate = temTime.getDate() + 7;
console.log(temDate);

// const fetureDate = new Date(2020,11,25,10,30,0);
const fetureDate = new Date(temYear, temMonth, temDate, 10, 30, 0);
const year = fetureDate.getFullYear();
const month = fetureDate.getMonth();
const day = fetureDate.getDay();
const date = fetureDate.getDate();
const hour = fetureDate.getHours();
const minuts = fetureDate.getMinutes();
const sec = fetureDate.getSeconds();

deadline.textContent = `Offer ends on ${daysArray[day]}, ${date} ${monthArray[month]} ${year}`;

const fetureTime = fetureDate.getTime();

function setTime() {
  let currentTime = new Date().getTime();
  let t = fetureTime - currentTime;

  // 1s = 1000ms
  // 1min = 60s
  // 1hour = 60 minuts
  // 1 day = 24hours

  let oneDay = 24 * 60 * 60 * 1000;
  let oneHours = 60 * 60 * 1000;
  let oneMinutes = 60 * 1000;
  let miliSec = 1000;

  let day = Math.floor(t / oneDay);
  let hour = Math.floor((t % oneDay) / oneHours);
  let minutes = Math.floor((t % oneHours) / oneMinutes);
  let seconds = Math.floor((t % oneMinutes) / 1000);

  let values = [day, hour, minutes, seconds];

  function formatDate(item) {
    let newValue = item < 10 ? "0" + item : item;

    return newValue;
  }

  countdown.forEach((val, index) => {
    val.innerHTML = formatDate(values[index]);
  });

  if (t < 0) {
    clearInterval(interval);
    counterBox.innerHTML = "Sale Offer Expire.";
  }
}

let interval = setInterval(setTime, 1000);

setTime();
