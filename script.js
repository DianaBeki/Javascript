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
