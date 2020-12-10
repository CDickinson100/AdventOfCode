//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(input => input).map(input => parseInt(input)).sort((a, b) => a - b);

var cache = [];

function part1() {
    let currentJolt = 0;
    let joltDifference = [];
    joltDifference[1] = 0;
    joltDifference[2] = 0;
    joltDifference[3] = 0;
    input.forEach(x => {
        joltDifference[x - currentJolt]++;
        currentJolt = x;
    })
    joltDifference[3]++;
    return joltDifference[1] * joltDifference[3];
}

function part2(current, available, target) {
    if (current === target) return 1;
    let count = 0;
    let thing = current.toString() + available.toString();
    if (cache[thing] !== undefined) return cache[thing];
    while (available[0] <= current + 3) {
        count += part2(available[0], available.slice(1), target);
        available = available.slice(1);
    }
    cache[thing] = count;
    return count;
}

console.log(part1());

console.log(part2(0, input, input[input.length - 1]));