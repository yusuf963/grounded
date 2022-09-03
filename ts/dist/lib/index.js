"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopping_cart_1 = require("./shopping-cart");
const calculateTotal_1 = require("./calculateTotal");
const order_1 = require("./order");
const cart = new shopping_cart_1.ShoppingCart();
console.log((0, calculateTotal_1.calculateTotals)(cart));
const order = new order_1.Order;
console.log((0, calculateTotal_1.calculateTotals)(order));
