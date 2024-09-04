let currentInput = "";
let currentOperator = "";

function displayInput(input) {
  document.querySelector(".js-input").innerHTML = input;
}
function numberInput(number) {
  currentInput += number;
  displayInput(currentInput);
}

function operatorInput(operator) {
  if (operator === "+") {
    
  }
  else if (operator === "-") {

  }
  else if (operator === "*") {

  }
}

function clearInput() {
  currentInput = "";
  displayInput("0");
  displayOutput("0");
}