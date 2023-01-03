const operatorBtns = document.getElementsByClassName('opBtns');

const getUserBtnChoice = function (e) {
    applyUserBtnChoice(e.target.id);
}

for (i of operatorBtns) {
    i.addEventListener('click', getUserBtnChoice);
}

function applyUserBtnChoice(userChoice) {
    if (userChoice == 'add') {
        add();
    } else if (userChoice == 'subtract') {
        subtract();
    } else if (userChoice == 'multiply') {
        multiply();
    } else if (userChoice == 'divide') {
        divide();
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
    return a / b;
}

