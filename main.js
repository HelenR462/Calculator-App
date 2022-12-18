const displayScreen = document.querySelector(".display-screen");
const input = document.querySelector("#result");
const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

const clrBtn = document.querySelector("#clear");
clrBtn.addEventListener("click", () => {
  input.value = "";
});

let firstOperand = null; //working
let operator = null; //working
let secondOperand = null; //working
let result = null;

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

numBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calculatorPosition = detectCalculatorPosition();
    switch (calculatorPosition) {
      case "Fresh":
        firstOperand = button.textContent;
        break;

      case "FirstOperand":
        firstOperand += button.textContent;

        break;

      case "Operator":
        firstOperand = button.textContent;

        break;

      case "SecondOperand":
        firstOperand += button.textContent;
        break;

      default:
        break;
    }

    input.value += button.textContent;

    console.log("firstOperand: ", firstOperand);
    console.log("secondOperand: ", secondOperand);
    console.log("operator: ", operator);
    console.log(calculatorPosition);
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("operator button");

    const calculatorPosition = detectCalculatorPosition();

    switch (calculatorPosition) {
      case "Fresh":
        //Do nothing
        break;

      case "FirstOperand":
        secondOperand = firstOperand;
        firstOperand = null;
        operator = button.value;

        break;

      case "Operator":
        firstOperand = null;
        operator = button.value;

        break;

      case "SecondOperand":
        result = compute();
        secondOperand = result;
        firstOperand = null;
        operator = button.value;

        break;

      default:
        break;
    }

    input.value += button.textContent;

    // console.log("firstOperand: ", firstOperand);
    // console.log("secondOperand: ", secondOperand);
    // console.log("operator: ", operator);
  });
});

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
  input.value = decimal.value;
});

const equalsBtn = document.getElementById("compute");
equalsBtn.addEventListener("click", function () {
  const returnvalue = compute();

  input.value = returnvalue;
});

function compute() {
  const position = detectCalculatorPosition();

  // console.log("firstOperand: ", firstOperand);
  // console.log("secondOperand: ", secondOperand);
  // console.log("operator: ", operator);
  //let operator = button.value;

  switch (operator) {
    case "+":
      return parseInt(firstOperand) + parseInt(secondOperand);
      break;

    case "-":
      return parseInt(secondOperand) - parseInt(firstOperand);
      break;

    case "*":
      return parseInt(firstOperand) * parseInt(secondOperand);
      break;

    case "/":
      if (firstOperand % secondOperand) {
        return (parseFloat(secondOperand) / parseFloat(firstOperand)).toFixed(4);
      }

      break;

    default:
      break;
  }
}
