var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numGuess=  ;  //number of guesses
var userGuessed=[]; //letters user guessed
var loseCounter=[0]; // var losses=loseCounter;
var winCounter=[0];  // var wins=winCounter;

var amountOfGuess=numGuess;
// Randomizer  alphabet 
function randomizer(alphabet) {
	return alphabet[Math.floor(Math.random()* alphabet.length)];
}
var computerGuess=randomizer(alphabet);
// console.log(computerGuess); do not use this console.log as it will freeze  next ramdomizer

//function that starts randomizer alphabet and compares to UserGuess
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();   /// how can I include upper case?
	// var computerGuess=randomizer(alphabet);
		
	if (userGuess== computerGuess) {
		console.log("correct", userGuessed);
		document.getElementById("winCounter").innerHTML= (winCounter.length);
		userGuessed.push(userGuess);
		document.getElementById("userGuessed").innerHTML=(userGuessed);
		(winCounter+=1);
		// document.getElementById("userGuessed").innerHTML=(userGuessed.length);
		
	} else {
		console.log("no", numGuess, userGuessed);
		document.getElementById("loseCounter").innerHTML= (loseCounter.length);
		userGuessed.push(userGuess);
		document.getElementById("userGuessed").innerHTML=(userGuessed);
		numGuess--;  // (loseCounter+=1);
		
		document.getElementById("numGuess").innerHTML=(numGuess);
		// document.getElementById("userGuessed").innerHTML=(userGuessed.indexOf);
		
	}
	if (numGuess===0 ) {
		// reset.resetGame()
		alert("You lose!");
		reset.resetGame();
		loseCounter+=1;
		userGuessed=[];
	
	};
}
var reset = {
	resetGame: function() {
		if(numGuess==0) {
			document.onekeyup=false;
			numGuess=9;
			userGuessed=[];
		}
	}
}