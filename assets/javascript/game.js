var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chances = 0;
var wrongGuess = [];
var guessesLeft = 9;
var yourGuessesSoFar = 0;
var answerArray = [];
var wins = 0;
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
var losses = 0;

    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
            
            document.onkeyup = function(){
               var userguess = String.fromCharCode(event.keyCode).
               toLowerCase();
               console.log(userguess); }
         