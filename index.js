const computerDisplay = document.getElementById('computer-choice');
const userDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const gameChoice  = document.querySelectorAll('button');

let User;
let Computer;
let Result;

gameChoice.forEach(gameChoice => gameChoice.addEventListener('click',(e) => {
    User = e.target.id;
    userDisplay.innerHTML = User;
    computerChoice ();
    getResult();
}));

function computerChoice() {
    const numberGenerator = Math.floor(Math.random() * gameChoice.length);
// I chose '.floor' to round it to a full number. 
// The reason made it '* gameChoice.length' is so that I didn´t need to think about the number it will eventually need, in the random number.

    if (numberGenerator === 0) {
        Computer = 'rock';
    } else if (numberGenerator === 1) {
        Computer = 'paper';
    } else if (numberGenerator === 2) {
        Computer = 'scissor';
    } else if (numberGenerator === 3) {
        Computer = 'lizard';
    } else {
        Computer = 'spock';
}

computerDisplay.innerHTML = Computer;
}

function getResult() {

    if (Computer === User){
        Result = ' It is a draw! ';
    } else if (Computer === 'rock' && User === 'paper') {
        Result = ' Paper catches rock. You have won! ';
    } else if (Computer === 'rock' && User === 'scissor') {
        Result = ' Scissor blunts on rock. You have lost! ';
    } else if (Computer === 'rock' && User === 'lizard') {
        Result = ' Rock crushes lizard. You have lost! ';
    } else if (Computer === 'rock' && User === 'spock') {
        Result = ' Spock vaporizes rock. You have won! ';
    }
    if (Computer === 'paper' && User === 'rock') {
        Result = ' Paper catches rock. You have lost! ';
    } else if (Computer === 'paper' && User === 'scissor') {
        Result = ' Scissor cuts paper. You have won! ';
    } else if (Computer === 'paper' && User === 'lizard') {
        Result = ' Lizard eats paper. You have won! ';
    } else if (Computer === 'paper' && User === 'spock') {
        Result = ' Paper disproves Spock. You have lost! ';
    }
    if (Computer === 'scissor' && User === 'rock') {
        Result = ' Scissor blunts on rock. You have won! ';
    } else if (Computer === 'scissor' && User === 'paper') {
        Result = ' Scissor cuts paper. You have lost! ';
    } else if (Computer === 'scissor' && User === 'lizard') {
        Result = ' Scissor decapitates lizard. You have lost! ';
    } else if (Computer === 'scissor' && User === 'spock') {
        Result = ' Spock smashes scissors. You have won! ';
    }
    if (Computer === 'lizard' && User === 'rock') {
        Result = ' Rock crushes lizard. You have won! ';
    } else if (Computer === 'lizard' && User === 'paper') {
        Result = ' Lizard eats paper. You have lost! ';
    } else if (Computer === 'lizard' && User === 'scissor') {
        Result = ' Scissor decapitates lizard. You have won! ';
    } else if (Computer === 'lizard' && User === 'spock') {
        Result = ' Lizard poisons Spock. You have lost! ';
    }
    if (Computer === 'spock' && User === 'rock') {
        Result = ' Spock vaporizes rock. You have lost! ';
    } else if (Computer === 'spock' && User === 'paper') {
        Result = ' Paper disproves Spock. You have won! ';
    } else if (Computer === 'spock' && User === 'scissor') {
        Result = ' Spock smashes scissors. You have lost! ';
    } else if (Computer === 'spock' && User === 'lizard') {
        Result = ' Lizard poisons Spock. You have won! ';
    }
    
    resultDisplay.innerHTML = Result;

}