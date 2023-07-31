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

function print_outcome(outcome, player, comp) {
    switch(outcome){
        case 'win' : console.log(`You win! ${player.toUpperCase()} beats ${comp.toUpperCase()}`); break;
        case 'lose' : console.log(`You lose! ${comp.toUpperCase()} beats ${player.toUpperCase()}`); break;
        case 'tie' : console.log(`Tie! ${player.toUpperCase()} ties ${comp.toUpperCase()}`); break;
    };
}


decide_winner(getPlayerChoice(), getComputerChoice());