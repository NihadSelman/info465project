const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Stores the numbers that the user inputs
let numbers = [];
// Asks the user to input an option
const getNumbers = () => {
    rl.question("Enter a number or enter 'q' to quit: ", input => {
        // Checks to see if the user would like to quit the program
        if (input.toLowerCase() === 'q') {
            // Calculates the sum of the numbers
            const sum = numbers.reduce((acc, curr) => acc + curr, 0);
            // Calculates the average of the numbers
            const average = numbers.length > 0 ? sum / numbers.length : 0;
            // Shows the sum along with the average
            console.log(`Sum: ${sum}, Average: ${average}`);
            rl.close();
        } else {
            // Changes the input to a floating-point number
            const number = parseFloat(input);
            // Checks the numbers and adds them to the array only if they are valid
            if (!isNaN(number)) {
                numbers.push(number);
            } else {
                // Tells the user there is an invalid input
                console.log("Invalid input, please enter a valid number.");
            }
            // Continues the input
            getNumbers();
        }
    });
};

getNumbers();
