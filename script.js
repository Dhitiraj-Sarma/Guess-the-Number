let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkGuess() {
    if (attempts >= maxAttempts) {
        showMessage(`Sorry, you've reached the maximum number of attemps (${maxAttempts}). The correct number is ${secretNumber}. Please Restart the game.`);
        return;
    }

    const userGuess = document.getElementById("userGuess").value;
    attempts++;

    if (userGuess == secretNumber) {
        showMessage(`Congratulations! You guessed the correct number (${secretNumber}) in ${attempts} attempts.`);
    } else if (userGuess < secretNumber) {
        showMessage("Too low. Try again!");
    } else {
        showMessage("Too high. Try again!");
    }
}


function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    showMessage("Game restarted. Guess a new number!");
    document.getElementById("userGuess").value = ""
}

function showMessage(message) {
    document.getElementById("message").innerText = message;
}