function playGame() {
  
  let playerChoice;
  let computerChoice;
  let comparison;
  let points = [0,0];

  const computerScore = document.querySelector('#computer-score');
  const humanScore = document.querySelector('#human-score');
  const message = document.querySelector('#message');
  
  message.textContent = 'Get ready to play!'

  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');


  rock.addEventListener('click', chooseRock = () => {
    playerChoice = 'rock';
    points=updateScore(playerChoice, points, humanScore, computerScore);
  });
  
  paper.addEventListener('click', choosePaper = () => {
    playerChoice = 'paper';
    points=updateScore(playerChoice, points, humanScore, computerScore);
  });
  
  scissors.addEventListener('click', chooseScissors = () => {
    playerChoice =  'scissors';
    points=updateScore(playerChoice, points, humanScore, computerScore);
  });
}

function getComputerChoice() {
  const MIN = 1;
  const MAX = 3;
  let computerChoice = getRandomInteger(MIN, MAX);
  
  switch (computerChoice) {
    case 1:
      return 'rock';
    case 2:
      return 'scissors';
    case 3:
        return 'paper';
  }
}

function getRandomInteger(min,max) {
  return ~~(Math.random() * (max - min + 1) + min);
}

function compare(playerChoice, computerChoice) {
 
  const tie = 'gray-background';

  if (playerChoice === computerChoice) {
    updateBackground(tie);
    return "It's a tie! ";
  }

  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    updateBackground(playerChoice);
    return "You win this round. ";
  }

  if (playerChoice === 'rock' && computerChoice === 'paper') {
    updateBackground(computerChoice);
    return  "Computer wins this round. ";
  }

  if (playerChoice === 'paper' && computerChoice === 'scissors') {
    updateBackground(computerChoice);
    return "Computer wins this round. ";
  }

  if (playerChoice === 'paper' && computerChoice === 'rock') {
    updateBackground(playerChoice);
    return 'You win this round. ';
  }

  if (playerChoice === 'scissors' && computerChoice === 'rock') {
    updateBackground(computerChoice);
    return "Computer wins this round. ";
  }

  if (playerChoice === 'scissors' &&  computerChoice === 'paper') {
    updateBackground(playerChoice);
    return "You win this round. ";
  }

}


function incrementPoints(comparison, points) {
  let [playerPoints, computerPoints] = points;

  switch (comparison) {
    case 'You win this round. ':
      return [++playerPoints, computerPoints];
    case 'Computer wins this round. ':
      return [playerPoints, ++computerPoints];
    default:
      return [++playerPoints, ++computerPoints];  
  }

}

function playRound(playerChoice, points) {
    computerChoice = getComputerChoice(); 
    comparison = compare(playerChoice, computerChoice);
    message.textContent = `You choose ${playerChoice}. Computer chooses ${computerChoice}. \n`;
    message.textContent += comparison;
    points = incrementPoints(comparison, points);
    return points;
}

function updateScore(playerChoice, points, humanScore, computerScore) {
  points=playRound(playerChoice, points);
  humanScore.textContent =  points[0];
  computerScore.textContent = points[1];
  console.log(points);
  if (points[0] === 5 || points[1] === 5) endGame(points);
  return points;
}

function endGame(points) {
  rock.removeEventListener('click', chooseRock);
  paper.removeEventListener('click', choosePaper);
  scissors.removeEventListener('click', chooseScissors);
  setTimeout(()=>{
    message.textContent='Game over! ';
    points[0] === points[1] ? 
      message.textContent += 'It\'s a tie!' : 
      points[0] > points [1] ? 
      message.textContent += 'You win! ' : message.textContent += 'Computer wins! ';
  }, 2000);

  playAgain();
}

function updateBackground(choice) {
  const background = document.querySelector('#game-wrapper');
  let lastBackground = background.getAttribute('class');
  background.classList.remove(lastBackground);
  background.classList.add(choice);
}

function playAgain() {
  setTimeout(()=> {
    const gameWrapper = document.querySelector('#game-wrapper');
    const gameOver = document.querySelector('#game-over');
    gameWrapper.classList.add('gray-scale');
    gameOver.classList.remove('hidden');
    document.addEventListener('click', (event) => window.location.reload());
  }, 3000);

}

playGame();
