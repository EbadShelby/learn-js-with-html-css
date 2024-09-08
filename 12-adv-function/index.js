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
["Wine River", "Milk River", "Honey River"].forEach(function (value, index) {
  if (value === "Milk River") {
    return;
  }
  console.log(value);
  console.log(index);
});

