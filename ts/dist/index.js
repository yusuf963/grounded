"use strict";
const num = 11;
const personName = "yusuf";
const notSure = undefined;
const nullable = null;
const isComplete = true;
const unionValue = 1;
let unionValue1;
let assignArray;
assignArray = ["d", 1];
let assignArray1 = ["d", "dwe"];
const arrayOfString = ["d", "k"];
const arrayOfAny = ["d", 1, [], {}, true];
const myObj = { id: 1, name: ["yusuf", 31], school: "d" };
const myArray = [];
const myDate = new Date();
const myMap = new Map;
const addNumber = (a, b) => {
    console.log("adding");
};
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["green"] = "green";
    Color["blue"] = "blue";
})(Color || (Color = {}));
const color = Color.blue;
if (color === Color.blue) {
    console.log("your color is blue");
}
//Any
let anyThing = [undefined, 1, "2", true];
//Type Assertions
const email = document.getElementById("email");
if (email) { // do this or
    email === null || email === void 0 ? void 0 : email.addEventListener("change", e => {
        const input = e.currentTarget; //remove this
        console.log(input.value); // this will complain 
    });
}
