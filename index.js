const computerDisplay = document.getElementById('computer-choice')
const userDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const gameChoice  = document.querySelectorAll('button')

let _User
let _Computer

gameChoice.forEach(gameChoice => gameChoice.addEventListener('click',(e) => {
    _User = e.target.id
    userDisplay.innerHTML = _User
    computerChoice()
}))

function computerChoice() {
    const numberGenerator = Math.floor(Math.random() * gameChoice.length)
// I chose '.floor' to round it to a full number. 
// The reason made it '* gameChoice.length' is so that I didn´t need to think about the number it will eventually need, in the random number.

    if (numberGenerator === 1) {
        computerChoice = 'rock'
    }
    if (numberGenerator === 2) {
        computerChoice = 'paper'
    }
    if (numberGenerator === 3) {
        computerChoice = 'scissor'
    }
    if (numberGenerator === 4) {
        computerChoice = 'lizard'
    }
    if (numberGenerator === 5) {
        computerChoice = 'spock'
    }

    computerDisplay.innerHTML = computerChoice
}

