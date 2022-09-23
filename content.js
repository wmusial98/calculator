let numberButtons = document.querySelectorAll('.numberButton');
let decimalButton = document.querySelector('.decimalButton');
let operatorButtons = document.querySelectorAll('.operatorButton');
let equalsButton = document.querySelector('.equalsButton');
let clearAllButton = document.querySelector('.clearAllButton');
let clearElementButton = document.querySelector('.clearElementButton');
let displayFunction = document.querySelector('.displayFunction');
let displayResult = document.querySelector('.displayResult');
let result;
let staticFunction = '';

let num1 = '';
let num2 = '';
let operator = '';
let stringIterator = '';

initializeButtons();

function initializeButtons() {
    displayFunction.textContent = staticFunction;
    numberButtons.forEach(numberButton => numberButton.addEventListener('click', updateFunction));
    decimalButton.addEventListener('click', updateFunctionDecimal);
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', function (e) {
            operator = this.textContent;
            displayFunction.textContent = num1 + operator + num2;
        });
    });
    equalsButton.addEventListener('click', evaluate);
    clearAllButton.addEventListener('click', clearAll);
    clearElementButton.addEventListener('click', clearElement);
}

function updateFunction(element) {
    stringIterator = this.textContent;
    operator ? addToNumber('two', stringIterator) : addToNumber('one', stringIterator);
}

function updateFunctionDecimal(element) {
    if(operator) {
        if(num2.includes('.')) {
            return;
        } else {
            stringIterator = this.textContent;
            operator ? addToNumber('two', stringIterator) : addToNumber('one', stringIterator);
        }
    } else {
        if(num1.includes('.')) {
            return;
        } else {
            stringIterator = this.textContent;
            operator ? addToNumber('two', stringIterator) : addToNumber('one', stringIterator);
        }
    }
}

function addToNumber(numToFill, addVal) {
    if (checkDecimals(numToFill)) {
        numToFill == 'one' ? num1 += addVal : num2 += addVal;
        displayFunction.textContent = num1 + operator + num2;
    } else {
        return;
    }
}

function checkDecimals(numCheck) {
    let i, j;
    if (numCheck == 'one') {
        if (num1.includes('.')) {
            i = num1.length;
            j = num1.indexOf('.');
            return (i - j < 4) ? true : false; /* true = decimals can be added */
        } else {
            return true;
        }
    } else {
        if (num2.includes('.')) {
            i = num2.length;
            j = num2.indexOf('.');
            return (i - j < 4) ? true : false;
        } else { return true; }
    }
}

function evaluate() {
    switch (operator) {
        case '+': 
            add(+num1,+num2);
            break;
        case '-':
            subtract(+num1,+num2);
            break;
        case '*':
            multiply(+num1,+num2);
            break;
        case '/':
            divide(+num1,+num2);
            break;
    }
    displayResult.textContent = result;
    resultBridge();
}

function add(a, b) {
    result = a + b;
};

function subtract(a, b) {
    result = a - b;
};

function multiply(a, b) {
    result = a * b;
};

function divide(a, b) {
    if (b == 0) {
        result = 'ERROR';
    } else {
        result = a / b
        result = Math.round(result * 1000) / 1000;
    }
};

function resultBridge() {
    /* this is where i write code to pass the result to num1 or to 
    clear the calculator or start over again */
}

function clearAll() {
    result = '';
    displayResult.textContent = result;
    staticFunction = '';
    num1 = '';
    num2 = '';
    operator = '';
    stringIterator = '';
    initializeButtons();
}

function clearElement() {
    if(num2) {
        num2 = '';
    } else if(operator) {
        operator = '';
    } else {
        num1 = '';
    }
    displayFunction.textContent = num1 + operator + num2;
}