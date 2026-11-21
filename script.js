function add(a,b) {
    return a+b; 
}

function subtract(a,b) {
    return a-b; 
}

function multiply(a,b) {
    return a*b; 
}

function divide(a,b) {
    return a/b; 
}

// console.log(add(3,4));
// console.log(subtract(3,4));
// console.log(multiply(3,4));
// console.log(divide(3,4));

let firstNumber; 
let secondNumber; 
let operator; 

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+": 
            return add(firstNumber, secondNumber)
        break; 
        
        case "-": 
            return subtract(firstNumber, secondNumber)
        break; 
        
        case "*": 
            return multiply(firstNumber, secondNumber)
        break; 
        
        case "/": 
            return divide(firstNumber, secondNumber)
        break; 

    }
}

// console.log(operate(4,5,"/")); 