function getPlayerChoice() {
  let playerChoice;
  let computerChoice 
  let comparison;
  let points;
  

  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  rock.addEventListener('click', () => {
    playerChoice = 'rock';
    //computerChoice = getComputerChoice(); 
    //comparison = compare(playerChoice, computerChoice);
    //playRound(playerChoice, points);
    //points === undefined ? points = [0,0] : points = incrementPoints(comparison, points); //undefine
    points=playRound(playerChoice, points);
    console.log(points);
    //console.log(computerChoice, comparison, score);
    //console.log(playerChoice,computerChoice, comparison, points); //points from before update -- how to get after?


    //console.log(playerChoice, computerChoice);
    //console.log(compare(playerChoice, computerChoice));
  });

  /* TODO: 
  1. call playRound() in other event listener functions
  2. display score and choices in DOM
  */
  
  paper.addEventListener('click', () => {
    playerChoice = 'paper';
    //computerChoice = getComputerChoice();
   // console.log(compare(playerChoice, computerChoice));
   points = playRound(playerChoice, points);
   console.log(points);
  });
  
  scissors.addEventListener('click', () => {
    playerChoice =  'scissors';
    //computerChoice = getComputerChoice();
    //console.log(compare(playerChoice, computerChoice));
    points = playRound(playerChoice, points);
   console.log(points);
  });

}

function playGame() {
 
 let msg=getPlayerChoice();
 console.log(msg);
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
    return "It's a tie!";
  }

  if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return "You win";
  }

  if (playerChoice === 'rock' && computerChoice === 'paper') {
    return  "Computer wins";
  }

  if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return "Computer wins";
  }

  if (playerChoice === 'paper' && computerChoice === 'rock') {
    return 'You win';
  }

  if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return "Computer wins";
  }

  if (playerChoice === 'scissors' &&  computerChoice === 'paper') {
    return "You win";
  }

}


function incrementPoints(comparison, points) {
  let [playerPoints, computerPoints] = points;

  switch (comparison) {
    case 'You win':
      return [++playerPoints, computerPoints];
    case 'Computer wins':
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
    points === undefined ? points = [0,0] : points = incrementPoints(comparison, points);
    //score = incrementPoints(comparison, points);
    //return score;
    return points;
}

//playGame();
getPlayerChoice();//computerChoice, Winner, [playerPoints, computerPoints]
