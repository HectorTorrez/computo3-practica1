// process.argv.forEach((index, value) =>{
//     console.log(`${index}: ${value}`);
// });

// const colors =['blue', 'yellow', 'red', 'green'];
// console.table(colors);

// const fruits = {apple: 15, mangoes: 20};
// console.table(fruits);

// const duration = ()=>{
//     console.time('name()');

//     name();
//     console.timeEnd('name()');

// }
//     duration();


// const name = require('readline').createInterface({

//     input : process.stdin,
//     output: process.stdout,
// });

// name.question("Cual es su nombre? ", name =>{
//     console.log(`Bienvenido ${name}`);
// });

//const operation = require('./functions.js');
const {sum, colors} = require('./functions.js')
const result = sum(5,8);
console.log("El resultado de la suma es: ", result);

colors.forEach((color)=>{
	console.count(color);
});