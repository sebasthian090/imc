let peso = parseFloat(prompt("digite o valor do peso :"));
let altura = parseFloat(prompt("digite o valor da altura: "));

if(isNaN(peso) || isNaN(altura)|| peso <=0 || altura<=0){
    document.write("digite valores válidos : ");
}else{
  let imc = (peso / (altura * altura)).toFixed(2);
  document.write("Seu imc é igual a<span style='color: red;'>:", imc, "</span>");
  document.write("<br>");

  if (imc <= 18.5) {
    document.write("Seu imc está abaixo do normal!!");
  } else if (imc > 18.5 && imc <= 24.9) {
    document.write("Seu imc está Normal!!");
  } else if (imc > 25 && imc <= 29.9) {
    document.write("Seu imc indica que você está em sobrepeso!!");
  } else if (imc > 30 && imc <= 34.9) {
    document.write("Seu imc indica que você está em Obesidade grau I!!");
  }
}
     
     
     
    