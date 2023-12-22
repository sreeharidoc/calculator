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

var num1 = 10;
var num2 = 5;
var operator = "";
var variable = "";
var firstValue;
var secondValue;
var result;

function operate(num1,num2,operator){
    switch(operator){
        case '+':
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "÷":
            return divide(num1,num2);
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
display.textContent = "0"
calculator.appendChild(display)

const buttons = document.createElement("div")
buttons.classList.add("buttons")
calculator.appendChild(buttons)

const firstRow = document.createElement("div")
firstRow.classList.add("display-rows")
buttons.appendChild(firstRow)

const secondRow = document.createElement("div")
secondRow.classList.add("display-rows")
buttons.appendChild(secondRow)

const thirdRow = document.createElement("div")
thirdRow.classList.add("display-rows")
buttons.appendChild(thirdRow)

const fourthRow = document.createElement("div")
fourthRow.classList.add("display-rows")
buttons.appendChild(fourthRow)

const one = document.createElement("button")
one.classList.add("button")
one.textContent = 1
firstRow.appendChild(one)

const two = document.createElement("button")
two.classList.add("button")
two.textContent = 2
firstRow.appendChild(two)

const three = document.createElement("button")
three.classList.add("button")
three.textContent = 3
firstRow.appendChild(three)

const addition = document.createElement("button")
addition.classList.add("button")
addition.textContent = "+"
firstRow.appendChild(addition)

const four = document.createElement("button")
four.classList.add("button")
four.textContent = 4
secondRow.appendChild(four)

const five = document.createElement("button")
five.classList.add("button")
five.textContent = 5
secondRow.appendChild(five)

const six = document.createElement("button")
six.classList.add("button")
six.textContent = 6
secondRow.appendChild(six)

const subtraction = document.createElement("button")
subtraction.classList.add("button")
subtraction.textContent = "-"
secondRow.appendChild(subtraction)

const seven = document.createElement("button")
seven.classList.add("button")
seven.textContent = 7
thirdRow.appendChild(seven)

const eight = document.createElement("button")
eight.classList.add("button")
eight.textContent = 8
thirdRow.appendChild(eight)

const nine = document.createElement("button")
nine.classList.add("button")
nine.textContent = 9
thirdRow.appendChild(nine)

const multiplication = document.createElement("button")
multiplication.classList.add("button")
multiplication.textContent = "*"
thirdRow.appendChild(multiplication)

const zero = document.createElement("button")
zero.classList.add("button")
zero.textContent = 0
fourthRow.appendChild(zero)

const division = document.createElement("button")
division.classList.add("button")
division.textContent = "÷"
fourthRow.appendChild(division)

const equalTo = document.createElement("button")
equalTo.classList.add("button")
equalTo.textContent = "="
fourthRow.appendChild(equalTo)

const clear = document.createElement("button")
clear.classList.add("button")
clear.textContent = "CE"
fourthRow.appendChild(clear)

one.addEventListener("click",() =>{
    variable = variable + "1";
    display.textContent = variable;
})

two.addEventListener("click",() =>{
    variable = variable + "2";
    display.textContent = variable;
})

three.addEventListener("click",() =>{
    variable = variable + "3";
    display.textContent = variable;
})

four.addEventListener("click",() =>{
    variable = variable + "4";
    display.textContent = variable;
})

five.addEventListener("click",() =>{
    variable = variable + "5";
    display.textContent = variable;
})

six.addEventListener("click",() =>{
    variable = variable + "6";
    display.textContent = variable;
})

seven.addEventListener("click",() =>{
    variable = variable + "7";
    display.textContent = variable;
})

eight.addEventListener("click",() =>{
    variable = variable + "8";
    display.textContent = variable;
})

nine.addEventListener("click",() =>{
    variable = variable + "9";
    display.textContent = variable;
})

zero.addEventListener("click",() =>{
    variable = variable + "0";
    display.textContent = variable;
})

addition.addEventListener("click",() =>{
    operator = "+";
    firstValue = parseInt(variable)
    variable = ""
    display.textContent = variable
})

subtraction.addEventListener("click",() =>{
    operator = "-";
    firstValue = parseInt(variable)
    variable = ""
    display.textContent = variable
})

multiplication.addEventListener("click",() =>{
    operator = "*";
    firstValue = parseInt(variable)
    variable = ""
    display.textContent = variable
})

division.addEventListener("click",() =>{
    operator = "÷";
    firstValue = parseInt(variable)
    variable = ""
    display.textContent = variable
})

equalTo.addEventListener("click",()=>{
    secondValue = parseInt(variable)
    result = operate(firstValue,secondValue,operator)
    display.textContent = result;
    variable = result
})





body.appendChild(container)