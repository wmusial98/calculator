let numberButtons = document.querySelectorAll('.numberButton');
let decimalButton = document.querySelector('.decimalButton');
let operatorButtons = document.querySelectorAll('.operatorButton');
let equalsButton = document.querySelector('.equalsButton');

let num1 = '';
let num2 = '';
let operator = '';
let stringIterator = '';

initializeButtons();

function initializeButtons() {
    numberButtons.forEach(numberButton => numberButton.addEventListener('click', updateFunction));
    decimalButton.addEventListener('click', updateFunction);
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', function (e) {
            operator = this.textContent;
        });
    });

    equalsButton.addEventListener('click', function (e) {
    });
}

function updateFunction(element) {
    stringIterator = this.textContent;
    operator ? addToNumber('two', stringIterator) : addToNumber('one', stringIterator);
}

function addToNumber(numToFill, addVal) {
    if (checkDecimals(numToFill)) {
        numToFill == 'one' ? num1 += addVal : num2 += addVal;
        console.log(num1 + operator + num2);
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
        i = num2.length;
        j = num2.indexOf('.');
        return (i - j < 4) ? true : false;
    }
}
    /* numberButtonList.forEach(numberButton => {
    numberButton.addEventListener('click', function(e) {
        if(numberButton.textContent == '=') {
            doTheMath();
        } else {
            updateDisplay(this);
        }
    });
});
} */

/* function operatorButtons(operatorBox) {
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
    result = (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a + b : 'ERROR';
    console.log(result);
};

const subtract = function (a, b) {
    result = (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a - b : 'ERROR';
    console.log(result);
};

const multiply = function (a, b) {
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
} */