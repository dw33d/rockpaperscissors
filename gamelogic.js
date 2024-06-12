const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const computerOptions = [rock, paper, scissors]  // I want to store these variables in an array and have them selected at random 

function getComputerChoice(){

    return computerOptions[(Math.floor(Math.random() * computerOptions.length))]; // This should get a random option for me
}

getComputerChoice();
console.log(getComputerChoice());