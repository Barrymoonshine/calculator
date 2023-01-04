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
    console.log(displayInputValue);
}

function operate(userChoice) {
    if (userChoice == 'add') {
        add();
        console.log(userChoice);
    } else if (userChoice == 'subtract') {
        subtract(a, b);
    } else if (userChoice == 'multiply') {
        multiply(a, b);
    } else if (userChoice == 'divide') {
        divide(a, b);
    } else if (userChoice == 'clear') {
        clear();
        console.log(userChoice);
    }
}

function add() {
    displayOutput.textContent = ` ${displayInputValue} +`
    let displayOutputValue = document.getElementById('displayOutput').textContent;
    displayOutputValue.replace('+', '');
    displayInputValue = Number(displayInputValue) + Number(displayOutputValue);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        alert('math ERROR');
    } else {
        return a / b;
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
}

