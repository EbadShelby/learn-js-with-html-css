import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const today = dayjs();

console.log("=== 15a ===");
const nextFiveDays = today.add(5, "days");
console.log(nextFiveDays.format("MMMM, D"));

console.log("\n=== 15b ===");
const nextMonth = today.add(1, "months");
console.log(nextMonth.format("MMMM, D"));

console.log("\n=== 15c ===");
const previousMonth = today.subtract(1, "months");
console.log(previousMonth.format("MMMM, D"));

console.log("\n=== 15d ===");
console.log(today.format("MMMM, dddd"));

console.log("\n=== 15e ===");
const date = today.format("dddd");
function isWeekend(date) {
  if (date === "Saturday") {
    return "Saturday";
  } else if (date === "Sunday") {
    return "Saturday";
  } else {
    return "not weekend";
  }
}
console.log(isWeekend(date));

console.log("\n=== 15e ===");
