var dni = prompt("dime tu número de dni")
console.log('dni', dni);
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
if(dni<0 || dni>99999999){alert("el número proporcionado no es válido")}
else{const resto=dni%23; alert("esta es tu letra: "+ letras[resto])}