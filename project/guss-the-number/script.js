let randomNumber = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const allGuesses = document.querySelector('.guesses');
let remainingChances = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess =[];
let numGuess = 0;

let playGame = true;

function newG(){
    if(playGame){
        submit.addEventListener('click', function(e){
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validateGuess(guess);
        }); 
    }
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a valid Number')
    } 
    else if(guess < 1){
        alert('Enter Number Greater Than 1')
    } 
    else if(guess > 100){
        alert('Enter Number less Than 100')
    } 
    else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over : Number was ${randomNumber}`);
            endGame();
    }
    else{
        displayGuess(guess);
        checkGuess(guess)
    }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Won');
        endGame();
    }
    else if( guess < randomNumber){
        displayMessage('Number is Low');
    }
    else if( guess > randomNumber){
        displayMessage('Number is High');
    }
}

function displayGuess(guess){
    userInput.value ='';
    allGuesses.innerHTML+= `${guess}, `;
    numGuess++;
    remainingChances.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h3 id="newGame">New Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const playNewGame = document.querySelector("#newGame");
    playNewGame.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess =[];
        numGuess = 0;
        allGuesses.innerHTML = '';
        remainingChances.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });
}