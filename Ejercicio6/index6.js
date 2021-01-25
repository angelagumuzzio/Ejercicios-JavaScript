//primera forma de resolver el ejercicio con for
const notas=[6, 7, 2, 9, 3, 4, 5, 8, 2];
let acu=0
for(let i=0; i<notas.length; i++) 
{acu+=notas[i]};
console.log('Con el bucle FOR la puntuación final es ' + acu);
//Segunda forma de resolver el ejercicio con for of
let puntuacion=0
for(nota of notas){
    puntuacion+=nota};
console.log('con el bule for..of la puntuacion final es '+puntuacion)