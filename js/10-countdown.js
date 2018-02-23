/*eslint-env browser*/

var userChoice = parseInt(prompt("Type in time to countdown")); 
var timer = setInterval(countDown, 1000); 

function countDown() { 
   console.log(userChoice); 
   userChoice--; 
   if (userChoice < 0) { 
      clearInterval(timer); 
      console.log("END"); 
   }
}