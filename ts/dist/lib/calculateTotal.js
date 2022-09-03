"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotals = void 0;
const calculateTotals = (order) => {
    let total = order.calculateTotal();
    const discount = total * 0.1;
    total += discount;
    const tax = total * .2;
    total += tax;
    return total;
};
exports.calculateTotals = calculateTotals;
