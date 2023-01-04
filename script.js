const operatorBtns = document.getElementsByClassName('opBtns');
const numberBtns = document.getElementsByClassName('numBtns');
const displayContainer = document.getElementById('displayContainer');
const displayOutput = document.createElement('div');
displayOutput.id = 'displayOutput';
displayContainer.appendChild(displayOutput);


const getUserBtnChoice = function (e) {
    applyUserBtnChoice(e.target.id);
}

const getUserNumButton = function (e) {
    applyUserNumButton(e.target.id);
}

for (i of numberBtns) {
    i.addEventListener('click', getUserNumButton);
}

function applyUserNumButton(num) {
    displayOutput.textContent = `${num}`;
}


for (i of operatorBtns) {
    i.addEventListener('click', getUserBtnChoice);
}

function operate(a, b, userChoice) {
    if (userChoice == 'add') {
        add(a, b);
    } else if (userChoice == 'subtract') {
        subtract(a, b);
    } else if (userChoice == 'multiply') {
        multiply(a, b);
    } else if (userChoice == 'divide') {
        divide(a, b);
    }
}

function add(a, b) {
    return a + b;
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

