const hands = ['rock', 'paper', 'scissors'];

var computer_score = document.querySelector("compscore");
var player_score = document.querySelector("playerscore");

var comp = {
    name: 'Computer',
    getHand: function () {
        return(hands[parseInt(Math.random()*10)%3]);
    }
}

let score1 = 0;
let score2 = 0;

function rock() {

document.getElementById("player").innerHTML = 'You chose rock'
let computerchoice = comp.getHand();
document.getElementById("computer").innerHTML = 'The computer chose ' + computerchoice
const win1 = (computerchoice == 'scissors')    
if (computerchoice == 'rock') {
    document.getElementById("result").innerHTML = 'The game is a tie'
}
else if (win1) {
    playerscore.innerText = ++score1;
    document.getElementById("result").innerHTML = 'You win'
} else {
    compscore.innerText = ++score2;
    document.getElementById("result").innerHTML = 'You lose to a dumb computer'
}

}

function paper() {
document.getElementById("player").innerHTML = 'You chose paper'
let computerchoice = comp.getHand();
document.getElementById("computer").innerHTML = 'The computer chose ' + computerchoice
const win1 = (computerchoice == 'rock') 
    
if (computerchoice == 'paper') {
    document.getElementById("result").innerHTML = 'The game is a tie'
}
else if (win1) {
    playerscore.innerText = ++score1; 
    document.getElementById("result").innerHTML = 'You win'
} else {
    compscore.innerText = ++score2;
    document.getElementById("result").innerHTML = 'You lose to a dumb computer'
}
}

function scissors () {
document.getElementById("player").innerHTML = 'You chose scissors'
let computerchoice = comp.getHand();
document.getElementById("computer").innerHTML = 'The computer chose ' + computerchoice
const win1 = (computerchoice == 'paper') 
    
if (computerchoice == 'scissors') {
    document.getElementById("result").innerHTML = 'The game is a tie'
}
else if (win1) {
    playerscore.innerText = ++score1;
    document.getElementById("result").innerHTML = 'You win'
} else {
    compscore.innerText = ++score2;
    document.getElementById("result").innerHTML = 'You lose to a dumb computer'
}
}

function reset() {
    score1 = 0;
    score2 = 0;
    compscore.innerText = score2;
    playerscore.innerText = score1;
}