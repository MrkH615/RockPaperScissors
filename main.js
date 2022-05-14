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
    //computerChoice = getComputerChoice(); 
    //comparison = compare(playerChoice, computerChoice);
    //playRound(playerChoice, points);
    //points === undefined ? points = [0,0] : points = incrementPoints(comparison, points); //undefine
    
    //updateScore(playerChoice, points); //humanScore is not defined, points not displayed
    //points not updated, h2 disappears from R side of scoreboard
    
    points=playRound(playerChoice, points);
    humanScore.textContent =  points[0];
    computerScore.textContent = points[1];
    console.log(points);
    if (points[0] >= 5 || points[1] >= 5) endGame();
    

    //console.log(computerChoice, comparison, score);
    //console.log(playerChoice,computerChoice, comparison, points); //points from before update -- how to get after?


    //console.log(playerChoice, computerChoice);
    //console.log(compare(playerChoice, computerChoice));
  });

  /* TODO: 
  
  1. play until 5 points
  2. update points before dispalying
  */
  
  paper.addEventListener('click', choosePaper = () => {
    playerChoice = 'paper';
    //updateScore(playerChoice, points);
    //computerChoice = getComputerChoice();
   // console.log(compare(playerChoice, computerChoice));
   
   points = playRound(playerChoice, points);
   humanScore.textContent =  points[0];
    computerScore.textContent = points[1];
   console.log(points);
   if (points[0] >= 5 || points[1] >= 5) endGame(); //displayed at start!?
   
  });
  
  scissors.addEventListener('click', chooseScissors = () => {
    playerChoice =  'scissors';
    //computerChoice = getComputerChoice();
    //console.log(compare(playerChoice, computerChoice));
    //updateScore(playerChoice, points);
    points = playRound(playerChoice, points);
    humanScore.textContent =  points[0];
    computerScore.textContent = points[1];
   console.log(points);
   if (points[0] >= 5  || points[1] >= 5) endGame();
   
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

  if (playerChoice === computerChoice) {
    return "It's a tie! ";
  }

  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return "You win this round. ";
  }

  if (playerChoice === 'rock' && computerChoice === 'paper') {
    return  "Computer wins this round. ";
  }

  if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return "Computer wins this round. ";
  }

  if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'You win this round. ';
  }

  if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return "Computer wins this round. ";
  }

  if (playerChoice === 'scissors' &&  computerChoice === 'paper') {
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

//function playRound(computerChoice, playerChoice, comparison, score);
function playRound(playerChoice, points) {
    computerChoice = getComputerChoice(); 
    comparison = compare(playerChoice, computerChoice);
    console.log(`You choose ${playerChoice}. Computer chooses ${computerChoice}.`);
    console.log(comparison);
    message.textContent = `You choose ${playerChoice}. Computer chooses ${computerChoice}.`
    message.textContent += comparison;
    //put the ternary for points in playGame();
    //points === undefined ? points = [0,0] : points = incrementPoints(comparison, points);
    points = incrementPoints(comparison, points);
    //score = incrementPoints(comparison, points);
    //return score;
    //updateScore(playerChoice, points); TOO MUCH RECURSION error
    return points;
}

function updateScore(playerChoice, points) {
  //const computerScore = document.querySelector('#computer-score');
  //const humanScore = document.querySelector('#human-score');
  points=playRound(playerChoice, points);//leave in eventListener callback?
  //if (points[0] === 5 || points[1] === 5) endGame();
  humanScore.textContent =  points[0];
  computerScore.textContent = points[1];
  console.log(points);
  if (points[0] === 5 || points[1] === 5) endGame(); //same result as>5, goes up to 6pts
}

function endGame() {
  message.textContent='Game over';
  //removeEventListener doesn't work
  rock.removeEventListener('click', chooseRock);
  paper.removeEventListener('click', choosePaper);
  scissors.removeEventListener('click', chooseScissors);
}

playGame();
