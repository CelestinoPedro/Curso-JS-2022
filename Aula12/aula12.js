

const seuNumero = Number(prompt('Digite um numero'));
console.log(seuNumero);

let htmlNumero        = document.getElementById("seu-numero");
/*const htmlInteiro       = document.getElementById('numero-inteiro');
const htmlArreBaixo     = document.getElementById('arredondando-baixo');
const htmlArreCima      = document.getElementById('arredondando-cima');
const htmlArreDecimal   = document.getElementById('arredondando-decimal');*/

htmlNumero.innerHTML = seuNumero;