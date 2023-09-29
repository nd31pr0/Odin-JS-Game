let compScore = 0;
let playerScore = 0;
let btns = document.querySelectorAll('button');
let  playerSelection = "";
let count = 0;

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

function playRound(playerSelection){
    let computerSelection = getComputerChoice(1, 3)
    let result = "";
    console.log(`the computer's choice is ${computerSelection}`);
    console.log(`your choice is ${playerSelection}`);
    if (playerSelection == computerSelection){
        compScore += 1;
        playerScore += 1;
        displayResult(compScore, playerScore)
        if (playerScore === 5 || compScore === 5){
            disableButtons();
        }
        return (`You both selected ${playerSelection}, hence, a tie`)
    } 
    else if (playerSelection == "rock"){
        if(computerSelection == "scissors"){
            playerScore += 1;
            displayResult(compScore, playerScore) 
            if (playerScore === 5 || compScore === 5){
                disableButtons();
            }
            return (`You win! Rock covers scissors`)
        }
        else{
            compScore += 1;
            displayResult(compScore, playerScore)
            if (compScore === 5 || playerScore === 5){
                disableButtons();
            }
            return ("Oops! Paper covers Rock, so you loose")
        }
    }
    else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            playerScore += 1;
            displayResult(compScore, playerScore)
            if (playerScore === 5 || compScore === 5){
                disableButtons();
            }

            return ("Great! Paper covers Rock, so you win. ")
        }
        else{
            compScore += 1;
            displayResult(compScore, playerScore)
            if (compScore === 5 || playerScore === 5){
                disableButtons();
            }
            return (`Oops! Scissors cuts paper, so you lose`)
        }
    }
    else if (playerSelection == "scissors"){
        if(computerSelection == "paper"){
            playerScore += 1;
            displayResult(compScore, playerScore)
            if (playerScore === 5 || compScore === 5){
                disableButtons();
            }
            return ("Great! Scissors cuts Paper, so you win")
        }
        else{
            compScore += 1;
            displayResult(compScore, playerScore)
            if (compScore === 5 || playerScore === 5){
                disableButtons();
            }
            return ("Oops! Rock smashes Scissors so you lose");
        }
    }
} 

function game(n){
    
    for(let i = 0; i<n; i++){
        let computerSelection = getComputerChoice(1,3);
        // let playerSelection = prompt("Please enter your choice from either Rock, Scissors or Paper")
        let playerSelection = playerChoice()
        playerSelection = playerSelection.toLowerCase();
        playRound(playerSelection, computerSelection)
    }
}


function displayResult(compScore, playerScore){
    if (count == 0){
        const choice1 = document.createElement('h3');
        choice1.innerText = `the computer's Score is ${compScore}`;
        choice1.style.color = 'blue';
        document.getElementById('cont').appendChild(choice1);

        const choice2 = document.createElement('h3');
        choice2.innerText = `the player's Score is ${playerScore}`;
        choice2.style.color = 'blue';
        document.getElementById('cont').appendChild(choice2);
    } else {
        document.getElementById('cont').firstChild.innerText = `the computer's Score is ${compScore}`;
        document.getElementById('cont').lastChild.innerText = `the player's Score is ${playerScore}`;
    }  
    count += 1; 
}

function disableButtons() {
    btns.forEach(btn => {
        btn.disabled = true
    })
}


for (i of btns) {
    i.addEventListener('click', function() {
        if (this.id === "btns"){
            playerSelection = "scissors";
        } else if (this.id === "btnp"){
            playerSelection = "paper";
        } else{
            playerSelection = "rock";
        }
        document.getElementById('result').innerText = playRound(playerSelection)    
    })
    
}
