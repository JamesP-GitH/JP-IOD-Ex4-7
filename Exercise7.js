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

// Test 1. Adding
function testAdd() {
    const result = add(2, 3);
    if (result !== 5) {
        throw new Error("Test Failed: Expected add(2, 3) to be 5, but got " + result);
    } else {
        console.log("Test Passed: add(2, 3) === 5");
    }
}

// Test 2. Adding Zero
function testAddZero() {
    const result = add(0, 0);
    if (result !== 0) {
        throw new Error("Test Failed: Expected add(0, 0) to be 0, but got " + result);
    } else {
        console.log("Test Passed: add(0, 0) === 0");
    }
}

// Test 3. Adding Negatives
function testAddNegative() {
    const result = add(-2, 3);
    if (result !== 1) {
        throw new Error("Test Failed: Expected add(-2, 3) to be 1, but got " + result);
    } else {
        console.log("Test Passed: add(-2, 3) === 1");
    }
}

// Test 4. Adding Decimals
function testAddDecimal() {
    const result = add(5.8, 0.4);
    if (result !== 6.2) {
        throw new Error("Test Failed: Expected add(5.8, 0.4) to be 6.2, but got " + result);
    } else {
        console.log("Test Passed: add(5.8, 0.4) === 6.2");
    }
}

testAdd();
testAddZero();
testAddNegative();
testAddDecimal();

// Subtracts second number from the first number and returns output
function subtract(a, b) {
    return a - b;
}

// Test 1. Subtract Positive
function testSub() {
    const result = subtract(5, 3);
    if (result !== 2) {
        throw new Error("Test Failed: Expected subtract(5, 3) to be 5, but got " + result);
    } else {
        console.log("Test Passed: subtract(5, 3) === 2");
    }
}

// Test 2. Subtract Zero
function testSubZero() {
    const result = subtract(0, 0);
    if (result !== 0) {
        throw new Error("Test Failed: Expected subtract(0, 0) to be 0, but got " + result);
    } else {
        console.log("Test Passed: subtract(0, 0) === 0");
    }
}

// Test 3. Subtracting Negative
function testSubNegative() {
    const result = subtract(-5, -3);
    if (result !== -2) {
        console.log("Test Failed: Expected -2, got " + result);
    } else {
        console.log("Test Passed: subtract(-5, -3) === -2");
    }
}

// Test 4. Subtracting Decimals
function testSubDecimals() {
    const result = subtract(5.5, 2.2);
    if (result !== 3.3) {
        console.log("Test Failed: Expected 3.3, got " + result);
    } else {
        console.log("Test Passed: subtract(5.5, 2.2) === 3.3");
    }
}

testSub();
testSubZero();
testSubNegative();
testSubDecimals();

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
