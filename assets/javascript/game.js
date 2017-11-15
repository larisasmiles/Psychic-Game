 
  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var wins = 0;
  var losses = 0;
  var guessesLeft = 10;
  var guessCount = " ";
  var letter;
  

  function randomLetter() {

  var lettersGuessed = [Math.floor(Math.random() * letters.length)];
  letter = letters[lettersGuessed];
  return letter;
}

  document.onkeyup = function(event) {
  var lettersGuessed = []
  var userGuess = event.key;
  lettersGuessed += userGuess + ',';

  if(lettersGuessed === letter) {
    alert("You can read my mind!")
    reset 
  }
  else if (lettersGuessed != letter && guessesLeft > 1) {
    alert("You can't read my mind! Try again!")
    losses ++;
    guessesLeft --;
    lettersGuessed << letter;
    randomLetter();
  }
  else {
  
    alert("Don't quit your day job! You lose!")
  }
}



