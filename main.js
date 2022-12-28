const displayScreen = document.querySelector("display-screen");
const input = document.querySelector("#result");
const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clrBtn = document.querySelector("#clear");
const equalsBtn = document.getElementById("compute");
const decimal = document.getElementById("decimal");

let firstOperand = null;
let operator = null;
let secondOperand = null;
let result = null;

numBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calculatorPosition = detectCalculatorPosition();
    numberLogic(calculatorPosition, button.textContent);
    updateDisplay();
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const calculatorPosition = detectCalculatorPosition();
    operatorLogic(calculatorPosition, button.value);
    updateDisplay();
  });
});

equalsBtn.addEventListener("click", function () {
  if (firstOperand === null) return;
  result = compute();
  if (isFinite(result)) {
    secondOperand = result.toFixed(4);
    firstOperand = null;
    operator = "";
  }
  updateDisplay();
});

decimal.addEventListener("click", () => {
  const calculatorPosition = detectCalculatorPosition();
  decimalLogic(calculatorPosition);
  updateDisplay();
});

clrBtn.addEventListener("click", () => {
  firstOperand = null;
  operator = null;
  secondOperand = null;
  result = null;
  input.value = "";
});

function numberLogic(calculatorPosition, value) {
  switch (calculatorPosition) {
    case "Fresh":
      firstOperand = value;
      break;
    case "FirstOperand":
      firstOperand += value;
      break;
    case "Operator":
      firstOperand = value;
      break;
    case "SecondOperand":
      firstOperand += value;
      break;
    default:
      break;
  }
}

function operatorLogic(calculatorPosition, value) {
  switch (calculatorPosition) {
    case "Fresh":
      break;
    case "FirstOperand":
      secondOperand = firstOperand;
      firstOperand = null;
      operator = value;
      break;
    case "Operator":
      firstOperand = null;
      operator = value;
      break;
    case "SecondOperand":
      result = compute();
      if (isFinite(result)) {
        secondOperand = result;
        firstOperand = null;
        operator = value;
      }
      break;
    default:
      break;
  }
}

function decimalLogic(calculatorPosition) {
  switch (calculatorPosition) {
    case "Fresh":
      firstOperand = ".";
      break;
    case "FirstOperand":
      firstOperand += ".";
      break;
    case "Operator":
      firstOperand += ".";
      break;
    case "SecondOperand":
      firstOperand += ".";
      break;
    default:
      break;
  }
}

function detectCalculatorPosition() {
  if (firstOperand === null && secondOperand === null && operator === null)
    return "Fresh";
  if (firstOperand !== null && secondOperand === null && operator === null)
    return "FirstOperand";
  if (firstOperand === null && secondOperand !== null && operator !== null)
    return "Operator";
  if (firstOperand !== null && secondOperand !== null && operator !== null)
    return "SecondOperand";
  return "Error";
}

function updateDisplay() {
  let displayText = "";
  displayText += secondOperand === null ? "" : Number(secondOperand);
  displayText += operator === null ? "" : operator;
  displayText += firstOperand === null ? "" : Number(firstOperand);
  input.value = displayText;
}

function compute() {
  switch (operator) {
    case "+":
      return Number(secondOperand) + Number(firstOperand);
      break;
    case "-":
      return Number(secondOperand) - Number(firstOperand);
      break;
    case "*":
      return Number(secondOperand) * Number(firstOperand);
      break;
    case "/":
      if (Number(secondOperand) === 0) return;
      return Number(secondOperand) / Number(firstOperand);
      break;
    default:
      break;
  }
}
