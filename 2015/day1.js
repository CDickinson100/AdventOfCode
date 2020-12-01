//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/);

function part1() {
    return input[0].split('').map(input => {
        if (input === '(') {
            return 1;
        } else if (input === ')') {
            return -1;
        } else {
            return 0;
        }
    }).reduce((a, b) => a + b);
}

function part2() {
    let numbers = input[0].split('').map(convert);
    var current = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (current === -1) return i;
        current += numbers[i];
    }
}

function convert(input) {
    if (input === '(') {
        return 1;
    } else if (input === ')') {
        return -1;
    } else {
        return 0;
    }
}

console.log(part1());

console.log(part2());
