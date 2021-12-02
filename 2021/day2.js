//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter((input) => input);

function part1() {
    const position = input.map(value => {
        const instructions = value.split(" ");
        const amount = parseInt(instructions[1]);
        switch (instructions[0]) {
            case "forward":
                return [amount, 0];
            case "down":
                return [0, amount]
            case "up":
                return [0, -amount]
        }
    }).reduce((previousValue, currentValue) => {
        return [currentValue[0] + previousValue[0], previousValue[1] + currentValue[1]];
    }, [0, 0]);
    return position[0] * position[1];
}

function part2() {
    let aim = 0;
    const position = input.map(value => {
        const instructions = value.split(" ");
        const amount = parseInt(instructions[1]);
        switch (instructions[0]) {
            case "forward":
                return [amount, aim * amount];
            case "down":
                aim += amount;
                return [0, 0]
            case "up":
                aim -= amount;
                return [0, 0]
        }
    }).reduce((previousValue, currentValue) => {
        return [currentValue[0] + previousValue[0], previousValue[1] + currentValue[1]];
    }, [0, 0]);
    return position[0] * position[1];
}

console.log(part1());

console.log(part2());