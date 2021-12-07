//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter((input) => input)[0].split(",")
    .map(value => parseInt(value))
    .sort((a, b) => a - b);

function part1() {
    const avg = input[input.length / 2];
    const positions = [Math.floor(avg), Math.ceil(avg)];
    return positions.map(pos => input
        .map(value => Math.abs(value - pos))
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    ).sort((a, b) => a - b)[0];
}

function part2() {
    const avg = input.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / input.length;
    const positions = [Math.floor(avg), Math.ceil(avg)];
    return positions.map(pos => input
        .map(value => Math.abs(value - pos))
        .map(value => Array.from(Array(value + 1).keys()).reduce((a, b) => a + b, 0))
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    ).sort((a, b) => a - b)[0];
}

console.log(part1());

console.log(part2());