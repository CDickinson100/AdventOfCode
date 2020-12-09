//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(input => input);

function part1() {
    for (let i = 25; i < input.length; i++) {
        let num = parseInt(input[i]);
        let preamble = input.slice(i - 25, i).map(value => parseInt(value));
        if (!isSum(num, preamble)) return num;
    }
}

function part2(number) {
    for (let i = 0; i < input.length; i++) {
        let array = [];
        array.push(parseInt(input[i]));
        for (let j = i + 1; j < input.length; j++) {
            array.push(parseInt(input[j]));
            const sum = array.reduce((a, b) => a + b);
            if (sum === number) {
                array.sort();
                return array[0] + array[array.length - 1];
            } else if (sum > number) {
                break;
            }
        }
    }
}

function isSum(num, preamble) {
    let values = [];
    for (let i = 0; i < preamble.length; i++) {
        let x = preamble[i];
        if (values.includes(x)) return true;
        values.push(num - x);
    }
    return false;
}

console.log(part1());

console.log(part2(part1()));
