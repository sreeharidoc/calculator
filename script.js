function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

var num1 = 10
var num2 = 5
var operator = "+"

function operate(num1,num2,operator){
    switch(operator){
        case '+':
            console.log(add(num1,num2));
            break;
        case "-":
            console.log(subtract(num1,num2));
            break;
        case "*":
            console.log(multiply(num1,num2));
            break;
        case "/":
            console.log(divide(num1,num2));
            break;
        default:
            alert("No Value")
    }
}

const body = document.querySelector("body")

const container = document.createElement("div")
container.classList.add("container")

const calculator = document.createElement("div")
calculator.classList.add("calculator")
container.appendChild(calculator)

const display = document.createElement("div")
display.classList.add("display")
calculator.appendChild(display)

const buttons = document.createElement("div")
buttons.classList.add("buttons")
calculator.appendChild(buttons)




body.appendChild(container)