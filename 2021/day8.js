//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter(value => value)
    .map(value => value.split(" | ").map(value1 => value1.split(" ")))

function part1() {
    return getSegments()
        .reduce((previous, current) => previous.concat(current), [])
        .filter(value => value === 1 || value === 4 || value === 7 || value === 8).length;
}

function part2() {
    return getSegments()
        .map(value => parseInt(value.join("")))
        .reduce((previous, current) => previous + current, 0);
}

function getSegments() {
    return input.map(signal => signal[1]
        .map(value => value.split("").sort())
        .map(value => [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(number => decode(signal[0])[number].join(",") === value.join(",")))
        .map(value => value.length === 1 ? value[0] : 0));
}

function decode(input) {
    input = input.map(value => value.split(""));
    const one = input.filter(value => value.length === 2)[0];
    const seven = input.filter(value => value.length === 3)[0];
    const four = input.filter(value => value.length === 4)[0];
    const eight = input.filter(value => value.length === 7)[0];
    const six = input.filter(value => value.length === 6).filter(value => value.filter(x => one.includes(x)).length === 1)[0];
    const five = input.filter(value => value.length === 5).filter(value => value.filter(x => !six.includes(x)).length === 0)[0];
    const nine = input.filter(value => value.length === 6).filter(value => four.filter(x => value.includes(x)).length === 4)[0];
    const two = input.filter(value => value.length === 5).filter(value => value !== nine).filter(value => value.filter(x => !nine.includes(x)).length === 1)[0];
    const three = input.filter(value => value.length === 5).filter(value => value !== five).filter(value => value !== two)[0];

    return {
        1: one.sort(),
        2: two.sort(),
        3: three.sort(),
        4: four.sort(),
        5: five.sort(),
        6: six.sort(),
        7: seven.sort(),
        8: eight.sort(),
        9: nine.sort(),
    }
}

console.log(part1());

console.log(part2());