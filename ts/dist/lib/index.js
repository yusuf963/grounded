"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopping_cart_1 = require("./shopping-cart");
const calculateTotal_1 = require("./calculateTotal");
const order_1 = require("./order");
const cart = new shopping_cart_1.ShoppingCart();
console.log((0, calculateTotal_1.calculateTotals)(cart));
const order = new order_1.Order;
console.log((0, calculateTotal_1.calculateTotals)(order));
// Generic
// const genericFunction = <G>(x: string):G => {
//   return x
// }
//Union
const someFn = (myArg) => {
    if (typeof myArg === 'string') {
        let x = myArg.toUpperCase();
        return x;
    }
    return "c";
    // return myArg + 1
};
//assertions
const isDog = (someObj) => {
    return someObj.bark !== undefined;
};
const CheckAnimal = (pet) => {
    if (isDog(pet)) {
        console.log("this is a dog");
    }
    else {
        console.log("thi is a cat");
    }
};
// intersection type
const combine = (objectA, objectB) => {
    return Object.assign(Object.assign({}, objectA), objectB);
};
const objectA = { a: 1 };
const objectB = { b: 2 };
const result = combine(objectA, objectB);
console.log(result);
