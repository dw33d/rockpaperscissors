const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice(){
    const computerOptions = [rock, paper, scissors];  // I want to store these variables in an array and have them selected at random 
    return computerOptions[(Math.floor(Math.random() * computerOptions.length))]; // This should get a random option for me
}

getComputerChoice();
console.log(getComputerChoice());

// WIll ask for human input and then log it to the console
function getHumanChoice(){
    let humanChoice = window.prompt("Input your choice(rock, paper, scissors)"); 
    return humanChoice;
}
console.log(getHumanChoice())