// create array out of the terminal call starting from third value
// eg, the paramaters after the node script.js call
const args = process.argv.slice(2);

// returns error and ends the script process without continuing
// if two values are not passed alongside the node call in console
if (args.length !== 2) {
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

// Test 1. Adding Positive
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

// Test 1. Multiply Positive
function testMultiply() {
    const result = multiply(3, 4);
    if (result !== 12) {
        console.log("Test Failed: Expected 12, got " + result);
    } else {
        console.log("Test Passed: multiply(3, 4) === 12");
    }
}

// Test 2. Multiply Zero
function testMultiplyZero() {
    const result1 = multiply(0, 5);
    const result2 = multiply(5, 0);
    if (result1 !== 0 || result2 !== 0) {
        console.log("Test Failed: Expected 0, got " + result1 + " and " + result2);
    } else {
        console.log("Test Passed: multiply(0, 5) === 0 and multiply(5, 0) === 0");
    }
}

// Test 3. Multiply Negative
function testMultiplyNegative() {
    const result = multiply(4, -2);
    if (result !== -8) {
        console.log("Test Failed: Expected -8, got " + result);
    } else {
        console.log("Test Passed: multiply(4, -2) === -8");
    }
}

// Test 4. Multiply Two Negative
function testMultiplyNegative2() {
    const result = multiply(-3, -2);
    if (result !== 6) {
        console.log("Test Failed: Expected 6, got " + result);
    } else {
        console.log("Test Passed: multiply(-3, -2) === 6");
    }
}

// Test 5. Multiply Decimals
function testMultiplyDecimals() {
    const result = multiply(2.5, 4);
    if (result !== 10) {
        console.log("Test Failed: Expected 10, got " + result);
    } else {
        console.log("Test Passed: multiply(2.5, 4) === 10");
    }
}

testMultiply();
testMultiplyZero();
testMultiplyNegative();
testMultiplyNegative2();
testMultiplyDecimals();

// Divides first number by the second number and returns output
function divide(a, b) {
    //checks for divide by 0
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Test 1. Divide 
function testDivide() {
    const result = divide(10, 2);
    if (result !== 5) {
        console.log("Test Failed: Expected 5, but got " + result);
    } else {
        console.log("Test Passed: divide(10, 2) === 5");
    }
}

// Test 2. Divide by Zero
function testDivideZero() {
    const result = divide(10, 0);
    if (result !== "Cannot divide by zero") {
        console.log("Test Failed: Expected 'Cannot divide by zero', but got " + result);
    } else {
        console.log("Test Passed: divide(10, 0) === 'Cannot divide by zero'");
    }
}

// Test 3. Divide Zero by Number
function testDivideZero2() {
    const result = divide(0, 5);
    if (result !== 0) {
        console.log("Test Failed: Expected 0, but got " + result);
    } else {
        console.log("Test Passed: divide(0, 5) === 0");
    }
}

// Test 4. Divide Negative
function testDivideNegative() {
    const result = divide(-10, -2);
    if (result !== 5) {
        console.log("Test Failed: Expected 5, but got " + result);
    } else {
        console.log("Test Passed: divide(-10, -2) === 5");
    }
}

// Test 5. Divide Decimals
function testDivideDecimals() {
    const result = divide(5.5, 2);
    if (result !== 2.75) {
        console.log("Test Failed: Expected 2.75, but got " + result);
    } else {
        console.log("Test Passed: divide(5.5, 2) === 2.75");
    }
}

testDivide();
testDivideZero();
testDivideZero2();
testDivideNegative();
testDivideDecimals();

// Log the outputs of each function based on inputs
console.log(x + " plus " + y + " = " + add(x, y));
console.log(x + " minus " + y + " = " + subtract(x, y));
console.log(x + " times " + y + " = " + multiply(x, y));
console.log(x + " divided by " + y + " = " + divide(x, y));
