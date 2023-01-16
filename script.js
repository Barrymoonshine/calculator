// Global variables 
let displayInputValue = '';
let displayOutputValue = '';

const operandBtns = document.getElementsByClassName('opBtns');
const functionBtns = document.getElementsByClassName('funcBtns');
const numberBtns = document.getElementsByClassName('numBtns');
const operands = ['+', '-', 'x', '÷'];
const displayContainer = document.getElementById('displayContainer');

// Event listeners 
const getOpBtnClick = function (e) {
    evaluateOperandBtn(e.target.id);
}
const getFuncBtnClick = function (e) {
    applyFunctionBtn(e.target.id);
}
const getNumBtnClick = function (e) {
    applyNumButton(e.target.id);
}

document.documentElement.addEventListener('keydown', (e) => {
    handleKey(e.key);
});

for (i of operandBtns) {
    i.addEventListener('click', getOpBtnClick);
}
for (i of numberBtns) {
    i.addEventListener('click', getNumBtnClick);
}
for (i of functionBtns) {
    i.addEventListener('click', getFuncBtnClick);
}

// Functions 
function handleKey(key) {
    if (/[0-9]/.test(key) || key == '.') applyNumButton(key);
    switch (key) {
        case "+":
            evaluateOperandBtn('+');
            break;
        case "-":
            evaluateOperandBtn('-');
            break;
        case "*":
            evaluateOperandBtn('x');
            break;
        case "/":
            evaluateOperandBtn('/');
            break;
        case '=':
            applyFunctionBtn('equals');
            break;
        case 'Enter':
            applyFunctionBtn('equals');
            break;
        case 'Escape':
            applyFunctionBtn('clear');
            break;
        case 'backspace':
            applyFunctionBtn('delete');
            break;
    }
}

function applyNumButton(num) {
    // Ensures that two floating points can't be input 
    if (displayInputValue.includes('.') && num == '.') {
        //Ensures that non-numbers can't be input , excluding '.'
    } else if (isNaN(num) && num !== '.') {
    } else {
        displayInput.textContent += num;
        displayInputValue = document.getElementById('displayInput').textContent;
    }
}

function evaluateOperandBtn(userChoice) {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (displayInputValue == '' && displayOutputValue == '') {
    } else if ((operands.some(operand => displayOutputValue.includes(operand))) && (displayOutputValue.includes('='))) {
        calculateOperandEqualsPresent(userChoice);
    } else if (displayOutputValue.charAt(displayOutputValue.length - 1) == userChoice) {
        calculateOperandPresent(userChoice);
    } else {
        applyOperand(userChoice);
    }
}

function applyOperand(userChoice) {
    removeOperand();
    if (displayOutputValue == '') {
        displayOutput.textContent = ` ${displayInputValue} ${userChoice}`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} ${userChoice}`
        displayInput.textContent = ``;
    }
}

function removeOperand() {
    // Removes operand if a negative number 
} if (displayOutputValue.includes('-')) {
    displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
    // Removes operand if a positive number 
} else if (displayInputValue == '') {
    displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
}


function applyFunctionBtn(userChoice) {
    if (userChoice == 'equals') {
        calculate();
    } else if (userChoice == 'clear') {
        clearStrings();
    } else if (userChoice == 'delete') {
        removeLastChar()
    }
}

function calculate() {
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (displayOutputValue.includes('=') || displayInputValue == '') {
    } else if (displayOutputValue.includes('+')) {
        add();
    } else if (displayOutputValue.includes('x')) {
        multiply();
    } else if (displayOutputValue.includes('÷')) {
        divide();
    } else if (displayOutputValue.includes('-')) {
        subtract();
    }
    displayOutput.textContent = `${displayOutputValue}${displayInputValue} =`;
}

function add() {
    removeOperand();
    result = (parseFloat(displayOutputValue)) + (parseFloat(displayInputValue));
    round();
    displayInput.textContent = result;
}

function round() {
    result = result.toFixed(3);
    result = parseFloat(Math.round(result * 1000) / 1000);
}

function multiply() {
    removeOperand();
    result = (parseFloat(displayOutputValue)) * (parseFloat(displayInputValue));
    round();
    displayInput.textContent = result;
}

function divide() {
    if (displayInputValue == 0) {
        alert('BOOOOOM, you just wrecked your computer! If you can read this.. why not have another go?!')
        displayInput.textContent = '';
    } else {
        removeOperand();
        result = (parseFloat(displayOutputValue)) / (parseFloat(displayInputValue));
        round();
        displayInput.textContent = result;
    }
}

function subtract() {
    removeOperand();
    result = (parseFloat(displayOutputValue)) - (parseFloat(displayInputValue));
    round();
    displayInput.textContent = result;
}

function clearStrings() {
    displayInputValue = '';
    displayOutputValue = '';
    displayOutput.textContent = '';
    displayInput.textContent = '';
}

function calculateOperandPresent(userChoice) {
    if (displayOutputValue.includes('=') || displayInputValue == '') {
    } else if (userChoice == '+') {
        add();
    } else if (userChoice == 'x') {
        multiply();
    } else if (userChoice == '/') {
        divide();
    } else if (userChoice == '-') {
        subtract();
    }
    displayOutput.textContent = `${result} ${userChoice}`;
    displayInput.textContent = '';
}


function calculateOperandEqualsPresent(userChoice) {
    displayInput.textContent = '';
    displayOutput.textContent = `${displayInputValue} ${userChoice}`;
}

function removeLastChar() {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayInputValue = displayInputValue.substring(0, displayInputValue.length - 1);
    displayInput.textContent = displayInputValue;
}