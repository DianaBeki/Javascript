//Declsring a variable we use the keyword let followed by the name you want to call you variable i.e let myName; let myAge;
//All codes instructions should end with a semicolo in js
// Once you declare a variable you can initialize it with a value i.e myName = 'Chris' ;
// You can declare and initialize  a variable  at the same time like this: let myDog = 'Rover'
//A note about var: it is a different way to declare variables: var myName; var myAge;
//let was created in modern version of javasript to fix var error-prone issues
//When using var, you can declare the same variable as many times as you like but with let you cant: var myName = 'Chris'; , var myName = 'Bob'; the following would throw an error: let myName = 'Chris'; , let myName = 'Bob'; instead you have to do this: let myName = 'Chris'; , myName = 'Bob';

// VARIABLE TYPE:
//  1.NUMBERS - store numbers in variables, either as a whole number also called integers or decimal numbers like 2.456(also called floats) : let myAge = 17;

// 2.STRINGS - Wrapped in a single or double quote marks; let dolphinGoodbye = 'So long and thanks for all the fish';

// 3. BOOLEANS - are true or false values.Generally used to test a condition: let iAmAlive = true; , let test = 6 < 3;//using 'less than' operator to test whether 6 is less than 3.It returns false.


// 4 . ARRAYS - Single object that contains multiple values enclosed in square brackets separated by commas. 
// - example let myNameArray = ['Chris', 'Bob', 'Jim']; , let myNumberArray = [10, 15, 40];
// - myNameArray[0]; // should return 'Chris' , myNumberArray[2]; // should return 40
// - [] specify an index value, Js are zero-indexed:the first element is at index 0.

// 5. OBJECTS - Can represent a person and contains data about their name, height, weight, language they spreak.
// - it can be a box containing information about its width, length or height.
// - Example let dog = { name ; 'Spot', breed : 'Dalmatian'}; To retrieve the information stored in the object,use the following syntax: dog.name

          // DYNAMIC TYPING
// 1.javasript being a "dynamically typed language" - you dont need to specify the type of data(numbers, strings, arrays etc.)
// Examples if you declare and initialize a variable enclosed in quotes,the browser treats it as a string: let myString = 'Hello'; even if the value enclosed in quotes is just digits,its still a string - not a number
// - let myNumber = '500'; //oops this is still a string
// - typeof myNumber; - typeof is a special operator,returns the data type of the variable
// - let foo = 42; // foo is now a number
// - foo = 'bar'; // foo is now a string
// - foo = true; // foo is now a boolean

        // CONSTANTS IN JAVASCRIPT
//        - You can declare constants as variables just that you must initialize them when you declare them.
//        - you cant assign them a new value after you initialize them
//        - For example, using let you can declare a variable without initializing it: let count;, If you try using const you will see an error: const count;
//        - with let you can initialize a variable, then assign it a new value(its called reassigning): Example let count = 1; count = 2;
//        - you can update,add or remove properties of an object declared using const.

   // WHEN TO USE CONST AND WHEN TO USE LET
   // - If you can initialize a variable when you declare it,and dont need to reassign it later, make it Constant.

      // JAVASCRIPT TYPES
      // 1.PRIMITIVE VALUES AND OBJECTS 

/*
function counter() {
    var i;
for (var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('after loop', i)
}
counter()



var age = 33;
if (age < 35) {
    alert ('still young')
}

else {
    alert ('Oh man, getting old')
}


var myList = ['eggs', 'milk'];

myList[0]; // prints eggs
myList.length // 2
*/