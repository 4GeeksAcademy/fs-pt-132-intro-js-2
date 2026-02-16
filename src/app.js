import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};




//-----------------------------------arrays y objetos-----------------------------------------//
//-----------------------------------arrays -----------------------------------------//

const arr = [1, 6, 2, 3, 4, 5, 64, 5, 6, 2, 3, 4, 5, 6, 6555]

console.log(arr.length) // largo del array, comienza en 1
console.log(arr)
console.table(arr)
console.log(arr[0])
console.log(arr[5])
console.log(arr[arr.length - 1])
arr[0] = 55
console.log(arr)
arr.pop() // elimina ultimo elemento del array
console.log(arr)
arr.push(8888) // añade al final de array
console.log(arr)
arr.shift() // elimina primer elemento del array
console.log(arr)
arr.unshift('pepe')
console.log(arr)
//ojo con splice, modifica el array
// eliminar splice(indice, cantidad)
// para eliminar cualquier cantidad de elementos en cualquier posicion
arr.splice(1, 3)
console.log('1er splice', arr)
// eliminar un solo elemento
arr.splice(4, 1)
console.log('2 splice', arr)
//utilizarlo para eliminar y poner un elemento
arr.splice(4, 1, 'lola')
console.log(arr)
// desde la posicion uno, estoy eliminando cuatro elemento e insertando 'lola', 'matia', 'barbara'
arr.splice(1, 4, 'lola', 'matia', 'barbara')
console.log(arr)
//estoy añadiendo un elemento en la posicion 5 sin eliminar ningun indice
arr.splice(5, 0, 'añadido')
console.log(arr)

const backupArr = arr
console.log('arr --> ', arr)
console.log('backup arr --> ', backupArr)
console.log(arr === backupArr)

backupArr[0] = 'akjhgsdfvakjhsgdfajhksgdkjahsgdkjhasg'
console.log('arr --> ', arr)
console.log('backup arr --> ', backupArr)

//generar una copia del array u objeto utilizar spread operator --> ...
const backupGood = [...arr]
console.log(arr === backupGood)
backupGood[0] = 'good'
console.log('arr --> ', arr)
console.log('backup arr --> ', backupArr)
console.log('backup good --> ', backupGood)

//slice --> devuelve un nuevo array, no modifica array original
const slicedArr = arr.slice(3, 7)
console.log(arr);
console.log(slicedArr);

const texto = 'pepe no entiende bien esto de las copias'

console.log(texto.length)
console.log(texto[3])
const splited = texto.split(' ')

console.log(splited)
const returnToText = splited.join('-')
console.log(returnToText)

arr.push(() => 'hi')
console.log(arr[arr.length - 1]())
//-----------------------------------objetos-----------------------------------------//

const person = {
  name: 'pepe',
  age: 55,
  city: 'Madrid',
  active: true,
  sayHi: () => 'hi',
  luckyNumbers: [1, 2, 3],
  partner: {
    name: 'Maria',
    age: 55,
    city: 'Cadiz',
  }
}

console.log(person)
console.log(person.name)
person.lastname = 'Paredes'
console.log(person.lastname)
console.log(person.luckyNumbers[1]);
console.log(person.partner.name)

delete person.partner
console.log(person)

//si voy a acceder de manera dinamica a un objeto, utilizar obj[var] no puede ser obj.var
const addNewValuesToObj = (obj, key, value) => {
  return obj[key] = value
}

const testObj = {
  name: "Maria"
}

console.log(addNewValuesToObj(testObj, 'age', 45))

console.log(addNewValuesToObj(testObj, 'active', true))
console.log(testObj)


const users = [
  {
    name: 'pepe',
    age: 55,
    city: 'Madrid',
    active: true,
    sayHi: () => 'hi',
    luckyNumbers: [1, 2, 3],
    partner: {
      name: 'Maria',
      age: 55,
      city: 'Cadiz',
    }
  },
  {
    name: 'pepe',
    age: 55,
    city: 'Madrid',
    active: true,
    sayHi: () => 'hi',
    luckyNumbers: [1, 2, 3],
    partner: {
      name: 'Maria',
      age: 55,
      city: 'Cadiz',
    }
  },
  {
    name: 'pepe',
    age: 55,
    city: 'Madrid',
    active: true,
    sayHi: () => 'hi',
    luckyNumbers: [1, 2, 3],
    partner: {
      name: 'Maria',
      age: 55,
      city: 'Cadiz',
    }
  },
  {
    name: 'pepe',
    age: 55,
    city: 'Madrid',
    active: true,
    sayHi: () => 'hi',
    luckyNumbers: [1, 2, 3],
    partner: {
      name: 'Maria',
      age: 55,
      city: 'Cadiz',
    }
  },
  {
    name: 'pepe',
    age: 55,
    city: 'Madrid',
    active: true,
    sayHi: () => 'hi',
    luckyNumbers: [1, 2, 3],
    partner: {
      name: 'Maria',
      age: 55,
      city: 'Cadiz',
    }
  }
]


//-----------------------------------loops-----------------------------------------//

const loopArr = [1, 2, 3, 4, 5, 6]

//loop clasico
console.table(loopArr)
for (let i = 0; i < loopArr.length; i++) {
  console.log('i -->, ', i)
  console.log('loopArr[i] --> ', loopArr[i])
  console.log('loopArr[i] --> *2 ', loopArr[i] * 2)
}

//for  of y for in
//para los valores del array
for (let val of loopArr) {
  console.log('for of val', val)
  console.log('for of val*3', val * 3)
}

//para los indices y valores del array
for (let index in loopArr) {
  console.log('for in index', index) // indice
  console.log('for in loopArr[index]', loopArr[index]) // usamos el indice en el array para acceder al valor
}

console.table(loopArr)
console.table(testObj)


// //-----------------------------------condiciones-----------------------------------------//
// let age = 15
// let healthCheck = true
// if (age < 16 && healthCheck) {
//   console.log('no puedes manejar')
// }

// //estructura
// if ('condicion') {
//   'si se cunmple condicion'
// } else {
//   'si no se cumple'
// }
// age = 55
// //uno de los x
// if (age > 21) {
//   'puede condicir y beber'
// } else if (age > 15) {
//   'puede conducir'
// } else {
//   'no puede conducir'
// }

// //en todos los que se cumpla la condicion
// if (age > 21) {
//   'si se cunmple condicion'
// }
// if (age > 15) {
//   'si se cunmple segunda condicion'
// }
// let mentalHealth = true
// //chequeamos age
// if (!age) {
//   'missing age'
// }
// if (age && age > 17) {
//   console.log('sabemos que tenemos un valor en edad y que es mayot de 17')
// }
// if (age>17 && mentalHealth ) {
//   console.log('sabemos que tenemos un valor en edad, que es mayor de 17 y tiene salud mental')
// }
// if (age>17 && mentalHealth && gunAllowed) {
//   console.log('sabemos que tenemos un valor en edad, que es mayor de 17, tiene salud mental y tiene armas')
// }

// //la condicion mas dificil de cumplirse es la primera
// if('condicion primera'){
// //bloque que se ejecuta si se cumple esta condicion
// }else if ('condicion segunda si no se cumple la primera') {
//   //bloque que se ejecuta si se cumple esta condicion  
// } else if ('condicion tercera si no se cumple la primera') {
//   //bloque que se ejecuta si se cumple esta condicion  
// }else if ('condicion cuarta si no se cumple la primera') {
//   //bloque que se ejecuta si se cumple esta condicion  
// }else{
//   // si ninguna se cumple, sea esta opcion
// }


// let permit = ''



// if (age>21) {
//   console.log('puedes casarte, beber y manejar')
//   let aux = 'pep' // solo existe entre las lineas 291 y 295
//   permit = 'todo'
// }
// else if (age<21 && age > 15) {
//   console.log('puedes casarte y manejar')  
//   permit = 'algunos'
// }
// else if (age> 15) {
//   'puedes manejar pero ni casarte ni beber'
//   permit = 'uno'
// } else {
//   'que haces preguntando?'
// }

// //ternarias

// condicion ? true : false

// console.log(age>15 ? 'puede manejar' : 'no puede manejar')
// console.log(age>21 ? 'puede manejar y beber' : age>15? "puede manejar" : 'no puede manejar')

//condicion && true
let age =12

let ok = '' // una variable vacia se valora como false
console.log(!!ok)
if (ok){
  console.log("to' ta ok")
}
if (0){ // un string vacio,  0, undefined, null es false
  console.log('tenemos info')
}
//si no se cumple age>15 no aparece mensaje
console.log(age>15 && 'puede manejar')
console.log(age>20 ? 'puede manejar y beber' : age>15? "puede manejar" : 'no puede manejar')
