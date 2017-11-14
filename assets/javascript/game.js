 
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var wins = 0;
  var losses = 0;
  var guessesLeft = 10;
  var guessCount = "";
  var lettersPressed = [];
  var letter;
  

function randomLetter() {
  var pickedLetters = letters[Math.floor(Math.random() * letters.length)];
  console.log(pickedLetters);
  lettersPressed

}

document.onkeyup = function(event) {
  var userGuess = event.key;
  lettersPressed += userGuess + ',';

  if(guessesLeft > 0 && userGuess != letter) {
    guessesLeft --;
  }
  else if (guessesLeft === 0 && userGuess != letter) {
    losses ++;
    guessesLeft = 10;
    lettersPressed = " ";
    randomLetter();
  }
}



