"use strict";
const myA = {
    id: 1,
    name: "Yusuf",
    education: ["s", "w"]
};
const myB = Object.assign(Object.assign({}, myA), { score: 1 });
const yusuf = { id: 1, name: "yusuf", age: 31 };
const c = { some: 1 };
const sum = (a, b) => {
    return a + b;
};
