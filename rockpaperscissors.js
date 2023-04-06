//const hands = ['rock', 'paper', 'scissors'];

// function getHand() {
//     return hands[parseInt(Math.random()*10)%3];
// }

// let playerOne = {
//     hand: getHand()
// };
// let playerTwo = {
//     hand: getHand()
// };
// let score1 = 0;
// let score2 = 0;

function playGame() {
    let score1 = 0;
    let score2 = 0;
    for (let i = 0; i < 5; i++) {
    const hands = ['rock', 'paper', 'scissors'];
    function getHand() {
        return hands[parseInt(Math.random()*10)%3];
    }
    let playerOne = {
        name: 'Nash',
        choice1: getHand()
    }
    let playerTwo = {
        name: 'Cash',
        choice2: getHand()
    }

    function playRound(playerOne, playerTwo) {
        let choice1 = playerOne.getHand();
        let choice2 = playerTwo.getHand();

    const win1 = (choice1 == 'paper' && choice2 == 'rock') || (choice1 == 'rock' && choice2 == 'scissors') || (choice1 == 'scissors' && choice2 == 'paper');
    const win2 = (choice1 == 'paper' && choice2 == 'scissors') || (choice1 == 'rock' && choice2 == 'paper') || (choice1 == 'scissors' && choice2 == 'rock');
    
    if (playerOne.choice1 === playerTwo.choice2) {
        console.log(playerOne.name);
        console.log(playerOne.choice1);
        console.log(playerTwo.name);
        console.log(playerTwo.choice2);
        console.log('This is a tie!');
    }
    else if (win1) {
        score1 ++;
        console.log(playerOne.name);
        console.log(playerOne.choice1);
        console.log(playerTwo.name);
        console.log(playerTwo.choice2);
        console.log(playerOne + "wins");
    } else {
        score2 ++;
        console.log(playerOne.name);
        console.log(playerOne.choice1);
        console.log(playerTwo.name);
        console.log(playerTwo.choice2);
        console.log(playerTwo + "wins");
    }
    return {
       playerOne: playerOne,
       playerTwo: playerTwo,
       playRound: playRound
    };
    }
} 
} 


console.log(playGame);
