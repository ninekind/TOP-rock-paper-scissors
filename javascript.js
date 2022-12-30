const choices = ['rock', 'paper', 'scissors'];


const getComputerChoice = () => {
    const choicePC = choices[Math.floor(Math.random() * choices.length)];
    return choicePC;
}


const checkWinner = (playerSelection, computerSelection) => {

    if (playerSelection == computerSelection) {
        return 'Tie'
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return 'Player'
    } else {
        return 'PC'
    }
}


const playRound = (playerSelection, computerSelection) => {
    const result = checkWinner(playerSelection, computerSelection);

    if (result == 'Tie') {
        return 'It was a tie!!!'
    } else if (result == 'Player') {
        return `You win!!! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose!!! ${computerSelection} beats ${playerSelection}`
    }

}


const getPlayerChoice = () => {
    let playerInput = false;
    while (playerInput == false) {
        const inputted = prompt('Rock, Paper, Scissors?');
        if (inputted == null) {
            continue;
        }
        const inputInLower = inputted.toLocaleLowerCase();
        if (choices.includes(inputInLower)) {
            playerInput = true;
            return inputInLower;
        }
    }
}


const game = () => {
    let scorePlayer = 0;
    let scorePC = 0;


    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log('---------------------------------------');
        if (checkWinner(playerSelection, computerSelection) == 'Player') {
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == 'PC') {
            scorePC++;
        }
    }
    console.log('Game over')
    if (scorePlayer > scorePC) {
        console.log('Player wins!!!')
    } else if (scorePlayer < scorePC) {
        console.log('PC Bot Wins!!!')
    } else {
        console.log('Tie!!!!!!!!!!!!!!rock')
    }


}

game()