/* const { clear } = require("console"); */

const container = document.querySelector('.calculatorBox');
const footer = document.querySelector('.footer');

let numberButtonList = [];

createCalculator();

function createCalculator() {
    const calcBox = document.createElement('div');
    calcBox.classList.add('calcBox');
    container.appendChild(calcBox);

    const resultBox = document.createElement('div');
    resultBox.classList.add('resultBox');
    calcBox.appendChild(resultBox);
    displayResult(resultBox);

    const buttonBox = document.createElement('div');
    buttonBox.classList.add('buttonBox');
    calcBox.appendChild(buttonBox);

    const clearBox = document.createElement('div');
    clearBox.classList.add('clearBox');
    buttonBox.appendChild(clearBox);
    clearButtons(clearBox);

    const numberBox = document.createElement('div');
    numberBox.classList.add('numberBox');
    buttonBox.appendChild(numberBox);
    numberButtons(numberBox);

    const operatorBox = document.createElement('div');
    operatorBox.classList.add('operatorBox');
    buttonBox.appendChild(operatorBox);
    operatorButtons(operatorBox);
}

function clearButtons(clearBox) {
    const clearElement = document.createElement('button');
    clearElement.classList.add('clearButton');
    clearElement.textContent = 'CE';
    clearElement.addEventListener('click', clearCurrent);
    clearBox.appendChild(clearElement);

    const clearAll = document.createElement('button');
    clearAll.classList.add('clearButton');
    clearAll.textContent = 'C';
    clearAll.addEventListener('click', clearAllNums);
    clearBox.appendChild(clearAll);
}

function numberButtons(numberBox) {
    for(let i = 0; i < 12; i++) {
        if(i == 10) {
            numberButtonList[i] = document.createElement('button');
            numberButtonList[i].classList.add('decimalButton');
            numberButtonList[i].textContent = '.';
        } else if (i == 11) {
            numberButtonList[i] = document.createElement('button');
            numberButtonList[i].classList.add('equalsButton');
            numberButtonList[i].textContent = '=';
        } else{
            numberButtonList[i] = document.createElement('button');
            numberButtonList[i].classList.add('numberButton');
            numberButtonList[i].textContent = i;
        }
    }
    numberButtonLayout(numberButtonList, numberBox);
}

function numberButtonLayout(numberButtonList, numberBox) {
    /* there is a specific order to appending so that the numbers wrap to look like a numpad */
    numberBox.appendChild(numberButtonList[7]);
    numberBox.appendChild(numberButtonList[8]);
    numberBox.appendChild(numberButtonList[9]);
    numberBox.appendChild(numberButtonList[4]);
    numberBox.appendChild(numberButtonList[5]);
    numberBox.appendChild(numberButtonList[6]);
    numberBox.appendChild(numberButtonList[1]);
    numberBox.appendChild(numberButtonList[2]);
    numberBox.appendChild(numberButtonList[3]);
    numberBox.appendChild(numberButtonList[10]);
    numberBox.appendChild(numberButtonList[0]);
    numberBox.appendChild(numberButtonList[11]);
}

function operatorButtons(operatorBox) {
    let addButton = document.createElement('button');
    addButton.classList.add('operatorButton');
    addButton.textContent = '+';
    operatorBox.appendChild(addButton);

    let minusButton = document.createElement('button');
    minusButton.classList.add('operatorButton');
    minusButton.textContent = '-';
    operatorBox.appendChild(minusButton);

    let multButton = document.createElement('button');
    multButton.classList.add('operatorButton');
    multButton.textContent = 'x';
    operatorBox.appendChild(multButton);

    let divButton = document.createElement('button');
    divButton.classList.add('operatorButton');
    divButton.textContent = '/';
    operatorBox.appendChild(divButton);
}

function clearCurrent() {
    console.log('This button works');
}

function clearAllNums() {
    console.log('The C button works too');
}

function displayResult(resultBox) {
    let functionDisplay = document.createElement('div');
    functionDisplay.classList.add('functionMsg');
    functionDisplay.textContent = 'this is the mini function on the top';
    resultBox.appendChild(functionDisplay);

    let resultDisplay = document.createElement('div');
    resultDisplay.classList.add('resultMsg');
    resultDisplay.textContent = 'RESULT';
    resultBox.appendChild(resultDisplay);
}