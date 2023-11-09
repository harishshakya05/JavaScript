let randomNumber = parseInt(Math.random()*100 + 1 );
const guess = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const lowOrHi = document.querySelector('.lowOrHi');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const resultParas = document.querySelector('.resultParas');
const p  = document.createElement('p');

let gameStart = true;
let userGuesses = [];
let guessCount = 1;

if(gameStart){
    guessSubmit.addEventListener('click',(e)=>{
        e.preventDefault();
        const userGuess = parseInt(guess.value);
        validateGuess(userGuess);
    })   
}

function validateGuess(userGuess){
    if(isNaN(userGuess)){
        alert('please enter valid input number');
    }else if(userGuess < 1 ){
        alert('please enter number greater than 1');
    }else if(userGuess > 100 ){
        alert('please enter number less than 100');
    }else{
        userGuesses.push(userGuess);
        console.log(guessCount);
        if(guessCount === 11)
        {   
            displayGuess(userGuess)
            displayMessage(`Game over! random number was : ${randomNumber}`)
            endGame();
        }else{
            displayGuess(userGuess);
            checkGuess(userGuess);
        }

    }
}

function checkGuess(userGuess){
    if(userGuess === randomNumber){
        displayMessage('You are winner!')
        endGame()
    }else if(userGuess > randomNumber){
        displayMessage('Number is too high!')
    }else if(userGuess < randomNumber){
        displayMessage('Number is too low!')
    }
}
function displayGuess(userGuess){
    guesses.innerHTML += `${userGuess}, `
    guessCount++;
    lastResult.innerHTML = 11 - guessCount;
    guess.value =''

}
function displayMessage(message){
    lowOrHi.innerHTML = message
}
function endGame(){
    gameStart = false;
    guess.setAttribute('disabled','')
    guessSubmit.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    resultParas.appendChild(p)
    newGame();
}
function newGame(){
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click',()=>{
        alert("test")
        randomNumber = parseInt(Math.random()*100 + 1 );        
        guessCount = 1;
        userGuesses = [];
        guess.value =''
        guesses.innerHTML = ''
        lastResult.innerHTML = 10
        lowOrHi.innerHTML =''
        guess.removeAttribute('disabled')
        guessSubmit.removeAttribute('disabled')
        resultParas.removeChild(p);
        gameStart = true;        
    })
    
}