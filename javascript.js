let scorePC = 0
let playerScore = 0
const choices = ['rock', 'paper', 'scissors']
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const results = document.querySelector('.results')
const container = document.querySelector('.btnContainer')
const playTallySpan = document.querySelector('.playerTally')
const pcTallySpan = document.querySelector('.pcTally')




const getComputerChoice = () => {
    const choicePC = choices[Math.floor(Math.random() * choices.length)];
    return choicePC;
}



const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement('p')
    if (playerSelection === computerSelection) {
        p.innerText = 'It was a tie!!!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        p.innerText = `You win!!! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        p.innerText = `You win!!! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        p.innerText = `You win!!! ${playerSelection} beats ${computerSelection}`
    } else {
        scorePC++
        p.innerText = `You lose!!! ${computerSelection} beats ${playerSelection}`
    }
    results.append(p)
}


const checkWinner = (playerScore, scorePC) => {
    const strong = document.createElement('strong')
    if (playerScore === 5) {
        strong.classList.add('Won')
        strong.innerText = `You win player score is: ${playerScore} and pc score is: ${scorePC}`
    } else if (scorePC === 5) {
        strong.classList.add('Lost!!')
        strong.innerText = `You lose player score is: ${playerScore} and pc score is: ${scorePC}`
    }
    results.append(strong)
}

const updateScore = (playerScore, scorePC) => {
    playTallySpan.innerText = `Player score: ${playerScore}`
    pcTallySpan.innerText = `NPC score: ${scorePC}`
}

rock.addEventListener('click', e => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, scorePC)
    updateScore(playerScore, scorePC)
})

paper.addEventListener('click', e => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, scorePC)
    updateScore(playerScore, scorePC)
})

scissors.addEventListener('click', e => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    checkWinner(playerScore, scorePC)
    updateScore(playerScore, scorePC)
})