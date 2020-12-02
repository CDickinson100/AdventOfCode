//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(input => input);

function part1() {
    return input.filter(input => {
        input = input.split(' ');
        const [min, max] = input[0].split("-").map(x => parseInt(x));
        const char = input[1].split('')[0];
        const count = input[2].split('').filter(value => value === char).length;
        return count >= min && count <= max;
    }).length;
}

function part2() {
    return input.filter(input => {
        input = input.split(' ');
        const [indexa, indexb] = input[0].split("-").map(x => parseInt(x) - 1);
        const char = input[1].split('')[0];
        const pass = input[2].split('');
        return ((pass[indexa] === char) !== (pass[indexb] === char));
    }).length;
}

console.log(part1());

console.log(part2());
