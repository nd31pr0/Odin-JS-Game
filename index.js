
function getComputerChoice(min, max) {
    let choice = Math.floor(Math.random() * (max - min + 1) + min);
    if (choice === 1){
        return "Rock";
    } else if (choice === 2){
        return "Paper";
    }else
    {
        return "Scissors"
    }
    console.log(choice)
}
console.log(getComputerChoice(1,3));
let computerSelection = getComputerChoice(1,3);
let playerSelection = prompt("Please enter your choice from either Rock, Scissors or Paper")
playerSelection = playerSelection.toLowerCase();
console.log(computerSelection)
console.log(playerSelection)
function PlayRound(computerSelection, playerSelection){

} 