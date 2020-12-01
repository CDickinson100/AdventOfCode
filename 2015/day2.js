//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/);

function part1() {
    return input.filter(value => value).map(string => calculatePaper(string)).reduce((a, b) => a + b);
}

function part2() {
    return input.filter(value => value).map(string => calculateRibbon(string)).reduce((a, b) => a + b);
}

function calculatePaper(input) {
    let dimentions = input.split('x').map(x => parseInt(x));
    let smallestSide = [dimentions[0] * dimentions[1], dimentions[1] * dimentions[2], dimentions[0] * dimentions[2]].sort((a, b) => a - b);
    return ((2 * dimentions[0] * dimentions[1]) + (2 * dimentions[1] * dimentions[2]) + (2 * dimentions[0] * dimentions[2])) + smallestSide[0];
}

function calculateRibbon(input) {
    let dimentions = input.split('x').map(x => parseInt(x));
    let smallestSide = dimentions.sort((a, b) => a - b);
    return (smallestSide[0] * smallestSide[1] * smallestSide[2]) + (smallestSide[0] * 2) + (smallestSide[1] * 2);
}

console.log(part1());

console.log(part2());
