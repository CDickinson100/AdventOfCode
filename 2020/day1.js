//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(input => input);

function part1() {
    let numbers = input.map(x => parseInt(x));
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === 2020) {
                return numbers[i] * numbers[j];
            }
        }
    }
}

function part2() {
    let numbers = input.map(x => parseInt(x));
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {
                if (numbers[i] + numbers[j] + numbers[k] === 2020) {
                    return numbers[i] * numbers[j] * numbers[k];
                }
            }
        }
    }
}

console.log(part1());

console.log(part2());
