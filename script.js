const operatorBtns = document.getElementsByClassName('opBtns');
const numberBtns = document.getElementsByClassName('numBtns');
const displayContainer = document.getElementById('displayContainer');

document.documentElement.addEventListener('keydown', (e) => {
    handleKey(e.key)
});

function handleKey(key) {
    if (/[0-9]/.test(key) || key == '.') {
        applyUserNumButton(key)
    } else if (key == '+') {
        operate('add');
    } else if (key == '-') {
        operate('subtract');
    } else if (key == '*') {
        operate('multiply');
    } else if (key == '=') {
        operate('equals')
    } else if (key == '/') {
        operate('divide');
    } else if (key == 'Escape') {
        operate('clear')
    } else if (key == 'Backspace') {
        operate('delete')
    }
}

const getUserBtnChoiceClick = function (e) {
    operate(e.target.id);
}

const getUserNumButtonClick = function (e) {
    applyUserNumButton(e.target.id);
}

for (i of operatorBtns) {
    i.addEventListener('click', getUserBtnChoiceClick);
}

for (i of numberBtns) {
    i.addEventListener('click', getUserNumButtonClick);
}


function applyUserNumButton(num) {
    displayInputValue = document.getElementById('displayInput').textContent;
    if (displayInputValue.includes('.') && num == '.') {
    } else if (isNaN(num) && num !== '.') {
    } else {
        displayInput.textContent += num;
        displayInputValue = document.getElementById('displayInput').textContent;
    }
}

function operate(userChoice) {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (userChoice == 'add' && displayOutputValue.includes('+') && displayOutputValue.includes('=')) {
        calculateOperandEquals();
    } else if (userChoice == 'add' && displayOutputValue.includes('+')) {
        calculateOperand();
    } else if (userChoice == 'add') {
        add();
    } else if (userChoice == 'subtract' && displayOutputValue.includes('-') && displayOutputValue.includes('=')) {
        calculateOperandEquals();
    } else if (userChoice == 'subtract' && displayOutputValue.includes('-')) {
        calculateOperand();
    } else if (userChoice == 'subtract') {
        subtract();
    } else if (userChoice == 'multiply' && displayOutputValue.includes('x') && displayOutputValue.includes('=')) {
        calculateOperandEquals();
    } else if (userChoice == 'multiply' && displayOutputValue.includes('x')) {
        calculateOperand();
    } else if (userChoice == 'multiply') {
        multiply();
    } else if (userChoice == 'divide' && displayOutputValue.includes('÷') && displayOutputValue.includes('=')) {
        calculateOperandEquals();
    } else if (userChoice == 'divide' && displayOutputValue.includes('÷')) {
        calculateOperand();
    } else if (userChoice == 'divide') {
        divide();
    } else if (userChoice == 'equals') {
        calculate();
    } else if (userChoice == 'clear') {
        clearStrings();
    } else if (userChoice == 'delete') {
        removeLastChar()
    }
}


function add() {
    if (displayInputValue == '' && displayOutputValue == '') {
        displayOutput.textContent = ` 0 +`
        displayInput.textContent = '';
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
    if (displayInputValue == '' && displayOutputValue == '') {
        displayOutput.textContent = ` 0 -`
        displayInput.textContent = '';
    } else if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} -`
    } else if (displayOutputValue == '') {
        displayOutput.textContent = ` ${displayInputValue} -`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} -`
        displayInput.textContent = ``;
    }
}

function multiply() {
    if (displayInputValue == '' && displayOutputValue == '') {
        displayOutput.textContent = ` 0 x`
        displayInput.textContent = '';
    } else if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} x`
    } else if (displayOutputValue == '') {
        displayOutput.textContent = ` ${displayInputValue} x`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} x`
        displayInput.textContent = ``;
    }
}

function divide() {
    if (displayInputValue == '' && displayOutputValue == '') {
        displayOutput.textContent = ` 0 ÷`
        displayInput.textContent = '';
    } else if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} ÷`
    } else if (displayOutputValue == '') {
        displayOutput.textContent = ` ${displayInputValue} ÷`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} ÷`
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
        result = result.toFixed(3)
        result = parseFloat(Math.round(result * 1000) / 1000)
        displayOutput.textContent = calc
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('x')) {
        displayOutputValue.replace('x', '');
        result = (parseFloat(displayOutputValue)) * (parseFloat(displayInputValue));
        result = result.toFixed(3)
        result = parseFloat(Math.round(result * 1000) / 1000)
        displayOutput.textContent = calc
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('÷') && displayInputValue == 0) {
        alert('BOOOOOM, you just wrecked your computer! If you can read this.. why not have another go?!')
        displayInput.textContent = ''
    } else if (displayOutputValue.includes('÷')) {
        displayOutputValue.replace('÷', '');
        result = (parseFloat(displayOutputValue)) / ((parseFloat(displayInputValue)));
        result = result.toFixed(3);
        result = parseFloat(Math.round(result * 1000) / 1000)
        displayOutput.textContent = calc
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue.replace('-', '');
        result = (parseFloat(displayOutputValue)) - (parseFloat(displayInputValue));
        result = result.toFixed(3);
        result = parseFloat(Math.round(result * 1000) / 1000)
        displayOutput.textContent = calc
        displayInput.textContent = result;
    }
}

function clearStrings() {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayOutputValue = document.getElementById('displayOutput').textContent;
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
        displayInput.textContent = ''
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

function calculateOperandEquals() {
    if (displayOutputValue.includes('+')) {
        displayInput.textContent = '';
        displayOutput.textContent = `${displayInputValue} +`;
    } else if (displayOutputValue.includes('x')) {
        displayInput.textContent = '';
        displayOutput.textContent = `${displayInputValue} x`;
    } else if (displayOutputValue.includes('÷')) {
        displayInput.textContent = '';
        displayOutput.textContent = `${displayInputValue} ÷`;
    } else if (displayOutputValue.includes('-')) {
        displayInput.textContent = '';
        displayOutput.textContent = `${displayInputValue} -`;
    }
}

function removeLastChar() {
    displayInputValue = document.getElementById('displayInput').textContent;
    displayInputValue = displayInputValue.substring(0, displayInputValue.length - 1);
    displayInput.textContent = displayInputValue;
}