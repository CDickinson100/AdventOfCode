//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/);

function part1() {
    return input.filter(input => input).filter(input => {
        let min = parseInt(input.split(" ")[0].split("-")[0]);
        let max = parseInt(input.split(" ")[0].split("-")[1]);
        let count = input.split(' ')[2].split('').filter(value => value === input.split(" ")[1].split('')[0]).length;
        return count >= min && count <= max;
    }).length;
}

function part2() {
    return input.filter(input => input).filter(input => {
        let indexa = parseInt(input.split(" ")[0].split("-")[0]) - 1;
        let indexb = parseInt(input.split(" ")[0].split("-")[1]) - 1;
        let char = input.split(" ")[1].split('')[0];
        let pass = input.split(' ')[2].split('');
        return ((pass[indexa] === char) !== (pass[indexb] === char));
    }).length;
}

console.log(part1());

console.log(part2());
