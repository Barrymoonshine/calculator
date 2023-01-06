// TO DO

// - Round answer to three decimal points - DONE
//- Add keyboard support, only allow numbers 
//- Bind keydown events to functions for operands, two keys needed for some operands 
//- Resolve bug where keydown event only works after a button has been pressed 
//- Style 
//- Refactor 



const operatorBtns = document.getElementsByClassName('opBtns');
const numberBtns = document.getElementsByClassName('numBtns');
const displayContainer = document.getElementById('displayContainer');

document.body.onload = createDisplay();

const getUserBtnChoice = function (e) {
    operate(e.target.id);
}

const getUserNumButtonClick = function (e) {
    applyUserNumButton(e.target.id);
}

const getUserNumButtonKey = function (e) {
    applyUserNumButton(e.key);
}


for (i of operatorBtns) {
    i.addEventListener('click', getUserBtnChoice);
}

for (i of numberBtns) {
    i.addEventListener('click', getUserNumButtonClick);
}

for (i of numberBtns) {
    i.addEventListener('keydown', getUserNumButtonKey);
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
    if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} +`
    } else if (typeof result === 'undefined') {
        displayOutput.textContent = ` ${displayInputValue} +`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} +`
        displayInput.textContent = ``;
    }
}

function subtract() {
    if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} -`
    } else if (typeof result === 'undefined') {
        displayOutput.textContent = ` ${displayInputValue} -`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} -`
        displayInput.textContent = ``;
    }
}

function multiply() {
    if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} x`
    } else if (typeof result === 'undefined') {
        displayOutput.textContent = ` ${displayInputValue} x`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} x`
        displayInput.textContent = ``;
    }
}

function divide() {
    if (displayInputValue == '') {
        displayOutputValue = displayOutputValue.replace('+', '').replace('-', '').replace('x', '').replace('÷', '');
        displayOutput.textContent = ` ${displayOutputValue} ÷`
    } else if (typeof result === 'undefined') {
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
        result = (parseFloat(displayInputValue,)) + (parseFloat(displayOutputValue));
        displayOutput.textContent = calc
        displayInput.textContent = result.toFixed(3);
    } else if (displayOutputValue.includes('x')) {
        displayOutputValue.replace('x', '');
        result = (parseFloat(displayOutputValue)) * (parseFloat(displayInputValue));
        displayOutput.textContent = calc
        displayInput.textContent = result.toFixed(3);
    } else if (displayOutputValue.includes('÷') && displayInputValue == 0) {
        alert('BOOOOOM, you just wrecked your computer! If you can read this.. why not have another go?!')
        displayInput.textContent = ''
    } else if (displayOutputValue.includes('÷')) {
        displayOutputValue.replace('÷', '');
        result = (parseFloat(displayOutputValue)) / ((parseFloat(displayInputValue)));
        displayOutput.textContent = calc
        displayInput.textContent = result.toFixed(3);
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue.replace('-', '');
        result = (parseFloat(displayOutputValue)) - (parseFloat(displayInputValue));
        displayOutput.textContent = calc
        displayInput.textContent = result.toFixed(3);
    }
}

function clearStrings() {
    while (displayContainer.lastElementChild) {
        displayContainer.removeChild(displayContainer.lastElementChild);
    }
    displayInputValue = '';
    displayOutputValue = '';
    createDisplay();
}

function createDisplay() {
    const displayInput = document.createElement('div');
    displayInput.id = 'displayInput';
    displayContainer.appendChild(displayInput);
    const displayOutput = document.createElement('div');
    displayOutput.id = 'displayOutput';
    displayContainer.appendChild(displayOutput);
    result = undefined;
}

function calculateOperand() {
    displayOutputValue = document.getElementById('displayOutput').textContent;
    if (displayInputValue == '') {
    } else if (displayOutputValue.includes('+')) {
        displayOutputValue.replace('+', '');
        result = (parseFloat(displayInputValue)) + (parseFloat(displayOutputValue));
        result = result.toFixed(3)
        displayOutput.textContent = `${result} +`;
        displayInput.textContent = '';
    } else if (displayOutputValue.includes('x')) {
        displayOutputValue.replace('x', '');
        result = (parseFloat(displayOutputValue)) * (parseFloat(displayInputValue));
        result = result.toFixed(3)
        displayOutput.textContent = `${result} x`;
        displayInput.textContent = '';
    } else if (displayOutputValue.includes('÷') && displayInputValue == 0) {
        alert('BOOOOOM, you just wrecked your computer! If you can read this.. why not have another go?!')
        displayInput.textContent = ''
    } else if (displayOutputValue.includes('÷')) {
        displayOutputValue.replace('÷', '');
        result = (parseFloat(displayOutputValue)) / (parseFloat(displayInputValue));
        result = result.toFixed(3)
        displayOutput.textContent = `${result} ÷`;
        displayInput.textContent = '';
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue.replace('-', '');
        result = (parseFloat(displayOutputValue)) - (parseFloat(displayInputValue));
        result = result.toFixed(3)
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