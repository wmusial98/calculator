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
    clearBox.appendChild(clearElement);

    const clearAll = document.createElement('button');
    clearAll.classList.add('clearButton');
    clearAll.textContent = 'C';
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