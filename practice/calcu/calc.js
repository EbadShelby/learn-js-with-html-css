let firstNumber = "0";
let secondNumber = null;
let currentOperator = null;
let result = "0";

function clearInput() {
  firstNumber = "0";
  secondNumber = null;
  currentOperator = null;
  updateDisplayInput();
}

function updateDisplayInput() {
  document.querySelector(".js-display").innerHTML = firstNumber;
}

function numberInput(number) {
  // Prevent multiple dots in a single number
  if (number === "." && firstNumber.includes(".")) return;

  // If the current number is "0", replace it; otherwise, append it
  if (firstNumber === "0" || firstNumber === result) {
    firstNumber = number;
  } else {
    firstNumber += number;
  }
  updateDisplayInput();
}

function operatorInput(operator) {
  if (currentOperator === null) {
    // Store the first number and operator
    currentOperator = operator;
    secondNumber = firstNumber;
    firstNumber = "0"; // Reset the firstNumber for the next input
    document.querySelector(".js-display").innerHTML =
      secondNumber + " " + operator;
  } else {
    // Perform the calculation with the stored values and update
    calculate();
    currentOperator = operator; // Update the operator for chaining
    secondNumber = result;
    firstNumber = "0";
    document.querySelector(".js-display").innerHTML =
      secondNumber + " " + operator;
  }
}

function calculate() {
  // Convert strings to numbers for mathematical operations
  const num1 = parseFloat(secondNumber);
  const num2 = parseFloat(firstNumber);

  if (currentOperator === "+") {
    result = (num1 + num2).toString();
  } else if (currentOperator === "-") {
    result = (num1 - num2).toString();
  } else if (currentOperator === "*") {
    result = (num1 * num2).toString();
  } else if (currentOperator === "/") {
    result = (num1 * num2).toString();
  }

  // Display the result and reset firstNumber for next input
  firstNumber = result;
  updateDisplayInput();
}

function equals() {
  if (currentOperator !== null) {
    calculate();
    currentOperator = null; // Reset the operator
    secondNumber = null; // Reset the second number
  }
}
