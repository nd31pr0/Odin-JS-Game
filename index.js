
function getComputerChoice(min, max) {
    let choice = Math.floor(Math.random() * (max - min + 1) + min);
    if (choice === 1){
        return "rock";
    } else if (choice === 2){
        return "paper";
    }else
    {
        return "scissors"
    }

}

let computerSelection = getComputerChoice(1,3);
let playerSelection = prompt("Please enter your choice from either Rock, Scissors or Paper")
playerSelection = playerSelection.toLowerCase();

function playRound(computerSelection, playerSelection){

    console.log(`the computer's choice is ${computerSelection}`);
    console.log(`your choice is ${playerSelection}`);
    if (playerSelection == computerSelection){
        return (`You both selected ${playerSelection}, hence, a tie`)
    } 
    else if (playerSelection == "rock"){
        if(computerSelection == "scissors"){
            return("Great! you win since Rock smashes scissors")
        }
        else{
            return("Oops! Paper covers Rock, so you loose")
        }
    }
    else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            return("Great! Paper covers Rock, so you win. ")
        }
        else{
           return("Oops! Scissors cuts paper, so you lose")
        }
    }
    else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            return("Great! Scissors cuts Paper, so you win")
        }
        else{
            return("Oops! Rock smashes Scissors so you lose")
        }
    }

} 
console.log(playRound(playerSelection, computerSelection));


