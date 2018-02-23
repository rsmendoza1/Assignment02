/*eslint-env browser*/

var coinFlip = Math.round(Math.random);

var choice = parseInt(window.prompt("Select Heads or Tails")); 
if (choice === 0){
   document.write("Heads");
    
} else if (choice == 1){
    document.write("Tails");
} 

if (coinFlip === 0 && choice === "heads" ) {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (coinFlip === 0 && choice === "tails"); {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (coinFlip === 1 && === "heads"); {
    window.alert("The flip was tails but you chose heads...you lose!");
} else (coinFlip == 1 && choice === "tails"); {
    window.alert("The flip was tails but you chose tails...you win!");
}


