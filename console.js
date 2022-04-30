
//1
/*
 const ciudad =require('readline').createInterface({
   input:process.stdin,
  output:process.stdout,
 });



 ciudad.question("En donde vives? ", (ciudad)=>{
   console.log(`${ciudad} es una ciudad muy bonita`);
   return process.exit(1);
 });
*/
//2

/*

const datos = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout,
})



const{suma, resta, division, multiplicacion} = require('./functions.js')
datos.question("Primer numero? ", (n1)=>{
datos.question("Segundo numero?", (n2)=>{
datos.question("Que operacion deseas realizar? suma resta division multiplicacion :", (datos)=>{
  if (datos =='suma'){

     const result = suma(n1,n2);
     console.log("El resultado de la suma es: ", result);
     return process.exit(1);
   }
   if(datos =='resta'){
     const result = resta(n1,n2);
     console.log("El resultado de la resta es: ", result);
     return process.exit(1);
   }
   if(datos =='division'){
     const result = division(n1,n2);
     console.log("El resultado de la division es: ", result);
     return process.exit(1);
   }
   if(datos =='multiplicacion'){
     const result = multiplicacion(n1,n2);
     console.log("El resultado de la multiplicacion es: ", result);
     return process.exit(1);
   }
 });
 });



 })
*/

//3
/*
const {name} = require('./arreglo.js')
console.table(name)

const {age} = require('./arreglo.js')
console.table(age)
*/