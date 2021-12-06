//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter((input) => input)[0].split(",")
    .map(value => parseInt(value));

function part1() {
    return calculate(80);
}

function part2() {
    return calculate(256);
}

function calculate(days) {
    let fish = new Array(9).fill(0);
    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        fish[number]++;
    }
    for (let day = 1; day <= days; day++) {
        const zero = fish[0];
        for (let i = 0; i < 8; i++) {
            fish[i] = fish[i + 1];
        }
        fish[6] += zero;
        fish[8] = zero;
    }
    return fish.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(part1());

console.log(part2());