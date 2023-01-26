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



   */