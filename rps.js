
function start() {
const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10)%3];
}
   
function choice1() {
    return getHand();   
}

function choice2() {
    return getHand();
}

let player1 = {
    name: 'Nash',
    choice: choice1()
}
let player2 = {
    name: 'Bob',
    choice: choice2()
}

const win1 = (player1.choice == 'paper' && player2.choice == 'rock') || (player1.choice == 'rock' && player2.choice == 'scissors') || (player1.choice == 'scissors' && player2.choice == 'paper');
const win2 = (player1.choice == 'paper' && player2.choice == 'scissors') || (player1.choice == 'rock' && player2.choice == 'paper') || (player1.choice == 'scissors' && player2.choice == 'rock');

if (player1.choice == player2.choice) {
    console.log(player1.name + ': ' + player1.choice);
    console.log(player2.name + ': ' + player2.choice);
    console.log('This is a tie!');
}
else if (win1) {
    console.log(player1.name + ': ' + player1.choice);
    console.log(player2.name + ': ' + player2.choice);
    console.log(player1.name + " wins");
} else if (win2) {
    console.log(player1.name + ': ' + player1.choice);
    console.log(player2.name + ': ' + player2.choice);
    console.log(player2.name + " wins");
} else {
    return
}

};


console.log(start());