let display = 0;

const refreshDisplay = () => $('#numero').html(display);

refreshDisplay();
$('.digito').click(function (){
  if(display == 0){
    display = $(this).text();
  }
  else{
    display = display + $(this).text(); 
  }

  refreshDisplay();
})


$('#limpar').click(function () {
  display = 0;
  refreshDisplay();
})




$('#calcular').click(function(){
    let Calculo = 0;
  
  if(display.includes("+")){
    
   soma = display.split("+");
    for(let i = 0; i<soma.length; i++){
      Calculo = parseInt(Calculo) + parseInt(soma[i])
      console.log(Calculo)
    }
    
    console.log(Calculo)
  }
  
  console.log(Calculo)


  if(display.includes("-")){
    
    subtracao = display.split("-");
    for(let i = 0; i<subtracao.length; i++){
      if(i == 0){
        Calculo = parseInt(subtracao[i])
      }
      else {
        Calculo = parseInt(Calculo) - parseInt(subtracao[i])
      }
    }

  }
  
  if(display.includes("x")){
    
    multiplicacao = display.split("x");
    for(let i = 0; i<multiplicacao.length; i++){
      if(i == 0){
        Calculo = parseInt(multiplicacao[i])
      }
      else{
        Calculo = parseInt(Calculo) * parseInt(multiplicacao[i])
      }
      }

  }
  
  if(display.includes("/")){
    
    divisao = display.split("/");
    for(let i = 0; i<divisao.length; i++){
      if(i == 0){
        Calculo = parseInt(divisao[i])
      }
      else{
        Calculo = parseInt(Calculo) / parseInt(divisao[i])
      }
      }

  }
  
    console.log('calculoooo' +Calculo)
    display = Calculo
    refreshDisplay();
})