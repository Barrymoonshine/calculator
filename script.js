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
    if (/[0-9]/.test(key) || key == '.') {
        applyNumButton(key);
    } else if (key == '+') {
        evaluateOperandBtn('add');
    } else if (key == '-') {
        evaluateOperandBtn('subtract');
    } else if (key == '*') {
        evaluateOperandBtn('multiply');
    } else if (key == '/') {
        evaluateOperandBtn('divide');
    } else if (key == '=' || key == 'Enter') {
        applyFunctionBtn('equals');
    } else if (key == 'Escape') {
        applyFunctionBtn('clear');
    } else if (key == 'Backspace') {
        applyFunctionBtn('delete');
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
    } else if (operands.some(operand => displayOutputValue.includes(operand)) && displayInputValue !== '') {
        calculateOperandPresent();
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
    // Removes '-' operand, as this will always be the last character of the string 
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
    let calc = `${displayOutputValue}${displayInputValue} =`;
    if (displayOutputValue.includes('=') || displayInputValue == '') {
    } else if (displayOutputValue.includes('+')) {
        displayOutputValue.replace('+', '');
        result = (parseFloat(displayInputValue)) + (parseFloat(displayOutputValue));
        result = result.toFixed(3);
        result = parseFloat(Math.round(result * 1000) / 1000);
        displayOutput.textContent = calc;
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('x')) {
        displayOutputValue.replace('x', '');
        result = (parseFloat(displayOutputValue)) * (parseFloat(displayInputValue));
        result = result.toFixed(3);
        result = parseFloat(Math.round(result * 1000) / 1000);
        displayOutput.textContent = calc;
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('÷') && displayInputValue == 0) {
        alert('BOOOOOM, you just wrecked your computer! If you can read this.. why not have another go?!');
        displayInput.textContent = '';
    } else if (displayOutputValue.includes('÷')) {
        displayOutputValue.replace('÷', '');
        result = (parseFloat(displayOutputValue)) / ((parseFloat(displayInputValue)));
        result = result.toFixed(3);
        result = parseFloat(Math.round(result * 1000) / 1000);
        displayOutput.textContent = calc;
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue.replace('-', '');
        result = (parseFloat(displayOutputValue)) - (parseFloat(displayInputValue));
        result = result.toFixed(3);
        result = parseFloat(Math.round(result * 1000) / 1000)
        displayOutput.textContent = calc;
        displayInput.textContent = result;
    }
}

function clearStrings() {
    displayInputValue = '';
    displayOutputValue = '';
    displayOutput.textContent = '';
    displayInput.textContent = '';
}


function calculateOperandPresent() {
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (displayInputValue == '') {
    } else if (displayOutputValue.includes('+')) {
        displayOutputValue.replace('+', '');
        result = (parseFloat(displayInputValue)) + (parseFloat(displayOutputValue));
        result = result.toFixed(3);
        result = Math.round(result * 1000) / 1000;
        displayOutput.textContent = `${result} +`;
        displayInput.textContent = '';
    } else if (displayOutputValue.includes('x')) {
        displayOutputValue.replace('x', '');
        result = (parseFloat(displayOutputValue)) * (parseFloat(displayInputValue));
        result = result.toFixed(3);
        result = Math.round(result * 1000) / 1000;
        displayOutput.textContent = `${result} x`;
        displayInput.textContent = '';
    } else if (displayOutputValue.includes('÷') && displayInputValue == 0) {
        alert('BOOOOOM, you just wrecked your computer! If you can read this.. why not have another go?!')
        displayInput.textContent = '';
    } else if (displayOutputValue.includes('÷')) {
        displayOutputValue.replace('÷', '');
        result = (parseFloat(displayOutputValue)) / (parseFloat(displayInputValue));
        result = result.toFixed(3);
        result = Math.round(result * 1000) / 1000;
        displayOutput.textContent = `${result} ÷`;
        displayInput.textContent = '';
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue.replace('-', '');
        result = (parseFloat(displayOutputValue)) - (parseFloat(displayInputValue));
        result = result.toFixed(3);
        result = Math.round(result * 1000) / 1000;
        displayOutput.textContent = `${result} -`;
        displayInput.textContent = '';
    }
}

function calculateOperandEqualsPresent(userChoice) {
    displayInput.textContent = '';
    displayOutput.textContent = `${displayInputValue} ${userChoice} `;
}

function removeLastChar() {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayInputValue = displayInputValue.substring(0, displayInputValue.length - 1);
    displayInput.textContent = displayInputValue;
}