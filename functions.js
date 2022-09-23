/* const { getConsoleOutput } = require("@jest/console");
const { beforeAll } = require("@jest/globals"); */

let result = 0;

const operate = function (first, second) {
    if (operator == 'add') {
        add(+first,+second);
    } else if (operator == 'subtract') {
        subtract(+first,+second);
    } else if (operator == 'multiply') {
        multiply(+first,+second);
    } else (operator == 'divide') {
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
        console.log('ggwp');
    } else {
        result = (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a / b : 'ERROR';
        result = Math.round(result * 1000) / 1000;
        console.log(result);
    }
};

let countDecimals = function (value) {
    return (Math.floor(value) === value) ? 0 : value.toString().split('.')[1].length || 0;
}

/* operate();
 */
/* module.exports = {
    add,
    subtract,
    multiply,
    divide,
}; */