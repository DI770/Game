let _PlayerScore = 0;
let _ComputerScore = 0;
const _PlayerScore_span = document.getElementById("player-score");
const _ComputerScore_span = document.getElementById("computer-score");
const _ScoreBoard_div = document.querySelector(".score-board");
const _Result_div_p = document.querySelector(".result > p");
const _Rock_div = document.getElementById('r');
const _Paper_div = document.getElementById('p');
const _Scissor_div = document.getElementById('s');
const _Lizard_div = document.getElementById('l');
const _Spock_div = document.getElementById('sp');

function _GetComputerChoice () {
    const _Choices = ['r', 'p', 's', 'l', 'sp'];
    const _RandomNumber = Math.floor(Math.random() * 5);
	return _Choices [_RandomNumber];
}

function _ConvertToWord (_Letter) {
    if (_Letter === 'r' ) return 'rock';
    if (_Letter === 'p') return 'paper';
    if (_Letter === 's') return 'scissor';
    if (_Letter === 'l') return 'lizard';
    return 'spock';
}

function _Win (_UserChoice, _ComputerChoice) {
    _PlayerScore++
    _PlayerScore_span.innerHTML = _PlayerScore;
    _ComputerScore_span.innerHTML = _ComputerScore;
    const _UserWord = 'Players choice of,'.fontsize(6);
    const _ComputerWord = 'Computers choice of,'.fontsize(6);
    _Result_div_p.innerHTML = `${_UserWord} ${_ConvertToWord(_UserChoice)+'.'} Trumps over ${_ComputerWord} ${_ConvertToWord(_ComputerChoice)}. You win!`
}

function _Loose (_UserChoice, _ComputerChoice) {
    _ComputerScore++
    _PlayerScore_span.innerHTML = _PlayerScore;
    _ComputerScore_span.innerHTML = _ComputerScore;
    const _UserWord = 'Players choice of,'.fontsize(6);
    const _ComputerWord = 'Computers choice of,'.fontsize(6);
    _Result_div_p.innerHTML = `${_UserWord} ${_ConvertToWord(_UserChoice)+'.'} Looses to ${_ComputerWord} ${_ConvertToWord(_ComputerChoice)}. Computer wins!`
}

function _Tie (_UserChoice, _ComputerChoice) {
    _PlayerScore_span.innerHTML = _PlayerScore;
    _ComputerScore_span.innerHTML = _ComputerScore;
    const _UserWord = 'Players choice of,'.fontsize(6);
    const _ComputerWord = 'Computers choice of,'.fontsize(6);
    _Result_div_p.innerHTML = `${_UserWord} ${_ConvertToWord(_UserChoice)+'.'} Equals ${_ComputerWord} ${_ConvertToWord(_ComputerChoice)}. It is a tie!`
}

function _Game(_UserChoice) {
    const _ComputerChoice = _GetComputerChoice ();
    switch (_UserChoice + _ComputerChoice){
        case 'rs':
        case 'rl':
        case 'pr':
        case 'psp':
        case 'sp':
        case 'sl':
        case 'lp':
        case 'lsp':
        case 'sps':
        case 'spr':
                _Win(_UserChoice, _ComputerChoice);
            break;
        case 'sr':
        case 'lr':
        case 'rp':
        case 'spp':
        case 'ps':
        case 'ls':
        case 'pl':
        case 'spl':
        case 'sps':
        case 'rsp':
                _Loose(_UserChoice, _ComputerChoice);
            break
        case 'rr':
        case 'pp':
        case 'ss':
        case 'll':
        case 'spsp':
                _Tie(_UserChoice, _ComputerChoice);
            break
}
}


_Main();

function _Main() {
    _Rock_div.addEventListener('click', function () {
        _Game('r');
    })

    _Paper_div.addEventListener('click', function () {
        _Game('p');
    })

    _Scissor_div.addEventListener('click', function () {
        _Game('s');
    })

    _Lizard_div.addEventListener('click', function () {
        _Game('l');
    })

    _Spock_div.addEventListener('click', function () {
        _Game('sp');
    })
}

