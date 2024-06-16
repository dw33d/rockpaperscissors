

// Making the game logic
function playGame(){
    // Array for holdinng the words
    let pcChoice = ["rock", "paper", "scissors"];
    //Homo-sapien choice
    let homochoice = prompt("Insert choice (rock, paper, scissors)"); 


    function gethomoChoice(){
        console.log(homochoice.toLowerCase())
        return homochoice.toLowerCase();
    }

    // function for randomly choosing selection
    function getpcChoice(){
        const randomindex = Math.floor(Math.random()*pcChoice.length);
        var choice = pcChoice[randomindex];
        console.log(choice);
        return choice;
    }

    function gameRound(homochoice, pcChoice){
        let humanScore = 0;
        let pcScore = 0;
        // In the case of a tie
        if (homochoice == pcChoice){
            console.log("It's a tie");
        } else {
            // In the case of one winning over the other
            if (homochoice == "rock" && pcChoice == "paper"){
                pcScore += 1;
                console.log(`You lose: ${pcChoice} beats ${homochoice}`);
            } 
            if (homochoice == "rock" && pcChoice == "scissors"){
                humanScore += 1;
                console.log(`You win: ${homochoice} beats ${pcChoice}`);
            }
            if (homochoice == "paper" && pcChoice == "scissors"){
                pcScore += 1;
                console.log(`You lose: ${pcChoice} beats ${homochoice}`);
            }
            if (homochoice == "paper" && pcChoice == "rock"){
                humanScore += 1;
                console.log(`You win: ${homochoice} beats ${pcChoice}`);
            }
            if (homochoice == "scissors" && pcChoice == "rock"){
                pcScore += 1;
                console.log(`You lose: ${pcChoice} beats ${homochoice}`);
            }
            if (homochoice == "scissors" && pcChoice == "paper"){
                humanScore += 1;
                console.log(`You win: ${homochoice} beats ${pcChoice}`);
            }
        }
    }
    
    let humanChoice = gethomoChoice();
    let compChoice = getpcChoice();
    
    
    gameRound(humanChoice, compChoice);
    return;
}

playGame();
playGame();
playGame();
playGame();
playGame();



