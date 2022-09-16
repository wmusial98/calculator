const functions = require('./functions');

describe('add', () => {
    test('adds two integers.', () => {
        expect(functions.add(5,25)).toBe(30);
    });
    test('works with negative numbers.', () => {
        expect(functions.add(3,-3)).toBe(0);
    });
    test.skip('works with decimals.', () => {
        expect(functions.add(1.5,19.8)).toBe(21.3);
    });
    test.skip('rejects decimals longer than 1.', () => {
        expect(functions.add(5.887322,25)).toBe('ERROR');
    });
});