var computerGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var game = 0;
    var wins = 0;
    var losses = 0;
    var guessesLeft = 0;
    var yourGuessesSoFar = 0;
    var answerArray = [];

    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
            
            document.onkeyup = function(){
               var userguess = String.fromCharCode(event.keyCode).
               toLowerCase();
               console.log(userguess); }
           var options = computerGuess[Math.floor(Math.random()*options.length)];
           console.log(computerGuess);