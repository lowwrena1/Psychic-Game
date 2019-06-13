var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chances = 0;
var wrongGuess = [];
var guessesLeft = 9;
var yourGuessesSoFar = 0;
var answerArray = [];
var wins = 0;
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
var losses = 0;
let reset = () => {
    console.log("Resetting........")
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesLeft = 9;
    wrongGuess = [];
    
}
document.onkeyup = function(event){
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(event)
        var userKeyPressed = event.key.toLowerCase();
        if (chances === 0) {
            console.log(computerGuess)
        }

        if (computerGuess === userKeyPressed) {
            ++wins
            reset()
            console.log(`You now have ${wins} wins`)
        } else {
            --guessesLeft
           
            console.log(`You now have ${guessesLeft} guesses left`);
            wrongGuess.push(userKeyPressed);
        }
        if (guessesLeft === 0) { 
            losses++;
           console.log('You Lose')
            reset()
        }
    } else {
        alert("Not a number")
    }

    document.getElementById("wins").innerHTML = wins;

    document.getElementById("userGuess").innerHTML = wrongGuess;

    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    document.getElementById("losses").innerHTML = losses;
}
    //why does my code add losses when the user wins?
    //how do i keep the words while showing number results?
