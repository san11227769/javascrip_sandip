// Number guessing game
const randomNumber = Math.floor(Math.random() * 100) + 1;


const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const result = document.getElementById('result');
const selectedNumberList = document.getElementById('selectednumber-list');

guessButton.addEventListener('click', () => {
    if (!guessInput.value) {
        result.textContent = 'Please enter a number.';
        return;
    }
    
    const userGuess = parseInt(guessInput.value);
    // Add the selected number to the list
    const listItem = document.createElement('li');
    listItem.textContent = userGuess;

    // max 10 atem then sho aler and restart game
    if (selectedNumberList.children.length >= 10) {
        alert('You have reached the maximum number of attempts. The game will restart.');
        location.reload();
    }
    selectedNumberList.appendChild(listItem);
    if (userGuess === randomNumber) {
        alert('Congratulations! You guessed the number.');
        location.reload();
    } else if (userGuess < randomNumber) {
        result.textContent = 'Too low! Try again.';
    } else {
        result.textContent = 'Too high! Try again.';
    }

  

});