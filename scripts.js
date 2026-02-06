const result = document.querySelector('.result');
const yourScore = document.querySelector('.your-score span');
const machineScore = document.querySelector('.computer-score span');

let yourScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playmachine());
}

const playmachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

const playTheGame = (human, machine) => {


    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        yourScoreNumber++;
        yourScore.innerHTML = yourScoreNumber;
        result.innerHTML = 'Você ganhou!'
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você perdeu!'
    }

}