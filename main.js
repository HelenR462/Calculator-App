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

numBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator == null) {
      if (firstOperand !== null) {
        firstOperand += button.textContent;
      } else {
        firstOperand = button.textContent;
      }
    } else if (secondOperand !== null) {
      secondOperand += button.textContent;
    } else {
      secondOperand = button.textContent;
    }
    input.value += button.textContent;

    console.log("firstOperand: ", firstOperand);
    console.log("secondOperand: ", secondOperand);
    console.log("operator: ", operator);
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("operator button");

    if (operator !== null) {
      secondOperand += button.textContent;
    } else {
      operator = button.value;
    }

    input.value += button.textContent;
  });
});

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
  input.value = decimal.textContent;
});

const equalsBtn = document.getElementById("compute");
equalsBtn.addEventListener("click", compute);

function compute() {
  console.log("firstOperand: ", firstOperand);
  console.log("secondOperand: ", secondOperand);
  console.log("operator: ", operator);

  switch (operator) {
    case "+":
      input.value = parseInt(firstOperand) + parseInt(secondOperand);
      break;

    case "-":
      input.value = parseInt(firstOperand) - parseInt(secondOperand);
      break;

    case "*":
      input.value = parseInt(firstOperand) * parseInt(secondOperand);
      break;

    case "/":
      input.value = (
        parseFloat(firstOperand) / parseFloat(secondOperand)
      ).toFixed(4);
      break;

    default:
  }
}
