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
let result;


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
            input.value = firstNumber;
        } else {
            secondNumber += item.textContent; 
            console.log(secondNumber)
            input.value =secondNumber;
        }
        
    })
    
})

opr.forEach((item) => {
    item.addEventListener("click", () => {

        if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
            firstNumber = operate(
                Number(firstNumber),
                Number(secondNumber),
                operator
            );

            secondNumber = "";
        }

        operator = item.textContent;
        input.value = Math.round(firstNumber*100)/100;

    });
});

clear.addEventListener("click", () => {
    firstNumber =""
    secondNumber =""
    operator =""
    input.value =""
})

equal.addEventListener("click",() => {
    result =operate(Number(firstNumber),Number(secondNumber),operator)
    input.value = Math.round(result*100)/100;

})