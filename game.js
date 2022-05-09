//The computer and player selection starts here!
        function computerPlay(){
            const responses = ['rock','paper','scissor'];
            let choice = Math.floor(Math.random() * responses.length);
            return responses[choice];
        }

        function playRound(playerSelection,computerSelection){
//Start to sort the selections from player
   if(playerSelection === "rock"){
       switch(computerSelection){
            case "rock":
               console.log("Draw")
                     return 0
             case "paper": 
                console.log("You lose!")
                        return 'computer'
             case "scissor":
                console.log("You win!")
                        return 'player'
                }
   }else if (playerSelection === "paper"){
       switch(computerSelection){
            case "rock":
               console.log("You win!")
                     return 'player'
            case "paper":
               console.log("Draw")
                     return 0
            case "scissor":
               console.log("You lose!")
                     return 'computer'
                }
   }else if (playerSelection === "scissor")
               switch(computerSelection){
                    case "rock":
                       console.log("You lose! Rock beats Scissor")
                        return 'computer'
                    case "paper":
                       console.log("You win! Scissor beats Paper")
                        return 'player'
                    case "scissor":
                       console.log("Draw")
                        return 0
                }
        }
//
        function game(){
            let playerScore = 0
            let computerScore = 0
//Play a 5 round game that keeps the score via loops     
            for (let i = 0; i < 5; i++) {
                const computerSelection = computerPlay();
                let playerSelection;

                do{
                    playerSelection = prompt("Type rock, paper or scissors","rock").toLowerCase()
                }while(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor')
                

                let result = (playRound(playerSelection,computerSelection))

        switch(result){
             case 'player':
                   playerScore++
                       break
             case 'computer':
                   computerScore++
                        break
             default:
                        break
                }
            }
//Report a winner or loser at the end
            if(playerScore > computerScore){
                console.log(`Player wins! Computer lose! ${playerScore} - ${computerScore}`)
            }else if(computerScore > playerScore){
                console.log(`Player lose! Computer wins! ${playerScore} - ${computerScore}`)
            }else{
                console.log(`Draw! ${playerScore}-${computerScore}`)
            }
            
        }

       game();
    