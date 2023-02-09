// // // // // // // //unary operator.
// // // // // // //  function troubleshooting () {
  
// // // // // // //   const a = "1";
// // // // // // //   const b = "1";

// // // // // // //   let result = +a + +b;

// // // // // // //   //console.log(result);
// // // // // // //   console.log(result);
// // // // // // //  }

// // // // // //  //troubleshooting();

// // // // // // //  const div = document.createElement('div'); 
// // // // // // //  Editing attributes
// // // // // // //   div.setAttribute('id', 'theDiv' ) //if id exists,update it to 'theDiv, else create an id with value "theDiv'
 
// // // // // // //   div.getAttribute('id'); //returns value of specified attribute, in this case 'theDiv'.
 
// // // // // // //   div.removeAttribute('id'); //removes specified attribute

// // // // // // //  Working With Classes
// // // // // // //div.ClassList.add('new'); -adds class "new" to your new div.

// // // // // // //div.ClassList.remove('new'); - removes 'new' class from div.

// // // // // // //div.ClassList.toggle('active'); -if div doesn't have class active then add it, or if it does, then remove it.

// // // // // //  //The unary + operator is used to convert a variable to a number.

// // // // // //  //Let the code return true when the number is greater than or equal to 10, and fALSE if it is less than 10

// // // // // // /*function numberChecker() {
// // // // // // let number = 11; 
// // // // // //   if(number <= 10) {
// // // // // //     return true;
// // // // // //   } else {
// // // // // //     return false;
// // // // // //   }
// // // // // // }

// // // // // // numberChecker();

// // // // // // const birthYear = 1948;
// // // // // // const thisYear = 1965;
// // // // // // const firstName = "Diana";
// // // // // // const lastName = "Beki";

// // // // // // const greeting = "Hello! My name is " + firstName" + " " + lastName + " and I am " + (thisYear - birthYear) + " years onload.";

// // // // // // console.log(greeting);
// // // // // // function number

// // // // // // function greet (name = Diana) {

// // // // // // }

// // // // // // const Name = 'Zaptec';

// // // // // // function greeting() {
// // // // // //   alert(`Our company is called ${name}.`);


// // // // // //   function a() {
// // // // // //     const x = 1;
// // // // // //   }

// // // // // //   function b() {
// // // // // //     const z = 3;
// // // // // //   }

// // // // // //   function output(value) {

// // // // // //   }const para = document.createElement('p');
// // // // // //   document.body.appendChild(para);
// // // // // //   para.text) = `Value: ${value}`;
// // // // // // }

// // // // // // console.log(output())


// // // // // // function favoriteAnimal(animal) {
// // // // // //   return animal + " is my favorite Animal! "
// // // // // // }

// // // // // // console.log(favoriteAnimal('Goat'))



// // // // // // function add7(sum) {
  
// // // // // //   sum = 2 + 7; 


// // // // // // }

// // // // // // console.log(sum);
// // // // // // add7(sum);


// // // // // // //write a function called multiply that takes two numbers and returns their product.
 
// // // // // // function MULTIPLY(a, b) {
// // // // // //    let a = 20;
// // // // // //    let b = 30;
// // // // // //   return a * b
// // // // // // }

// // // // // //  console.log(a * b);
// // // // // //  multiply(a, b);

// // // // // //  function capitalize(string) {
// // // // // //   return toUpperCase(0)
// // // // // //  }

// // // // // // indxcap = ("grace");

// // // // // // console.log(toUpperCase(0));

// // // // // // //Should return last letter
// // // // // // function lastLetter(myWord) {
// // // // // // let letter = myWord.slice(-1);
// // // // // // return letter;
// // // // // // }

// // // // // // console.log(lastLetter(myWord));*/


// // // // // // //  let answer = parseInt(prompt("Please enter the number you would like to fizzbuzz up to: "))

// // // // // // // for (let i = 1; i<= answer; i++) {
// // // // // // //   if(i % 3 === 0) {
// // // // // // //     console.log("Fizz")
// // // // // // //   }  else {
// // // // // // //     console.log(i);
// // // // // // //   }
// // // // // // // }

// // // // // // // let answer = parseInt(prompt("Please enter the number you would like to fizzbuzz up to:"));

// // // // // // // for (let i = 1; i <= answer; i++) {
// // // // // // //   if (i % 3 === 0) {
// // // // // // //     console.log("Fizz");
// // // // // // //   } else if (i % 5 === 0) {
// // // // // // //     console.log("Buzz")
// // // // // // //   } else {
// // // // // // //     console.log(i);
// // // // // // //   }
// // // // // // // }


// // // // // // // let answer = parseInt(prompt("Please enter the number you would love to FizBuzzz up to:"))

// // // // // // // for(let i = 1; i <= answer; i++)
// // // // // // // if(i % 3 === 0) {
// // // // // // //   console.log("Fizz");
// // // // // // // }else if (i % 5 === 0) {
// // // // // // //   console.log("Buzzz");
// // // // // // // }else {
// // // // // // //   console.log(i);
// // // // // // // }

// // // // // // // //const body = document.body
// // // // // // // //body.append("Hello World", "Bye")
// // // // // // // // You can only append one thing at a time when using appendChild unlike when you are using append only.
// // // // // // // //How to create element
// // // // // // // //const div = document.createElement('div')
// // // // // // // //how to add text in our div element, we can also use textContent.
// // // // // // // //div.innerHTML  = "<strong>Hello World</strong>"
// // // // // // // //const strong = document.createElement('strong')
// // // // // // // //strong.innerText = 'Hello World 2'
// // // // // // // //div.append(strong) 
// // // // // // // //body.append(div)
// // // // // // // //const header = document.querySelector('header')
// // // // // // // //console.log(header.textContent)
// // // // // // // //h2.remove(h2)
// // // // // // //main.append(h2)
// // // // // // //div.removeChild(h2)

// // // // // // //const div = setAttribute('class', picture)
// // // // // // //removeAttribute('title')
// // // // // // //const body = document.body
// // // // // // //const body =  document.body("div")

// // // // // // //word = "Hello World"

// // // // // // //greeting = word.substring(0, 5);
// // // // // // //greeting = word.length
// // // // // // //console.log(greeting);

// // // // // // //you can access characters in a string with 'charAt'
// // // // // // //let word = "World";
// // // // // // //charOne = word.charAt(4);
// // // // // // //console.log(charOne);
// // // // // // //var person = {fname:"Harry", lname:"potter", age:"22"};


// // // // // // //  grade = B;
// // // // // // // switch(grade) {
// // // // // // //  case 'A':
// // // // // // //   console.log("Great job");
// // // // // // //   break;
// // // // // // // case 'B':
// // // // // // //   console.log("Ok job");
// // // // // // //   break;
// // // // // // // case 'C':
// // // // // // //   console.log("You can do better");
// // // // // // //   break;
// // // // // // //   default:
// // // // // // //     console.log("Oy vey");
// // // // // // //     break 
// // // // // // // // }

// // // // // // //  function myFunction(thing) {
// // // // // // //   return thing.toUpperCase();
// // // // // // // }


// // // // // // // console.log(myFunction("foo"));

// // // // // // //Math works with the number type.it does not work with BigInt.-Math is a built-in object
// // // // // // // Math.floor() - returns the largest integer less than or equal to x.
// // // // // // // Math.round() - returns the value of the number x rounded to the nearest integer.
// // // // // // // Math.sqrt() - returns the positive square root of x.

// // // // // // //RETURNING A RANDOM INTEGER BETWEEN TWO BOUNDS
// // // // // // //cAN USE Math.Random() and Math.floor().
 
// // // // // //   //  function random(min, max) {
// // // // // //   //   const num = Math.floor(Math.random() * (max - min + 1)) + min;
// // // // // //   //   return num;
// // // // // //   //  }

// // // // // //   //  random(1, 10);

// // // // // //   //  Special number values
// // // // // //   //   = NaN(Not a Number) and Infinity
// // // // // //   //   A. NaN
// // // // // //   //   if you want to check whether a value is NaN, YOU have to use the global function isNaN():
// // // // // //   //    isNaN(NaN); // => true
// // // // // //   //    isNaN(123); // => false

// // // // // //   //   B.Infinity
// // // // // //   //   is an error value .Anumber cant be represented cos its magnitude is too largee.
// // // // // //   //   Math.pow(2, 1024); // infinity
// // // // // //   //   The global function isFinite() allows you to check whether a value is an actual number(neither infinite nor NaN)
// // // // // //   //   isFinite(80085); //TRUE
// // // // // //   //   isFinite(Infinity); //false
// // // // // //   //   isFinite(NaN); // false

// // // // // //   //   Comparison 
// // // // // //   //   Numbers are considered equal if they have same value.
// // // // // //   //   undefined turns to NaN
// // // // // //   //   null turns into 0.
// // // // // //   //   true turns into 1; false turns into 0.

// // // // // //   //   const d = new Date("November 17, 1998 03:24:00);
// // // // // //   //   console.log(Number(d));

// // // // // //   //   Equality comparisons and sameness.
// // // // // //   //   === strict equality(triple equals);
// // // // // //   //   ==loose equality(double equals);

// // // // // // //  dayRate(89);

// // // // // // // let dayRate = 89 * Math.floor(7);
// // // // // // // console.log(dayRate);

// // // // // // //  function add(num1, num2) {
// // // // // // //   return num1 + num2;
// // // // // // // }

// // // // // // // console.log(add(2, 3));

// // // // // // // //EXPORTING FUNCTIONS TO OTHER FILES
// // // // // // // You need to expose a function in other files inorder to make it constant or a variable using export keyword.
// // // // // // // Another file may then import these using the import keyword, this is also known as module system.


// // // // // // // export const EXPECTED_MINUTES_IN_OVEN = 40;
// // // // // // //  export gifunction ovenMinutes() {

// // // // // // // }

// // // // // // // @ts-check
// // // // // // //
// // // // // // // ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// // // // // // // the @ts-check directive. It will give you helpful autocompletion on the web
// // // // // // // and supported IDEs when implementing this exercise. You don't need to
// // // // // // // understand types, JSDoc, or TypeScript in order to complete this JavaScript
// // // // // // // exercise, and can completely ignore this comment block and directive.

// // // // // // // 👋🏽 Hi there!
// // // // // // //
// // // // // // // On the JavaScript track we provide you with stubs. These stubs provide a
// // // // // // // starting point to solving the exercise.
// // // // // // //
// // // // // // // In general, each variable/constant and each declared function will have a
// // // // // // // JSDoc comment block above it, explaining what the variable/constant holds or
// // // // // // // the function is supposed to accomplish.
// // // // // // //
// // // // // // // 💡 Often, the JSDoc comment blocks have annotations, such as @param and
// // // // // // // @returns which are usually highlighted with a different color if the IDE
// // // // // // // you're in recognizes them. It's these annotations that are used when
// // // // // // // referring to the constant, variable, or function from somewhere else that
// // // // // // // IDEs display.
// // // // // // //
// // // // // // // You don't need to write these yourself; it is not expected in idiomatic
// // // // // // // JavaScript, but some companies and style-guides do enforce them.
// // // // // // //
// // // // // // // 💡 You're allowed to completely clear a stub before you get started. Often
// // // // // // // we recommend using the stub, because they are already set-up correctly to
// // // // // // // work with the tests, which you can find in ./lasagna.spec.js
// // // // // // //
// // // // // // // Good luck preparing some lasagna!

// // // // // // /**
// // // // // //  * The number of minutes it takes to prepare a single layer.
// // // // // //  */
// // // // // //  export const EXPECTED_MINUTES_IN_OVEN = 40;
// // // // // //  const PREPARATION_MINUTES_PER_LAYER = 2;
 
// // // // // //  /**
// // // // // //   * Determines the number of minutes the lasagna still needs to remain in the
// // // // // //   * oven to be properly prepared.
// // // // // //   *
// // // // // //   * @param {number} actualMinutesInOven
// // // // // //   * @returns {number} the number of minutes remaining
// // // // // //   */
// // // // // //  export function remainingMinutesInOven(actualMinutesInOven) {
// // // // // //  return (EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven)
// // // // // //  }
 
// // // // // //  /**
// // // // // //   * Given a number of layers, determines the total preparation time.
// // // // // //   *
// // // // // //   * @param {number} numberOfLayers
// // // // // //   * @returns {number} the total preparation time
// // // // // //   */
// // // // // //  export function preparationTimeInMinutes(numberOfLayers){
// // // // // //    return (numberOfLayers * 2)
// // // // // //  }
 
// // // // // //  /**
// // // // // //   * Calculates the total working time. That is, the time to prepare all the layers
// // // // // //   * of lasagna, and the time already spent in the oven.
// // // // // //   *
// // // // // //   * @param {number} numberOfLayers
// // // // // //   * @param {number} actualMinutesInOven
// // // // // //   * @returns {number} the total working time
// // // // // //   */
// // // // // //    export const totalWorkingTime = numberOfLayers + actualMinutesInOven;
// // // // // //  export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
// // // // // //    return totalWorkingTime
// // // // // //  }
  
// // // // // //FOR LOOP.
// // // // // const list = ['a', 'b', 'c'];
// // // // // for(i = 0; i < list.length; i++) {
// // // // //   console.log(i);
// // // // // }
// // // // // //for(initialization: condition: step)

// // // // // //WHILE LOOP
// // // // // let i = 1;
// // // // // while(i < 100){
// // // // //   i += 2;
// // // // // }

// // // // // CREATING AN Object
// // // // //  CREATE OBJECT USING CURLY braces {},folowed by a colon and the value

// // // // //  const obj = {greeting: 'Hello Wolrd'};
// // // // //  obj.greeting = "Hi, there!";

// // // // //  DELETING AN ENTRY
// // // // //  Use delete keyword example
// // // // //  const obj = {
// // // // //   key1: 'value1',
// // // // //   key2: 'value2'
// // // // //  }

// // // // //  delete obj.key1;

// // // // //  Looping Through an Object
// // // // // There is a special for...in loop to iterate over all keys of an object.

// // // // // const obj = {
// // // // //   name: 'Ali',
// // // // //   age: 65,
// // // // // };

// // // // // for (let key in obj) {
// // // // //   console.log(key, obj[key]);
// // // // // }
// // // // // // name Ali
// // // // // // age 65

// // // // // Null
// // // // // The primitive value null is used as an intentional "empty value" for variables of any type.

// // // // // let name = null;
// // // // // // name is intentionally set to "empty" because it is not
// // // // // // available
// // // // // You can check whether a variable is null by using the strict equality operator ===.

// // // // // let name = null;

// // // // // name === null;
// // // // // // => true
// // // // // Undefined
// // // // // A variable that has not been assigned a value is of type undefined.1

// // // // // That means while null represents an empty value (but still a value), undefined represents the total absence of a value. 🤯

// // // // // undefined appears in different contexts.

// // // // // If a variable is declared without a value (initialization), it is undefined.

// // // // // let name;
// // // // // console.log(name); // => undefined
// // // // // If you try to access a value for a non-existing key in an object, you get undefined.

// // // // // let obj = {
// // // // //   name: 'John',
// // // // // };
// // // // // console.log(obj.age); // => undefined
// // // // // If a function does not return a value, the result is undefined.

// // // // // function printName(name) {
// // // // //   'My name is ' + name;
// // // // // }
// // // // // console.log(printName('John')); // => undefined
// // // // // If an argument is not passed to a function, it is undefined, unless that argument has a default value.

// // // // // function printName(name) {
// // // // //   return name;
// // // // // }
// // // // // console.log(printName()); // => undefined

// // // // String Context
// // // // If the addition operator + is used for primitive values and one operand is a string, the other one will be coerced into a string as well. The conversion logic is the same as when using the String function. Afterwards, the two strings are concatenated.

// // // // let name;
// // // // 'hello ' + name;
// // // // // => 'hello undefined'
// // // // Numeric Context
// // // // Many operators coerce the operands into numbers (if necessary) according to the logic of the Number function explained above.

// // // // Arithmetic operators: + (if no string is involved), -, *, /, %, **
// // // // Unary plus and unary negation operators: +, -
// // // // Relational operators (for non-string operands): >, >=, <, <=
// // // // Bitwise operators: |, &, ^, ~




// // // Boolean Context
// // // When a non-boolean value is used in a boolean context, JavaScript will apply the same rules as the Boolean function to implicitly convert the value.

// // // Coercion to boolean commonly occurs for

// // // the condition of an if statement
// // // the first operand of the ternary operator ?
// // // the operand of the logical NOT operator !
// // // the operands of the logical AND && and OR || operators (the result of the expression is one of the operands, not necessarily a boolean)
// // // const num = 0;
// // // if (num) {
// // //   // this block is NOT executed because 0 is falsy
// // // }
// // // Boolean Context
// // // When a non-boolean value is used in a boolean context, JavaScript will apply the same rules as the Boolean function to implicitly convert the value.

// // // Coercion to boolean commonly occurs for

// // // the condition of an if statement
// // // the first operand of the ternary operator ?
// // // the operand of the logical NOT operator !
// // // the operands of the logical AND && and OR || operators (the result of the expression is one of the operands, not necessarily a boolean)
// // // const num = 0;
// // // if (num) {
// // //   // this block is NOT executed because 0 is falsy
// // // }

// // // function checkNumber(num) {
// // //   if (num === 0) {
// // //     return 'You passed 0, please provide another number.';
// // //   }

// // //   return 'Thanks for passing such a nice number.';
// // // }

// // // In JavaScript, you can only return exactly one value. If you want to pass more information, you need to combine it into one entity first, usually into an object, or an array.

// // // function divide(a, b) {
// // //   return {
// // //     quotient: Math.floor(a / b),
// // //     remainder: a % b,
// // //   };
// // // }

// // // const num1 = 1;
// // // const num2 = 2;

// // // `Adding ${num1} and ${num2} gives ${num1 + num2}.`;
// // // // => Adding 1 and 2 gives 3.
// // // In the example above, backticks - (``) - are used to represent a template string. The${...} is the placeholder that is used for substitution. Any non-string types are implicitly converted to strings. This topic is covered in the type conversion concept. All types of expressions can be used with template strings.

// // About Ternary Operator
// // The conditional ternary operator is used to write a condensed expression that returns one of two alternate values based on some condition. It is often referred to as the "ternary operator". The name stems from the fact that the operator has three operands: predicate ? consequent-expression : alternative-expression It can be used as a replacement for short if-else statements.

// // Similar to if statements, JavaScript will perform implicit type conversion to evaluate the condition. If the condition is truthy, the operand on the left-hand side of the colon will be returned. Otherwise the result of the ternary expression is the operand on the right-hand side of the colon.

// // const year = 2020;

// // year > 2000 ? 'in the past years' : 'a long time ago';
// // // => 'in the past years'

// // let counter = 0;

// // // This function closure increments the counter's state in the outer lexical context.
// // // This way the counter can be shared between many calling contexts.
// // export function increment() {
// //   counter += 1;
// //   return counter;
// // }

// // let counter = 0;

// // export function increment() {
// //    counter++
// //   return counter
// // }

// // About Callbacks
// // Callback functions
// // Callback functions are functions passed as arguments. This programming pattern creates a sequence of function calls in both synchronous and asynchronous programming. Writing a callback function is no different from writing a function; however, the callback function must match the signature defined by the calling function.

// // const sideLength = 5;

// // // Caller function takes a callback function
// // function applySideLength(callback) {
// //   return callback(sideLength);
// // }

// // // Callback must expect the possible argument from the calling function
// // function areaOfSquare(side) {
// //   return side * side;
// // }

// // applySideLength(areaOfSquare); // => 25
// // You may also write callbacks as a function expression:

// // applySideLength(function squarePerimeterLength(side) {
// //   return side * 4;
// // });


// // About Array Destructuring
// // JavaScript's array destructuring syntax is a concise way to extract values from an array and assign them to distinct variables.

// // In this example, each value in the numberOfMoons array is assigned to its corresponding planet:

// // const numberOfMoons = [0, 2, 14];
// // const [venus, mars, neptune] = numberOfMoons;

// // neptune;
// // // => 14


// About Rest and Spread
// JavaScript has a built-in ... operator that makes it easier to work with indefinite numbers of elements. Depending on the context, it's called either a rest operator or spread operator.

// Rest operator
// Rest elements
// When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator. The three dots together with a variable name is called a rest element. It collects zero or more values, and stores them into a single array.

// const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

// a;
// // => 0
// b;
// // => 1
// everythingElse;
// // => [1, 2, 3, 5, 8]
// Note that in JavaScript, unlike some other languages, a rest element cannot have a trailing comma. It must be the last element in a destructuring assignment. The example below throws a SyntaxError:

// const [...items, last] = [2, 4, 8, 16]
// Rest properties
// Similarly to arrays, the rest operator can also be used to collect one or more object properties and store them in a single object.

// const { street, ...address } = {
//   street: 'Platz der Republik 1',
//   postalCode: '11011',
//   city: 'Berlin',
// };

// street;
// // => 'Platz der Republik 1'

// address;
// // => {postalCode: '11011', city: 'Berlin'}
// Rest parameters
// When ... appears in a function definition next to its last argument, that parameter is called a rest parameter. It allows the function to accept an indefinite number of arguments as an array.

// function concat(...strings) {
//   return strings.join(' ');
// }

// concat('one');
// // => 'one'

// concat('one', 'two', 'three');
// // => 'one two three'
// Spread
// Spread elements
// When ... appears on the right-hand side of an assignment, it's known as the spread operator. It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.

// const oneToFive = [1, 2, 3, 4, 5];
// const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

// oneToTen;
// // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const woow = ['A', ...oneToFive, 'B', 'C', 'D', 'E', ...oneToFive, 42];

// woow;
// // =>  ["A", 1, 2, 3, 4, 5, "B", "C", "D", "E", 1, 2, 3, 4, 5, 42]
// Spread properties
// Similarly to arrays, the spread operator can also be used to copy properties from one object to another.

// let address = {
//   postalCode: '11011',
//   city: 'Berlin',
// };

// address = { ...address, country: 'Germany' };
// // => {
// //   postalCode: '11011',
// //   city: 'Berlin',
// //   country: 'Germany',
// // }

About Array Analysis
Arrays have built-in methods to analyse the contents of the array. Most of these methods take a function that returns true or false as an argument. Such a function is called a predicate.

The built-in methods are meant to be used instead of a for loop or the built-in forEach method:

Example of analysis using a for loop :

const numbers = [1, 'two', 3, 'four'];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === 'two') {
    return i;
  }
}
// => 1
Example of analysis using a built-in method:

const numbers = [1, 'two', 3, 'four'];
numbers.indexOf('two');
// => 1
Some other helpful built-in methods that are available to analyze an array are shown below. See MDN for a full list of array methods.

includes
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 1

const numbers = [1, 'two', 3, 'four'];
numbers.includes(1);
// => true
numbers.includes('one');
// => false
every
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 2

const numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0);
// => true
some
The some() method tests whether at least one element in the array passes the test implemented by the provided function. 3

const numbers = [1, 3, 5, 7, 9];
numbers.some((num) => num % 2 !== 0);
// => true
find
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 4

const numbers = [1, 3, 5, 7, 9];
numbers.find((num) => num < 5);
// => 1
findIndex
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. 5

const numbers = [1, 3, 5, 7, 9];
numbers.findIndex((num) => num > 7);
// => 4
numbers.findIndex((num) => num > 9);
// => -1
