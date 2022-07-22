const display = document.querySelector(".display-screen");
const input = document.querySelector("#text").value;
const clrBtn = document
  .querySelector("#clear")
  .addEventListener("click", (e) => clearNum(e));

function clearNum(e) {
  e.preventDefault();
  text.value = "";
  focus();
}

// NUMBER INPUT BUTTON

const numBtn = document.querySelectorAll(".numbers");
const operatorBtn = document.querySelectorAll(".operators");
const decimal = document.querySelector(".decimal ");
const equality = document.querySelector(".equality");

class calculator {
  constructor(firstNum, secondNum) {
    this.firstNum = firstNum;
    this.operator = operator;
    this.secondNum = secondNum;
    this.equality = equality;
    this.displayValue = "";
    {
    }
  }
}
numBtn.forEach((button) => {
  document.addEventListener("click", () => {
    calculator.append(button.value);
    calculator.updateDisplay();
  });
});
switch ((firstNum, secondNum)) {
  case "+":
    e.target(firstNum + secondNum + equality);
    break;

  case "-":
    e.target(firstNum - secondNum + equality);
    break;

  case "*":
    e.target(firstNum * secondNum + equality);
    break;

  case "/":
    e.target(firstNum / secondNum + equality);
    break;
}
