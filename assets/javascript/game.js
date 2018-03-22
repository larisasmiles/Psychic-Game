// define variables
var wins = 0;
var losses = 0;
var guesses = 9;
var allGuesses = [];

var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = randomLetter[Math.floor(Math.random() * 25)];

//display the appropriate value of wins, losses, and guesses

document.getElementById("wins-span").innerHTML = " " + wins;
document.getElementById("losses-span").innerHTML = " " + losses;
document.getElementById("guesses-span").innerHTML = " " + guesses;

//reset function
function reset() {
  guesses = 9;
  document.getElementById("guesses-span").innerHTML = guesses;
  allGuesses = [];
  document.getElementById("guessesMade").innerHTML = allGuesses;
  computerGuess = randomLetter[Math.floor(Math.random() * 25)];
}


// when a key is released, populate the variable and write it to the screen

document.onkeyup = function(event) {

  var userGuess = event.key;

  console.log("User: " + userGuess);
  console.log("Computer: " + computerGuess);

//pushed the userGuess from the keyboard into the array, and then displays these choices on the screen.
  allGuesses.push(userGuess);
  document.getElementById("guessesMade").innerHTML = allGuesses;

//change the wins and losses counters based on the selections
  if (userGuess === computerGuess) {
    wins++;
    document.getElementById("wins-span").innerHTML = wins;
    guesses = 9;
    document.getElementById("guesses-span").innerHTML = guesses;
    allGuesses = [];
    document.getElementById("guessesMade").innerHTML = allGuesses;
    document.getElementById("correct").innerHTML = " " + computerGuess;
  } else {
    guesses--;
    document.getElementById("guesses-span").innerHTML = guesses;
  };

  if (guesses === 0) {
    losses++;
    document.getElementById("losses-span").innerHTML = losses;
    document.getElementById("correct").innerHTML = " " + computerGuess;
    reset();
  }

  
};