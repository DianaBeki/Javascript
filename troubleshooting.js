//unary operator.
function troubleshooting () {
  
  const a = "1";
  const b = "1";

  let result = +a + +b;

  //console.log(result);
  console.log(result);
 }

 troubleshooting();

//  const div = document.createElement('div'); 
//  Editing attributes
//   div.setAttribute('id', 'theDiv' ) //if id exists,update it to 'theDiv, else create an id with value "theDiv'
 
//   div.getAttribute('id'); //returns value of specified attribute, in this case 'theDiv'.
 
//   div.removeAttribute('id'); //removes specified attribute

//  Working With Classes
//div.ClassList.add('new'); -adds class "new" to your new div.

//div.ClassList.remove('new'); - removes 'new' class from div.

//div.ClassList.toggle('active'); -if div doesn't have class active then add it, or if it does, then remove it.

 //The unary + operator is used to convert a variable to a number.

 //Let the code return true when the number is greater than or equal to 10, and fALSE if it is less than 10

/*function numberChecker() {
let number = 11; 
  if(number <= 10) {
    return true;
  } else {
    return false;
  }
}

numberChecker();

const birthYear = 1948;
const thisYear = 1965;
const firstName = "Diana";
const lastName = "Beki";

const greeting = "Hello! My name is " + firstName" + " " + lastName + " and I am " + (thisYear - birthYear) + " years onload.";

console.log(greeting);
function number

function greet (name = Diana) {

}

const Name = 'Zaptec';

function greeting() {
  alert(`Our company is called ${name}.`);


  function a() {
    const x = 1;
  }

  function b() {
    const z = 3;
  }

  function output(value) {

  }const para = document.createElement('p');
  document.body.appendChild(para);
  para.text) = `Value: ${value}`;
}

console.log(output())


function favoriteAnimal(animal) {
  return animal + " is my favorite Animal! "
}

console.log(favoriteAnimal('Goat'))



function add7(sum) {
  
  sum = 2 + 7; 


}

console.log(sum);
add7(sum);


//write a function called multiply that takes two numbers and returns their product.
 
function MULTIPLY(a, b) {
   let a = 20;
   let b = 30;
  return a * b
}

 console.log(a * b);
 multiply(a, b);

 function capitalize(string) {
  return toUpperCase(0)
 }

indxcap = ("grace");

console.log(toUpperCase(0));

//Should return last letter
function lastLetter(myWord) {
let letter = myWord.slice(-1);
return letter;
}

console.log(lastLetter(myWord));*/


let answer = parseInt(prompt("Please enter the number you would like to fizzbuzz up to: "))

for (let i = 1; i<= answer; i++) {
  if(i % 3 === 0) {
    console.log("Fizz")
  }  else {
    console.log(i);
  }
}

let answer = parseInt(prompt("Please enter the number you would like to fizzbuzz up to:"));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i);
  }
}


let answer = parseInt(prompt("Please enter the number you would love to FizBuzzz up to:"))

for(let i = 1; i <= answer; i++)
if(i % 3 === 0) {
  console.log("Fizz");
}else if (i % 5 === 0) {
  console.log("Buzzz");
}else {
  console.log(i);
}

//const body = document.body
//body.append("Hello World", "Bye")
// You can only append one thing at a time when using appendChild unlike when you are using append only.
//How to create element
//const div = document.createElement('div')
//how to add text in our div element, we can also use textContent.
//div.innerHTML  = "<strong>Hello World</strong>"
//const strong = document.createElement('strong')
//strong.innerText = 'Hello World 2'
//div.append(strong) 
//body.append(div)
//const header = document.querySelector('header')
//console.log(header.textContent)
//h2.remove(h2)
//main.append(h2)
//div.removeChild(h2)

//const div = setAttribute('class', picture)
//removeAttribute('title')
//const body = document.body
//const body =  document.body("div")

//word = "Hello World"

//greeting = word.substring(0, 5);
//greeting = word.length
//console.log(greeting);

//you can access characters in a string with 'charAt'
//let word = "World";
//charOne = word.charAt(4);
//console.log(charOne);
//var person = {fname:"Harry", lname:"potter", age:"22"};


//  grade = B;
// switch(grade) {
//  case 'A':
//   console.log("Great job");
//   break;
// case 'B':
//   console.log("Ok job");
//   break;
// case 'C':
//   console.log("You can do better");
//   break;
//   default:
//     console.log("Oy vey");
//     break 
// // }

//  function myFunction(thing) {
//   return thing.toUpperCase();
// }


// console.log(myFunction("foo"));

//Math works with the number type.it does not work with BigInt.-Math is a built-in object
// Math.floor() - returns the largest integer less than or equal to x.
// Math.round() - returns the value of the number x rounded to the nearest integer.
// Math.sqrt() - returns the positive square root of x.

//RETURNING A RANDOM INTEGER BETWEEN TWO BOUNDS
//cAN USE Math.Random() and Math.floor().
 
  //  function random(min, max) {
  //   const num = Math.floor(Math.random() * (max - min + 1)) + min;
  //   return num;
  //  }

  //  random(1, 10);

  //  Special number values
  //   = NaN(Not a Number) and Infinity
  //   A. NaN
  //   if you want to check whether a value is NaN, YOU have to use the global function isNaN():
  //    isNaN(NaN); // => true
  //    isNaN(123); // => false

  //   B.Infinity
  //   is an error value .Anumber cant be represented cos its magnitude is too largee.
  //   Math.pow(2, 1024); // infinity
  //   The global function isFinite() allows you to check whether a value is an actual number(neither infinite nor NaN)
  //   isFinite(80085); //TRUE
  //   isFinite(Infinity); //false
  //   isFinite(NaN); // false

  //   Comparison 
  //   Numbers are considered equal if they have same value.
  //   undefined turns to NaN
  //   null turns into 0.
  //   true turns into 1; false turns into 0.

  //   const d = new Date("November 17, 1998 03:24:00);
  //   console.log(Number(d));

  //   Equality comparisons and sameness.
  //   === strict equality(triple equals);
  //   ==loose equality(double equals);



