/*VARIABLES
   - VARIABLES ARE LIKE STORAGE CONTAINERS FOR DATA IN YOUR CODE.
   long before data in javascript was created using the "var" statement.But in the newest javascript versions we have two more ways - let and const
   - To create a variable in Javascript, use the let keyword.
      let message;
      we can also declare multiple variables in one line example
       let user = 'John', let age = 20, let height = 5'6ft;

       for better readability we should declare variables this way;
        let user = 'Harry';
        let age = '20';
        let message = 'Hello'
        imagine variable as a 'Box' for data
For instance the variable message can be imagined as a box labelled 'message' with the value "Hello" in it.

When the value is changed, the old data is removed from the variable:
let message;
let message = 'Hello';
    message = 'World';

A repeated declaration of the same variable is an error;
  let message = 'Hello';
  
  let message = 'That';

  VARIABLE NAMING
   - The first character must not be a digit.
   - The name  must contain only letters, digits, or the symbols $ and _.

   CONSTANTS
     Its an unchanging variable,  we use const to declare it.
     
     const myBirthday = '18.04.1990'

    UPPERCASE CONSTANTS
     - Such constants are named using capital letters and underscores
     - There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution
     for instance, lets make constants  for colors in so called "web" 

     const COLOR_RED = "#F00";
     const COLOR_GREEN = "#0F0";


     let admin, name;

    name = "John";

     alert(admin); // "John"


     let myPlanet = 'Venus';
     let userName = '';

We generally use uppercase for constants thar are "hard-coded or, in other words, when the value is known prior to execute and directly written into the code
  const BIRTHDAY = '18.04.1982';

  Basic OPERATORS
    "unary" , "Binary"
     An operator is unary if it has a single operand
       let x = 1;
       x = -x;
       alert(x); // -1, unary negation was applied

       . An operator is binary if it has two operands
       let x = 1, y = 3;
       alert(y - x) // 2 binary minus subtracts values


       THE EXPONENTIATION OPERATOR(**)
         a**b raises a to the power of b.
         in school. We write that as ab.
        2 ** 2 = 4

        STRING CONCATENATION WITH BINARY +
        Usually the plus operator + sums numbers.
        But if the binary + is applied to strings, it merges(concatenates) them.


        let s = "my" + "string";
        alert(s); //mystring
Note that if any other operands is a string , then the other one is converted to a string too.
For example 
 alert('1' + 2); // '12'
 alert(2 + '1'); // '21'

 Here is more complex example 
  alert(2 + 2 + '1'); //41 and not 221
  Here operators work one after the other .The first + sums two numbers, soo it returns 4 then the next adds the string 1 to it, so its like 4 + '1'
   
  alert('1' + 2 + 2); here the first operator is a string ,the compiler treats the other two operands as strings too.The 2 gets concatenated to '1' so its like '1' + 2 and '12' + 2 = '122'

  The binary + is the only operator that supports strings in such a way.Other arithmetic operators work only with numbers and always convert their operands to numbers.

  Here's the demo for substraction and division:

  alert(6 - '2'); // 4  converts '2' to a number
  alert('6' / ''2); //3, converts both operands to numbers

  The binary plus would add them as strings:
    
  let apples = '2';
  let oranges = '3';

  alert(oranges + apples); // '23', the binary plus concatenates strings.

  if we want to treat them as numbers, we need to convert and then sum them:

  let apples = '2';
  let oranges = '3';

  // both values converted to numbers before binary plus
  alert( +apples + +oranges); // 5  unary pluses are applied first they convert strings to numbers, and then the binary plus sums them up.

  As we can see, the unary plus has a priority of 14 which is higher than the 11 of addition(binary plus) .Thats why ,in the expression "+apples + +oranges", unary pluses work before the addition

  INCREMENT / DECREMENT
   Increasing or decreasing a number  is among the most common numerical operations

   increment ++ increases a variable by 1:

   let counter = 2;
   counter ++ // works the same as counter = counter + 1, but is shorter.
    alert(counter); //3

    Decrement -- decreases a variable by 1:
    let counter = 2;
    counter --
    alert(counter); 1

    Increment and decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error

    The operators ++ and -- can be placed before or after a variable.
     - when the operator goes after the variable, its in "postfix form"; counter++.
     - The "prefix form" is when the operator goes before the variable: ++counter.
     Both these statements  do the same thing: increase counter by 1.
     The prefix form returns the new value while the postfix returns the old value.

     let counter = 1;
     let a = ++counter; // (*) //prefix form which returns new value

     alert(a); //2 , prefix form ++counter increments counter and returns the new value


     POSTFIX FORM:
      
     let counter = 1;
     let a = counter++; //changed ++counter to counter++

     alert(a); //1, postfix form returns the old value.

     To summarize:
     . if we'd like to increase a value and immediately use the result of the operator, we need the prefix form
     let counter = 0;
     alert(++counter); //1
     
     . if we would like to increment a value but use its previous value, we need the postfix form:
     let counter = 0;
     alert(counter++ ) //0

     increment and decrement can be used inside expressions as well.
     
     let counter = 1;
     alert(2 * ++counter); //4. first we increment the prefix form to get the new value then we multiply it by 2 to result to 4.

     compare with:

     let counter = 1;

     alert( 2 * counter++ ); //2, because counter++ returns the "old value"

     We advise a style of one line-one action:

     let counter = 1;
     alert(2 * counter);
     counter++;

     BITWISE OPERATORS
     Treats arguments as 32-bit integer numbers and work on the level of their binary representation.

     AND( & ) a & b = returns 1 if both cases are true
    OR ( | ) a | b = if one case is true then return 1
    XOR(^)
    NOT(~) a |0|1| , NOT a |1 |0


    COMMA
    For example
     let a = (1 + 2, 3 + 4);

     alert(a); //7 the result of 3 + 4

     typeof 62 // returns number
     typeof 'Hello World'; // returns string

     typeof true; //returns 'boolean'
     typeof null; //returns object

     HERE IS A code that asks the user for two numbers and shows their sum.
it works incorrectly.The output in the example below is 12.Fix ot the result should be 3.


let a  = prompt('first number', 1);
let b = prompt('Second number, 2');

alert(a + b); 12
so what we should do here is convert strings to numbers before + operator
alert( +a + +b ); //3, using both unary and binary + 

THE OLD VAR
 3 WAYS OF VARIABLE DECLARATION
 1.let
 2.const
 3.var
  
    1.VAR
      var message = 'Hi';
      alert(message); //Hi

      if(true) {
        let test = true; //use 'let'
      }

      for(var i = 0; i < 10; i++) {
              }

     function sayHi()  {
      if (true) {
        var phrase = 'Hello';
      }

      alert(phrase); //works
     }         

     sayHi();

     let x = 10;
     let y = 13;

     let z = 23;
     if you add two strings the results would be string concatenation.
     The javascript interpreter works from left to right.
     first 10 + 20 is added cos x and y are numbers then 30 + "30" is concatenated cos z is a string
     Javascript will convert strings to numbers when substracting or dividing .Remember javascript will not convert strings to numbers when adding.

     NAN(NOT A NUMBER)
      NAN is sa javascript reserved word indicating that a number is not a legal number.
      Example
      let x = 100 / "Apple"; will result into a nan

      A number divided by a numeric string will result into a number:
      let x = 100 / "10"

      You can use the global Javascript function isNAN() to find out if a value is not a number
      
      let x = 100 / 'apple';//Results into true


     Explain the difference between == and ===
 == means equal
  let x  

If the operand is not a number, The unary plus converts it into a number.

 
         DATA TYPES
         A.NUMBER
         1.Number represents both integer and floating point numbers.
         Infinity is a special value thats greater than any number
         example alert( 1 / 0); //infinity
         NaN represents a computational error.its a result of an incorrect or an undefined mathematical operation for instance,
         alert( 'not a number' / 2);

         B.STRING
         Must be surrounded by quotes.
         let str = "Hello";

         iN JAVASCRIPT there are 3 types of quotes.
         a.double quotes: ""
         b.single quotes: ''
         c.Backticks: `Hello` //backticks are extended  functionality quotes ,they allow us to embed variables and expressions into a string by wrapping them in ${name};for example

         let name = "John";
         embed a variable
         alert( `Hello, ${John}` ); // Hello, John!

         //embed an expression
         alert(`the result is ${1 + 2}`); //the result is 3
         The expression inside ${...} is evaluated and the result becomes a part of the string.Note this can only be done in backticks.

         C.BOOLEAN(logical type)

         It has two values true and false.Commonly used to store yes/no values.
         
         Example
         let nameFieldChecked = true; //yes,name field is checked
         let ageFieldChecked = false; //no, age field is not checked

         Booleans values also come as a result of comparisons:
let isGreater = 4 > 1;
alert(isGreater); // true (comparison results is yes).

  D.THE "NULL" vALue
  contains only the null value:
  let age = null; //states that age is unknown.
  in javascript null represents 'nothing 'empty' or 'value unknown'

  E.THE "UNDEFINED" VALUE
  The meaning of undefined is "value is not assigned"
   let age;
   alert(age); //shows "undefined"

   Its possible to explicitly assign undefined to a variable;

   let age = 100;

   //change the value to undefined

   age = undefined;
   alert(age); // "undefined"

   F.OBJECTS AND SYMBOLS
   The object type is special.objects are used to store collections of data and more complex entities.


   G.THE TYPEOF operator
   returns the type of the operand
   typeof undefined //undefined
   typeof 0 // number
   typeof 10n // bigint
   typeof true // 'boolean'
   TYPEOF FOO // "STRING"
   typeof symbol('id') // "symbol"
    typeof Math // "object" (1) // MATH IS A BUILT IN OBJECT THAT PROVIDES MATHEMATICAL OPERATIONS
    typeof null // 'object' (2)
    typeof alert // "function"

    TASKS
    What is the output of the script?
    let name = "Ilya";

     alert(`hello ${1}`); \\ hello 1. the expression is a number.
     alert(`hello ${ "name" }`); \\ hello name, the expression is a string name.
      alert(`hello ${ name }`); \\ hello Ilya, the expression is a variable , embed it.

      LOGICAL OPERATORS
       There are four logical operators in javascript:
       
       ||(OR) - IS MEANT TO MANIPULATE BOOLEAN VALUES ONLY.If any of its arguments are true it returns true, otherwise it returns false.
       alert( true || true ); //true
       alert( false || true ); //true
       alert( true || false ); //true
       alert( false || false ); //false

       if ( 1 || 0 ) // works like true || false
    most times , OR is used in an if statement to test if any of the given conditions is true
 Example;
 let hour = 9;
 if (hour > 10 || hour> 18) {
  alert("The office is closed.");
  
  OR finds the first truthy value.
 }

 Given multiple OR'ed values:
 result = value1 || value2 || value3;
 A chain of OR || RETURNS THE FIRST TRUTHY VALUE OR THE LAST ONE IF NO TRUTHY VALUE IS FOUND.


       && (AND)
       RESULT a && b;
AND returns true if both operands are truthy and false otherwise.

alert( true && true ); //true
alert( true && false ); //false
alert( false && true ); //false
alert( false && false ); //false

EXAMPLE with if:
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert('The time is 12:30');
}

THE AND && Operator does the following
 Evaluates operands from left to right.converts it to a boolean,if the results is false,stops and returns the original value of that operand.

       !(NOT)
    is represented with an exclamation sign!

    results = !value;
    converts the operand to boolean type: true/false
    Returns the inverse value.
alert( !true ); // false
alert ( !0 ); //true

The precedence of NOT ! IS THE HIGHEST of all logical operators, so it always execute first, before && or ||.

if (age < 14 || age > 90) {
  alert(age);
}

if(!(age >= 14 && age <= 90))

CREATING A STRING
 const string = "The revolution will not be televised,";
 console.log(string);


 ESCAPING CHARACTERS IN A STRING
 We do it by putting a backslash just before the character
 
 const bigmouth = 'I\'ve got no right to take my place..'
 
 console.log(bigmouth);

 CONCATENATING STRINGS
 Means "join together"
 use backtick characters to join together
 const name = "Chris";
 const greeting = `Hello, ${name}`;
 console.log(greeting); // "Hello, Chris"

 you can use same techniques to join together  two variables:

 const one = "Hello, ";
 const two = "how are you?";
 const joined = `${one}${two}`;
 console.log(joined); // 'Hello, how are you?'


 <button>Press me</button>

 const button = document.querySelector("button");

 function greet() {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
 }

 button.addEventListener('click',greet);
 \\Here we are using a window.prompt(.) function,which asks the user to answer a question via a popup dialog box 
 then stores the text they enter inside a given variable - in this case a name.
 we then use the window.alert() function to display another popup containing a string which inserts the name into generic greeting message.

   CONCATENATION USING +
 const greeting = "Hello";
 const name = "Chris";
 console.log(greeting + ", " + name) // "Hello, Chris"

 The Number() function converts anything passed to it into a number
 const myString = "123";
 const myNum = Number(myString);
 console.log(typeof myNum);

 line break character(\n)
 const output = "I like the song.\nI gave it a score of 90%.";
/*
I like the song.
I gave it a score of 90%.


JAVASCRIPT  STRING LENGTH
- The length property returns the length of a string.
EXAMPLE
let text = "ABCDEFGHIJKLMNOPQRSTVUWXYZ";

let length = text.len; //The length of the string is 26.


    EXTRACTING STRINGS APART.
 
A.SLICE(start, end); // slice(), extracts a part of a string and returns the extracted part in a new string
let text = "apple, banana, Kiwi";
let part = text.slice(7, 13); // Banana.

If you omit the second parameter, the method will slice out the rest of the string:
extract a part of a string from position 7:
 banana, kiwi

 IF A PARAMETER IS NEGATIVE, THE POSITION IS COUNTED FROM THE END OF THE STRING.
 LET TEXT = "APPLE, BANANA, KIWI";
 LET PART = TEXT.SLICE(-12); //Counting from the end, banana and kiwi

NOTE JAVASCRIPT COUNTS POSITION FROM ZERO //First position is zero and second position is 1.

This example slices out a portion of a string from position (-12, -6);
let text = "apple, banana, kiwi"; // banana


B.SUBSTRING(start, end)
 Start and end values less than 0 are treated as 0.

 let str = "Apple, banana, kiwi";
 let part = str.substring(7, 13); //returns banana


 C.Substr(start, length)
 Similar to slice().
  The difference is that the second parameter specifies the length of the extracted part

  Example
  let str = "Apple, Banana, Kiwi";
  let part = str.substr(7, 6);
  if you omit the second parameter, substr() will slice out the rest of the string.

  let str = "apple, banana, kiwi";
  let part = str.substr(7) // returns banana and kiwi.
  let part = str.substr(-4) // kiwi


  REPLACING STRINGS CONTENT
  The replace() method replaces a specified value with another value in a string:
  
  let text = "Please visit Microsoft!";

  let newText = text.replace("Microsoft", "W3Schools");
  by default, the replace() method replaces only the first match:
  Returns a new string.
  To replace all matches , use a regular expression with a /g
  let newText = text.replace(/Microsoft/g, "W3Schools");
  
  ReplaceAll() - allows you to specify a regular expression instead of a string to be replaced.

  
  CONVERTING TO UPPER AND LOWER CASE.
  A string is converted to upper case with toUpperCae():
  A string is converted to lower case with toLowerCase():

let text1 = 'Hello World!';

let text2 = text1.toUpperCase(); // HELLO WORLD

JAVASCRIPT STRING CONCAT()
Concat() joins two or more strings.
 
EXAMPLE
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat( " ", text2);
Strings cant be changed only replaced.

THE TRIM()
 Removes whitespace from both sides of a string.
 let text1 = "     Hello World!        "; //length 22
 let text2 = text1.trim();      //length 12

 The trimStart() //removes whitespace only from the start of a string.
 TrimEnd(); //removes whitespace from the end of a string

 padStart()method pads a string with another string.
 let text = "5";
 let padded = text.padStart(4, "x") //xxx5
 To pad a number convert the number to a string first.

 STRING charAt()
  returns the character at a specified index(position) in a string:
  let text = "HELLO WORLD";
  let char = text.charAt(0);  //H

  CONVERTING A STRING INTO ARRAY
  We use split() method:to convert string to array.

  Example
  text.split(" ,") //split on commas
  text.split(" ")  //split on spaces
  text.split(" || ") //split on pipe


  Alert the number of items in an array,using correct array property.

  const cars = ["Volvo", "Jeep", "Mercedes"];
  alert(cars.length);

  Use the correct Array to remove the last item of the fruits array.
  const fruits = "apple", "mango", "banana";

  fruits.pop()

add "kiwi" to the fruits array.
  const fruits = "apple", "mango", "banana";
  fruits.push("Kiwi");

  Splice() method is used to remove items using their index order.
  const fruits = ["Banana", "orange", "apple", "Kiwi"]; //fruits.splice(1, 2);

  sort fruits array alphabetically
  const fruits = ["banana", "orange"]; 
  fruits.sort();

  == means equality test, while single one means = an assignment.

  JAVASCRIPT if, else, and else if.
  use if,if a specified condition is true
  use else if the same condition is false.
  use else if ,to specify a new condition to test, if the first condition is false.
  use switch to specify many alternative blocks of code to be executed.

  THE IF STATEMENT
  If(condition) {
    //code block
  }

  Example make a good day greeting if the hour is less than 18.00

  let hour = 9.00
  if (hour < 18) {
  greeting = "Good day"; //Good day
  }


  THE ELSE STATEMENT
  code to be executed if the condition is false
  if (){

  }
  else{  }
  EXAMPLE
  if(hour < 18) {
    greeting = "Good day";
  }
  else {greeting = "Good evening";}

  THE ELSE IF STATEMENT
  SPECIFIES A NEW CONDITION IF THE FIRST CONDITION IS FALSE.
  
  if (condition1) {
    //if condition is true
  }
  else if (condition2) {
    //executed if condition1 is false and condition2 is true.
  }

  else {
    executed if condition1 and condition2 is false.
  }

  EXAMPLE
  if time is less than 10.00,create a "Good morning" greeting, if not ,but time is less than 20.00,create a "Good day" greeting, otherwise a "Good evening":
  if(time < 10) {
    greeting = "Good morning";
  }
  else if (time < 20){
    greeting = "Good day";
  }
  else {
    greeting = "Good evening";
  }

Create a switch statement that will  alert "Hello" if fruits is banana and welcome if fruits is apple.

switch (fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("welcome")
    break;
  default:
  alert("Neither");
}

let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}
  let i 
while (i < 10) {
  console.log(i)
  i
}

create a loop that runs as long as i is less than 10, but increase i with 2 each time
let = 0;
while(i < 10) {
  console.log(i);
  i = i + 2;
}


class{
}


var myArray = [50, 60, 70];

var myData = myArray[2];

console.log(myData);
MANIPULATE ARRAY WITH Push()- ADDS aN Array

Pop() - Removes an Array

var ourArray =  [1, 2, 3];
 
var removeFromOurArray = ourArray.pop();

shopping list
var myList = [["cereal", 3], ["milk", 2], ["bananasa", 3]]
*/
//Example 

// function ourReusableFunction() {
//   console.log("Heyya, World");

// }

// ourReusableFunction();

//  function ourFunctionWithArgs(a, b) {
//   console.log(a - b);
// }

// ourFunctionWithArgs(10, 5);

// function fun1() {

// }
  
 
// function fun2() {

//   var output = "";
// if(typeof myGlobal != "undefined") {
  
//   output += "myGlobal: " + myGlobal;
// }

// if(typeof oopsGlobal != "undefined") {
//   output += "oopsGlobal: " + oopsGlobal;
// }

// console.log(output);
// }

// var outerWear = "T-shirt";

// function myOutfit() {
//   var outerWear = "Sweater"
  
// //   return outerWear;
// // }

// // console.log(myOutfit())

// //  var myName = "Harriet"; //its actual the global variable since its declared outside the function.

// // function Name() {
// //   return myName;
// // }

// // console.log(Name());

// // function minusSeven(num) {
// //   return num - 7;
// // }

// // console.log(minusSeven(10));

// // var sum = 0;

// // function addThree() {
// //   sum = sum + 3;

// //   console.log(sum);
// // }

// // addThree();


// function addFive(num) {
  
//   num = num + 5;

//   console.log(num);
// }

// addFive(10);

// BOOLEAN VALUES
//  - tHEY are only two values true and false where true is && and false is or ||


//  function testEqual(val) {
//   if(val == 12)

//   The &&(AND) operator
//   if(val <= 40 && val >= 22) {
//   return yes;
// }

//   The (OR) || operator
//  if(val < 10 || val > 20) {
//   return "Outside";
//  }else { }

//   if(val != 99) {
//     return "Equal";
//   }
//   return "Not equal";
// }

// console.log(testEqual(10));


// strict inequality operator( === )

// if (val > 5) {
//   result = "Bigger than 5";
// } else {
//   result = "5 or smaller";
// }

//  function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   } 
  
//   else if (val < 5) {
//     return "smaller than 5";
//   }
  
//   else {
//     return "Between 5 and 10";
//   }
// }

// testElseIf(7);


// function testOr(num) {
//   if(num <= 20 && num >= 40) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(testOr(15));

//write chained if/else if statements to fullfill the following conditions:

function testIfElseIf(num) {
  if (num < 5 && num < 10) {
    return "Tiny and small";
  }else if(num < 15 && num < 20) {
    return "medium and large";
  } else if (num >= 20) {
    return "Huge";
  }else {
    return "Huge number";
  }
}

console.log(testIfElseIf(31));

var names = ["hole-in-one", "Eagle", "Birdie", "Par", "Boogie"];

function golfscore(par, strokes) {
  if(strokes == 1) {
    return names[0];
  }else if(strokes <= par - 2) {
    return names[1];
  }
}

console.log(golfscore(3, 2));



//SWITCH STATEMENTS
//Write a swtich statement which tests val and sets answer for the following conditions

/*1 - "alpha"
  2 - "beta"
  3 - "gamma"
  4 - "delta"
*/
function caseInSwitch(val) {
  var answer = "";

  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer =  "stuff";
      break;



//Returning boolean values from a function
function isLess(a, b) {
  if(a < b) {
    return true;
  }else {
    return false;
  }
}

console.log(isLess(10, 15));


if (a < 0 || b < 0) {
  return undefined;
}

//count with switch statement
var count = 0;

function cc(card) {

  switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
     count++;
     break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "a":
    count--;
    break;

  }
  return count "";
}


//JAVASRIPT Object
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["Everything!"]
};

var myDog {
 "name": "Quincy",
 "legs": 3,
 "tails": 2,
 "friends": []
};

myDog.name = "Happy coder"

}

  return answer;
}

console.log(caseInSwitch(1));


//LOOPS

var myArray = [];

var i = 0;
while(i = 0; i < 5; i++) {
  ourArray.push();

}

var myArray = [];

for (var i = 9; i > 0; i-= 2 ) {

  myArray.push(i);
}
console.log(myArray);



var ourArr = [2, 3, 4, 5, 6];

for(var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(product);


function multiplyAll(arr) {
  
  var product = i;

  for(var i = 0; i < arr.length; i++){

  }

  return product;

}

console.log(product);

var product = multiplyAll[[1,2], [3,4], [5,6,7]];

console.log(product);
  
var product = multiplyAll([[1,2], [3,4],[5,6,7]]);

console.log(product);

PARSEINT 
function convertToInteger (str){
       
}


convertToInteger("10011");


























































































                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
