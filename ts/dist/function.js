"use strict";
// optional arg
const suNum = (a, b) => {
    return a + (b !== null && b !== void 0 ? b : 1);
};
suNum(1);
const myFunc1 = (a, b) => {
    return a + b;
};
//Unknown arg number
const sumAll = (arg1, ...numbers) => {
    return numbers.reduce((a, b) => a + b, 0);
};
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
