"use strict";
// syntax 1
function hello() {
    return "Sanjeev";
}
console.log(`Function 1 ${hello()}`);
//function 1
const a = 10;
const b = 20;
function add() {
    return a + b;
}
console.log(`Function 2 ${add()}`);
//function-2
function sum(a, b) {
    return a + b;
}
console.log(`Function 3 ${sum(40, 20)}`);
// void   => return nothing but update value;
console.warn("---Void Function------ ");
let today;
function update() {
    today = new Date();
}
update();
console.warn(`Today date  : ${today}`);
