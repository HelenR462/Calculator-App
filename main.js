const displayScreen = document.querySelector(".display-screen");
const input = document.querySelector("#result");
const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

const clrBtn = document.querySelector("#clear");
clrBtn.addEventListener("click", () => {
  input.value = "";
});

// STEP 1 Press 11
// EXPECTED = 11  to show on screen
// ACTUAL= IT WORKS

// STEP 2 Press +
// EXPECTED = 11+ to show on screen
// ACTUAL= IT WORKS

// STEP 3 Press 22
// EXPECTED = 11 + 22 to show on screen
// ACTUAL= IT WORKS

// STEP 4 Press =
// EXPECTED = 33 to show on screen
// ACTUAL= 13

let firstOperand = null; //working
let operator = null; //working
let secondOperand = null; //working
let result = null;

numBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator == null) {
      firstOperand = button.textContent;
      input.value += firstOperand;
    } else {
      secondOperand = button.textContent;
      input.value += secondOperand;
    }
    // if first operand is null
    if (firstOperand == null) {
      // set the firstoperand equal button text content
      firstOperand = button.textContent;
      secondOperand = input.value;
      // append the button text content to first operand
    } else {
      firstOperand = input.value;
      secondOperand = button.textContent;
    }

    if (secondOperand == null) {
      secondOperand = button.textContent;
    }

    console.log("firstOperand: ", firstOperand);
    console.log("secondOperand: ", secondOperand);
    console.log("operator: ", operator);
  });

  operatorBtn.forEach((button) => {
    button.addEventListener("click", () => {
      //code this =>  set the operator variable to operator symbol
       if (operator == null) {
        operator = button.textContent;
        input.value += operator;
      }
    });
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

  //ISSUE #2
  //  except for '+' operator none work and this is my attempt to loop trough each operator
  for (let i = 0; i < operator.length; i++) {
    operator.textContent += operator[i] + "<br>";

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
       input.value = parseInt(firstOperand) / parseInt(secondOperand);
        break;

      default:
        firstOperand = secondOperand;
        operator = operator;
        secondOperand = "";
    }
  }
}
