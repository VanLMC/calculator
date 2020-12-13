let displayValue = "0";
var digitos = document.getElementsByClassName("digito");
var buttonLimpar = document.getElementById("limpar");
var buttonEquals = document.getElementById("equals");

const refreshDisplay = () => document.getElementById("numero").innerHTML = displayValue;

function setupDigists(){
  
    const digitClickEvent = function() {
        const value = this.innerHTML;
      
        if(displayValue == 0){
          displayValue = value;
        }
        else{
          displayValue = displayValue + value;    
        }
      
        refreshDisplay();
    };

    for (var i = 0; i < digitos.length; i++) {
        digitos[i].addEventListener('click', digitClickEvent, false);
    }

}

refreshDisplay();
setupDigists();

buttonEquals.addEventListener("click", calcular);


function calcular(){
    let calculation = 0;
  
  if(displayValue.includes("+")){
    calculation = sum(displayValue);
  }
  else if(displayValue.includes("-")){
    calculation = subtract(displayValue);
  }
  else if(displayValue.includes("/")){
    calculation = divide(displayValue);
  }
  else if(displayValue.includes("x")){
    calculation = multiply(displayValue);
  }
  
  displayValue = calculation;
  refreshDisplay();
}

buttonLimpar.addEventListener("click", function (){
  displayValue = 0;
  refreshDisplay();
});



function sum(displayValue){
  
    let sumValue = 0;
     sum = displayValue.split("+");
    for(let i = 0; i<sum.length; i++){
      sumValue = parseInt(sumValue) + parseInt(sum[i]);
    }
  
    return sumValue;
}


function subtract(displayValue){
  
    let subtractionValue = 0;
  
    subtraction = displayValue.split("-");
    for(let i = 0; i<subtraction.length; i++){
      if(i == 0){
        subtractionValue = parseInt(subtraction[i])
      }
      else {
        subtractionValue = parseInt(subtractionValue) - parseInt(subtraction[i])
      }
    }
  
    return subtractionValue;
}


function divide(displayValue){
  
   let divisionValue = 0;
  
     division = displayValue.split("/");
    for(let i = 0; i<division.length; i++){
      if(i == 0){
        divisionValue = parseInt(division[i])
      }
      else{
        divisionValue = parseInt(divisionValue) / parseInt(division[i])
      }
      }
  
    return divisionValue;
}


function multiply(displayValue){
     let multiplicationValue = 0;
  
      multiply = displayValue.split("x");
    for(let i = 0; i<multiply.length; i++){
      if(i == 0){
        multiplicationValue = parseInt(multiply[i])
      }
      else{
        multiplicationValue = parseInt(multiplicationValue) * parseInt(multiply[i])
      }
      }
   return multiplicationValue;
}
