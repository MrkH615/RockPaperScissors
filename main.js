function startGame() {
  return points = [0,0];
}

function getPlayerChoice() {
  let playerChoice;
  let computerChoice //= getComputerChoice(); assigned here, then plays only 1 round
  let comparison;
  let points //= [0,0]; //always resets to zero?
  console.log('points', points);
  //const [playerPoints, computerPoints] = points;
  //playerPoints = 0;
  //computerPoints = 0;
  //let score;

  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  rock.addEventListener('click', () => {
    playerChoice = 'rock';
    computerChoice = getComputerChoice(); //winner is undefined without ()
    comparison = compare(playerChoice, computerChoice);
    //score = incrementPoints(comparison, points);
    points === undefined ? points = [0,0] : points = incrementPoints(comparison, points); //undefine
    //console.log(computerChoice, comparison, score);
    console.log(computerChoice, comparison, points);


    //console.log(playerChoice, computerChoice);
    //console.log(compare(playerChoice, computerChoice));
  });
  
  paper.addEventListener('click', () => {
    playerChoice = 'paper';
    computerChoice = getComputerChoice();
    console.log(compare(playerChoice, computerChoice));
  });
  
  scissors.addEventListener('click', () => {
    playerChoice =  'scissors';
    computerChoice = getComputerChoice();
    console.log(compare(playerChoice, computerChoice));
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

function playRound() {
    computerChoice = getComputerChoice(); //winner is undefined without ()
    comparison = compare(playerChoice, computerChoice);
    score = incrementPoints(comparison, points);
}

//playGame();
getPlayerChoice();//computerChoice, Winner, [playerPoints, computerPoints]
