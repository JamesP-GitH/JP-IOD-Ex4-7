let x = 10
let y = 5

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(x + " plus " + y + " = " + add(x, y));
console.log(x + " minus " + y + " = " + subtract(x, y));
console.log(x + " times " + y + " = " + multiply(x, y));
console.log(x + " divided by " + y + " = " + divide(x, y));