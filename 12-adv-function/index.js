/*
function greeting() {
  console.log("hello");
}
greeting();

const num = 2;
const function1 = function() {
  console.log("hello");
};
console.log(function1);
console.log(typeof function1);
*/

// setTimeout(function () {
//   console.log("1 second ago");
//   console.log("1 second ago");
// }, 1000);
// setInterval(function () {
//   console.log("interval");
// }, 1000);
// ["Wine River", "Milk River", "Honey River"].forEach((value, index) => {
//   if (value === "Milk River") {
//     return;
//   }
//   console.log(value);
//   console.log(index);
// });

// const arrowFunction = () => {
//   console.log("hello");
// };
// arrowFunction();

// const oneLine = () => 2 + 3;

// const object2 = {
//   method() {},
// };
// console.log(oneLine());

// const buttonElement = document.querySelector(".js-button");

// const eventListeners = () => {
//   console.log("click");
// };

// buttonElement.addEventListener("click", eventListeners);
// buttonElement.removeEventListener("click", eventListeners);
// buttonElement.addEventListener("click", () => {
//   console.log("click2");
// });

console.log(
  [1, -2, 5].filter((value, index) => {
    // if (value >= 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  })
);

console.log(
  [1, 1, 3].map((value, index) => {
    return value * 2;
  })
);
console.log([1, 1, 3].map((value) => value * 2));
