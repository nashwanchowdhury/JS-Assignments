let score1 = 0;
let score2 = 0;

const hands = ['rock', 'paper', 'scissors'];

var player1 = {
    name: 'Nash',
    getHand: function () {
        return(hands[parseInt(Math.random()*10)%3]);
    }
}
var player2 = {
    name: 'Bob',
    getHand: function () {
        return hands[parseInt(Math.random()*10)%3];
        }
    
}
var player3 = {
    name: 'Devin',
    getHand: function () {
        return hands[parseInt(Math.random()*10)%3];
        }
    
}
var player4 = {
    name: 'Bonnie',
    getHand: function() {
        return hands[parseInt(Math.random()*10)%3];
        }
    
}
function playRound(p1, p2) {

choice1 = p1.getHand();
choice2 = p2.getHand();


const win1 = (choice1 == 'paper' && choice2 == 'rock') || (choice1 == 'rock' && choice2 == 'scissors') || (choice1 == 'scissors' && choice2 == 'paper');
const win2 = (choice1 == 'paper' && choice2 == 'scissors') || (choice1 == 'rock' && choice2 == 'paper') || (choice1 == 'scissors' && choice2 == 'rock');

if (choice1 == choice2) {
     console.log(p1.name + ': ' + choice1);
     console.log(p2.name + ': ' + choice2);
     console.log('This is a tie!');
}
else if (win1) {
    score1++;
    console.log(p1.name + ': ' + choice1);
    console.log(p2.name + ': ' + choice2);
    console.log(p1.name + ' wins!');
} else {
    score2++;
    console.log(p1.name + ': ' + choice1);
    console.log(p2.name + ': ' + choice2);
    console.log(p2.name + ' wins!');
}
};

//playRound(player1, player2);

function playGame (p1, p2, playUntil) {
    if (score1 == playUntil) {
        console.log(p1.name + " wins the best of 5!");
        score2 = 0;
        score1 = 0;
        p1.winner = true; 
    } else if (score2 == playUntil) {
        console.log(p2.name + " wins the best of 5!");
        score2 = 0;
        score1 = 0;
        p2.winner = true; 
    } else {
        playRound(p1, p2);
        playGame(p1, p2, playUntil);
    }

}
//playGame(player1, player2, 5);
function playTournament (p1, p2, p3, p4, playUntil) {
    
    playGame(p1, p2, playUntil);
    playGame(p3, p4, playUntil);
   
    if (p1.winner == true && p3.winner == true) {
        p1.winner = false;
        p2.winner = false;
        p3.winner = false;
        p4.winner = false; 
        playGame(p1, p3, playUntil);
    } else if (p1.winner == true && p4.winner == true) {
        p1.winner = false;
        p2.winner = false;
        p3.winner = false;
        p4.winner = false;
        playGame(p1, p4, playUntil);
    } else if (p2.winner == true && p3.winner == true) {
        p1.winner = false;
        p2.winner = false;
        p3.winner = false;
        p4.winner = false; 
        playGame(p2, p3, playUntil);
    } else {
        p1.winner = false;
        p2.winner = false;
        p3.winner = false; 
        p4.winner = false; 
        playGame(p2, p4, playUntil);
    }

    if (p1.winner == true) {
        console.log(p1.name + ' is the world champion!')
    } else if (p2.winner == true) {
        console.log(p2.name + ' is the world champion!')
    } else if (p3.winner == true) {
        console.log(p3.name + ' is the world champion!')
    } else if (p4.winner == true) {
        console.log(p4.name + ' is the world champion!')
    } else 
        return 1;

}

playTournament(player1, player2, player3, player4, 5);
