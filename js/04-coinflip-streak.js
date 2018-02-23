/*eslint-env browser*/

var coinFlip = Math.round(Math.random);

do { 
    coinFlip = parseInt(window.console("Select Heads or Tails")); 
    
if (choice === 0){
   document.write("Heads");
    
} else if (choice == 1){
    window.console("Tails");
} 
    window.console( i + "<br>"); 
} while (i < 5);

window.console("End")