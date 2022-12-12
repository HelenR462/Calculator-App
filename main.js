const displayScreen = document.querySelector(".display-screen");
const input = document.querySelector("#result");
const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

const clrBtn = document.querySelector("#clear");
clrBtn.addEventListener("click", () => {
  input.value = "";
});

// STEP 1 Press 1
// EXPECTED = 1  to show on screen
// ACTUAL= IT WORKS

//STEP 2 Press +
// EXPECTED = 1+  to show on screen
// ACTUAL= IT WORKS

// STEP 3 Press 1
// EXPECTED = 1+1 to show on screen
// ACTUAL= IT WORKS

// STEP 4 Press +
// EXPECTED = 1+1+ to show on screen
// ACTUAL= IT WORKS

// STEP 5 Press 1
// EXPECTED = 1+1+1 to show on screen
// ACTUAL= IT WORKS

//STEP 6 Press +
// EXPECTED = 1+1+1+  to show on screen
// ACTUAL= IT WORKS

// STEP 7 Press 1
// EXPECTED = 1+1+1+1 to show on screen
// ACTUAL= IT WORKS

// STEP 8 Press =
// EXPECTED = 4  to show on screen
// ACTUAL= 2

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
  //  return "Error";
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

   // input.value += button.value;

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
         secondOperand =  firstOperand; 
        firstOperand = null;
        operator = button.value;
        break;

      case "Operator":
        firstOperand = null;
        operator += button.value;

        break;

      case "SecondOperand":
        result = compute();
        secondOperand = result;
        firstOperand = null;

        break;

      default:
        break;
    }

    //input.value += button.value;

    console.log("firstOperand: ", firstOperand);
    console.log("secondOperand: ", secondOperand);
    console.log("operator: ", operator);
  });
});

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
  input.value = decimal.value;
});

const equalsBtn = document.getElementById("compute");
equalsBtn.addEventListener("click", compute);

function compute() {
  console.log("firstOperand: ", firstOperand);
  console.log("secondOperand: ", secondOperand);
  console.log("operator: ", operator);

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
      return toFixed(4).parseInt(secondOperand) / parseInt(firstOperand);
      break;

    default:
    
  }
}
