// Global variables 
let displayInputValue = '';
let displayOutputValue = '';

const operandBtns = document.getElementsByClassName('opBtns');
const functionBtns = document.getElementsByClassName('funcBtns');
const numberBtns = document.getElementsByClassName('numBtns');
const operands = ['+', '-', 'x', '÷'];
const displayContainer = document.getElementById('displayContainer');
const getOpBtnClick = function (e) {
    applyOperandBtn(e.target.id);
}
const getFuncBtnClick = function (e) {
    applyFunctionBtn(e.target.id);
}
const getNumBtnClick = function (e) {
    applyNumButton(e.target.id);
}

// Event listeners 
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

function handleKey(key) {
    if (/[0-9]/.test(key) || key == '.') {
        applyNumButton(key);
    } else if (key == '+') {
        applyOperandBtn('add');
    } else if (key == '-') {
        applyOperandBtn('subtract');
    } else if (key == '*') {
        applyOperandBtn('multiply');
    } else if (key == '/') {
        applyOperandBtn('divide');
    } else if (key == '=') {
        applyFunctionBtn('equals');
    } else if (key == 'Escape') {
        applyFunctionBtn('clear');
    } else if (key == 'Backspace') {
        applyFunctionBtn('delete');
    }
}

function applyNumButton(num) {
    if (displayInputValue.includes('.') && num == '.') {
    } else if (isNaN(num) && num !== '.') {
    } else {
        displayInput.textContent += num;
        displayInputValue = document.getElementById('displayInput').textContent;
    }
}

function applyOperandBtn(userChoice) {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if ((operands.some(operand => displayOutputValue.includes(operand))) && (displayOutputValue.includes('='))) {
        calculateOperandEquals(userChoice);
    } else if (operands.some(operand => displayOutputValue.includes(operand)) && displayInputValue !== '') {
        calculateOperand();
    } else if (userChoice == 'add') {
        add();
    } else if (userChoice == 'subtract') {
        subtract();
    } else if (userChoice == 'multiply') {
        multiply();
    } else if (userChoice == 'divide') {
        divide();
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


function add() {
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (displayInputValue == '' && displayOutputValue == '') {
        displayOutput.textContent = ` 0 +`;
        displayInput.textContent = '';
    } else if (displayOutputValue.charAt(displayOutputValue.length - 1) == '-') {
        displayOutputValue = displayOutputValue.substring(0, displayOutputValue.length - 1);
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} +`;
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} +`;
    } else if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} +`
    } else if (displayOutputValue == '') {
        displayOutput.textContent = ` ${displayInputValue} +`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} +`
        displayInput.textContent = ``;
    }
}

function subtract() {
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (displayInputValue == '' && displayOutputValue == '') {
        displayOutput.textContent = ` 0 -`;
        displayInput.textContent = '';
    } else if (displayOutputValue.charAt(displayOutputValue.length - 1) == '-') {
        displayOutputValue = displayOutputValue.substring(0, displayOutputValue.length - 1);
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} -`;
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} -`;
    } else if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} -`;
    } else if (displayOutputValue == '') {
        displayOutput.textContent = ` ${displayInputValue} -`;
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} -`;
        displayInput.textContent = ``;
    }
}

function multiply() {
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (displayInputValue == '' && displayOutputValue == '') {
        displayOutput.textContent = ` 0 x`;
        displayInput.textContent = '';
    } else if (displayOutputValue.charAt(displayOutputValue.length - 1) == '-') {
        displayOutputValue = displayOutputValue.substring(0, displayOutputValue.length - 1);
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} x`;
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} x`;
    } else if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} x`;
    } else if (displayOutputValue == '') {
        displayOutput.textContent = ` ${displayInputValue} x`;
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} x`;
        displayInput.textContent = ``;
    }
}

function divide() {
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (displayInputValue == '' && displayOutputValue == '') {
        displayOutput.textContent = ` 0 ÷`;
        displayInput.textContent = '';
    } else if (displayOutputValue.charAt(displayOutputValue.length - 1) == '-') {
        displayOutputValue = displayOutputValue.substring(0, displayOutputValue.length - 1);
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} ÷`;
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue = displayOutputValue.replace('+', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} ÷`;
    } else if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} ÷`;
    } else if (displayOutputValue == '') {
        displayOutput.textContent = ` ${displayInputValue} ÷`;
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} ÷`;
        displayInput.textContent = ``;
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


function calculateOperand() {
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

function calculateOperandEquals(userChoice) {
    if (userChoice == 'add') {
        displayInput.textContent = '';
        displayOutput.textContent = `${displayInputValue} +`;
    } else if (userChoice == 'multiply') {
        displayInput.textContent = '';
        displayOutput.textContent = `${displayInputValue} x`;
    } else if (userChoice == 'divide') {
        displayInput.textContent = '';
        displayOutput.textContent = `${displayInputValue} ÷`;
    } else if (userChoice == 'subtract') {
        displayInput.textContent = '';
        displayOutput.textContent = `${displayInputValue} -`;
    }
}

function removeLastChar() {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayInputValue = displayInputValue.substring(0, displayInputValue.length - 1);
    displayInput.textContent = displayInputValue;
}