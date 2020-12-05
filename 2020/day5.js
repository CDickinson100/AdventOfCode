//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/).filter(input => input);

function part1() {
    return input.map(value => convert(value)).sort((a, b) => b.seat - a.seat)[0].seat;
}

function part2() {
    let array = input.map(value => convert(value));
    for (let i = 0; i < array.length; i++) {
        let x = array[i];
        if (array.filter(value => value.seat === x.seat + 1).length === 0 && array.filter(value => value.seat === x.seat + 2).length !== 0) return x.seat + 1;
        if (array.filter(value => value.seat === x.seat - 1).length === 0 && array.filter(value => value.seat === x.seat - 2).length !== 0) return x.seat - 1;
    }
}

function convert(input) {
    input = input.split('').map(value => {
        if (value === 'F') return 0;
        if (value === 'B') return 1;
        if (value === 'L') return 0;
        if (value === 'R') return 1;
    });
    row = "";
    column = "";
    for (let i = 0; i < 7; i++) {
        row += input[i].toString();
    }
    for (let i = 7; i < 10; i++) {
        column += input[i].toString();
    }
    row = parseInt(row, 2);
    column = parseInt(column, 2);
    return {
        row: row,
        column: column,
        seat: (row * 8) + column
    }
}

console.log(part1());

console.log(part2());
