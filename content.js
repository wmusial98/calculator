/* const { clear } = require("console"); */

const container = document.querySelector('.calculatorBox');
const footer = document.querySelector('.footer');

let numberButtonList = [];
let operatorList =[];
let operation = '';
let displayFunction = '';
let oldDisplayFunction ='';
let evalString = '';
let calcValues = [];
let firstVal = 0;
let secondVal = 0;
let result = 0;

const calcBox = document.createElement('div');
const resultBox = document.createElement('div');
const buttonBox = document.createElement('div');
const clearBox = document.createElement('div');
const numberBox = document.createElement('div');
const operatorBox = document.createElement('div');

let functionDisplay = document.createElement('div');
functionDisplay.classList.add('functionMsg');
let resultDisplay = document.createElement('div');
resultDisplay.classList.add('resultMsg');

createCalculator();

function createCalculator() {
/*     calcBox.classList.add('calcBox');
    container.appendChild(calcBox);
    
    resultBox.classList.add('resultBox');
    calcBox.appendChild(resultBox);

    buttonBox.classList.add('buttonBox');
    calcBox.appendChild(buttonBox); */

    /* clearBox.classList.add('clearBox');
    buttonBox.appendChild(clearBox);
    clearButtons(clearBox); */

   /*  numberBox.classList.add('numberBox');
    buttonBox.appendChild(numberBox);
    numberButtons(numberBox); */

    operatorBox.classList.add('operatorBox');
    buttonBox.appendChild(operatorBox);
    operatorButtons(operatorBox);
}

/* function clearButtons(clearBox) {
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
} */
/* 
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
there is a specific order to appending so that the numbers wrap to look like a numpad
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
 */
    numberButtonList.forEach(numberButton => {
        numberButton.addEventListener('click', function(e) {
            if(numberButton.textContent == '=') {
                doTheMath();
            } else {
                updateDisplay(this);
            }
        });
    });
}

function operatorButtons(operatorBox) {
    let addButton = document.createElement('button');
    addButton.classList.add('operatorButton');
    addButton.textContent = '+';
    operatorBox.appendChild(addButton);
    addButton.addEventListener('click', function(e) {
        operation = '+';
        updateDisplay(this);
    });

    let minusButton = document.createElement('button');
    minusButton.classList.add('operatorButton');
    minusButton.textContent = '-';
    operatorBox.appendChild(minusButton);
    minusButton.addEventListener('click', function(e) {
        operation = '-';
        updateDisplay(this);
    });

    let multButton = document.createElement('button');
    multButton.classList.add('operatorButton');
    multButton.textContent = 'x';
    operatorBox.appendChild(multButton);
    multButton.addEventListener('click', function(e) {
        operation = 'x';
        updateDisplay(this);
    });

    let divButton = document.createElement('button');
    divButton.classList.add('operatorButton');
    divButton.textContent = '/';
    operatorBox.appendChild(divButton);
    divButton.addEventListener('click', function(e) {
        operation = '/';
        updateDisplay(this);
    });
}

function updateDisplay(e) {
    functionDisplay.textContent += e.textContent;
    resultBox.append(functionDisplay);
    evalString = functionDisplay.textContent;
}

function doTheMath() {
    calcValues = evalString.split(operation);
    firstVal = calcValues[0];
    secondVal = calcValues[1];
    operate(firstVal, secondVal);
    updateResult();
}

const operate = function (first, second) {
    if (operation == '+') {
        add(+first,+second);
    } else if (operation == '-') {
        subtract(+first,+second);
    } else if (operation == 'x') {
        multiply(+first,+second);
    } else if (operation == '/') {
        divide(+first,+second);
    }
}

const add = function (a, b) {
    /* return (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a+b : 'ERROR'; */
    result = (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a + b : 'ERROR';
    console.log(result);
};

const subtract = function (a, b) {
    /* return (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a-b : 'ERROR'; */
    result = (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a - b : 'ERROR';
    console.log(result);
};

const multiply = function (a, b) {
    /* return (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a*b : 'ERROR'; */
    result = (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a * b : 'ERROR';
    console.log(result);
};

const divide = function (a, b) {
    if (b == 0) {
        result = 'ERROR';
    } else {
        result = (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a / b : 'ERROR';
        result = Math.round(result * 1000) / 1000;
        console.log(result);
    }
};

let countDecimals = function (value) {
    return (Math.floor(value) === value) ? 0 : value.toString().split('.')[1].length || 0;
}

function clearCurrent() {
    functionDisplay.textContent = functionDisplay.textContent.slice(0,-1);
}

function clearAllNums() {
    functionDisplay.textContent = '';
    resultDisplay.textContent = '';
    firstVal = 0;
    secondVal = 0;
    result = 0;
    operation = '';
}

function updateResult() {
    oldDisplayFunction = functionDisplay.textContent;
    functionDisplay.textContent = oldDisplayFunction;
    resultBox.append(functionDisplay);

    resultDisplay.textContent = result;
    resultBox.append(resultDisplay);
}