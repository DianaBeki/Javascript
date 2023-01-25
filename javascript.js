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
 */