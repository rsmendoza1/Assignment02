/*eslint-env browser*/

var firstNumber; //FIRST STRING ENTER BY USER
var secondNumber; //SECOND STRING ENTER BY USER 

//ENTER FIRST NUMBER FROM USER AS STRING 
firstNumber = window.prompt("Choose a number between 1 - 10"); 

//ENTER SECOND NUMBER FROM USER AS STRING
secondNumber = window.prompt("Choose a different number between 1 - 10"); 

//CONVERT NUMBERS FROM STRINGS TO INTEGERS
firstNumber = parseInt(firstNumber); 
secondNumber = parseInt(secondNumber);

//DETERMINE RESULT
if (firstNumber > secondNumber) 
    window.document.write(firstNumber + " is largest "); 

if (secondNumber > firstNumber) 
    window.document.write(secondNumber + " is largest ");