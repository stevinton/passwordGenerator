'use strict';

var combinations = "";
var size;
const output = document.querySelector(".output");

const changeSize = (len) => {
    size = len;
}

const addUpperCase = () => {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    combinations += upper;
    return true
}

const addLowerCase = () => {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    combinations += lower;
    return true
}

const addNumbers = () => {
    let numbers = "0123456789";
    combinations += numbers;
    return true
}

const addSpecialChar = () => {
    let specialChar = "!@#$%^&*?";
    combinations += specialChar;
    return true
}

const generate = () => {
    let pass = ""
    for (let i = 0; i < size; i++) {
        let j = Math.floor(Math.random() * combinations.length);
        pass += combinations[j];
    }
    output.textContent = pass;
}