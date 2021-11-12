var randomNumber = Math.floor(Math.random() * 10)
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var loworHigh = document.querySelector(".loworHigh");
var guessSubmit = document.querySelector(".guessSubmit");
var guessField = document.querySelector(".guessField");
var guessCount = 1;
var resetButton;



function checkGuess () {
    var userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = "Previous Guesses:";
    }
    guesses.textContent += userGuess + " ";
    if(userGuess === randomNumber) {
        lastResult.textContent = "HURRAY!!! CONGRATULATION!! You got it Right!!!";
        lastResult.style.background = "green";
        loworHigh.textContent = " ";
        setGameOver()
    } else if(guessCount === 7){
        lastResult.textContent = "!!!opps Game Over";
        loworHigh.textContent = " ";
        setGameOver();
    } else{
        lastResult.textContent ="Wrong  Bro !!! Try again You Got This";
        if(userGuess <  randomNumber) {
            loworHigh.textContent ="Last guess was too low Think Hard!!!!";

        } else if (userGuess > randomNumber) {
            loworHigh.textContent = "Last guess was too high, keep Trying";

        } 
    lastResult.backgroundColor = "red";
}

guessCount ++;
guessField.value = " ";
guessField.focus();
}


guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Play Again!";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCounter = 1;

var resetParas = document.querySelector(".resultparas  p" );
for(var i = 0; i < resetParas.length; i++) {
    resetParas(i).textContent = '';
}

 resetButton.parentNode.removeChild(resetButton);

 guessField.disabled = false;
 guessSubmit.disabled = false;
 guessField.value = " ";
 guessField.focus();

 randomNumber = math.floor(math.random() * 10) +1;
}
console.log(randomNumber);