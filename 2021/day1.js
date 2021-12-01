//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter((input) => input)
    .map((input) => parseInt(input));

function part1() {
    return Array.from(Array(input.length).keys())
        .filter(x => input[x] < input[x + 1])
        .length;
}

function part2() {
    return Array.from(Array(input.length).keys())
        .filter(x => input[x] < input[x + 3])
        .length;
}

console.log(part1());

console.log(part2());