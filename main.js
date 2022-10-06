const displayScreen = document.querySelector(".display-screen");
const input = document.querySelector("#result");
const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");
const numBtn = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const clrBtn = document.querySelector("#clear");
        clrBtn.addEventListener("click", (e) => {
             input.value = "";
 });
 
// ~~~~~~~~~~~NUMBERS~~~~~~~~~~~~~~~~~

 numBtn.forEach((button) => {
 button.addEventListener("click", (e) => {
 
   input.value += button.textContent;
    
 const result = document.getElementById("equality")
 .addEventListener("click", compute);

function compute(firstNum, secondNum){
  switch (operator){
    case "+":
      result = firstNum + secondNum;
          break;
        
   case "-":
    result = firstNum - secondNum;
        break;
  
    case "*":
    result = firstNum * secondNum;
         break;
  
    case "/":
      result = firstNum / secondNum;
         break;
  
    default:
      input.value = result.textContent  ;
  }
}
   
  })
      })
    
// ~~~~~~~~~~~)OPERATORS~~~~~~~~~~~~~~
operator.forEach((button) => {
  button.addEventListener("click", (e) => {
    input.value += button.textContent;
    if(e.target == numBtn ){
operator.textContent.value = true;
}else {
  false
}
  });
    
    

//~~~~~~~~~~~ DECIMAL~~~~~~~~~
  const decimal = document.querySelector(".decimal ");
decimal.addEventListener("click", (e) => {


  input.value += decimal.textContent;

 if( e.target == numBtn){
  append(numBtn.value) = true;
  }else{
  false;
}
})
})


// /~~~~~~~~~~~~~~~EQUALITY~~~~~~~~~~~~~~


const equal = document.querySelector(".result")
.addEventListener("click", (e) => {
  
  
     input.value += result.textContent;
})
    
 
    

  
