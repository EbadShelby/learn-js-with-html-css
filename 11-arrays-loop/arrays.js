let numbers = [10, 20, 30];
numbers[2] = 10;
console.log(numbers[2]);

let numbers2 = [2, 10, 5, 1];
function getLastValue() {
  let num;
  for (let i = 0; i < numbers2.length; i++) {
    num = numbers2[i];
  }
  return num;
}
console.log(getLastValue());

let numbers3 = [2, 2, 3, 4, 5];
function arraySwap() {
  const lastIndex = numbers3.length - 1;
  const temp = numbers3[0];
  numbers3[0] = numbers3[lastIndex];
  numbers3[lastIndex] = temp;
  return numbers3;
}
console.log(arraySwap());
