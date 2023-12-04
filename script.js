function getComputerChoice()
{
    return Math.floor(Math.random() * 3 + 1);
}
// 1 rock
// 2 paper
// 3 scissors
function playRound()
{
    let playerChoice = prompt()
    let computerChoice = getComputerChoice();

    if (playerChoice.toLowerCase() == "rock")
    {
        playerChoice = 1;
    }
    else if (playerChoice.toLowerCase() == "paper")
    {
        playerChoice = 2;
    }
    else if (playerChoice.toLowerCase() == "scissors")
    {
        playerChoice = 3;
    }

    if (playerChoice == computerChoice)
    {
        console.log("Tie! Anotha one..");
        return playRound();
    }
    if (playerChoice == 1)
    {
        if (computerChoice == 2)
        {
            console.log("You lost! Paper beats Rock.");
            return 0;
        }
        if (computerChoice == 3)
        {
            console.log("You won! Rock beats Scissors!");
            return 1;
        }
    }
    if (playerChoice == 2)
    {
        if (computerChoice == 1)
        {
            console.log("You won! Paper beats Rock.");
            return 1;
        }  
        if (computerChoice == 3)
        {
            console.log("You lost! Scissors beats Paper.");
            return 0;
        }

    }    
    if (playerChoice == 3)
    {
        if (computerChoice == 1) 
        {
            console.log("You lost! Rock beats Scissors.");
            return 0;
        }
        if (computerChoice == 2)
        {
            console.log("You won! Scissors beats Paper.");
            return 1;
        }
    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore != 3 && computerScore != 3)
    {
        if (playRound() == 0)
            computerScore++;
        else playerScore++;
        console.log(`Score: %i to %i`, playerScore, computerScore);
    }
    if (playerScore == 3) console.log("You won the game!");
    else console.log("You lost the game. Better luck next time.");
}

game();