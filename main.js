const displayScreen = document.querySelector(".display-screen");
const input = document.querySelector("#result");
const numBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

const clrBtn = document.querySelector("#clear");
clrBtn.addEventListener("click", (e) => {
  input.value = "";
});

//  STEP 1 Press 1
// EXPECTED= 1 to show on screen
// ACTUAL= IT WORKS!

// STEP 2 Press +
// EXPTECED= 1+ to show on screen
// ACTUAL= IT WORKS

// STEP 3 Press 2
// EXPECTED= 2 to show on screen
// ACTUAL= IT WORKS!

// STEP 4 Press =
// EXPECTED = result to show on screen
// ACTUAL=  Displays empty screen

// STEP 5 Press operator 
// EXPECTED = not to repeat
// ACTUAL= except for '+' the rest DO NOT WORK


let firstOperand = null; //working
let operator = null; //working
let secondOperand = null;  //working
let result = null;


 
numBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
   
    input.value +=button.textContent ;
  
    if(input.value === '.'&& this.secondOperand.includes('.')){
       input.value =''
    }



});
});



operatorBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
 
     input.value += button.textContent;
  
     if(input.value === '+'||
        input.value === '-' ||input.value == '*' ||input.value == '/'
        && this.operator.includes(
          ['+','-','*','/']) 
          ){
      input.value = ''
   }
  
 

});
  
const decimal = document.getElementById("decimal");
decimal.addEventListener("click", (e) => {
 
  input.value = decimal.textContent;
     
     
});

const equalsBtn = document.getElementById("compute");
equalsBtn.addEventListener("click", compute);
  
function compute
    (firstOperand, operator, secondOperand) {
  firstOperand = parseInt(this.firstOperand);
      secondOperand = parseInt(this.secondOperand);
  if (isNaN(secondOperand) || isNaN(firstOperand)){
   input.value = ''
      switch (this.operator) {

        case "+":
          input.value = this.firstOperand + this.secondOperand;
          break;

        case "-":
          input.value = firstOperand - secondOperand;
          break;

        case "*":
          input.value = firstOperand * secondOperand;
          break;

        case "÷":
          input.value = firstOperand / secondOperand;
          break;

        default:
          this.firstOperand = this.secondOperand;
          this.operator = operator;
          this.secondOperand = '';
      }
    }
  }
})




 

