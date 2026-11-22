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


function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+": 
        return add(firstNumber, secondNumber)
        
        case "-": 
        return subtract(firstNumber, secondNumber)
        
        case "*": 
        return multiply(firstNumber, secondNumber)
        
        case "/": 
        return divide(firstNumber, secondNumber)
        
    }
}

let firstNumber = "" 
let secondNumber = ""
let operator = ""


const buttons = document.querySelectorAll(".number"); 
const input = document.querySelector("#display"); 
const opr = document.querySelectorAll(".operator"); 
const clear = document.querySelector("#clear"); 
const equal = document.querySelector("#equal")


buttons.forEach((item) => {
    item.addEventListener("click", () => {
        if (operator === "") {
            firstNumber += item.textContent;
            console.log(firstNumber)
        } else {
            secondNumber += item.textContent; 
            console.log(secondNumber)
        }
    })
    
})

opr.forEach((item) => {
    item.addEventListener("click", () => {
        operator = item.textContent; 
        console.log(operator)
    })
})


clear.addEventListener("click", () => {
    firstNumber =""
    secondNumber =""
    operator =""
})

equal.addEventListener("click",() => {
   firstNumber = +firstNumber;
   secondNumber = +secondNumber;
    let result =operate(firstNumber,secondNumber,operator)
    input.value = result
})