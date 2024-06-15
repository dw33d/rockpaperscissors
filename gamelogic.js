const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanChoice = window.prompt("Input your choice(rock, paper, scissors)"); 
const computerOptions = [rock, paper, scissors];  // I want to store these variables in an array and have them selected at random 

let humanScore = 0;
let pcScore = 0;


// Will return the compute rcode based on random selection
function getComputerChoice(){
    return computerOptions[(Math.floor(Math.random() * computerOptions.length))]; // This should get a random option for me
}

getComputerChoice();
console.log(getComputerChoice());

// WIll ask for human input and then log it to the console
function getHumanChoice(){
    return humanChoice;
}
console.log(getHumanChoice())

function roundPlay(humanChoice, computerOptions){

    if(humanChoice === "rock" && computerOptions === "paper"){
        console.log("It's a rock and a paper!")
    } else {
        console.log("Nah...not it")
    }
 



}

const humanSelection = humanChoice;
const computerSelection = computerOptions;

roundPlay(humanSelection, computerSelection)

function play(){
    
}