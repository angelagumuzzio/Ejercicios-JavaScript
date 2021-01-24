const data = ["hola", 2, 5, "adios"];
console.log(data)
console.log('El mayor número es el 2')
console.log(data[1]>data[2])
console.log('El mayor número es el 5')
console.log(data[2]>data[1])
const suma=data[1]+data[2]
const resta=data[2]-data[1]
const mult=data[1]*data[2]
const div=data[2]/data[1]
const res=data[2]%data[1]
console.log('La suma de 2+5 es '+suma)
console.log('La resta de 5-2 es '+resta) 
console.log('la multiplicación de 5*2 es '+mult)
console.log('la división de 5/2 es '+div)
console.log('el resto de la división es '+res)
const result=[suma,resta,mult,div,res]
console.log('el array con los resultados es ['+result+']')
