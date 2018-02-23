/*eslint-env browser*/

var coinFlip = Math.round(Math.random);

//FOR LOOP  
var i; 
for (i =1; i <= 10; i += 1) {
    document.write(i + "<br>");
}

var choice = parseInt(window.prompt("Select Heads or Tails")); 
if (choice === 0){
    window.console("Heads");

} else if (choice == 1){
    window.console("Tails");
} 
