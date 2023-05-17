//Generate 2 random numbers: 1 for the user, and 1 for the computer
function generateRandomNumber()
{
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}
//Math.random() generates a random number between 0 (included) and 1 (not included)
//Multiplying by 6, makes the range go from 0 (included) to 6 (not included)
//Adding 1, makes the range go from 1 (included) to 7 (not included)
//Math.floor() rounds the number down to the nearest whole number

//I could also do Math.ceil() to round the number up to the nearest whole number without adding + 1 to the end of the equation

const userNumber = generateRandomNumber();
const computerNumber = generateRandomNumber();

//Create a p to add the results to the DOM
let userScoreP = document.getElementById('userScore');
let computerScoreP = document.getElementById('computerScore'); 
let scoreComparisonP = document.getElementById('scoreComparison');


//Compare the 2 numbers
function compareNumbers(userNumber, computerNumber) 
{
    //Display the 2 numbers in the console
    console.log("User number: " + userNumber);
    console.log("Computer number: " + computerNumber);

    //Display the 2 numbers in the DOM
    userScoreP.append("User number: " + userNumber);
    computerScoreP.append("Computer number: " + computerNumber);

    if(userNumber > computerNumber) 
    {
        const userScore = "You win!";
        console.log(userScore);
        scoreComparisonP.append(userScore);
    }

    else if(userNumber < computerNumber) 
    {
        const computerScore = "You lose!";
        console.log(computerScore);
        scoreComparisonP.append(computerScore);
    }
    else if (userNumber === computerNumber)
    {
        const tieScore = "It's a tie!";
        console.log(tieScore);
        scoreComparisonP.append(tieScore);
    }
}

//Display the results
compareNumbers(userNumber, computerNumber);
