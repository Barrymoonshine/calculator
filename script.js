const operatorBtns = document.getElementsByClassName('opBtns');
const numberBtns = document.getElementsByClassName('numBtns');
const displayContainer = document.getElementById('displayContainer');

document.body.onload = createDisplay();

const getUserBtnChoice = function (e) {
    operate(e.target.id);
}

const getUserNumButton = function (e) {
    applyUserNumButton(e.target.id);
}

for (i of operatorBtns) {
    i.addEventListener('click', getUserBtnChoice);
}
for (i of numberBtns) {
    i.addEventListener('click', getUserNumButton);
}

function applyUserNumButton(num) {
    displayInput.textContent += num;
    displayInputValue = document.getElementById('displayInput').textContent;
}

function operate(userChoice) {
    if (userChoice == 'add') {
        add();
    } else if (userChoice == 'subtract') {
        subtract();
    } else if (userChoice == 'multiply') {
        multiply();
    } else if (userChoice == 'divide') {
        divide();
    } else if (userChoice == 'equals') {
        equals();
    } else if (userChoice == 'clear') {
        clear();
    }
}

function add() {
    if (typeof result === 'undefined') {
        displayOutput.textContent = ` ${displayInputValue} +`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} +`
        displayInput.textContent = ``;
    }
}

function subtract() {
    if (typeof result === 'undefined') {
        displayOutput.textContent = ` ${displayInputValue} -`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} -`
        displayInput.textContent = ``;
    }
}

function multiply() {
    if (typeof result === 'undefined') {
        displayOutput.textContent = ` ${displayInputValue} x`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} x`
        displayInput.textContent = ``;
    }
}

function divide() {
    if (typeof result === 'undefined') {
        displayOutput.textContent = ` ${displayInputValue} ÷`
        displayInput.textContent = '';
    } else {
        displayOutput.textContent = ` ${result} ÷`
        displayInput.textContent = ``;
    }
}

function equals() {
    displayOutputValue = document.getElementById('displayOutput').textContent;
    let calc = `${displayOutputValue}${displayInputValue} =`;
    console.log(displayOutputValue, displayInputValue);
    if (displayOutputValue.includes('+')) {
        displayOutputValue.replace('+', '');
        result = (parseInt(displayInputValue, 10)) + (parseInt(displayOutputValue, 10));
        displayOutput.textContent = calc;
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('x')) {
        displayOutputValue.replace('x', '');
        result = (parseInt(displayOutputValue, 10)) * ((parseInt(displayInputValue, 10)));
        displayOutput.textContent = calc;
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('÷')) {
        displayOutputValue.replace('÷', '');
        result = (parseInt(displayOutputValue, 10)) / ((parseInt(displayInputValue, 10)));
        displayOutput.textContent = calc;
        displayInput.textContent = result;
    } else if (displayOutputValue.includes('-')) {
        displayOutputValue.replace('-', '');
        result = ((parseInt(displayOutputValue, 10))) - ((parseInt(displayInputValue, 10)));
        displayOutput.textContent = calc;
        displayInput.textContent = result;
    }
}

function clear() {
    while (displayContainer.lastElementChild) {
        displayContainer.removeChild(displayContainer.lastElementChild);
    }
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
