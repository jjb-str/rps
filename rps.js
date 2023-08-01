

function getComputerChoice() {
    let rand_num = Math.floor(Math.random() * 3);
    let decision = '';

    switch(rand_num) {
        case 0: decision = 'rock'; break;
        case 1: decision = 'paper'; break;
        case 2: decision = 'scissors'; break;
    }

    return decision;
}

function getPlayerChoice() {
    let decision = prompt().toLowerCase();
    return decision;
}

function decide_winner(player, comp) {
    let outcome = '';
    switch (player) {
        case 'rock': 
            switch (comp) {
                case 'rock': outcome = 'tie'; break;
                case 'paper': outcome = 'lose'; break;
                case 'scissors' : outcome = 'win'; break; 
            };
            break;
        case 'paper': 
            switch (comp) {
                case 'rock': outcome = 'win'; break;
                case 'paper': outcome = 'tie'; break;
                case 'scissors': outcome = 'lose'; break;
            };
            break;
        case 'scissors': 
            switch (comp) {
                case 'rock': outcome = 'lose'; break;
                case 'paper': outcome = 'win'; break;
                case 'scissors': outcome = 'tie'; break;
            };
            break;
    };
    
    print_outcome(outcome, player, comp);
}

function resetScore() {
    compScore = 0;
    playerScore = 0;
}

function checkWinner() {
    if (compScore >= 5) {
        let loseText = document.querySelector('#status'); 
        loseText.style = 'color: red; font-size: 18pt;';
        loseText.textContent = `GAME OVER! Play again?`
        resetScore();
    } else if (playerScore >= 5) {
        let winText = document.querySelector('#status');
        winText.textContent = `YOU WIN! Congratulations!`;
        winText.style = 'color: green; font-size: 18pt;';
        resetScore();
    }
}

function updateScore() {
    document.querySelector('#score').textContent = `SCORE: You: ${playerScore}  Opponent: ${compScore}`
}

function print_outcome(outcome, player, comp) {

    let text = document.querySelector('#status');
    text.style = 'color:black;font-size-14pt;'
    text.textContent = ''

    switch(outcome){
        case 'win' : document.querySelector('#status').textContent = `You win! ${player.toUpperCase()} beats ${comp.toUpperCase()}`; playerScore++; break;
        case 'lose' : document.querySelector('#status').textContent = `You lose! ${comp.toUpperCase()} beats ${player.toUpperCase()}`; compScore++; break;
        case 'tie' : document.querySelector('#status').textContent = `Tie! ${player.toUpperCase()} ties ${comp.toUpperCase()}`; break;
    };
    document.querySelector('div').contentText;
    updateScore();
    checkWinner();
}





let playerScore = 0;
let compScore = 0;




const rock = document.querySelector('#rock');
rock.addEventListener('click', () => decide_winner('rock', getComputerChoice()));

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => decide_winner('paper', getComputerChoice()));

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => decide_winner('scissors', getComputerChoice()));
