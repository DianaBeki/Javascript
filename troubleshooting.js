// // // // // // // // // // // //unary operator.
// // // // // // // // // // //  function troubleshooting () {
  
// // // // // // // // // // //   const a = "1";
// // // // // // // // // // //   const b = "1";

// // // // // // // // // // //   let result = +a + +b;

// // // // // // // // // // //   //console.log(result);
// // // // // // // // // // //   console.log(result);
// // // // // // // // // // //  }

// // // // // // // // // //  //troubleshooting();

// // // // // // // // // // //  const div = document.createElement('div'); 
// // // // // // // // // // //  Editing attributes
// // // // // // // // // // //   div.setAttribute('id', 'theDiv' ) //if id exists,update it to 'theDiv, else create an id with value "theDiv'
 
// // // // // // // // // // //   div.getAttribute('id'); //returns value of specified attribute, in this case 'theDiv'.
 
// // // // // // // // // // //   div.removeAttribute('id'); //removes specified attribute

// // // // // // // // // // //  Working With Classes
// // // // // // // // // // //div.ClassList.add('new'); -adds class "new" to your new div.

// // // // // // // // // // //div.ClassList.remove('new'); - removes 'new' class from div.

// // // // // // // // // // //div.ClassList.toggle('active'); -if div doesn't have class active then add it, or if it does, then remove it.

// // // // // // // // // //  //The unary + operator is used to convert a variable to a number.

// // // // // // // // // //  //Let the code return true when the number is greater than or equal to 10, and fALSE if it is less than 10

// // // // // // // // // // /*function numberChecker() {
// // // // // // // // // // let number = 11; 
// // // // // // // // // //   if(number <= 10) {
// // // // // // // // // //     return true;
// // // // // // // // // //   } else {
// // // // // // // // // //     return false;
// // // // // // // // // //   }
// // // // // // // // // // }

// // // // // // // // // // numberChecker();

// // // // // // // // // // const birthYear = 1948;
// // // // // // // // // // const thisYear = 1965;
// // // // // // // // // // const firstName = "Diana";
// // // // // // // // // // const lastName = "Beki";

// // // // // // // // // // const greeting = "Hello! My name is " + firstName" + " " + lastName + " and I am " + (thisYear - birthYear) + " years onload.";

// // // // // // // // // // console.log(greeting);
// // // // // // // // // // function number

// // // // // // // // // // function greet (name = Diana) {

// // // // // // // // // // }

// // // // // // // // // // const Name = 'Zaptec';

// // // // // // // // // // function greeting() {
// // // // // // // // // //   alert(`Our company is called ${name}.`);


// // // // // // // // // //   function a() {
// // // // // // // // // //     const x = 1;
// // // // // // // // // //   }

// // // // // // // // // //   function b() {
// // // // // // // // // //     const z = 3;
// // // // // // // // // //   }

// // // // // // // // // //   function output(value) {

// // // // // // // // // //   }const para = document.createElement('p');
// // // // // // // // // //   document.body.appendChild(para);
// // // // // // // // // //   para.text) = `Value: ${value}`;
// // // // // // // // // // }

// // // // // // // // // // console.log(output())


// // // // // // // // // // function favoriteAnimal(animal) {
// // // // // // // // // //   return animal + " is my favorite Animal! "
// // // // // // // // // // }

// // // // // // // // // // console.log(favoriteAnimal('Goat'))



// // // // // // // // // // function add7(sum) {
  
// // // // // // // // // //   sum = 2 + 7; 


// // // // // // // // // // }

// // // // // // // // // // console.log(sum);
// // // // // // // // // // add7(sum);


// // // // // // // // // // //write a function called multiply that takes two numbers and returns their product.
 
// // // // // // // // // // function MULTIPLY(a, b) {
// // // // // // // // // //    let a = 20;
// // // // // // // // // //    let b = 30;
// // // // // // // // // //   return a * b
// // // // // // // // // // }

// // // // // // // // // //  console.log(a * b);
// // // // // // // // // //  multiply(a, b);

// // // // // // // // // //  function capitalize(string) {
// // // // // // // // // //   return toUpperCase(0)
// // // // // // // // // //  }

// // // // // // // // // // indxcap = ("grace");

// // // // // // // // // // console.log(toUpperCase(0));

// // // // // // // // // // //Should return last letter
// // // // // // // // // // function lastLetter(myWord) {
// // // // // // // // // // let letter = myWord.slice(-1);
// // // // // // // // // // return letter;
// // // // // // // // // // }

// // // // // // // // // // console.log(lastLetter(myWord));*/


// // // // // // // // // // //  let answer = parseInt(prompt("Please enter the number you would like to fizzbuzz up to: "))

// // // // // // // // // // // for (let i = 1; i<= answer; i++) {
// // // // // // // // // // //   if(i % 3 === 0) {
// // // // // // // // // // //     console.log("Fizz")
// // // // // // // // // // //   }  else {
// // // // // // // // // // //     console.log(i);
// // // // // // // // // // //   }
// // // // // // // // // // // }

// // // // // // // // // // // let answer = parseInt(prompt("Please enter the number you would like to fizzbuzz up to:"));

// // // // // // // // // // // for (let i = 1; i <= answer; i++) {
// // // // // // // // // // //   if (i % 3 === 0) {
// // // // // // // // // // //     console.log("Fizz");
// // // // // // // // // // //   } else if (i % 5 === 0) {
// // // // // // // // // // //     console.log("Buzz")
// // // // // // // // // // //   } else {
// // // // // // // // // // //     console.log(i);
// // // // // // // // // // //   }
// // // // // // // // // // // }


// // // // // // // // // // // let answer = parseInt(prompt("Please enter the number you would love to FizBuzzz up to:"))

// // // // // // // // // // // for(let i = 1; i <= answer; i++)
// // // // // // // // // // // if(i % 3 === 0) {
// // // // // // // // // // //   console.log("Fizz");
// // // // // // // // // // // }else if (i % 5 === 0) {
// // // // // // // // // // //   console.log("Buzzz");
// // // // // // // // // // // }else {
// // // // // // // // // // //   console.log(i);
// // // // // // // // // // // }

// // // // // // // // // // // //const body = document.body
// // // // // // // // // // // //body.append("Hello World", "Bye")
// // // // // // // // // // // // You can only append one thing at a time when using appendChild unlike when you are using append only.
// // // // // // // // // // // //How to create element
// // // // // // // // // // // //const div = document.createElement('div')
// // // // // // // // // // // //how to add text in our div element, we can also use textContent.
// // // // // // // // // // // //div.innerHTML  = "<strong>Hello World</strong>"
// // // // // // // // // // // //const strong = document.createElement('strong')
// // // // // // // // // // // //strong.innerText = 'Hello World 2'
// // // // // // // // // // // //div.append(strong) 
// // // // // // // // // // // //body.append(div)
// // // // // // // // // // // //const header = document.querySelector('header')
// // // // // // // // // // // //console.log(header.textContent)
// // // // // // // // // // // //h2.remove(h2)
// // // // // // // // // // //main.append(h2)
// // // // // // // // // // //div.removeChild(h2)

// // // // // // // // // // //const div = setAttribute('class', picture)
// // // // // // // // // // //removeAttribute('title')
// // // // // // // // // // //const body = document.body
// // // // // // // // // // //const body =  document.body("div")

// // // // // // // // // // //word = "Hello World"

// // // // // // // // // // //greeting = word.substring(0, 5);
// // // // // // // // // // //greeting = word.length
// // // // // // // // // // //console.log(greeting);

// // // // // // // // // // //you can access characters in a string with 'charAt'
// // // // // // // // // // //let word = "World";
// // // // // // // // // // //charOne = word.charAt(4);
// // // // // // // // // // //console.log(charOne);
// // // // // // // // // // //var person = {fname:"Harry", lname:"potter", age:"22"};


// // // // // // // // // // //  grade = B;
// // // // // // // // // // // switch(grade) {
// // // // // // // // // // //  case 'A':
// // // // // // // // // // //   console.log("Great job");
// // // // // // // // // // //   break;
// // // // // // // // // // // case 'B':
// // // // // // // // // // //   console.log("Ok job");
// // // // // // // // // // //   break;
// // // // // // // // // // // case 'C':
// // // // // // // // // // //   console.log("You can do better");
// // // // // // // // // // //   break;
// // // // // // // // // // //   default:
// // // // // // // // // // //     console.log("Oy vey");
// // // // // // // // // // //     break 
// // // // // // // // // // // // }

// // // // // // // // // // //  function myFunction(thing) {
// // // // // // // // // // //   return thing.toUpperCase();
// // // // // // // // // // // }


// // // // // // // // // // // console.log(myFunction("foo"));

// // // // // // // // // // //Math works with the number type.it does not work with BigInt.-Math is a built-in object
// // // // // // // // // // // Math.floor() - returns the largest integer less than or equal to x.
// // // // // // // // // // // Math.round() - returns the value of the number x rounded to the nearest integer.
// // // // // // // // // // // Math.sqrt() - returns the positive square root of x.

// // // // // // // // // // //RETURNING A RANDOM INTEGER BETWEEN TWO BOUNDS
// // // // // // // // // // //cAN USE Math.Random() and Math.floor().
 
// // // // // // // // // //   //  function random(min, max) {
// // // // // // // // // //   //   const num = Math.floor(Math.random() * (max - min + 1)) + min;
// // // // // // // // // //   //   return num;
// // // // // // // // // //   //  }

// // // // // // // // // //   //  random(1, 10);

// // // // // // // // // //   //  Special number values
// // // // // // // // // //   //   = NaN(Not a Number) and Infinity
// // // // // // // // // //   //   A. NaN
// // // // // // // // // //   //   if you want to check whether a value is NaN, YOU have to use the global function isNaN():
// // // // // // // // // //   //    isNaN(NaN); // => true
// // // // // // // // // //   //    isNaN(123); // => false

// // // // // // // // // //   //   B.Infinity
// // // // // // // // // //   //   is an error value .Anumber cant be represented cos its magnitude is too largee.
// // // // // // // // // //   //   Math.pow(2, 1024); // infinity
// // // // // // // // // //   //   The global function isFinite() allows you to check whether a value is an actual number(neither infinite nor NaN)
// // // // // // // // // //   //   isFinite(80085); //TRUE
// // // // // // // // // //   //   isFinite(Infinity); //false
// // // // // // // // // //   //   isFinite(NaN); // false

// // // // // // // // // //   //   Comparison 
// // // // // // // // // //   //   Numbers are considered equal if they have same value.
// // // // // // // // // //   //   undefined turns to NaN
// // // // // // // // // //   //   null turns into 0.
// // // // // // // // // //   //   true turns into 1; false turns into 0.

// // // // // // // // // //   //   const d = new Date("November 17, 1998 03:24:00);
// // // // // // // // // //   //   console.log(Number(d));

// // // // // // // // // //   //   Equality comparisons and sameness.
// // // // // // // // // //   //   === strict equality(triple equals);
// // // // // // // // // //   //   ==loose equality(double equals);

// // // // // // // // // // //  dayRate(89);

// // // // // // // // // // // let dayRate = 89 * Math.floor(7);
// // // // // // // // // // // console.log(dayRate);

// // // // // // // // // // //  function add(num1, num2) {
// // // // // // // // // // //   return num1 + num2;
// // // // // // // // // // // }

// // // // // // // // // // // console.log(add(2, 3));

// // // // // // // // // // // //EXPORTING FUNCTIONS TO OTHER FILES
// // // // // // // // // // // You need to expose a function in other files inorder to make it constant or a variable using export keyword.
// // // // // // // // // // // Another file may then import these using the import keyword, this is also known as module system.


// // // // // // // // // // // export const EXPECTED_MINUTES_IN_OVEN = 40;
// // // // // // // // // // //  export gifunction ovenMinutes() {

// // // // // // // // // // // }

// // // // // // // // // // // @ts-check
// // // // // // // // // // //
// // // // // // // // // // // ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// // // // // // // // // // // the @ts-check directive. It will give you helpful autocompletion on the web
// // // // // // // // // // // and supported IDEs when implementing this exercise. You don't need to
// // // // // // // // // // // understand types, JSDoc, or TypeScript in order to complete this JavaScript
// // // // // // // // // // // exercise, and can completely ignore this comment block and directive.

// // // // // // // // // // // 👋🏽 Hi there!
// // // // // // // // // // //
// // // // // // // // // // // On the JavaScript track we provide you with stubs. These stubs provide a
// // // // // // // // // // // starting point to solving the exercise.
// // // // // // // // // // //
// // // // // // // // // // // In general, each variable/constant and each declared function will have a
// // // // // // // // // // // JSDoc comment block above it, explaining what the variable/constant holds or
// // // // // // // // // // // the function is supposed to accomplish.
// // // // // // // // // // //
// // // // // // // // // // // 💡 Often, the JSDoc comment blocks have annotations, such as @param and
// // // // // // // // // // // @returns which are usually highlighted with a different color if the IDE
// // // // // // // // // // // you're in recognizes them. It's these annotations that are used when
// // // // // // // // // // // referring to the constant, variable, or function from somewhere else that
// // // // // // // // // // // IDEs display.
// // // // // // // // // // //
// // // // // // // // // // // You don't need to write these yourself; it is not expected in idiomatic
// // // // // // // // // // // JavaScript, but some companies and style-guides do enforce them.
// // // // // // // // // // //
// // // // // // // // // // // 💡 You're allowed to completely clear a stub before you get started. Often
// // // // // // // // // // // we recommend using the stub, because they are already set-up correctly to
// // // // // // // // // // // work with the tests, which you can find in ./lasagna.spec.js
// // // // // // // // // // //
// // // // // // // // // // // Good luck preparing some lasagna!

// // // // // // // // // // /**
// // // // // // // // // //  * The number of minutes it takes to prepare a single layer.
// // // // // // // // // //  */
// // // // // // // // // //  export const EXPECTED_MINUTES_IN_OVEN = 40;
// // // // // // // // // //  const PREPARATION_MINUTES_PER_LAYER = 2;
 
// // // // // // // // // //  /**
// // // // // // // // // //   * Determines the number of minutes the lasagna still needs to remain in the
// // // // // // // // // //   * oven to be properly prepared.
// // // // // // // // // //   *
// // // // // // // // // //   * @param {number} actualMinutesInOven
// // // // // // // // // //   * @returns {number} the number of minutes remaining
// // // // // // // // // //   */
// // // // // // // // // //  export function remainingMinutesInOven(actualMinutesInOven) {
// // // // // // // // // //  return (EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven)
// // // // // // // // // //  }
 
// // // // // // // // // //  /**
// // // // // // // // // //   * Given a number of layers, determines the total preparation time.
// // // // // // // // // //   *
// // // // // // // // // //   * @param {number} numberOfLayers
// // // // // // // // // //   * @returns {number} the total preparation time
// // // // // // // // // //   */
// // // // // // // // // //  export function preparationTimeInMinutes(numberOfLayers){
// // // // // // // // // //    return (numberOfLayers * 2)
// // // // // // // // // //  }
 
// // // // // // // // // //  /**
// // // // // // // // // //   * Calculates the total working time. That is, the time to prepare all the layers
// // // // // // // // // //   * of lasagna, and the time already spent in the oven.
// // // // // // // // // //   *
// // // // // // // // // //   * @param {number} numberOfLayers
// // // // // // // // // //   * @param {number} actualMinutesInOven
// // // // // // // // // //   * @returns {number} the total working time
// // // // // // // // // //   */
// // // // // // // // // //    export const totalWorkingTime = numberOfLayers + actualMinutesInOven;
// // // // // // // // // //  export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
// // // // // // // // // //    return totalWorkingTime
// // // // // // // // // //  }
  
// // // // // // // // // //FOR LOOP.
// // // // // // // // // const list = ['a', 'b', 'c'];
// // // // // // // // // for(i = 0; i < list.length; i++) {
// // // // // // // // //   console.log(i);
// // // // // // // // // }
// // // // // // // // // //for(initialization: condition: step)

// // // // // // // // // //WHILE LOOP
// // // // // // // // // let i = 1;
// // // // // // // // // while(i < 100){
// // // // // // // // //   i += 2;
// // // // // // // // // }

// // // // // // // // // CREATING AN Object
// // // // // // // // //  CREATE OBJECT USING CURLY braces {},folowed by a colon and the value

// // // // // // // // //  const obj = {greeting: 'Hello Wolrd'};
// // // // // // // // //  obj.greeting = "Hi, there!";

// // // // // // // // //  DELETING AN ENTRY
// // // // // // // // //  Use delete keyword example
// // // // // // // // //  const obj = {
// // // // // // // // //   key1: 'value1',
// // // // // // // // //   key2: 'value2'
// // // // // // // // //  }

// // // // // // // // //  delete obj.key1;

// // // // // // // // //  Looping Through an Object
// // // // // // // // // There is a special for...in loop to iterate over all keys of an object.

// // // // // // // // // const obj = {
// // // // // // // // //   name: 'Ali',
// // // // // // // // //   age: 65,
// // // // // // // // // };

// // // // // // // // // for (let key in obj) {
// // // // // // // // //   console.log(key, obj[key]);
// // // // // // // // // }
// // // // // // // // // // name Ali
// // // // // // // // // // age 65

// // // // // // // // // Null
// // // // // // // // // The primitive value null is used as an intentional "empty value" for variables of any type.

// // // // // // // // // let name = null;
// // // // // // // // // // name is intentionally set to "empty" because it is not
// // // // // // // // // // available
// // // // // // // // // You can check whether a variable is null by using the strict equality operator ===.

// // // // // // // // // let name = null;

// // // // // // // // // name === null;
// // // // // // // // // // => true
// // // // // // // // // Undefined
// // // // // // // // // A variable that has not been assigned a value is of type undefined.1

// // // // // // // // // That means while null represents an empty value (but still a value), undefined represents the total absence of a value. 🤯

// // // // // // // // // undefined appears in different contexts.

// // // // // // // // // If a variable is declared without a value (initialization), it is undefined.

// // // // // // // // // let name;
// // // // // // // // // console.log(name); // => undefined
// // // // // // // // // If you try to access a value for a non-existing key in an object, you get undefined.

// // // // // // // // // let obj = {
// // // // // // // // //   name: 'John',
// // // // // // // // // };
// // // // // // // // // console.log(obj.age); // => undefined
// // // // // // // // // If a function does not return a value, the result is undefined.

// // // // // // // // // function printName(name) {
// // // // // // // // //   'My name is ' + name;
// // // // // // // // // }
// // // // // // // // // console.log(printName('John')); // => undefined
// // // // // // // // // If an argument is not passed to a function, it is undefined, unless that argument has a default value.

// // // // // // // // // function printName(name) {
// // // // // // // // //   return name;
// // // // // // // // // }
// // // // // // // // // console.log(printName()); // => undefined

// // // // // // // // String Context
// // // // // // // // If the addition operator + is used for primitive values and one operand is a string, the other one will be coerced into a string as well. The conversion logic is the same as when using the String function. Afterwards, the two strings are concatenated.

// // // // // // // // let name;
// // // // // // // // 'hello ' + name;
// // // // // // // // // => 'hello undefined'
// // // // // // // // Numeric Context
// // // // // // // // Many operators coerce the operands into numbers (if necessary) according to the logic of the Number function explained above.

// // // // // // // // Arithmetic operators: + (if no string is involved), -, *, /, %, **
// // // // // // // // Unary plus and unary negation operators: +, -
// // // // // // // // Relational operators (for non-string operands): >, >=, <, <=
// // // // // // // // Bitwise operators: |, &, ^, ~




// // // // // // // Boolean Context
// // // // // // // When a non-boolean value is used in a boolean context, JavaScript will apply the same rules as the Boolean function to implicitly convert the value.

// // // // // // // Coercion to boolean commonly occurs for

// // // // // // // the condition of an if statement
// // // // // // // the first operand of the ternary operator ?
// // // // // // // the operand of the logical NOT operator !
// // // // // // // the operands of the logical AND && and OR || operators (the result of the expression is one of the operands, not necessarily a boolean)
// // // // // // // const num = 0;
// // // // // // // if (num) {
// // // // // // //   // this block is NOT executed because 0 is falsy
// // // // // // // }
// // // // // // // Boolean Context
// // // // // // // When a non-boolean value is used in a boolean context, JavaScript will apply the same rules as the Boolean function to implicitly convert the value.

// // // // // // // Coercion to boolean commonly occurs for

// // // // // // // the condition of an if statement
// // // // // // // the first operand of the ternary operator ?
// // // // // // // the operand of the logical NOT operator !
// // // // // // // the operands of the logical AND && and OR || operators (the result of the expression is one of the operands, not necessarily a boolean)
// // // // // // // const num = 0;
// // // // // // // if (num) {
// // // // // // //   // this block is NOT executed because 0 is falsy
// // // // // // // }

// // // // // // // function checkNumber(num) {
// // // // // // //   if (num === 0) {
// // // // // // //     return 'You passed 0, please provide another number.';
// // // // // // //   }

// // // // // // //   return 'Thanks for passing such a nice number.';
// // // // // // // }

// // // // // // // In JavaScript, you can only return exactly one value. If you want to pass more information, you need to combine it into one entity first, usually into an object, or an array.

// // // // // // // function divide(a, b) {
// // // // // // //   return {
// // // // // // //     quotient: Math.floor(a / b),
// // // // // // //     remainder: a % b,
// // // // // // //   };
// // // // // // // }

// // // // // // // const num1 = 1;
// // // // // // // const num2 = 2;

// // // // // // // `Adding ${num1} and ${num2} gives ${num1 + num2}.`;
// // // // // // // // => Adding 1 and 2 gives 3.
// // // // // // // In the example above, backticks - (``) - are used to represent a template string. The${...} is the placeholder that is used for substitution. Any non-string types are implicitly converted to strings. This topic is covered in the type conversion concept. All types of expressions can be used with template strings.

// // // // // // About Ternary Operator
// // // // // // The conditional ternary operator is used to write a condensed expression that returns one of two alternate values based on some condition. It is often referred to as the "ternary operator". The name stems from the fact that the operator has three operands: predicate ? consequent-expression : alternative-expression It can be used as a replacement for short if-else statements.

// // // // // // Similar to if statements, JavaScript will perform implicit type conversion to evaluate the condition. If the condition is truthy, the operand on the left-hand side of the colon will be returned. Otherwise the result of the ternary expression is the operand on the right-hand side of the colon.

// // // // // // const year = 2020;

// // // // // // year > 2000 ? 'in the past years' : 'a long time ago';
// // // // // // // => 'in the past years'

// // // // // // let counter = 0;

// // // // // // // This function closure increments the counter's state in the outer lexical context.
// // // // // // // This way the counter can be shared between many calling contexts.
// // // // // // export function increment() {
// // // // // //   counter += 1;
// // // // // //   return counter;
// // // // // // }

// // // // // // let counter = 0;

// // // // // // export function increment() {
// // // // // //    counter++
// // // // // //   return counter
// // // // // // }

// // // // // // About Callbacks
// // // // // // Callback functions
// // // // // // Callback functions are functions passed as arguments. This programming pattern creates a sequence of function calls in both synchronous and asynchronous programming. Writing a callback function is no different from writing a function; however, the callback function must match the signature defined by the calling function.

// // // // // // const sideLength = 5;

// // // // // // // Caller function takes a callback function
// // // // // // function applySideLength(callback) {
// // // // // //   return callback(sideLength);
// // // // // // }

// // // // // // // Callback must expect the possible argument from the calling function
// // // // // // function areaOfSquare(side) {
// // // // // //   return side * side;
// // // // // // }

// // // // // // applySideLength(areaOfSquare); // => 25
// // // // // // You may also write callbacks as a function expression:

// // // // // // applySideLength(function squarePerimeterLength(side) {
// // // // // //   return side * 4;
// // // // // // });


// // // // // // About Array Destructuring
// // // // // // JavaScript's array destructuring syntax is a concise way to extract values from an array and assign them to distinct variables.

// // // // // // In this example, each value in the numberOfMoons array is assigned to its corresponding planet:

// // // // // // const numberOfMoons = [0, 2, 14];
// // // // // // const [venus, mars, neptune] = numberOfMoons;

// // // // // // neptune;
// // // // // // // => 14


// // // // // About Rest and Spread
// // // // // JavaScript has a built-in ... operator that makes it easier to work with indefinite numbers of elements. Depending on the context, it's called either a rest operator or spread operator.

// // // // // Rest operator
// // // // // Rest elements
// // // // // When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator. The three dots together with a variable name is called a rest element. It collects zero or more values, and stores them into a single array.

// // // // // const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

// // // // // a;
// // // // // // => 0
// // // // // b;
// // // // // // => 1
// // // // // everythingElse;
// // // // // // => [1, 2, 3, 5, 8]
// // // // // Note that in JavaScript, unlike some other languages, a rest element cannot have a trailing comma. It must be the last element in a destructuring assignment. The example below throws a SyntaxError:

// // // // // const [...items, last] = [2, 4, 8, 16]
// // // // // Rest properties
// // // // // Similarly to arrays, the rest operator can also be used to collect one or more object properties and store them in a single object.

// // // // // const { street, ...address } = {
// // // // //   street: 'Platz der Republik 1',
// // // // //   postalCode: '11011',
// // // // //   city: 'Berlin',
// // // // // };

// // // // // street;
// // // // // // => 'Platz der Republik 1'

// // // // // address;
// // // // // // => {postalCode: '11011', city: 'Berlin'}
// // // // // Rest parameters
// // // // // When ... appears in a function definition next to its last argument, that parameter is called a rest parameter. It allows the function to accept an indefinite number of arguments as an array.

// // // // // function concat(...strings) {
// // // // //   return strings.join(' ');
// // // // // }

// // // // // concat('one');
// // // // // // => 'one'

// // // // // concat('one', 'two', 'three');
// // // // // // => 'one two three'
// // // // // Spread
// // // // // Spread elements
// // // // // When ... appears on the right-hand side of an assignment, it's known as the spread operator. It expands an array into a list of elements. Unlike the rest element, it can appear anywhere in an array literal expression, and there can be more than one.

// // // // // const oneToFive = [1, 2, 3, 4, 5];
// // // // // const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

// // // // // oneToTen;
// // // // // // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // // // // const woow = ['A', ...oneToFive, 'B', 'C', 'D', 'E', ...oneToFive, 42];

// // // // // woow;
// // // // // // =>  ["A", 1, 2, 3, 4, 5, "B", "C", "D", "E", 1, 2, 3, 4, 5, 42]
// // // // // Spread properties
// // // // // Similarly to arrays, the spread operator can also be used to copy properties from one object to another.

// // // // // let address = {
// // // // //   postalCode: '11011',
// // // // //   city: 'Berlin',
// // // // // };

// // // // // address = { ...address, country: 'Germany' };
// // // // // // => {
// // // // // //   postalCode: '11011',
// // // // // //   city: 'Berlin',
// // // // // //   country: 'Germany',
// // // // // // }

// // // // About Array Analysis
// // // // Arrays have built-in methods to analyse the contents of the array. Most of these methods take a function that returns true or false as an argument. Such a function is called a predicate.

// // // // The built-in methods are meant to be used instead of a for loop or the built-in forEach method:

// // // // Example of analysis using a for loop :

// // // // const numbers = [1, 'two', 3, 'four'];
// // // // for (var i = 0; i < numbers.length; i++) {
// // // //   if (numbers[i] === 'two') {
// // // //     return i;
// // // //   }
// // // // }
// // // // // => 1
// // // // Example of analysis using a built-in method:

// // // // const numbers = [1, 'two', 3, 'four'];
// // // // numbers.indexOf('two');
// // // // // => 1
// // // // Some other helpful built-in methods that are available to analyze an array are shown below. See MDN for a full list of array methods.

// // // // includes
// // // // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 1

// // // // const numbers = [1, 'two', 3, 'four'];
// // // // numbers.includes(1);
// // // // // => true
// // // // numbers.includes('one');
// // // // // => false
// // // // every
// // // // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 2

// // // // const numbers = [1, 3, 5, 7, 9];
// // // // numbers.every((num) => num % 2 !== 0);
// // // // // => true
// // // // some
// // // // The some() method tests whether at least one element in the array passes the test implemented by the provided function. 3

// // // // const numbers = [1, 3, 5, 7, 9];
// // // // numbers.some((num) => num % 2 !== 0);
// // // // // => true
// // // // find
// // // // The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 4

// // // // const numbers = [1, 3, 5, 7, 9];
// // // // numbers.find((num) => num < 5);
// // // // // => 1
// // // // findIndex
// // // // The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test. 5

// // // // const numbers = [1, 3, 5, 7, 9];
// // // // numbers.findIndex((num) => num > 7);
// // // // // => 4
// // // // numbers.findIndex((num) => num > 9);
// // // // // => -1


// // // // function addTwoNumbers(num1, num2) {
// // // //   return num1 + num2
// // // // }

// // // // const addTwoNumbers = (num1, num2) => {
// // // //   return num1 + num2
// // // // }

// // // // About Arrow Functions
// // // // Besides function declarations and function expressions, JavaScript also has another very concise syntax for defining a function. These functions are called arrow functions.

// // // // In this concept, we will focus on the syntax used to write an arrow function. There are differences in the way that an arrow function works, such as this binding, that will be covered in other concepts.

// // // // Here is a comparison between a function declaration and an arrow function.

// // // // function addUpTwoNumbers(num1, num2) {
// // // //   return num1 + num2;
// // // // }

// // // // // function keyword removed and => added
// // // // const addUpTwoNumbers = (num1, num2) => {
// // // //   return num1 + num2;
// // // // };
// // // // Above, you will see that the arrow function syntax:

// // // // removes the keyword function
// // // // has declared the identifier addUpTwoNumbers as a const
// // // // adds a fat arrow =>
// // // // If the function body contains only a return statement, like in the example above, the {} and the return keyword can be omitted.

// // // // const addUpTwoNumbers = (num1, num2) => { return num1 + num2 };

// // // // // can be shortened to
// // // // const addUpTwoNumbers = (num1, num2) => num1 + num2;
// // // // // braces {} and return removed
// // // // In the special case of only returning an object from an arrow function, parentheses are needed around the object to be able to omit the return statement.

// // // // // explicit return of object
// // // // const addUpTwoNumbers = (num1, num2) => {
// // // //   return {
// // // //     num1,
// // // //     num2,
// // // //   };
// // // // };

// // // // // implicit return of object
// // // // const addUpTwoNumbers = (num1, num2) => ({ num1, num2 });
// // // // The use of parenthesis around parameters depends on the number of parameters.

// // // // // one parameter does not need parenthesis
// // // // const square = num => num * num;

// // // // // two or more parameters need to be wrapped in parenthesis
// // // // const addUpTwoNumbers = (num1, num2) => num1 + num2;


// // // About Prototypes & Classes
// // // JavaScript includes the capabilities for object-oriented programming (OOP). In OOP, you want to create objects (instances) from "templates" (classes) so that they include certain data and functionality. The data properties are called fields in the OOP context, the function properties are called methods.

// // // JavaScript did not have classes at all before they were added to the language specification in 2015 but allowed for object-oriented programming using prototype-based inheritance. And even though a class keyword is available nowadays, JavaScript is still a prototype-based language.

// // // To understand what it means to be a prototype-based language and how JavaScript actually works, we will go back to the time when there were no classes.

// // // Prototype Syntax
// // // Constructor Function
// // // In JavaScript, the template (class) is facilitated by a regular function. When a function is supposed to be used as such a template, it is called a constructor function and the convention is that the function name should start with a capital letter. Instances (objects) are derived from the template using the new keyword when invoking the constructor function.

// // // function Car() {
// // //   // ...
// // // }

// // // const myCar = new Car();
// // // const yourCar = new Car();
// // // It is important to note that in JavaScript, the instances and the constructor function keep a relationship to each other even after the instances were created. Every instance object includes a hidden, internal property referred to as [[prototype]] in the language specification. It holds a reference to the value of the prototype key of the constructor function. Yes, you read that correctly, a JavaScript function can have key/value pairs because it is also an object behind the scenes.

// // // Note
// // // To summarize:

// // // Constructors in JavaScript are regular functions.
// // // Constructing a new instance creates an object with a relation to its constructor called its prototype.
// // // Functions are objects (callable objects) and therefore they can have properties.
// // // The constructor's (function) prototype property will become the instance's prototype.
// // // Instance Fields
// // // Often, you want all the derived objects (instances) to include some fields and pass some initial values for those when the object is constructed. This can be facilitated via the this keyword. Inside the constructor function, this represents the new object that will be created via new. this is automatically returned from the constructor function when it is called with new.

// // // That means we can add fields to the new instance by adding them to this in the constructor function.

// // // function Car(color, weight) {
// // //   this.color = color;
// // //   this.weight = weight;
// // //   this.engineRunning = false;
// // // }

// // // const myCar = new Car('red', '2mt');
// // // myCar.color;
// // // // => 'red'
// // // myCar.engineRunning;
// // // // => false
// // // Instance Methods
// // // Methods are added via the prototype property of the constructor function. Inside a method, you can access the fields of the instance via this. This works because of the following general rule.

// // // When a function is called as a method of an object, its this is set to the object the method is called on. 1

// // // function Car() {
// // //   this.engineRunning = false;
// // //   // ...
// // // }

// // // Car.prototype.startEngine = function () {
// // //   this.engineRunning = true;
// // // };

// // // Car.prototype.addGas = function (litre) {
// // //   // ...
// // // };

// // // const myCar = new Car();
// // // myCar.startEngine();
// // // myCar.engineRunning;
// // // // => true
// // // The Prototype Chain
// // // myCar in the example above is a regular JavaScript object and if we would inspect it (e.g. in the browser console), we would not find a property startEngine with a function as a value directly inside the myCar object. So how does the code above even work then?

// // // The secret here is called the prototype chain. When you try to access any property (field or method) of an object, JavaScript first checks whether the respective key can be found directly in the object itself. If not, it continues to look for the key in the object referenced by the [[prototype]] property of the original object. As mentioned before, in our example [[prototype]] points to the prototype property of the constructor function. That is where JavaScript would find the startEngine function because we added it there.

// // // function Car() {
// // //   // ...
// // // }

// // // Car.prototype.startEngine = function () {
// // //   // ...
// // // };
// // // Class Syntax
// // // Nowadays, JavaScript supports defining classes with a class keyword. This was added to the language specification in 2015. On the one hand, this provides syntactic sugar that makes classes easier to read and write. The new syntax is more similar to how classes are written in languages like C++ or Java. Developers switching over from those languages have an easier time adapting. On the other hand, class syntax paves the way for new language features that are not available in the prototype syntax.

// // // Class Declarations
// // // With the new syntax, classes are defined with the class keyword, followed by the name of the class and the class body in curly brackets. The body contains the definition of the constructor function, i.e. a special method with the name constructor. This function works just like the constructor function in the prototype syntax. The class body also contains all method definitions. The syntax for the methods is similar to the shorthand notation we have seen for adding functions as values inside an object, see Concept Objects.

// // // class Car {
// // //   constructor(color, weight) {
// // //     this.color = color;
// // //     this.weight = weight;
// // //     this.engineRunning = false;
// // //   }

// // //   startEngine() {
// // //     this.engineRunning = true;
// // //   }

// // //   addGas(litre) {
// // //     // ...
// // //   }
// // // }

// // // const myCar = new Car();
// // // myCar.startEngine();
// // // myCar.engineRunning;
// // // // => true
// // // Keep in mind that behind the scenes, JavaScript is still a prototype-based language. All the mechanisms we learned about in the "Prototype Syntax" section above still apply.

// // // Private Fields, Getters and Setters
// // // By default, all instance fields are public in JavaScript. They can be directly accessed and assigned to.

// // // However, there is an established convention that fields and methods that start with an underscore should be treated as private. They should never be accessed directly from outside the class.

// // // Private fields are sometimes accompanied by getters and setters. With the keywords get and set you can define functions that are executed when a property with the same name as the function is accessed or assigned to.

// // // class Car {
// // //   constructor() {
// // //     this._mileage = 0;
// // //   }

// // //   get mileage() {
// // //     return this._mileage;
// // //   }

// // //   set mileage(value) {
// // //     throw new Error(`Mileage cannot be manipulated, ${value} is ignored.`);
// // //     // Just an example, usually you would not provide a setter in this case.
// // //   }
// // // }

// // // const myCar = new Car();
// // // myCar.mileage;
// // // // => 0
// // // myCar.mileage = 100;
// // // // => Error: Mileage cannot be manipulated, 100 is ignored.

// // About Errors
// // Errors are useful to report when something is wrong or unexpected in a program or a piece of code.

// // They are javascript objects.

// // The main property of this object is message:

// // const error = new Error('Oops, something went wrong');

// // console.log(error.message);
// // // => "Oops, something went wrong"
// // Using the throw syntax, you can throw an Error.

// // throw new Error('Oops');
// // When an Error is thrown, the current execution is stopped and resumes in the first catch block of the call stack.

// // try {
// //   throw new Error('Oops');
// // } catch (error) {
// //   console.log(error.message);
// //   // => "Oops"
// // }
// // As with any class in JavaScript, subclasses can inherit from Error to create Custom errors by using the extends keyword. The instanceof syntax will check if the error caught is an instance of a particular subclass of Error.

// // class CustomError extends Error {}

// // try {
// //   // ... Code that may throw an error
// // } catch (error) {
// //   if (error instanceof CustomError) {
// //     console.log('The error thrown is an instance of the CustomError');
// //   }
// // }
// //  About Inheritance
// // Inheritance is a way to create parent-child relationships between classes. The child class (sometimes referred to as a subclass) has access to the behavior and data defined by the parent class (sometimes referred to as a superclass).

// // class Pet {
// //   constructor(name) {
// //     this.name = name;
// //   }

// //   introduce() {
// //     console.log(`This is my pet, ${this.name}.`);
// //   }
// // }

// // class Dog extends Pet {}

// // const dog = new Dog('Otis');
// // dog.introduce();
// // // => This is my pet, Otis.
// // The extends keyword in the child class declaration establishes a relationship with the parent class through the prototype chain.

// // Objects created by the child's constructor will have the parent class's prototype in their prototype chain, providing access to any methods or data defined by the parent.

// // const dog = new Dog('Otis');

// // Dog.prototype.isPrototypeOf(dog); // => true
// // Pet.prototype.isPrototypeOf(dog); // => true
// // Pet.prototype.isPrototypeOf(Dog.prototype); // => true

// // Pet.prototype.hasOwnProperty('introduce'); // => true
// // Dog.prototype.hasOwnProperty('introduce'); // => false
// // dog.hasOwnProperty('introduce'); // => false

// const arr = ['b', 'c', 'a', 'd'];

// const result = arr.sort();

// console.log(result);

// About Array Transformations
// In JavaScript, the Array class has many powerful built-in methods for transforming arrays. These methods make it much easier to convert one array into another than it otherwise would be using a simple for loop or more direct manipulation.

// Some methods are pure, meaning that they do not modify the original array. They return a new one instead. Other methods however manipulate the array they are called on and do not return the modified array.

// Some of the most commonly used methods to transform arrays are presented below. A full list of available methods can be found in the MDN documentation.

// map (pure)
// Create a new array by transforming each element according to a function passed as an argument. These callback functions are often written as arrow functions.

// let arr = [1, 2, 3, 4];

// const newArr = arr.map((value) => value - 1);
// console.log(newArr);
// // => [0, 1, 2, 3]
// console.log(arr);
// // => [1, 2, 3, 4]
// It is worth noting that the resulting array will always be of the same length as the original.

// filter (pure)
// Creates an array by filtering the current one, given a filtering function (that returns true if the element should be kept and false if it should be removed).

// let arr = [1, 2, 3, 4];

// arr.filter((value) => value % 2 === 0);
// // => [2, 4]
// reduce (pure)
// Reduces the array to a single value using a function that takes an accumulator and the current element of the array as parameters. This function instructs how the current element must be merged into the accumulator and returns the accumulator that will be used on the next iteration.

// let arr = [1, 2, 3, 4];

// // Get the sum of elements
// arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // => 10

// // Classify the numbers by whether they are odd or not
// arr.reduce(
//   (accumulator, currentValue) => {
//     if (currentValue % 2 === 0) {
//       accumulator.even.push(currentValue);
//     } else {
//       accumulator.odd.push(currentValue);
//     }

//     return accumulator;
//   },
//   { even: [], odd: [] }
// );
// // => { even: [2, 4], odd: [1, 3] }
// reverse
// Reverses the elements of an array.

// const arr = [1, 2, 3, 4];

// arr.reverse();
// // => [4, 3, 2, 1]
// This method modifies the array it is called on.

// slice (pure)
// Given a start and an end index, creates a sub-array from the array passed as a parameter.

// The element at the end index will not be included. Also, all parameters are optional: the start index defaults to 0, and the end index defaults to the array length.

// const arr = [1, 2, 3, 4];

// arr.slice(1, 2); // [2]
// arr.slice(1); // [2, 3, 4]
// // You can also use negative numbers, that represent the indexes
// // starting from the end of the array
// arr.slice(-2); // [3, 4]
// splice
// Removes or replaces and/or adds new elements of an array.

// It takes the following parameters:

// the index of the element where to start modifying the array
// the number of elements to delete
// the elements to insert in the array (optional)
// splice returns the elements that have been removed.

// const arr = ['1', '2', '5', '6'];

// // Insert an element at index 2
// arr.splice(2, 0, '3');
// console.log(arr);
// // => ['1', '2', '3', '5', '6']

// // Remove 2 elements, starting at index 3 and insert 2 elements
// const removed = arr.splice(3, 2, '4', '5');
// console.log(removed);
// // => ['5', '6']
// console.log(arr);
// // => ['1', '2', '3', '4', '5']

// // Remove 1 element at index 1
// arr.splice(1, 1);
// console.log(arr);
// // => ['1', '3', '4', '5']
// sort
// By default, sort sorts the elements of an array by first converting them to strings and then applying string comparison (see Concept Comparison). The sorting happens in-place which means the original array is modified. sort also returns that modified array which is convenient if you want to chain other methods to it.

// const arr = ['c', 'a', 'z', 'b'];
// const result = arr.sort();
// console.log(result);
// // => ['a', 'b', 'c', 'z']
// console.log(arr);
// // => ['a', 'b', 'c', 'z']
// To customize the sorting behavior, you can pass a comparison function as an argument. The comparison function itself is called with two arguments which are two elements of the array. It then needs to return the following:

// a negative number if the first argument should be sorted before the second
// a positive number if the first argument should be sorted after the second
// 0 if the order of the elements should stay the same
// For example, to sort numbers the following comparison function can be used.

// const arr = [3, 1, 2, 10];
// arr.sort((a, b) => a - b);
// // => [1, 2, 3, 10]
// // "a - b" is negative when b is greater than a, positive when
// // a is greater than b and 0 when they are equal.

// //  Replace
// // The replace() method in JavaScript allows us to search for a value within a given string, and replacing it with a desired new value.

// // string.replace(searchValue, newValue);
// // The pattern for searching the substitution can be a single string, or a regular expression.

// // let string = 'I like dogs!';
// // let result = string.replace('dogs', 'cats');

// // let string = 'I would love to travel to Japan';
// // let result = string.replace(/Japan/g, 'Hawaii');
// // Moreover, we can apply a function on the replacement position in order to make additional changes to each value.

// // let text = 'Say hello to the chatbot.';
// // let result = text.replace(/chatbot|hello/gi, function (word) {
// //   return word.toUpperCase();
// // });

// // // => "Say HELLO to the CHATBOT"
// // Split
// // The split() method in JavaScript represents a different way of using and manipulating strings with regular expressions.

// // In this way, we will be using regex in order to divide a given string by recognizing a pattern, e.g. str.split(/[,.\s]/). This pattern will be used as the separator.

// // const str = 'hello,user.how are.you';

// // const result = str.split(/[,.\s]/);

// // console.log(result);
// // // => ['hello', 'user', 'how', 'are', 'you']



// let string = 'I would love to travel to Japan';
// let result = string.replace('Japan', 'America');
// console.log(result);

// About Array Loops
// When working with arrays, you sometimes want to execute code for each value in the array. This is called iterating or looping over the array.

// Here we will look at the case where you do not want to modify the array in the process. For transforming arrays, see Concept Array Transformations instead.

// The for Loop
// The most basic way to iterate over an array is to use a for loop, see Concept For Loops.

// const numbers = [6.0221515, 10, 23];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// // => 6.0221515
// // => 10
// // => 23
// The for...of Loop
// When you want to work with the value directly in each iteration and do not require the index at all, you can use a for...of loop.

// for...of works like the basic for loop shown above, but instead of having to deal with the index as a variable in the loop, you are provided with the value directly.

// const numbers = [6.0221515, 10, 23];

// // Because re-assigning number inside the loop will be very
// // confusing, disallowing that via const is preferable.
// for (const number of numbers) {
//   console.log(number);
// }
// // => 6.0221515
// // => 10
// // => 23
// Just like in regular for loops, you can use continue to stop the current iteration and break to stop the execution of the loop entirely.

// The forEach Method
// Every array includes a forEach method that can be used to loop over the elements in the array.

// forEach accepts a callback as a parameter. The callback function is called once for each element in the array. The current element, its index and the full array are provided to the callback as arguments. Often, only the current element or the index are used.

// const numbers = [6.0221515, 10, 23];

// numbers.forEach((number, index) => console.log(number, index));
// // => 6.0221515 0
// // => 10 1
// // => 23 2
// There is no way to stop the iteration once the forEach loop was started. The statements break and continue do not exist in this context.

// About Sets
// In JavaScript, a set is a list-like structure containing unique values, which can be primitives and/or object references. Unlike an array, a set's elements cannot be accessed by index.

// A value cannot be added to a set if it is strictly equal to any of the set's elements.

// const set = new Set();
// const object = { color: 'lime green' };
// const functionallyIdenticalObject = { color: 'lime green' };

// set.add(object);
// set.add('wow');
// set.add(77);

// console.log(set.size);
// //=> 3

// set.add(functionallyIdenticalObject); // added because functionallyIdenticalObject is not strictly equal to object
// console.log(set.size);
// //=> 4

// set.add(77); // not added because 77 is strictly equal to 77
// console.log(set.size);
// //=> 4

// About Promises
// The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

// The methods promise.then(), promise.catch(), and promise.finally() are used to associate further action with a promise that becomes settled.

// For example:

// const myPromise = new Promise(function (resolve, reject) {
//   let sampleData = [2, 4, 6, 8];
//   let randomNumber = Math.floor(Math.random() * (sampleData.length + 1));
//   if (sampleData[randomNumber]) {
//     resolve(sampleData[randomNumber]);
//   } else {
//     reject('An error occured!');
//   }
// });

// myPromise
//   .then(function (e) {
//     console.log(e);
//   })
//   .catch(function (error) {
//     throw new Error(error);
//   })
//   .finally(function () {
//     console.log('Promise completed');
//   });
// Methods
// These methods are available on Promise.prototype

// then

// The .then() method takes up to two arguments; the first argument is a callback function for the resolved case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, which can optionally be used for chaining.1

// const promise1 = new Promise(function (resolve, reject) {
//   resolve('Success!');
// });

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: "Success!"
// });
// catch

// A .catch() is really just a .then() without a slot for a callback function for the case when the promise is resolved. It is used to handle rejected promises.2

// const promise1 = new Promise((resolve, reject) => {
//   throw 'An error occured';
// });

// promise1.catch(function (error) {
//   console.error(error);
// });
// // expected output: An error occured
// finally

// When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.3

// function findDataById(id) {
//   return new Promise(function (resolve, reject) {
//     let sampleData = [1, 2, 3, 4, 5];
//     if (sampleData[id]) {
//       resolve(sampleData[id]);
//     } else {
//       reject(new Error('Invalid id'));
//     }
//   });
// }

// findDataById(4)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.error(err);
//   })
//   .finally(function () {
//     console.log('Promise completed');
//   });


//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (x, y) => {
  return (Math.sqrt(x, y))
};

