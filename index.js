const computerDisplay = document.getElementById('computer-choice')
const userDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const gameChoice  = document.querySelectorAll('button')

let _User

gameChoice.forEach(gameChoice => gameChoice.addEventListener('click',(e) => {
    _User = e.target.id
    userDisplay.innerHTML = _User
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * gameChoice.length)
// I chose .floor to round it to a full number. 
// I chose to make it * gameChoice so that I didn´t need to think about the number it will eventually need in the random number.
    console.log(randomNumber);
}