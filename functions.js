const add = function(a,b) {
    return (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a+b : 'ERROR';
};

const subtract = function(a,b) {
    return (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a-b : 'ERROR';
};

const multiply = function(a,b) {
    return (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a*b : 'ERROR';
};

const divide = function(a,b) {
    if(b == 0) {
        return 'ggwp';
    } else {
        result = (countDecimals(a) < (2 || undefined) && countDecimals(b) < (2 || undefined)) ? a/b : 'ERROR';
        return Math.round(result * 1000) / 1000;
    }
};

let countDecimals = function(value) {
    return (Math.floor(value) === value) ? 0 : value.toString().split('.')[1].length || 0;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
};