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
            if(secondNumber === 0) {
                return "nice try! You can't divide by zero.";
            } 
            return divide(firstNumber, secondNumber)
        default: 
        return "invalid operator"; 
        
    }
}

let firstNumber = "" 
let secondNumber = ""
let operator = ""
let result;
let calculationfinished = false;


const buttons = document.querySelectorAll(".number"); 
const input = document.querySelector("#display"); 
const opr = document.querySelectorAll(".operator"); 
const clear = document.querySelector("#clear"); 
const equal = document.querySelector("#equal")

buttons.forEach((item) => {
    item.addEventListener("click", () => {
        if(calculationfinished) {
            firstNumber ="";
            secondNumber ="";
            operator =""; 

            calculationfinished =false; 
        }
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

        if (calculationfinished) {
            firstNumber = result;
            secondNumber = "";
            calculationfinished = false;
        }
        if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
            firstNumber = operate(
                Number(firstNumber),
                Number(secondNumber),
                operator
            );

        if (typeof firstNumber !== "number") {
            input.value =firstNumber;
            return;
        }

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
        result = undefined;
        input.value =""
        calculationfinished  = false; 

})

equal.addEventListener("click",() => {

    if(firstNumber !== "" && secondNumber !=="" && operator !== "") {
        result =operate(
            Number(firstNumber),
            Number(secondNumber),
            operator)

    };
    if (typeof result ==="number") {
        input.value = Math.round(result*100)/100;
        firstNumber = result; 
        secondNumber ="";
        operator ="";
        
        calculationfinished = true; 
    } else {
        input.value =result; 
        firstNumber ="";
        secondNumber ="";
        operator ="";
        result =undefined;
        calculationfinished =false;
    }

});