// create array out of the terminal call starting from third value
// eg, the paramaters after the node script.js call
const args = process.argv.slice(2);

// returns error and ends the script process without continuing
// if two values are not passed alongside the node call in console
if (args.length < 2) {
    console.log("Please input two numbers as arguments. Eg: node script.js 10 5");
    process.exit(1);
}

// sets x and y as the inputed values
const x = parseFloat(args[0]);
const y = parseFloat(args[1]);

/* code used to test initial version before input added
let x = 10
let y = 5
*/

// Adds two numbers together and returns output
function add(a, b) {
    return a + b;
}

// Subtracts second number from the first number and returns output
function subtract(a, b) {
    return a - b;
}

// Multiplies two numbers together and returns output
function multiply(a, b) {
    return a * b;
}

// Divides first number by the second number and returns output
function divide(a, b) {
    //checks for divide by 0
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Log the outputs of each function based on inputs
console.log(x + " plus " + y + " = " + add(x, y));
console.log(x + " minus " + y + " = " + subtract(x, y));
console.log(x + " times " + y + " = " + multiply(x, y));
console.log(x + " divided by " + y + " = " + divide(x, y));
