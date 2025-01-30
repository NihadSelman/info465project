const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Stores integers entered by the user
let numbers = [];

// Prompts the user for input
function getInput() {
    rl.question('Enter an integer or "q" to quit: ', (input) => {
        // Checks if the user wants to quit the program
        if (input.toLowerCase() === 'q') {
            rl.close(); // Closes the input 
            checkProducts(); // Checks for two integers that equals the third
        } else {
            const num = parseInt(input); // Convert input to an integer
            // Checks the input to confirm it's a number
            if (isNaN(num)) {
                console.log("Invalid input, please enter a valid integer.");
                getInput(); // Asks for a valid integer if the user entered an invalid one
            } else {
                numbers.push(num); // Adds valid integer to numbers array
                console.log(`Numbers entered: ${numbers}`); // Shows the list of numbers to the user
                getInput(); // Keeps asking for input
            }
        }
    });
}

// Sees if the two integers equals a third integer
function checkProducts() {
    let found = false; // Indicates if the condition was met
    // Checks every combination of integers that are entered
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let product = numbers[i] * numbers[j]; // Calculates product of two different integers
            // Checks if the product is in the list of the numbers entered
            if (numbers.includes(product) && numbers.indexOf(product) !== i && numbers.indexOf(product) !== j) {
                console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${product}`);
                found = true;
            }
        }
    }
    // If there wasn't a matching condition found
    if (!found) {
        console.log("Condition was not met.");
    }
}

getInput(); // Starts program by asking for user input
