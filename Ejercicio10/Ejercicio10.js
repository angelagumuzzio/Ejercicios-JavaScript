const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
const filterimpar=numbers.filter(number=>number%2===0)
console.log('pares',filterimpar)
const filterpar=numbers.filter(number=>number%2!=0)
console.log('impares',filterpar)