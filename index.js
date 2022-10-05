const _ComputerDisplay = document.getElementById('computer-choice')
const _UserDisplay = document.getElementById('user-choice')
const _ResultDisplay = document.getElementById('result')
const _GameChoice  = document.querySelectorAll('bn')

let _User

_Choice.forEach(_Choice => _Choice.addEventListener('click',(e) => {
    _User = e.target.class
    _UserDisplay.innerHTML = _User
}));