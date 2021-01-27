const times = [60, 75, 79, 80, 55, 59];
console.log(times);
const suma=times.reduce((n,n1)=>(n+n1),0);
console.log('la suma es', suma);
const num=times.length
media=suma/num
console.log('la media es', media);