// Declare global variables with empty values
let randomNumber;
let userGuesses = [];
let attempts = 0;
let remaining;
let maxGuesses;

// Initiate game function
function init() {
    randomNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector("#newGameButton").style.display = "none";
    document.querySelector('#gameArea').style.display = 'none';
    console.log(randomNumber)
}
// Start the game
function startGame() {
    document.querySelector('#welcomeScreen').style.display = 'none';
    document.querySelector("#gameArea").style.display = "block";
}
// Finish the game
function gameEnded() {
    document.querySelector("#newGameButton").style.display = "block";
    document.querySelector("#guessInput").setAttribute('readonly', "readonly");
}
// Buttons [New Game, Easy Mode, Hard Mode]
document.querySelector("#newGameButton").addEventListener('click', ()=> {
    window.location.reload();
})   
document.querySelector('#easyModeButton').addEventListener('click', ()=> {
    startGame()
    maxGuesses = 10;
    remaining = 10;
});

document.querySelector("#hardModeButton").addEventListener("click", ()=> {
	startGame();
    maxGuesses = 5;
    remaining = 5;
});

// Compares user guess input with computer random number
function compareGuess() {
    const userGuess = Number(document.querySelector('#guessInput').value)
    userGuesses.push(" " + userGuess);
    document.querySelector('#guesses').innerHTML = userGuesses;
    attempts++;
    remaining--;
    document.querySelector('#remaining').innerHTML = remaining;

   if (attempts < maxGuesses) {
       if (userGuess > randomNumber) {
        document.querySelector('#textOutput').innerHTML = "Oops number is too high. Try again! &#10060"
        document.querySelector("#guessInput").value = "";
        document.querySelector('#textOutput').style.color = '#FFA900';
    } else if(userGuess < randomNumber){
        document.querySelector("#textOutput").innerHTML = "Oops number is too low. Try again! &#10060";
        document.querySelector("#guessInput").value = "";
        document.querySelector('#textOutput').style.color = '#FFA900';
    } else { 
        document.querySelector("#textOutput").innerHTML = "CONGRATULATIONS! <br> You've guessed the number! <br> &#127881 &#127881 &#127881 <br> <br> Your attemps: " + attempts;
        document.querySelector('#textOutput').style.color = '#0fab63';
        document.querySelector('#statsContainer').style.display = 'none';
        document.querySelector('#guessInput').style.display = 'none';
        document.querySelector('.game-instructions').style.display = 'none';
        gameEnded();
    }
   } else {
       if (userGuess > randomNumber) {
        document.querySelector('#textOutput').innerHTML = "YOU LOSE! <br> Try again next time. &#128546 <br> <br> The number was: " + randomNumber;
        document.querySelector('#textOutput').style.color = '#f51905';
        document.querySelector('#statsContainer').style.display = 'none';
        document.querySelector('#guessInput').style.display = 'none';
        document.querySelector('.game-instructions').style.display = 'none';
        gameEnded();
    } else if(userGuess < randomNumber){
        document.querySelector('#textOutput').innerHTML = "YOU LOSE! <br> Try again next time. &#128546 <br> <br> The number was: " + randomNumber;
        document.querySelector('#textOutput').style.color = '#f51905';
        document.querySelector('#statsContainer').style.display = 'none';
        document.querySelector('#guessInput').style.display = 'none';
        document.querySelector('.game-instructions').style.display = 'none';
        gameEnded();
    } else { 
        document.querySelector("#textOutput").innerHTML = "CONGRATULATIONS! <br> You've guessed the number. <br> &#127881 &#127881 &#127881 <br> <br> Your attemps: " + attempts;
        document.querySelector('#textOutput').style.color = '#0fab63';
        document.querySelector('#statsContainer').style.display = 'none';
        document.querySelector('#guessInput').style.display = 'none';
        document.querySelector('.game-instructions').style.display = 'none';
        gameEnded();
    }
   }
}
init();

// Controls the input value
document.querySelector("#guessInput").addEventListener("change", () => {
      compareGuess();
});


