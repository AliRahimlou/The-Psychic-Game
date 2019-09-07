var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// var userGuess = document.onkeyup;
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessArray = [];
// var currentGuess = [];






document.onkeyup = function (event) {

    userGuess = event.key;

    if (guessArray.includes(userGuess)) {
        var html = "You already guessed " + userGuess + "!";
        return document.getElementById("game").innerHTML = html;
    } else guessArray.push(userGuess);{
        
    }


    if (computerGuess == userGuess) {
    alert("you win!!")
      wins++;
      guessesLeft = 10;
      guessArray = [];
      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    
    if (computerGuess != userGuess) {
      guessesLeft--;
      
    }
  
    if (guessesLeft == 0) {
      losses++;
      guessesLeft = 10;
      guessArray = [];
    }

  
    
    var html =
      "<p>Guess what letter I am thinking of!</p>" + "<br>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Guesses Left: " + guessesLeft + "</p>" +
      "<p>Your Guesses So Far: " + guessArray + "</p>";
  document.getElementById("game").innerHTML = html;
  }