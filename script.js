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

const addition = document.createElement("button")
addition.classList.add("button")
addition.textContent = "+"
buttons.appendChild(addition)

const subtraction = document.createElement("button")
subtraction.classList.add("button")
subtraction.textContent = "-"
buttons.appendChild(subtraction)

const multiplication = document.createElement("button")
multiplication.classList.add("button")
multiplication.textContent = "*"
buttons.appendChild(multiplication)

const division = document.createElement("button")
division.classList.add("button")
division.textContent = "÷"
buttons.appendChild(division)

const equalTo = document.createElement("button")
equalTo.classList.add("button")
equalTo.textContent = "="
buttons.appendChild(equalTo)





body.appendChild(container)