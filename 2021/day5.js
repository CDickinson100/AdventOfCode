//Read file from input.txt
const fs = require("fs");
const [...input] = fs
    .readFileSync("./input.txt", "utf-8")
    .split(/\n/)
    .filter((input) => input);

function part1() {
    return compute(false);
}

function part2() {
    return compute(true);
}

function compute(includeDiagonals) {
    const board = [];
    for (let i = 0; i < input.length; i++) {
        const instructions = input[i].split(" -> ").map(value => value.split(","));
        const x1 = parseInt(instructions[0][0]);
        const y1 = parseInt(instructions[0][1])
        const x2 = parseInt(instructions[1][0])
        const y2 = parseInt(instructions[1][1])

        if (x1 !== x2 && y1 !== y2 && !includeDiagonals) continue;

        let x = x1 - (x2 > x1 ? 1 : -1);
        let y = y1 - (y2 > y1 ? 1 : -1);
        while (y !== y2 || x !== x2) {
            if (x !== x2) x += (x2 > x ? 1 : -1);
            if (y !== y2) y += (y2 > y ? 1 : -1);
            if (!board[x]) board[x] = [];
            if (!board[x][y]) board[x][y] = 0;
            board[x][y] = board[x][y] + 1;
        }
    }
    return board.reduce((previousValue, currentValue) => {
        return previousValue.concat(currentValue);
    }, []).filter(value => value > 1).length;
}

console.log(part1());

console.log(part2());