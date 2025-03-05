//  Function to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

//  Initialize scores
let humanScore = 0;
let computerScore = 0;
const maxRounds = 5;

// Function to play a round when a button is clicked
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    let resultText = `You chose: ${humanChoice} | Computer chose: ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        resultText += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultText += `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultText += `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Update results on the webpage
    document.getElementById("round-result").textContent = resultText;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;

    // Check if game ends
    if (humanScore === maxRounds || computerScore === maxRounds) {
        declareWinner();
    }
}

// Function to declare the winner
function declareWinner() {
    let finalResultText = "";
    if (humanScore > computerScore) {
        finalResultText = "🎉 Congratulations! You won the game!";
    } else if (humanScore < computerScore) {
        finalResultText = "😞 Sorry, you lost the game.";
    } else {
        finalResultText = "🤝 It's a tie game!";
    }

    document.getElementById("final-result").textContent = finalResultText;

    // Disable buttons after game ends
    document.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
}
