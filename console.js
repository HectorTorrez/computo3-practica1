

// const ciudad =require('readline').createInterface({
//   input:process.stdin,
//   output:process.stdout,
// });



// ciudad.question("En donde vives? ", (ciudad)=>{
//   console.log(`${ciudad} es una ciudad muy bonita`);
// });

//2

const datos = require('readline').createInterface({
  input:process.stdin,
  output:process.stdout,
})


const{suma, resta, division, multiplicacion} = require('./functions.js')
datos.question("Primer numero? ", (n1)=>{
datos.question("Segundo numero?", (n2)=>{
datos.question("Que operacion deseas realizar? suma, resta, division, multiplicacion :", (operacion)=>{
  if (datos ==suma){
    console.log("El resultado de la suma es: ", suma)
  }
} )
})



})



// const {suma} = require('./functions.js' )
// const result =suma(a+b);
//   console.log()