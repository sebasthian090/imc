let peso = parseFloat(prompt("digite o valor do peso :"));
let altura = parseFloat(prompt("digite o valor da altura: "));

if(isNaN(peso) || isNaN(altura)|| peso <=0 || altura<=0){
    document.write("digite valores válidos : ");
}else{
     let imc = peso/(altura*altura).toFixed(2);
     document.write("seu imc é igual a:", imc);

     if(imc<=18){
       document.write("seu imc está abaixo ") 
     }
}