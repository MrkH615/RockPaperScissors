let computerSelection;
let playerSelection;
/*let randomInteger;*/
/*let min;
let max;*/

// computer selects rock, paper, scissors)
        function computerPlay() {  
          /*let min;
          let max;*/
          function randomInteger() {  
                let min = Math.ceil(1);
                let max = Math.floor(3);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            if (randomInteger() === 1) {
              computerSelection = "rock";
            } else if (randomInteger() === 2) {
                computerSelection = "paper";
            } else {
               computerSelection = "scissors";
            }
            
            return computerSelection;
            
        } 

        function playerChoice() {
          playerSelection = prompt("Rock, paper, or scissors?"); 
          playerSelection = playerSelection.toLowerCase();   
           while (playerSelection !=  "rock" && playerSelection !="paper" && playerSelection != "scissors") {
              console.log("Invalid choice!  Please choose rock, paper, or scissors.");
              playerSelection = prompt("Rock, paper, or scissors?"); 
              playerSelection = playerSelection.toLowerCase();
            }
            return playerSelection;
        }  

        
        let playerWins;
        let computerWins;
        let result;
        let playerPoints = 0;
        let computerPoints = 0;

// compares playerSelection, computerSelection declares winner
        function playOneRound(playerSelection, computerSelection) {  
            
            computerPlay();
            playerChoice();

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

        
function game() {
  /*let playerSelection;*/
  
  for (let gameCounter = 1; gameCounter < 6; gameCounter++) { 
        playOneRound(playerSelection, computerSelection);
        console.log(result); 
        }

        console.log(`total player points:  ${playerPoints}`);
        console.log(`total computer points:  ${computerPoints}`);

        if (playerPoints > computerPoints) {
          console.log("You win!");
        } else if (computerPoints > playerPoints) {
          console.log ("You lose!");
        } else {
          console.log ("It's a tie!");
        }

}  
          
game();