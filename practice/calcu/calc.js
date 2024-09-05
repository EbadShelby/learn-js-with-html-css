let currentInput = "";
let firstInput = null;
let secondInput = null;
let currentOperator = null;
let resultDisplayed = false;

function displayInput(input) {
  document.querySelector(".js-input").innerHTML = input;
}

function displayOutput(output) {
  document.querySelector(".js-output").innerHTML = output;
}

function numberInput(number) {
  if (resultDisplayed) {
    // Start fresh after displaying a result
    currentInput = number.toString();
    resultDisplayed = false;
  } else {
    currentInput += number.toString();
  }
  displayInput(currentInput);
}

function operatorInput(operator) {
  if (currentInput === "") return; // Prevent operator input without a number

  if (firstInput === null) {
    firstInput = parseFloat(currentInput);
  } else if (!resultDisplayed) {
    // If an operator is already set and user inputs a second operator, calculate intermediate result
    secondInput = parseFloat(currentInput);
    firstInput = performCalculation(firstInput, secondInput, currentOperator);
    displayOutput(firstInput);
  }

  currentOperator = operator;
  currentInput = ""; // Reset input for next number
  displayInput(firstInput + " " + operator);
  resultDisplayed = false;
}

function calculateResult() {
  if (firstInput !== null && currentOperator !== null && currentInput !== "") {
    secondInput = parseFloat(currentInput);
    const result = performCalculation(firstInput, secondInput, currentOperator);
    displayOutput(result);
    firstInput = result; // Set result as the new firstInput for continued calculations
    currentInput = ""; // Reset input for next number
    resultDisplayed = true;
  }
}

function performCalculation(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error"; // Prevent division by zero
    default:
      return num2;
  }
}

function clearInput() {
  currentInput = "";
  firstInput = null;
  secondInput = null;
  currentOperator = null;
  resultDisplayed = false;
  displayInput("0");
  displayOutput("0");
}