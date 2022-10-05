const computerDisplay = document.getElementById('computer-choice')
const userDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const gameChoice  = document.querySelectorAll('button')

let _User

gameChoice.forEach(gameChoice => gameChoice.addEventListener('click',(e) => {
    _User = e.target.id
    userDisplay.innerHTML = _User
}))