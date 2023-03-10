let displayInputValue = '';
let displayOutputValue = '';
let result = undefined;

const operandBtns = document.getElementsByClassName('opBtns');
const functionBtns = document.getElementsByClassName('funcBtns');
const numberBtns = document.getElementsByClassName('numBtns');
const floatBtn = document.getElementById('.')
const operands = ['+', '-', 'x', '÷'];
const displayContainer = document.getElementById('displayContainer');
const add = () => result = (parseFloat(displayOutputValue)) + (parseFloat(displayInputValue));
const subtract = () => result = (parseFloat(displayOutputValue)) - (parseFloat(displayInputValue));
const multiply = () => result = (parseFloat(displayOutputValue)) * (parseFloat(displayInputValue));
const divide = () => result = (parseFloat(displayOutputValue)) / (parseFloat(displayInputValue));
const applyNumButton = (num) => displayInput.textContent += num;
const getOpBtnClick = function (e) {
    refreshScreen();
    evaluateOperandBtn(e.target.id);
}
const getFuncBtnClick = function (e) {
    refreshScreen();
    evaluateFunctionBtn(e.target.id);
}
const getNumBtnClick = function (e) {
    refreshScreen();
    applyNumButton(e.target.id);
}

document.documentElement.addEventListener('keydown', (e) => {
    refreshScreen();
    handleKey(e.key);
});

floatBtn.addEventListener("click", (e) => {
    refreshScreen();
    applyFloat(e.target.id);
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

function handleKey(key) {
    if (/[0-9]/.test(key)) applyNumButton(key);
    switch (key) {
        case ".":
            applyFloat('.');
            break;
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
            evaluateOperandBtn('÷');
            break;
        case '=':
            evaluateFunctionBtn('equals');
            break;
        case 'Enter':
            evaluateFunctionBtn('equals');
            break;
        case 'Escape':
            evaluateFunctionBtn('clear');
            break;
        case 'Backspace':
            evaluateFunctionBtn('delete');
            break;
    }
}

function refreshScreen() {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayOutputValue = document.getElementById('displayOutput').textContent;
}

function applyFloat(float) {
    if (displayInputValue == '') {
        displayInput.textContent += '0.'
        //Ensures that multiple floating points can't be entered
    } else if (displayInputValue.includes('.')) {
    } else {
        displayInput.textContent += float;
    }
}

function evaluateOperandBtn(userChoice) {
    // Ensures an operand isn't input if nothing is present 
    if (displayInputValue == '' && displayOutputValue == '') {
    } else if ((operands.some(operand => displayOutputValue.includes(operand))) && (displayOutputValue.includes('='))) {
        calculateOperandEqualsPresent(userChoice);
        // Ensures divide runs if dividing by zero 
    } else if (userChoice == '÷' && displayOutputValue.includes('÷') && displayInputValue == '0') {
        divideByZero();
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
    } else if (displayInputValue == '') {
        displayOutput.textContent = ` ${displayOutputValue} ${userChoice}`
        displayInput.textContent = ``;
    } else {
        displayOutput.textContent = ` ${displayInputValue} ${userChoice}`
        displayInput.textContent = ``;
    }
}

function removeOperand() {
    // Removes '-' if the last character 
    if (displayOutputValue.charAt(displayOutputValue.length - 1) == '-') {
        displayOutputValue = displayOutputValue.substring(0, displayOutputValue.length - 1);
        // Removes operand if a negative number 
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        // Removes operand if a positive number 
    } else if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
    }
}

function evaluateFunctionBtn(userChoice) {
    // Ensures calculate function doesn't run if nothing is present
    if (userChoice == 'equals' && displayInputValue == '') {
        // Ensures calculate doesn't run if '=' is already present 
    } else if (userChoice == 'equals' && displayOutputValue.includes('=')) {
        // Ensures divide runs if dividing by zero 
    } else if (userChoice == 'equals' && displayOutputValue.includes('÷') && displayInputValue == 0) {
        divideByZero();
    } else {
        applyFunctionBtn(userChoice);
    }
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
    if (displayOutputValue.includes('+')) {
        add();
    } else if (displayOutputValue.includes('x')) {
        multiply();
    } else if (displayOutputValue.includes('÷')) {
        divide();
    } else if (displayOutputValue.includes('-')) {
        subtract();
    }
    round();
    displayInput.textContent = result;
    displayOutput.textContent = `${displayOutputValue}${displayInputValue} =`;
}

function round() {
    result = result.toFixed(3);
    result = parseFloat(Math.round(result * 1000) / 1000);
}

function divideByZero() {
    alert('BOOOOOM, you just blew up your computer! If you can read this.. why not have another go?!')
    displayInput.textContent = '';
}

function clearStrings() {
    displayInputValue = '';
    displayOutputValue = '';
    displayOutput.textContent = '';
    displayInput.textContent = '';
    result = '';
}

function calculateOperandPresent(userChoice) {
    if (displayOutputValue.includes('=') || displayInputValue == '') {
    } else if (userChoice == '+') {
        add();
    } else if (userChoice == 'x') {
        multiply();
    } else if (userChoice == '÷') {
        divide();
    } else if (userChoice == '-') {
        subtract();
    }
    round();
    displayOutput.textContent = `${result} ${userChoice}`;
    displayInput.textContent = '';
}


function calculateOperandEqualsPresent(userChoice) {
    displayInput.textContent = '';
    displayOutput.textContent = `${displayInputValue} ${userChoice}`;
}

function removeLastChar() {
    displayInputValue = displayInputValue.substring(0, displayInputValue.length - 1);
    displayInput.textContent = displayInputValue;
}