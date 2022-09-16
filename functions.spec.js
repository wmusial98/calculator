/* const { expect } = require('@jest/globals');
const { default: test } = require('node:test');
const { describe } = require('yargs'); */
const { expect } = require('@jest/globals');
const functions = require('./functions');

describe('add', () => {
    test('adds two integers.', () => {
        expect(functions.add(5,25)).toBe(30);
    });
    test('works with negative numbers.', () => {
        expect(functions.add(3,-3)).toBe(0);
    });
    test('works with decimals.', () => {
        expect(functions.add(1.5,19.8)).toBe(21.3);
    });
    test('rejects long decimals', () => {
        expect(functions.add(5.887322,25)).toBe('ERROR');
    });
});
describe('subtract', () => {
    test('subtracts two integers.', () => {
        expect(functions.subtract(27,9)).toBe(18);
    });
    test('works with negative sum.', () => {
        expect(functions.subtract(9,27)).toBe(-18);
    });
    test('works with decimals.', () => {
        expect(functions.subtract(10.5,4.3)).toBe(6.2);
    });
    test('rejects long decimals.', () => {
        expect(functions.subtract(27,9.8444365)).toBe('ERROR');
    });
});
describe('multiply', () => {
    test('multiplies two integers.', () => {
        expect(functions.multiply(3,55)).toBe(165);
    });
    test('multiplies negative integers.', () => {
        expect(functions.multiply(9,-27)).toBe(-243);
    });
    test('multiplies two negative integers.', () => {
        expect(functions.multiply(-10,-4)).toBe(40);
    });
    test('works with decimals.', () => {
        expect(functions.multiply(2.8,9.6)).toBe(26.88);
    });
    test('rejects long decimals', () => {
        expect(functions.multiply(1,35.33568)).toBe('ERROR');
    });
});
describe('divide', () => {
    test('divides two integers.', () => {
        expect(functions.divide(5,5)).toBe(1);
    });
    test('divides negative integers.', () => {
        expect(functions.divide(100,-25)).toBe(-4);
    });
    test('rounds imperfect fractions to 3 decimal points.', () => {
        expect(functions.divide(22,7)).toBe(3.143);
    });
    test('divides by zero.', () => {
        expect(functions.divide(5,0)).toBe('ggwp');
    });
    test('divides zero.', () => {
        expect(functions.divide(0,12)).toBe(0);
    });
});