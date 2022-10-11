const _Choices = ['rock', 'paper', 'scissor', 'lizard', 'spock'];

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "game-area") {
                alert ("you clicked for a game!" )
            } else {
                let _GameType = this.getAttribute("data_type");
                alert (`Choose a ${_GameType}!`)
            }
        })
    }
})
console.log("button");

function _Game () {
    _PlayRound ();
}

function _PlayRound () {
    const _PlayerSelect = _PlayerChoice ();
    const _ComputerSelect = _ComputerChoice ();
}

function _PlayerChoice () {

}

function _ComputerChoice () {
    return _Choices [Math.floor(Math.random() = _Choices.length)]
}

