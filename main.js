//let computerSelection;
//let playerSelection;

// computer selects rock, paper, scissors)
        function computerPlay() {  
          //let computerSelection;
          function randomInteger() {  
                let min = Math.ceil(1);
                let max = Math.floor(3);
                console.log('inside randomInteger()');
                return Math.floor(Math.random() * (max - min + 1)) + min; 
            }
            console.log('inside computerPlay()');

            if (randomInteger() === 1) { //having () seems to make no difference
              //computerSelection = "rock";
              return 'rock';
            }
           if (randomInteger() === 2) {
                //computerSelection = "paper";
                return 'paper';
           }

           if (randomInteger() === 3) {
               //computerSelection = "scissors";
               return 'scissors';
            }
            //console.log('inside computerPlay()'); //gets displayed
            //return computerSelection;
            
        } 
/*
        function playerChoice() { 
          let choice;
          const buttons = document.querySelectorAll('button');
          buttons.forEach((button) => button.addEventListener(('click'), (e) => {
            choice = e.target.id;
            console.log('choice', choice);

          }));
          console.log('choice', choice);

          return choice;

         /* let playerSelection = prompt("Rock, paper, or scissors?"); 
          playerSelection = playerSelection.toLowerCase();   
           while (playerSelection !=  "rock" && playerSelection !="paper" && playerSelection != "scissors") {
              console.log("Invalid choice!  Please choose rock, paper, or scissors.");
              playerSelection = prompt("Rock, paper, or scissors?"); 
              playerSelection = playerSelection.toLowerCase();
            }
            return playerSelection;*/
      //  }  */

        function getChoices() {
          let choices = [];
          const rock = document.querySelector('#rock');
          const paper = document.querySelector('#paper');
          const scissors = document.querySelector("#scissors");

          console.log('inside getChoices()');

          rock.addEventListener('click', () => {
            console.log('rock');
            return 'rock'});
          paper.addEventListener('click', () => {return 'paper'});
          scissors.addEventListener('click', () => {return 'scissors'});

          /*const buttons = document.querySelectorAll('button');
          buttons.forEach(button => button.addEventListener(('click'), (e) => {
            if (e.target.id) {
              choices.push(e.target.id);
              choices.push(computerPlay());
            }
          }));*/
          //return choices;
        }

        function playGame(getChoices, computerPlay) {
          //let choices = getChoices();
          /*console.log(choices); //empty array
          let [playerSelection, computerSelection] = choices;*/
          let playerSelection = getChoices;
          let computerSelection = computerPlay;
          /*let playerSelection = getChoices;
          let computerSelection = computerPlay;*/
          console.log('inside playGame()');

          function playerWins(playerSelection, computerSelection) {
            result = `Computer loses!  ${playerSelection} beats ${computerSelection}`;
            ++playerPoints;  
            return result;
        } 
        
        function computerWins(playerSelection, computerSelection) {
              result = `You lose! ${computerSelection} beats ${playerSelection}`
              ++computerPoints;  
              return result;
        } 

        function tie(playerSelection, computerSelection) {
            result = `It's a tie!`;
            return result;
          }  

        if (playerSelection === computerSelection) { 
          result = tie(playerSelection, computerSelection);
          return result;
        
        }  else if (playerSelection ==="rock" && computerSelection === "paper") {
          result = computerWins(playerSelection, computerSelection);
          return result;

        }  else if (playerSelection === "rock"  && computerSelection === "scissors") {
          result = playerWins(playerSelection, computerSelection);
          return result;


        } else if (playerSelection === "paper"  && computerSelection === "scissors") {
          result = computerWins(playerSelection, computerSelection);
          return result;

        } else if (playerSelection === "paper" && computerSelection === "rock") {
          result = playerWins(playerSelection, computerSelection);
          return result;

        } else if (playerSelection === "scissors" && computerSelection === "paper") {
          result = playerWins(playerSelection, computerSelection); 
          return result;

        }  else if (playerSelection === "scissors" && computerSelection === "rock") {
          result = computerWins(playerSelection, computerSelection);
          return result;
        } 

    }
      

        
        //let playerWins;
        //let computerWins;
        //let result;
        let playerPoints = 0;
        let computerPoints = 0;

// compares playerSelection, computerSelection declares winner
        //function playOneRound(playerSelection, computerSelection) {  
          function playOneRound() {

            console.log('inside playOneRound()');
            let result;
            
            let computerSelection = computerPlay();//called before button clicked;
            let playerSelection = playerChoice();

            function playerWins(playerSelection, computerSelection) {
                result = `Computer loses!  ${playerSelection} beats ${computerSelection}`;
                ++playerPoints;  
                return result;
            } 
            
            function computerWins(playerSelection, computerSelection) {
                  result = `You lose! ${computerSelection} beats ${playerSelection}`
                  ++computerPoints;  
                  return result;
            } 

            function tie(playerSelection, computerSelection) {
                result = `It's a tie!`;
                return result;
              }  

            if (playerSelection === computerSelection) { 
              result = tie(playerSelection, computerSelection);
              return result;
            
            }  else if (playerSelection ==="rock" && computerSelection === "paper") {
              result = computerWins(playerSelection, computerSelection);
              return result;

            }  else if (playerSelection === "rock"  && computerSelection === "scissors") {
              result = playerWins(playerSelection, computerSelection);
              return result;


            } else if (playerSelection === "paper"  && computerSelection === "scissors") {
              result = computerWins(playerSelection, computerSelection);
              return result;

            } else if (playerSelection === "paper" && computerSelection === "rock") {
              result = playerWins(playerSelection, computerSelection);
              return result;

            } else if (playerSelection === "scissors" && computerSelection === "paper") {
              result = playerWins(playerSelection, computerSelection); 
              return result;

            }  else if (playerSelection === "scissors" && computerSelection === "rock") {
              result = computerWins(playerSelection, computerSelection);
              return result;
            } 

        }
  /*      
function game() {  //only declares winner every other time??
  //a. For now, remove the logic that plays exactly five rounds.

  /*for (let gameCounter = 1; gameCounter < 6; gameCounter++) { 
        playOneRound(playerSelection, computerSelection);
        console.log(result); 
        }
        */

       //playOneRound(playerChoice(), computerPlay()); 
       //playOneRound(playerSelection, computerSelection); //always a tie !?
      // playOneRound(playerChoice(), computerPlay());//doesn't always display winner
       //invalid choice??

       // console.log(`total player points:  ${playerPoints}`);
        //console.log(`total computer points:  ${computerPoints}`);

        /*if (playerPoints > computerPoints) {
          console.log("You win!");
        } else if (computerPoints > playerPoints) {
          console.log ("You lose!");
        } else {
          console.log ("It's a tie!");
        }
} 
          
game();*/
//console.log(playOneRound());

let choices = getChoices;
let chomputerChoices = computerPlay();
console.log(playGame(choices, computerPlay));
//console.log(playGame(getChoices, computerPlay));