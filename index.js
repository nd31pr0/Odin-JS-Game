
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

function playRound(computerSelection, playerSelection){

    console.log(`the computer's choice is ${computerSelection}`);
    console.log(`your choice is ${playerSelection}`);
    if (playerSelection == computerSelection){
        console.log(`You both selected ${playerSelection}, hence, a tie`)
        // return (`You both selected ${playerSelection}, hence, a tie`)
    } 
    else if (playerSelection == "rock"){
        if(computerSelection == "scissors"){
            console.log(`You win`)
            // return("Great! you win since Rock smashes scissors")
        }
        else{
            console.log("Oops! Paper covers Rock, so you loose")
            // return("Oops! Paper covers Rock, so you loose")
        }
    }
    else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            console.log("Great! Paper covers Rock, so you win. ")
            // return("Great! Paper covers Rock, so you win. ")
        }
        else{
            console.log(`Oops! Scissors cuts paper, so you lose`)
            //return("Oops! Scissors cuts paper, so you lose")
        }
    }
    else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            console.log("Great! Scissors cuts Paper, so you win")
            // return("Great! Scissors cuts Paper, so you win")
        }
        else{
            console.log("Oops! Rock smashes Scissors so you lose");
            // return("Oops! Rock smashes Scissors so you lose")
        }
    }

} 

function game(n){
    
    for(let i = 0; i<n; i++){
        let computerSelection = getComputerChoice(1,3);
        let playerSelection = prompt("Please enter your choice from either Rock, Scissors or Paper")
        playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection, computerSelection)
    }
}

game(5);