const input = document.querySelector("#result");

const clrBtn = document
  .querySelector("#clear");
 clrBtn.addEventListener("click", e =>{
 input.value = '';
 
 alert("clear")
});


// NUMBER INPUT BUTTON
const calculator = {
  firstNum:'',
  secondNum:'',
  result: null,
  operator:'',
  calculate : function(){
    return this.firstNum.toString + this.operator.toString + this.secondNum.toString + this.result;
  }
  }

const numBtn = document.querySelectorAll(".number");

numBtn.forEach(button => {button.addEventListener("click", e => {
   e.target = calculator.calculate;
  input.append(numBtn);

 alert("numbers")
  })
})

 
const operatorBtn = document.querySelectorAll(".operator");

operatorBtn.forEach((button) => {
       button.addEventListener("click", e=>{
        e.target = button.value;
        
        alert("operator")
       });

      switch(calculator.calculate){
            case"addition":
                 function addition(){
                   if(this.firstNum + this.secondNum == true);
        }
              break;
          
            case "subtraction":
                   function subtraction(){
                   if(this.firstNum - this.secondNum == true);
              }
              break;
          
            case "multiplication":
                 function multiplication(){
                if(this.firstNum * this.secondNum == true);
           }
              break;
          
            case "division":
              function division(){
                if(this.firstNum / this.secondNum == true);
           }
              break;
          
              default:
               
          }
       });
      
      
const decimal = document.querySelector(".decimal ");
decimal.addEventListener("click", (e) => {
  e.target = decimal.value;
  // button.value = ".";

  alert("decimal");
  });

const equality = document.querySelector(".equality");
equality.addEventListener("click", (e) => {
  e.target = equality.value;

  alert("equality")
});

