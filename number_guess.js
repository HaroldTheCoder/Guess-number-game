let randomNumber;
let userGuesses = [];
let attempts = 0;
let remaining = 15;
let maxGuesses;

function init() {
    randomNumber = Math.floor(Math.random() * 15 + 1);
    document.querySelector("#newGameButton").style.display = "none";
    document.querySelector('#gameArea').style.display = 'none';
    console.log(randomNumber)
}
function startGame() {
    document.querySelector('#welcomeScreen').style.display = 'none';
    document.querySelector("#gameArea").style.display = "block";
}
function gameEnded() {
    document.querySelector("#newGameButton").style.display = "block";
    document.querySelector("#guessInput").setAttribute('readonly', "readonly");
}
document.querySelector("#newGameButton").addEventListener('click', ()=> {
    window.location.reload();
})
    
document.querySelector('#easyModeButton').addEventListener('click', ()=> {
    startGame()
    maxGuesses = 10;
});

document.querySelector("#hardModeButton").addEventListener("click", ()=> {
	startGame();
    maxGuesses = 5;
});

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
        document.querySelector("#textOutput").innerHTML = "Congratulations, you've guessed the number! &#127881 &#127881 &#127881 <br> Your attemps: " + attempts;
        document.querySelector('#textOutput').style.color = '#0fab63';
        gameEnded();
    }
   } else {
       if (userGuess > randomNumber) {
        document.querySelector('#textOutput').innerHTML = "You lose. &#128546 <br> The number was: " + randomNumber;
        document.querySelector('#textOutput').style.color = '#f51905';
        gameEnded();
    } else if(userGuess < randomNumber){
        document.querySelector('#textOutput').innerHTML = "You lose. &#128546 <br> The number was: " + randomNumber;
        document.querySelector('#textOutput').style.color = '#f51905';
        gameEnded();
    } else { 
        document.querySelector("#textOutput").innerHTML = "Congratulations, you've guessed the number! &#127881 &#127881 &#127881 <br> Your attemps: " + attempts;
        document.querySelector('#textOutput').style.color = '#0fab63';
        gameEnded();
    }
   }
}
init();

document.querySelector("#guessInput").addEventListener("change", () => {
      compareGuess();
});

