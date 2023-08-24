"use strict";
let greet;
greet = () => {
    console.log('hello');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(3, 4, '20');
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
