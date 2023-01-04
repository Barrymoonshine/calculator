const operatorBtns = document.getElementsByClassName('opBtns');
const container = document.getElementById('container');
const strTwo = document.createElement('div');
strTwo.id = 'userOutput';
container.appendChild(strTwo);

const getUserBtnChoice = function (e) {
    applyUserBtnChoice(e.target.id);
}

for (i of operatorBtns) {
    i.addEventListener('click', getUserBtnChoice);
}

function applyUserBtnChoice(userChoice) {
    if (userChoice == 'add') {
        strOne = document.getElementById('userInput').value;
        add(strOne);
        console.log(userChoice);
        // } else if (userChoice == 'subtract') {
        //     operate();
        // } else if (userChoice == 'multiply') {
        //     operate(*);
        // } else if (userChoice == 'divide') {
        //     operate(/);
        // }
    }
}



function add(strOne) {
    console.log(strOne);
    strTwo.textContent = `${strOne} +`;
}

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

